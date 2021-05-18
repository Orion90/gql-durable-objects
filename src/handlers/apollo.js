const { ApolloServer, gql } = require('apollo-server-cloudflare')
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')
// const {  } = require('apollo-server-cloudflare')

const KVCache = require('../kv-cache')
const PokemonAPI = require('../datasources/pokeapi')
const resolvers = require('../resolvers')
const typeDefs = require('../schema')

const kvCache = { cache: new KVCache() }
 
const handler = async (request, graphQLOptions) => {
  let obj = graphQLOptions.COUNTER;
  const dataSources = () => ({
    counter: obj,
  })
  const server =  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  });
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

module.exports = handler

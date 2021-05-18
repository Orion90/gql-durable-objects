const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
type Query {
  getValue: Int!
}

type Mutation {
  setValue(value: Int! = 1): Int!
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query,
  mutation: Mutation
}
`;

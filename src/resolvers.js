module.exports = {
  Query: {
    getValue: async (_, _x, {dataSources}) => {
      let resp = await dataSources.counter.fetch('/')
      let count = await resp.text()
      return parseInt(count);
    },
  },
  Mutation: {
    setValue: async (_, { value }, {dataSources}) => {
      const req = new Request('/value/set',
      {
        method: "POST", 
        body: JSON.stringify({value})
      });
      let resp = await dataSources.counter.fetch(
        req 
      );
      let count = await resp.text();
      return parseInt(count);
    }
  }
};

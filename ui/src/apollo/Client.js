import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    pokemon: [Pokemon]!
  }

  extend type Pokemon {
    name: String
    type: String
  }
`;

const cache = new InMemoryCache();
cache.writeData({
  data: {
    pokemon: []
  }
});
console.log(cache);

const client = new ApolloClient({
  cache,
  // link: new HttpLink({ uri: 'https://48p1r2roz4.sse.codesandbox.io' }),
  typeDefs,
  connectToDevTools: true,
  resolvers: {
    Query: {
      async Pokemon(_, { assetType }) {
        // const res = await fetch();
      }
    }
  }
});

export default client;

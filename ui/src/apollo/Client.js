import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import PokedexResolvers from './PokedexResolvers';

const typeDefs = gql`
  extend type Query {
    pokedex(filter: Object): [Pokemon]!
    pokeTypes: [String]
    pokemon(id: ID): Pokemon!
  }

  type Pokemon {
    id: ID
    name: String
    type: String
    img: String
    type: [String]
    height: String
    weight: String
    candy: String
    candy_count: Number
    egg: String
    spawn_chance: Float
    avg_spawns: Float
    multipliers: Float
    weaknesses: [String]
    next_evolution: [Pokemon]
  }
`;

const cache = new InMemoryCache();
cache.writeData({
  data: {
    pokedex: []
  }
});

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
  typeDefs,
  resolvers: {
    ...PokedexResolvers
  }
});

export default client;

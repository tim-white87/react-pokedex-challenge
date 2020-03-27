import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

const GET_POKEDEX = gql`
  query getPokedex {
    pokedex @client {
      id
      name
    }
  }
`;

// TODO this mocks a backend resolver
const resolvers = {
  Query: {
    pokedex: async (_, args, { cache }) => {
      console.log(cache);
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
        );
        const data = await res.json();

        return data.pokemon.map(p => {
          p.__typename = 'Pokemon';
          return p;
        });
      } catch (e) {
        console.log(`Something went wrong with the data source: ${e}`);
      }
    }
  }
};

export default function Pokedex(props) {
  const client = useApolloClient();
  client.addResolvers(resolvers);

  const { loading, error, data } = useQuery(GET_POKEDEX);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section>
      <h3>Hello Pokedex</h3>
      {data.pokedex.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </section>
  );
}

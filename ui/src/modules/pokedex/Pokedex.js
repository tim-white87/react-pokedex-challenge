import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import PokedexFilters from './PokedexFilters';
import PokedexHeader from './PokedexHeader';
import PokedexItem from './PokedexItem';

async function getPokeData(cache) {
  // TODO check if cache has data and return cache if so
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    );
    const data = await res.json();
    return data.pokemon;
  } catch (e) {
    console.error(`Something went wrong with the data source: ${e}`);
  }
  return;
}

function filterPokemon(pokemon, filter) {
  Object.keys(filter).forEach(key => {
    if (typeof filter[key] === 'string') {
      pokemon = pokemon.filter(
        p => p[key].toLowerCase().indexOf(filter[key].toLowerCase()) > -1
      );
    } else {
      // TODO filter for array options
    }
  });
  return pokemon;
}

function mapPokeTypes(pokemon) {
  let types = [];
  pokemon.forEach(p => {
    p.type.forEach(type => (types.includes(type) ? null : types.push(type)));
  });
  return types;
}

// TODO this mocks a backend resolver
const resolvers = {
  Query: {
    pokedex: async (_, args, { cache }) => {
      let pokemon = await getPokeData(cache);
      if (args && args.filter) {
        pokemon = filterPokemon(pokemon, args.filter);
      }
      return pokemon.map(p => {
        p.__typename = 'Pokemon';
        return p;
      });
    },
    pokeTypes: async (_, args, { cache }) => {
      let pokemon = await getPokeData(cache);
      return mapPokeTypes(pokemon);
    }
  }
};

const GET_POKEDEX = gql`
  query getPokedex($filter: Object) {
    pokedex(filter: $filter) @client {
      id
      name
      num
      type
      weaknesses
    }
  }
`;

export default function Pokedex() {
  const client = useApolloClient();
  client.addResolvers(resolvers);

  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_POKEDEX, {
    variables: { filter }
  });

  function handleChangeFilter(f) {
    setFilter({ ...filter, ...f });
  }

  if (error) return <p>Error :(</p>;
  return (
    <section className="w-1/2 flex">
      <div className="bg-red-600 rounded shadow px-4 py-20 w-1/2">
        <PokedexHeader></PokedexHeader>
        <div className="rounded bg-gray-200 overflow-y-auto h-64 px-2">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div>Loading...</div>
            </div>
          ) : (
            data.pokedex.map(pokemon => (
              <PokedexItem key={pokemon.id} pokemon={pokemon}></PokedexItem>
            ))
          )}
        </div>
      </div>
      <div className="bg-red-600 rounded shadow px-4 py-20 w-1/2">
        <div className="rounded bg-red-700 overflow-y-auto h-64 px-2">
          <PokedexFilters onChangeFilter={handleChangeFilter} filter={filter} />
        </div>
      </div>
    </section>
  );
}

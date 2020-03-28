import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import PokedexItem from './PokedexItem';

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

export default function PokedexList({ filter, onSelectPokemon }) {
  const { loading, error, data } = useQuery(GET_POKEDEX, {
    variables: { filter }
  });
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Loading...</div>
      </div>
    );
  } else if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Something went wrong</div>
      </div>
    );
  }
  return data.pokedex.map(pokemon => (
    <PokedexItem
      key={`pokedex-item-${pokemon.id}`}
      pokemon={pokemon}
      onSelectPokemon={onSelectPokemon}
    />
  ));
}

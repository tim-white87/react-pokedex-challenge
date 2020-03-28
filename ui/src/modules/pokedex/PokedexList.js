import React from 'react';
import PokedexItem from './PokedexItem';

export default function PokedexList(props) {
  if (props.loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Loading...</div>
      </div>
    );
  }
  return props.pokedex.map(pokemon => (
    <PokedexItem
      key={pokemon.id}
      pokemon={pokemon}
      onSelectPokemon={props.onSelectPokemon}
    />
  ));
}

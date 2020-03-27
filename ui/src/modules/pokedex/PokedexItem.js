import React from 'react';

export default function PokedexItem(props) {
  return (
    <div className="flex my-2 p-2 shadow border">
      <div className="mr-2">{props.pokemon.num}</div>
      <div>{props.pokemon.name}</div>
    </div>
  );
}

import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import { gql } from 'apollo-boost';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const GET_POKEMON = gql`
  query getPokemon($id: ID) {
    pokemon(id: $id) @client {
      id
      name
      num
      type
      img
      type
      height
      weight
      candy
      # candy_count
      egg
      spawn_chance
      avg_spawns
      multipliers
      weaknesses
      # next_evolution
    }
  }
`;

export default function PokemonDetails() {
  const { pokemonId } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      id: pokemonId
    }
  });
  // TODO consolidate
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Something went wrong</div>
      </div>
    );
  }
  return (
    <section>
      <div className="bg-white shadow p-2 flex justify-between">
        <Button variant="contained" color="primary" component={Link} to="/">
          Back
        </Button>
        <h2 className="font-bold self-center text-lg">Pokemon Details</h2>
        <h2 className="self-center text-sm mr-4">{data.pokemon.name}</h2>
      </div>
      <div className="p-8 rounded shadow bg-white m-8 flex flex-wrap">
        <div className="w-1/4">
          <img className="object-contain" src={data.pokemon.img}></img>
        </div>
        <div className="w-3/4 p-4 font-bold">
          <h3>
            #{data.pokemon.num}: {data.pokemon.name}
          </h3>
          <div>
            Type:{' '}
            {data.pokemon.type.map((t, i) => {
              if (i + 1 === data.pokemon.type.length) {
                return <span key={`pokemon-type-${i}`}>{t}</span>;
              } else {
                return <span key={`pokemon-type-${i}`}>{t}, </span>;
              }
            })}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div>
            Weaknesses:{' '}
            {data.pokemon.weaknesses.map((w, i) => {
              if (i + 1 === data.pokemon.weaknesses.length) {
                return <span key={`pokemon-weaknesses-${i}`}>{w}</span>;
              } else {
                return <span key={`pokemon-weaknesses-${i}`}>{w}, </span>;
              }
            })}
          </div>
          <div>Height: {data.pokemon.height}</div>
          <div>Weight: {data.pokemon.weight}</div>
        </div>
      </div>
    </section>
  );
}

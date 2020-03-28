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
      <div className="p-8 rounded shadow bg-white m-8"></div>
    </section>
  );
}

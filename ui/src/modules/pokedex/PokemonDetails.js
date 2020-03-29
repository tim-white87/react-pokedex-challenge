import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import { gql } from 'apollo-boost';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const GET_POKEMON = gql`
  fragment Pokemon on Pokemon {
    id
    name
    num
    type
    img
    height
    weight
    weaknesses
  }
  query getPokemon($id: ID) {
    pokemon(id: $id) @client {
      ...Pokemon
      next_evolution {
        ...Pokemon
      }
      prev_evolution {
        ...Pokemon
      }
    }
  }
`;

export function PokemonImage(props) {
  function onClickHandler() {
    console.log(props.pokemon);
  }

  let linkProps = {};
  if (props.isLink) {
    linkProps = {
      onClick: onClickHandler,
      className: 'flex border-b hover:bg-yellow-200 cursor-pointer'
    };
  }

  return (
    <div className="flex border-b" {...linkProps}>
      <div className="w-1/4">
        <img className="object-contain" src={props.pokemon.img}></img>
      </div>
      <div className="w-3/4 p-4 font-bold">
        <h3>
          #{props.pokemon.num}: {props.pokemon.name}
        </h3>
        <div>
          Type:{' '}
          {props.pokemon.type.map((t, i) => {
            if (i + 1 === props.pokemon.type.length) {
              return <span key={`pokemon-type-${i}`}>{t}</span>;
            } else {
              return <span key={`pokemon-type-${i}`}>{t}, </span>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default function PokemonDetails() {
  const { pokemonId } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      id: pokemonId
    }
  });
  // TODO consolidate loading
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
          List
        </Button>
        <h2 className="font-bold self-center text-lg">Pokemon Details</h2>
        <h2 className="self-center text-sm mr-4">{data.pokemon.name}</h2>
      </div>
      <div className="p-8 rounded shadow bg-white m-8 flex flex-wrap">
        <div className="w-full flex flex-col">
          <PokemonImage pokemon={data.pokemon} />
          <div className="mt-4">
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
        {data.pokemon.next_evolution && (
          <div>
            <div className="w-full mt-2">
              <h3 className="font-bold text-center">Evolves Into</h3>
            </div>
            <div>
              {data.pokemon.next_evolution.map((p, i) => (
                <PokemonImage
                  key={`pokemon-next-evolution-${i}`}
                  pokemon={p}
                  isLink={true}
                />
              ))}
            </div>
          </div>
        )}
        {data.pokemon.prev_evolution && (
          <div>
            <div className="w-full mt-2">
              <h3 className="font-bold text-center">Evolved From</h3>
            </div>
            <div>
              {data.pokemon.prev_evolution.map((p, i) => (
                <PokemonImage
                  key={`pokemon-prev-evolution-${i}`}
                  pokemon={p}
                  isLink={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

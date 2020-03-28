import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PokedexFilters from './PokedexFilters';
import PokedexHeader from './PokedexHeader';
import PokedexList from './PokedexList';
import PokemonDetails from './PokemonDetails';

const GET_POKEDEX = gql`
  query getPokedex($filter: Object) {
    pokedex(filter: $filter) @client {
      id
      name
      num
      type
      weaknesses
    }
    pokeTypes @client
  }
`;

export default function Pokedex() {
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_POKEDEX, {
    variables: { filter }
  });

  function handleChangeFilter(f) {
    setFilter({ ...filter, ...f });
  }

  const history = useHistory();
  let { path } = useRouteMatch();

  function handleSelectPokemon(e, id) {
    history.push(`/pokemon/${id}`);
  }

  if (error) return <p>Error :(</p>;
  return (
    <section className="w-2/3 flex">
      <div className="bg-red-600 rounded shadow px-4 py-20 w-1/2">
        <PokedexHeader></PokedexHeader>
        <div className="rounded bg-gray-200 overflow-y-auto h-64 px-2">
          <Switch>
            <Route exact path={path}>
              <PokedexList
                loading={loading}
                pokedex={data ? data.pokedex : null}
                onSelectPokemon={handleSelectPokemon}
              />
            </Route>
            <Route path={`/pokemon/:pokemonId`}>
              <PokemonDetails />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="bg-red-600 rounded shadow px-4 py-20 w-1/2">
        <div className="rounded bg-red-700 overflow-y-auto h-64 px-2">
          <PokedexFilters
            onChangeFilter={handleChangeFilter}
            types={data && data.pokeTypes ? data.pokeTypes : null}
          />
        </div>
      </div>
    </section>
  );
}

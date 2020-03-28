import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PokedexFilters from './PokedexFilters';
import PokedexHeader from './PokedexHeader';
import PokedexList from './PokedexList';
import PokemonDetails from './PokemonDetails';

export default function Pokedex() {
  const [filter, setFilter] = useState({});

  function handleChangeFilter(f) {
    setFilter({ ...filter, ...f });
  }

  const history = useHistory();
  let { path } = useRouteMatch();

  function handleSelectPokemon(e, id) {
    history.push(`/pokemon/${id}`);
  }

  return (
    <section className="w-2/3 flex">
      <div className="bg-red-600 rounded shadow px-4 py-20 w-1/2">
        <PokedexHeader />
        <div className="rounded bg-gray-200 overflow-y-auto h-64 ">
          <Switch>
            <Route exact path={path}>
              <PokedexList
                className="px-2"
                filter={filter}
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
          <PokedexFilters onChangeFilter={handleChangeFilter} />
        </div>
      </div>
    </section>
  );
}

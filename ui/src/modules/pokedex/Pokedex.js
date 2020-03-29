import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import PokedexFilters from './PokedexFilters';
import PokedexIndicatorLights from './PokedexIndicatorLights';
import PokedexLeftControls from './PokedexLeftControls';
import PokedexList from './PokedexList';
import PokedexRightControls from './PokedexRightControls';
import PokemonDetails from './PokemonDetails';

export default function Pokedex() {
  const [filter, setFilter] = useState({});
  const { path } = useRouteMatch();
  const history = useHistory();

  function handleChangeFilter(f) {
    history.push('/');
    setFilter({ ...filter, ...f });
  }

  return (
    <section className="w-2/3 flex">
      <div className="bg-red-600 rounded shadow px-4 w-1/2">
        <PokedexIndicatorLights />
        <div className="rounded shadow-2xl bg-gray-200 overflow-y-auto h-64">
          <Switch>
            <Route exact path={path}>
              <PokedexList filter={filter} />
            </Route>
            <Route path={`/pokemon/:pokemonId`}>
              <PokemonDetails />
            </Route>
          </Switch>
        </div>
        <PokedexLeftControls />
      </div>
      <div className="bg-red-600 rounded shadow px-4 w-1/2 flex flex-col pt-24">
        <div className="w-full rounded bg-red-700 overflow-y-auto h-64 px-2">
          <PokedexFilters onChangeFilter={handleChangeFilter} />
        </div>
        <PokedexRightControls />
      </div>
    </section>
  );
}

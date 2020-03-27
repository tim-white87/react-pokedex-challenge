import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './common/Page';
import Pokedex from './modules/pokedex/Pokedex';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  const content = <Pokedex></Pokedex>;
  return <Page title={'Home'} content={content}></Page>;
}

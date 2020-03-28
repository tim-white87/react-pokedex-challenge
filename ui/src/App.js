import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './common/Page';
import AboutMe from './modules/about/AboutMe';
import Pokedex from './modules/pokedex/Pokedex';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <Page title={'Home'} content={<Pokedex />}></Page>;
}

function About() {
  return <Page title={'About'} content={<AboutMe />}></Page>;
}

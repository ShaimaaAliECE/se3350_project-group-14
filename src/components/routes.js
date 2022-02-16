import React from 'react';
import { Route } from 'react-router';
import Header from './Header';
import level from '../L1/level';
import App from '../App';
import LevelSelect from './components/LevelSelect'

export default (
  <Route path="/" component={App}>
    <Route path="/" component={Header} />
    <Route path="/components/LevelSelect" component={LevelSelect} />
    <Route path="/L1/level" component={level} />
    <Route path="/L2/Level" component={level} />
    <Route path="/L3/Level" component={level} />
  </Route>
);
import React from 'react';
import { Route } from 'react-router';
import Header from './components/Headers/Header';
import level from './L1/level';
import App from './App';
import levelSelect from './L1/levelSelect'

export default (
    <Route path="/" component={App}>
      <Route path="/" component={Header} />
      <Route path="/L1/level" component={level} />
      <Route path="/L1/levelSelect" component={levelSelect} />
    </Route>
  );
<<<<<<< HEAD
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
=======
import React from 'react';
import { Route } from 'react-router';
import Header from './Header';
import level from '../L1/level';
import App from '../App';
import LevelSelect from './components/LevelSelect'
import AlgorithmSelect from './components/AlgorithmSelect'
import MergeSortPage from './components/MergeSortPage'
import QuickSortPage from './components/QuickSortPage'
import BubbleSortPage from './components/BubbleSortPage'

export default (
  <Route path="/" component={App}>
    <Route path="/" component={Header} />
    <Route path="/components/SelectPages/LevelSelect" component={LevelSelect} />
    <Route path="/components/SelectPages/AlgorithmSelect" component={AlgorithmSelect} />
    <Route path="/L1/level" component={level} />
    <Route path="/L2/Level" component={level} />
    <Route path="/L3/Level" component={level} />
    <Route path="/components/AlgoPages/MergeSortPage" component={MergeSortPage} />
    <Route path="/components/AlgoPages/QuickSortPage" component={QuickSortPage} />
    <Route path="/components/AlgoPages/BubbleSortPage" component={BubbleSortPage} />
    <Route path="/components/Admin/AdminLogin" component={AdminLogin} />
    <Route path="/components/Admin/Analytics" component={Analytics} />
  </Route>
>>>>>>> fd5bd47 (https://github.com/ShaimaaAliECE/se3350_project-group-14.git)
);
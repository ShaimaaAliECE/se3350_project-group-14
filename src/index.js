import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MergeSortGame from './MergeSortGame';
import Array from './Array';

ReactDOM.render(
  <React.StrictMode>
    <MergeSortGame size = {10} />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  
    <Array  />,
  
  document.getElementById('array-space')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

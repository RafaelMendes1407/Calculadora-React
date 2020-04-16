import React from 'react';
import reactDOM from 'react-dom';

import './index.css';

import Calculator from './main/Calculator';

const App = document.getElementById('root');


reactDOM.render(
  <div>
    <h1>Calculadora React</h1>
    <Calculator />
  </div>
, App);

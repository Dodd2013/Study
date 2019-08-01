import React from 'react';
import './App.css';
import Count from './compoments/Count';
import Add from './compoments/Add';
import Subtract from './compoments/Subtract';
import CountActionTypes from './CountActionTypes';
function App() {
  return (
    <div>
      <Count />
      <Add />
      <Subtract />
    </div>
  );
}

export default App;

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import './App.css';

function App() {
  return (
    <div className="App" id="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;

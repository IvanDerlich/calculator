import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import './App.css';

function App() {
  return (
    <div className="App" id="app">
      <Display result="Testing Result" />
      <ButtonPanel />
    </div>
  );
}

export default App;

/* eslint-disable react/no-unused-state */
// eslint-disable-next-line no-unused-vars

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className="App" id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;

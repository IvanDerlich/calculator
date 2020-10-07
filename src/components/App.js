import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Footer from './Footer';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  componentDidMount() {
    this.setState({
      total: '0',
      next: '0',
      operation: '0',
    });
  }

  handleClick(buttonName) {
    this.setState(prevState => ({
      total: calculate(prevState, buttonName),
      next: '0',
      operation: '', // Maybe it is in the event. Research
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App" id="app">
        <Display result={next} total={total} operation={operation} />
        <ButtonPanel />
        <Footer />
      </div>
    );
  }
}

export default App;

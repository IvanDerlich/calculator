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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      total: '0',
      next: '0',
      operation: 'operation',
    });
  }

  handleClick(event) {
    const char = event.target.innerHTML;
    const { next } = this.state;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    console.log(char);

    if (numbers.includes(char)) {
      if (next === '0') {
        this.setState({
          next: char,
        });
      } else {
        this.setState(prevState => ({
          next: prevState.next + char,
        }));
      }
    } else { // if its not a number, its an operation
      this.setState({
        operation: char,
      });
      const { total, next } = calculate(this.state, char);
      this.setState({
        total,
        next,
      });
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App" id="app">
        <Display result={next} total={total} operation={operation} />
        <ButtonPanel onClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;

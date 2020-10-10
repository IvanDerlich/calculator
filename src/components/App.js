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
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(buttonName) {
    const { next } = this.state;
    if (next.includes('.') && buttonName === '.') {
      return;
    }

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    if (numbers.includes(buttonName)) {
      console.log(buttonName, 'Is a number');
      if (next === '0') {
        this.setState({
          next: buttonName,
        });
      } else {
        this.setState(prevState => ({
          next: prevState.next + buttonName,
        }));
      }
    } else { // if its not a number, its an operation
      console.log(buttonName, 'Is an operation');
      await this.setState({
        operation: buttonName,
      });
      console.log(this.state, 'this.state');
      const { total, next } = calculate(this.state);
      console.log(total, 'total');

      this.setState({
        total,
        next,
      });
    }
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App" id="app">
        <Display next={next} total={total} />
        <ButtonPanel clickHandler={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;

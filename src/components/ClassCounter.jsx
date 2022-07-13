import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrease() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase}>Increment</button>
        <button onClick={this.decrease}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;

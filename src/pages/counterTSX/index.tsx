import React from 'react';

class CounterPage extends React.Component {

  state = { 
    count: 0
  };

  handleAdd = ((e: React.MouseEvent<HTMLButtonElement>) => {    
    e.preventDefault();
    this.setState({count : this.state.count + 1});
  });

  handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.state.count === 0) {
      alert('Do not accept negative numbers');
      return;
    }
    this.setState({count : this.state.count - 1});
  };

  render () {
    return (
      <React.Fragment>
        <h1>Counter TSX</h1>
        <div>
          <span>Counter: {this.state.count}</span>
        </div>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
      </React.Fragment>
    );
  }
}

export default CounterPage;
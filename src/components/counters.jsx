import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 99 },
      { id: 4, value: 0 },
    ]
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(_ => _.id != counterId);
    this.setState({ counters })
  };

  handleIncrement = counter => {
    const counters = this.state.counters.map(_ => {
      return _.id === counter.id ? {..._, value: ++_.value} : _;
    })
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(_ => ({..._, value: 0}));
    this.setState({ counters })
  }

  render() {
    return (
      <div>
      <button type="button" onClick={this.handleReset}
        className="btn btn-secondary" style={{marginBottom: '0.625rem'}}>
        Reset
      </button>
        {this.state.counters.map(
          counter => {
            return <Counter key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}>
              <h4>Counter #{counter.id}</h4>
            </Counter>
          })}
      </div>
    )
  }
}

export default Counters;
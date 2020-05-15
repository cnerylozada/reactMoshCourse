import React, { Component } from 'react';
import Counter from './counter';
import './counters.css'
class Counters extends Component {
  render() {
    const {onReset, onIncrement, onDelete, state} = this.props;
    return (
      <div>
        <button type="button" onClick={onReset}
          className="btn btn-secondary" style={{ marginBottom: '0.625rem' }}>
          Reset
        </button>
        {state.counters.map(
          counter => {
            return <Counter key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDelete={onDelete}>
              <span className="title">Counter #{counter.id}</span>
            </Counter>
          })}
      </div>
    )
  }
}

export default Counters;
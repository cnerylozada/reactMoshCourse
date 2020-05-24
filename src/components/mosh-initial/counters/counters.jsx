import React from 'react';
import Counter from '../counter/counter';
import './counters.css'
const Counters = (props) => {
  const { onReset, onIncrement, onDecrement, onDelete, state } = props;
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
            onDecrement={onDecrement}
            onDelete={onDelete}>
            <span className="title">Counter #{counter.id}</span>
          </Counter>
        })}
    </div>
  )
}

export default Counters;
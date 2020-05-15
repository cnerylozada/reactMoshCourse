import React, { Component } from 'react';
import Counter from './counter';
import './counters.css'
class Counters extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onReset}
          className="btn btn-secondary" style={{ marginBottom: '0.625rem' }}>
          Reset
        </button>
        {this.props.state.counters.map(
          counter => {
            return <Counter key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}>
              <span className="title">Counter #{counter.id}</span>
            </Counter>
          })}
      </div>
    )
  }
}

export default Counters;
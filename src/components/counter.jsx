import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span style={{display: 'block'}}>{this.formatCount()}</span>
        <button type="button" className="btn btn-dark">Upgrade !</button>
      </React.Fragment>
    )
  }

  formatCount = () => {
    const {count} = this.state;
    return !!count ? count : 'Zero';
  }
}

export default Counter;
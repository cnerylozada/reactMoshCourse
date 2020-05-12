import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 99,
    imageUrl: 'https://picsum.photos/200'
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </h1>
        <button type="button" style={{marginRight: '1.875rem'}} className="btn btn-dark">
          Upgrade !
        </button>
        <img src={this.state.imageUrl} />
      </React.Fragment>
    )
  }

  getBadgeClass = () => {
    let classes = 'badge m-2 badge-';
    classes += !this.state.count ? 'warning' : 'primary';
    return classes;
  }
  formatCount = () => {
    const {count} = this.state;
    return !!count ? count : 'Zero';
  }
}

export default Counter;
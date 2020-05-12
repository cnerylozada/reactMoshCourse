import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  state = {
    count: 99,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
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
        <ul>
          {this.state.tags.map(_ => <li key={_}>{_}</li>)}
        </ul>
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
import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

  handleIncrement = product => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <h3>
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </h3>
        <button 
          type="button" onClick={() => this.handleIncrement({id: 1})}
          style={{marginRight: '1.875rem'}} className="btn btn-dark">
          Upgrade !
        </button>
        <hr/>
        {!!this.state.tags.length && <span>The array is full !</span>}
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
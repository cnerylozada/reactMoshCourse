import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <h3>
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </h3>
        <button 
          type="button" onClick={() => this.props.onIncrement(this.props.counter)}
          style={{marginRight: '.5rem'}} className="btn btn-dark">
          Upgrade !
        </button>
        <button type="button" className="btn btn-danger" 
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
        <hr/>
      </React.Fragment>
    )
  }

  getBadgeClass = () => {
    let classes = 'badge m-2 badge-';
    classes += !this.props.counter.value ? 'warning' : 'primary';
    return classes;
  }
  formatCount = () => {
    const {value: count} = this.props.counter;
    return !!count ? count : 'Zero';
  }
}

export default Counter;
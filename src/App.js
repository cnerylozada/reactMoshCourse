import React, { Component } from 'react';
import NavBar from './components/nav';
import Counters from './components/counters';

class App extends Component{
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

  handleDecrement = counter => {
    const counters = this.state.counters.map(_ => {
      return _.id === counter.id ? {..._, value: --_.value} : _;
    })
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(_ => ({..._, value: 0}));
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar numOfCounters={this.state.counters.filter(_ => !!_.value).length}/>
        <div className="container" style={{marginTop: '1.25rem'}}>
          <div className="row">
            <div className="col-sm">
              <Counters 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset} 
                state={this.state} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

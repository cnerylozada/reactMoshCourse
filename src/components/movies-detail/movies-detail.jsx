import React, { Component } from 'react';

class MoviesDetail extends Component {
  handleSave = () => {
    this.props.history.push('/movies');
  }
  render() {
    return (
      <div>
        <h3>Movie Form id: {this.props.match.params.id}</h3>
        <button type="button" class="btn btn-light" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MoviesDetail;
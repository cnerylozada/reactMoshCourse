import React, { Component } from 'react';
import './genres.css';
import { getGenres } from '../../services/fakeGenreService';
class Genres extends Component {
  state = {
    genres: [{ _id: '0', name: 'All Genres' }, ...getGenres()]
  }
  render() {
    const itemStyle = "list-group-item list-group-item-action";
    return (
      <div className="list-group">
        {this.state.genres.map((_, i) => <a key={i}
          onClick={() => this.props.onFilter(_.name, i)}
          className={this.props.currentGenderIndex === i ? itemStyle + " active" : itemStyle }>
          {_.name}
        </a>)}
      </div>
    );
  }
}

export default Genres;
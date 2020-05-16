import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../../services/fakeMovieService';
import './movies.css';
class Movies extends Component {
  state = {
    movies: getMovies()
  }

  displayMovieMessage = () => {
    return !!this.state.movies.length ?
      `Showing ${this.state.movies.length}  movies in the database`
      : 'There are no movies in database';
  }

  deleteMovie = movieId => {
    const movies = this.state.movies.filter(_ => _._id !== movieId);
    this.setState({movies})
  }

  manageClasses = () => {
    let initial = "table ";
    return !!this.state.movies.length ? initial += 'moviesWithData'
      : initial += 'moviesWithNoData';
  }

  render() {
    return (
      <React.Fragment>
        <span className="movieMessage">{this.displayMovieMessage()}</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((_, i) => {
              return (
                <tr key={_._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{_.title}</td>
                  <td>{_.genre.name}</td>
                  <td>{_.numberInStock}</td>
                  <td>{_.dailyRentalRate}</td>
                  <td>
                    <button onClick={() => {this.deleteMovie(_._id)}}
                      type="button"
                      className="btn btn-danger">
                      Danger
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
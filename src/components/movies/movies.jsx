import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../../services/fakeMovieService';
import './movies.css';
import Like from '../like/like';
import Genres from '../genres/genres';
import Paginator from '../paginator/paginator';
import { numberOfPages, ITEMS_BY_PAGE } from '../../utils/numberOfPages';
class Movies extends Component {
  state = {
    movies: getMovies()
  }

  filterByGender = genderName => {
    this.state.movies = getMovies();
    const movies = genderName !== 'All Genres' ?
      this.state.movies.filter(_ => _.genre.name === genderName)
      : getMovies();
    this.setState({ movies });
  }

  displayMovieMessage = () => {
    return !!this.state.movies.length ?
      `Showing ${this.state.movies.length}  movies in the database`
      : 'There are no movies in database';
  }

  deleteMovie = movieId => {
    const movies = this.state.movies.filter(_ => _._id !== movieId);
    this.setState({ movies })
  }

  addLike = movie => {
    movie.like = !movie.like;
    const movies = this.state.movies.map(_ => {
      return _._id === movie._id ? movie : _
    })
    this.setState({ movies });
    console.log(!!movie.like ? `You like ${movie.title}` : `You dont like ${movie.title}`);
  }

  sortByTitle = () => {
    const movies = this.state.movies.sort(
      (current, next) => (current.title > next.title) ? 1 : -1);
    this.setState({ movies });
  }

  sortByGenre = () => {
    const movies = this.state.movies.sort(
      (current, next) => (current.genre.name > next.genre.name) ? 1 : -1);
    this.setState({ movies });
  }

  sortByStock = () => {
    const movies = this.state.movies.sort(
      (current, next) => (current.numberInStock > next.numberInStock) ? 1 : -1);
    this.setState({ movies });
  }

  sortByRate = () => {
    const movies = this.state.movies.sort(
      (current, next) => (current.dailyRentalRate > next.dailyRentalRate) ? 1 : -1);
    this.setState({ movies });
  }

  paginateItems = index => {
    let begin = ITEMS_BY_PAGE * index;
    let end = begin + ITEMS_BY_PAGE;
    console.log(this.state.movies.slice(begin, end));
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-4">
          <Genres onFilter={this.filterByGender} />
        </div>
        <div className="col-sm-8">
          <span className="movieMessage">{this.displayMovieMessage()}</span>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" onClick={this.sortByTitle}>Title</th>
                <th scope="col" onClick={this.sortByGenre}>Genre</th>
                <th scope="col" onClick={this.sortByStock}>Stock</th>
                <th scope="col" onClick={this.sortByRate}>Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((_, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{_.title}</td>
                    <td>{_.genre.name}</td>
                    <td>{_.numberInStock}</td>
                    <td>{_.dailyRentalRate}</td>
                    <td>
                      <Like movie={_} onLike={this.addLike} />
                    </td>
                    <td>
                      <button onClick={() => { this.deleteMovie(_._id) }}
                        type="button" className="btn btn-danger">
                        Delete
                    </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Paginator
            sectionsByPage={this.paginateItems}
            numOfPages={numberOfPages(this.state.movies.length, ITEMS_BY_PAGE)} />
        </div>
      </React.Fragment>
    )
  }
}

export default Movies;
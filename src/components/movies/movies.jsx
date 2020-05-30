import React, { Component } from 'react';
import { getMovies, deleteMovie as deleteFromDb } from '../../services/fakeMovieService';
import './movies.css';
import Like from '../like/like';
import Genres from '../genres/genres';
import Paginator from '../paginator/paginator';
import { numberOfPages, ITEMS_BY_PAGE, paginateItemsByIndex } from '../../utils/numberOfPages';
class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 0,
    currentGenderIndex: 0,
  }

  filterByGender = (genderName, index) => {
    this.state.movies = getMovies();
    const movies = genderName !== 'All Genres' ?
      this.state.movies.filter(_ => _.genre.name === genderName)
      : getMovies();
    this.setState({currentGenderIndex: index, movies });
  }

  displayMovieMessage = () => {
    return !!this.state.movies.length ?
      `Showing ${this.state.movies.length}  movies in the database`
      : 'There are no movies in database';
  }

  deleteMovie = movieId => {
    deleteFromDb(movieId);
    this.setState({ movies: getMovies() })
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
    this.setState({currentPage: index});
  }

  render() {
    const movies = paginateItemsByIndex(getMovies(), this.state.currentPage);
    return (
      <React.Fragment>
        <div className="col-sm-4">
          <Genres 
            onFilter={this.filterByGender}
            currentGenderIndex={this.state.currentGenderIndex} />
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
              {movies.map((_, index) => {
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
            currentPage={this.state.currentPage}
            numOfPages={numberOfPages(getMovies().length, ITEMS_BY_PAGE)} />
        </div>
      </React.Fragment>
    )
  }
}

export default Movies;
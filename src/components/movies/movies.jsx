import React, { Component } from 'react';
import { getMovies, deleteMovie as deleteFromDb } from '../../services/fakeMovieService';
import './movies.css';
import Paginator from '../paginator/paginator';
import { numberOfPages, ITEMS_BY_PAGE, showItemsByPage } from '../../utils/numberOfPages';
import { getGenres } from '../../services/fakeGenreService';
import ListGroup from '../../_commons/list-group/list-group';
import Like from '../../_commons/like/like';
import MoviesTable from '../movies-table/movies-table';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 0,
    genderSelected: 'All Genres'
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: '0', name: 'All Genres' }, ...getGenres()]
    })
  }

  filterByGender = (genderName, index) => {
    this.setState({ 
      currentPage: 0,
      currentGenderIndex: index,
      genderSelected: genderName
    });
  }

  displayMovieMessage = numOfItems => {
    return !!numOfItems ?
      `Showing ${numOfItems}  movies in the database`
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

  handlePageChange = index => {
    this.setState({ currentPage: index });
  }

  render() {
    const filtered = this.state.genderSelected !== 'All Genres' ?
      this.state.movies.filter(_ => _.genre.name === this.state.genderSelected)
      : this.state.movies;
    const moviesByPage = showItemsByPage(filtered, this.state.currentPage);
    return (
      <React.Fragment>
        <div className="col-sm-4">
          <ListGroup
            items={this.state.genres}
            onFilter={this.filterByGender}
            currentGenderIndex={this.state.currentGenderIndex} />
        </div>
        <div className="col-sm-8">
          <span className="movieMessage">
            {this.displayMovieMessage(filtered.length)}
          </span>
          <MoviesTable 
            moviesByPage={moviesByPage}
            OnAddLike={this.addLike}
            OnDeleteMovie={this.deleteMovie}
            sortByTitle={this.sortByTitle} 
            sortByGenre={this.sortByGenre}
            sortByStock={this.sortByStock}
            sortByRate={this.sortByRate}
          />
          <Paginator
            numOfPages={numberOfPages(filtered.length, ITEMS_BY_PAGE)}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange} />
        </div>
      </React.Fragment>
    )
  }
}

export default Movies;
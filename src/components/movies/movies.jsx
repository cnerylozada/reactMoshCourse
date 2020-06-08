import React, { Component } from 'react';
import { getMovies, deleteMovie as deleteFromDb } from '../../services/fakeMovieService';
import './movies.css';
import Paginator from '../paginator/paginator';
import { numberOfPages, ITEMS_BY_PAGE, showItemsByPage } from '../../utils/numberOfPages';
import { getGenres } from '../../services/fakeGenreService';
import ListGroup from '../../_commons/list-group/list-group';
import MoviesTable from '../movies-table/movies-table';
import _ from 'lodash';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 0,
    genderSelected: 'All Genres',
    sortColumn: { field: 'title', order: 'asc'}
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: '0', name: 'All Genres' }, ...getGenres()]
    })
  }

  displayMovieMessage = numOfItems => {
    return !!numOfItems ?
      `Showing ${numOfItems}  movies in the database`
      : 'There are no movies in database';
  }

  filterByGender = (genderName, index) => {
    this.setState({
      currentPage: 0,
      currentGenderIndex: index,
      genderSelected: genderName
    });
  }

  addLike = movie => {
    movie.like = !movie.like;
    const movies = this.state.movies.map(_ => {
      return _._id === movie._id ? movie : _
    })
    this.setState({ movies });
    console.log(!!movie.like ? `You like ${movie.title}` : `You dont like ${movie.title}`);
  }

  deleteMovie = movieId => {
    deleteFromDb(movieId);
    this.setState({ movies: getMovies() })
  }

  handlePageChange = index => {
    this.setState({ currentPage: index });
  }

  handleSort = sortColumn => {
    console.log(sortColumn.icon)
    this.setState({ sortColumn });
  };

  render() {
    const { genres, genderSelected, currentGenderIndex,
      movies: allMovies, sortColumn: sorting, currentPage } = this.state;

    const filtered = genderSelected !== 'All Genres' ?
      allMovies.filter(_ => _.genre.name === genderSelected)
      : allMovies;
    const moviesSorted = _.orderBy(filtered, [sorting.field], [sorting.order]);
    const moviesByPage = showItemsByPage(moviesSorted, currentPage);

    return (
      <React.Fragment>
        <div className="col-sm-4">
          <ListGroup
            items={genres}
            onFilter={this.filterByGender}
            currentGenderIndex={currentGenderIndex} />
        </div>
        <div className="col-sm-8">
          <span className="movieMessage">
            {this.displayMovieMessage(filtered.length)}
          </span>
          <MoviesTable
            moviesByPage={moviesByPage}
            onAddLike={this.addLike}
            onDeleteMovie={this.deleteMovie}
            sortColumn={this.state.sortColumn}
            onSort={this.handleSort}
          />
          <Paginator
            numOfPages={numberOfPages(filtered.length, ITEMS_BY_PAGE)}
            currentPage={currentPage}
            onPageChange={this.handlePageChange} />
        </div>
      </React.Fragment>
    )
  }
}

export default Movies;
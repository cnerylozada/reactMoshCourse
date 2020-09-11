import React, { Component } from "react";
import "./movies.css";
import Paginator from "../../_commons/paginator/paginator";
import {
  numberOfPages,
  ITEMS_BY_PAGE,
  showItemsByPage,
} from "../../utils/numberOfPages";
import genresService from "../../services/genres.service";
import moviesService from "../../services/movies.service";
import ListGroup from "../../_commons/list-group/list-group";
import MoviesTable from "../movies-table/movies-table";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 0,
    genderSelected: "All Genres",
    sortColumn: { field: "title", order: "asc" },
  };

  async componentDidMount() {
    const genres = await genresService.get();
    const movies = await moviesService.get();
    this.setState({
      movies,
      genres: [{ _id: "0", name: "All Genres" }, ...genres],
    });
  }

  displayMovieMessage = (numOfItems) => {
    return !!numOfItems
      ? `Showing ${numOfItems}  movies in the database`
      : "There are no movies in database";
  };

  filterByGender = (genderName, index) => {
    this.setState({
      currentPage: 0,
      currentGenderIndex: index,
      genderSelected: genderName,
    });
  };

  addLike = (movie) => {
    movie.like = !movie.like;
    const movies = this.state.movies.map((_) => {
      return _._id === movie._id ? movie : _;
    });
    this.setState({ movies });
    console.log(
      !!movie.like ? `You like ${movie.title}` : `You dont like ${movie.title}`
    );
  };

  deleteMovie = async (movieId) => {
    const movies = [...this.state.movies];
    this.setState({ movies: movies.filter((_) => _._id !== movieId) });
    try {
      await moviesService.deleteById(movieId);
    } catch (error) {
      this.setState({ movies });
      toast.error(error.response.data, { autoClose: 2500 });
    }
  };

  handlePageChange = (index) => {
    this.setState({ currentPage: index });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      genres,
      genderSelected,
      currentGenderIndex,
      movies: allMovies,
      sortColumn: sorting,
      currentPage,
    } = this.state;

    const filtered =
      genderSelected !== "All Genres"
        ? allMovies.filter((_) => _.genre.name === genderSelected)
        : allMovies;
    const moviesSorted = _.orderBy(filtered, [sorting.field], [sorting.order]);
    const moviesByPage = showItemsByPage(moviesSorted, currentPage);

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="col-sm-4">
          <ListGroup
            items={genres}
            onFilter={this.filterByGender}
            currentGenderIndex={currentGenderIndex}
          />
        </div>
        <div className="col-sm-8">
          <Link to="/movies/0">
            <button type="button" className="btn btn-primary">
              New Movie
            </button>
          </Link>
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
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;

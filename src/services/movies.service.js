import axios from "axios";
import { apiUrl } from "../utils/database.connect";
import { capitalizeText, capitalizeString } from "../utils/numberOfPages";

const getMovies = () => {
  return axios.get(`${apiUrl}/movies`).then(({ data: _ }) =>
    _.map((movie) => ({
      ...movie,
      title: capitalizeText(movie.title),
      genre: { ...movie.genre, name: capitalizeString(movie.genre.name) },
    }))
  );
};

const getMovieById = (id) => {
  return axios.get(`${apiUrl}/movies/${id}`).then(({ data: _ }) => ({
    ..._,
    title: capitalizeText(_.title),
    genre: { ..._.genre, name: capitalizeString(_.genre.name) },
  }));
};

const deleteMovieById = (id) => {
  return axios.delete(`${apiUrl}/movies/${id}`);
};

export default {
  get: getMovies,
  getById: getMovieById,
  deleteById: deleteMovieById,
};

import { apiUrl } from "../utils/database.connect";
import { capitalizeText, capitalizeString } from "../utils/numberOfPages";
import httpService from "./httpService";

const getMovies = () => {
  return httpService.get(`/movies`).then(({ data: _ }) =>
    _.map((movie) => ({
      ...movie,
      title: capitalizeText(movie.title),
      genre: { ...movie.genre, name: capitalizeString(movie.genre.name) },
    }))
  );
};

const getMovieById = (id) => {
  return httpService.get(`/movies/${id}`).then(({ data: _ }) => ({
    ..._,
    title: capitalizeText(_.title),
    genre: { ..._.genre, name: capitalizeString(_.genre.name) },
  }));
};

const saveMovie = (movie) => {
  return httpService.post(`/movies`, movie);
};

const putMovie = (movie) => {
  return httpService.put(`/movies/${movie.id}`, movie);
};

const deleteMovieById = (id) => {
  return httpService.delete(`/movies/${id}`);
};

export default {
  get: getMovies,
  getById: getMovieById,
  save: saveMovie,
  put: putMovie,
  deleteById: deleteMovieById,
};

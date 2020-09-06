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
  return axios.get(`${apiUrl}/movies/${id}`);
};

export default {
  get: getMovies,
  getById: getMovieById,
};

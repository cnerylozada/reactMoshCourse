import axios from "axios";
import { apiUrl } from "../utils/database.connect";
import { capitalize } from "../utils/numberOfPages";

const getGenres = () => {
  return axios
    .get(`${apiUrl}/genres`)
    .then(({ data: _ }) =>
      _.map((genre) => ({ ...genre, name: capitalize(genre.name) }))
    );
};

export default {
  get: getGenres,
};

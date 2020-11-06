import { apiUrl } from "../utils/database.connect";
import { capitalizeString } from "../utils/numberOfPages";
import httpService from "./httpService";

const getGenres = () => {
  return httpService
    .get(`/genres`)
    .then(({ data: _ }) =>
      _.map((genre) => ({ ...genre, name: capitalizeString(genre.name) }))
    );
};

export default {
  get: getGenres,
};

import { apiUrl } from "../utils/database.connect";
import httpService from "./httpService";

const saveUser = (user) => {
  return httpService.post(`${apiUrl}/signup`, user);
};

export default {
  save: saveUser,
};

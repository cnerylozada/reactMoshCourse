import { apiUrl } from "../utils/database.connect";
import httpService from "./httpService";

const saveUser = (user) => {
  return httpService.post(`${apiUrl}/signup`, user);
};

const login = (credentials) => {
  return httpService.post(`${apiUrl}/login`, credentials);
};

export default {
  save: saveUser,
  login: login,
};

import { apiUrl } from "../utils/database.connect";
import httpService from "./httpService";

const saveUser = (user) => {
  return httpService.post(`${apiUrl}/users`, user);
};

const login = (credentials) => {
  return httpService.post(`${apiUrl}/auth`, credentials);
};

export default {
  save: saveUser,
  login: login,
};

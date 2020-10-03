import { apiUrl } from "../utils/database.connect";
import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const tokenStoreItem = "token";

const saveUser = async (user) => {
  const { headers } = httpService.post(`${apiUrl}/users`, user);
  localStorage.setItem(tokenStoreItem, headers["x-auth-token"]);
};

const login = async (credentials) => {
  const { data } = await httpService.post(`${apiUrl}/auth`, credentials);
  localStorage.setItem(tokenStoreItem, data);
};

const logout = () => {
  localStorage.removeItem(tokenStoreItem);
};

const getCurrentUser = () => {
  try {
    const token = localStorage.getItem(tokenStoreItem);
    const { user } = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
};

export default {
  save: saveUser,
  login,
  logout,
  getCurrentUser,
};

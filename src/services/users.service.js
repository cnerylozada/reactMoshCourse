import { apiUrl } from "../utils/database.connect";
import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const tokenStoreItem = "token";

const getToken = () => localStorage.getItem(tokenStoreItem);
httpService.setToken(getToken());

const saveUser = async (user) => {
  const { headers } = httpService.post(`/users`, user);
  localStorage.setItem(tokenStoreItem, headers["x-auth-token"]);
};

const login = async (credentials) => {
  const { data } = await httpService.post(`/auth`, credentials);
  localStorage.setItem(tokenStoreItem, data);
};

const logout = () => {
  localStorage.removeItem(tokenStoreItem);
};

const getCurrentUser = () => {
  try {
    const token = getToken();
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
  getToken,
};

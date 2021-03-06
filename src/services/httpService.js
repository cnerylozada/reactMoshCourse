import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) alert("A certain unexpected error");
  return Promise.reject(error);
});

const setToken = (token) => {
  axios.defaults.headers.common["x-auth-token"] = token;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};

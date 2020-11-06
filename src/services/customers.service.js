import axios from "axios";
import { apiUrl } from "../utils/database.connect";

export const getCustomers = () => {
  return axios.get(`/customers`);
};

import axios from "axios";
import { API_URL, API_PORT } from "../config/api";

export default axios.create({
  baseURL: `${API_URL}:${API_PORT}/`,
});

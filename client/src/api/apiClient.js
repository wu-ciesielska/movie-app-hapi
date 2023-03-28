import axios from "axios";

const apiUrl = "http://localhost:4000/api";

export const apiClient = axios.create({
  baseURL: apiUrl,
});

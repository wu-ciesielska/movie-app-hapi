import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const apiClient = axios.create({
  baseURL: apiUrl,
});

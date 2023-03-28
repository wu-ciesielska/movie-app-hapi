import { apiClient } from "./apiClient";

export const getMovies = async () => {
  return await apiClient
    .get("/movies")
    .then((response) => response.data.data)
    .catch((e) => console.log(e));
};

export const addMovie = async (data) => {
  return await apiClient
    .post("/movies", data)
    .then((response) => response.data.data)
    .catch((e) => console.log(e));
};

export const deleteMovie = async (id) => {
  return await apiClient
    .delete(`/movies/${id}`)
    .then((response) => response.data)
    .catch((e) => console.log(e));
};

export const updateMovie = async (data, id) => {
  return await apiClient
    .put(`/movies/${id}`, data)
    .then((response) => response.data)
    .catch((e) => console.log(e));
};

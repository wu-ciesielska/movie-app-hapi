import { ServerRoute } from "@hapi/hapi";
import Joi from "joi";
import { addMovie, getMovies } from "../handlers/movie-handler";

export const movieRoutes: ServerRoute[] = [
  {
    method: "POST",
    path: "/movies",
    options: {
      handler: addMovie,
      validate: {
        payload: {
          title: Joi.string(),
          rating: Joi.number().min(0).max(5),
        },
      },
      description: "Add new movie",
      notes: "Allows to add a new movie, containing from title and a rating",
      tags: ["api"],
    },
  },
  {
    method: "GET",
    path: "/movies",
    options: {
      handler: getMovies,
      description: "Get movies",
      notes: "Returns all movies stored in database",
      tags: ["api"],
    },
  },
];

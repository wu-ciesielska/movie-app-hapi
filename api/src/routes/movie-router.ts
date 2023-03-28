import { ServerRoute } from "@hapi/hapi";
import { getMovies } from "../handlers/movie-handler";

export const movieRoutes: ServerRoute[] = [
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

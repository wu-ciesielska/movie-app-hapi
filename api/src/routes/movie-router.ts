import { ServerRoute } from "@hapi/hapi";
import { getMovies } from "../handlers/movie-handler";

export const movieRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/movies",
    handler: getMovies,
  },
];

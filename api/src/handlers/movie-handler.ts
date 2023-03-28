import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import prisma from "../db";

// const addMovie = async (req, res, next) => {
//   try {
//     const movie = await prisma.movie.create({
//       data: { title: req.body.title, rating: req.body.rating },
//     });

//     res.json({ data: movie });
//   } catch (e) {
//     // next(e);
//   }
// };

const getMovies = async (
  _req: Request,
  res: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const movies = await prisma.movie.findMany();

    if (movies) {
      const response = res.response({ data: movies });
      return response;
    } else {
      const response = res.response({ data: "no movies" });
      return response;
    }
  } catch (e) {
    console.log(e);
  }
};

// const updateMovie = async (req, res) => {
//   const updated = await prisma.movie.update({
//     where: {
//       id: req.params.id,
//     },
//     data: {
//       title: req.body.title,
//       rating: req.body.rating,
//     },
//   });

//   res.json({ data: updated });
// };

// const deleteMovie = async (req, res) => {
//   const deleted = await prisma.movie.delete({ where: { id: req.params.id } });
//   console.log(deleted);
//   res.json({ data: deleted });
// };

export {
  // addMovie,
  getMovies,
  // updateMovie, deleteMovie
};

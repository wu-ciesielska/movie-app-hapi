import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import prisma from "../db";

interface MovieInput {
  title: string;
  rating: number;
}

const addMovie = async (
  req: Request,
  res: ResponseToolkit
): Promise<ResponseObject> => {
  const payload = req.payload as MovieInput;

  try {
    const movie = await prisma.movie.create({
      data: { title: payload.title, rating: payload.rating },
    });

    const response = res.response({ data: movie });
    return response;
  } catch (e) {
    console.log(e);
  }
};

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

const deleteMovie = async (
  req: Request,
  res: ResponseToolkit
): Promise<ResponseObject> => {
  const deleted = await prisma.movie.delete({ where: { id: req.params.id } });

  const response = res.response({ data: deleted });
  return response;
};

export {
  addMovie,
  getMovies,
  // updateMovie,
  deleteMovie,
};

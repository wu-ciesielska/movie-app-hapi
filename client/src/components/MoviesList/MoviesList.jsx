import {
  addMovie,
  deleteMovie,
  getMovies,
  updateMovie,
} from "../../api/movies";
import { Movie } from "../Movie/Movie";
import { useEffect, useState } from "react";
import { MovieForm } from "../MovieForm/MovieForm";
import "./MoviesList.scss";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  };

  const handleAddMovie = async (title, rating) => {
    await addMovie(title, rating);
    await fetchMovies();
    setShowForm(false);
  };

  const handleDeleteMovie = async (id) => {
    await deleteMovie(id);
    await fetchMovies();
  };

  const handleEditMovie = async (data, id) => {
    await updateMovie(data, id);
    await fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className="movies-list-heading">Movies App</h1>
      <div className="movies-list-container">
        {movies.length ? (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              onDelete={() => handleDeleteMovie(movie.id)}
              onEdit={(data) => handleEditMovie(data, movie.id)}
            />
          ))
        ) : (
          <div>No movies yet</div>
        )}
      </div>
      <button
        className="add-movie-button"
        onClick={() => setShowForm(!showForm)}
      >
        Add movie
      </button>
      {showForm && (
        <MovieForm
          showForm={showForm}
          onSubmit={handleAddMovie}
          onClickClose={() => setShowForm(false)}
          type="add"
        />
      )}
    </div>
  );
};

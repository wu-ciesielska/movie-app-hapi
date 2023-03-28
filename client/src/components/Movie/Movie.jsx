import { useState } from "react";
import { MovieForm } from "../MovieForm/MovieForm";
import "./Movie.scss";

export const Movie = ({ title, rating, onDelete, onEdit }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data) => {
    onEdit(data);
    setShowForm(false);
  };
  return (
    <div className="movie-row">
      <div className="title">"{title}"</div>
      <div className="rating">{`${rating}/5`}</div>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
      <button className="edit-button" onClick={() => setShowForm(true)}>
        Edit
      </button>
      <MovieForm
        movieTitle={title}
        movieRating={rating}
        showForm={showForm}
        onSubmit={(data) => handleSubmit(data)}
        onClickClose={() => setShowForm(false)}
        type={"edit"}
      ></MovieForm>
    </div>
  );
};

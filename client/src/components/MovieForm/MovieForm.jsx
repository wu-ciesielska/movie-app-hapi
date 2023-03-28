import { useState } from "react";
import "./MovieForm.scss";

export const MovieForm = ({
  movieTitle,
  movieRating,
  type,
  showForm,
  onSubmit,
  onClickClose,
}) => {
  const [title, setTitle] = useState(movieTitle || "");
  const [rating, setRating] = useState(movieRating || null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ title: title, rating: Number(rating) });
  };

  const setHeading = () => {
    if (type === "edit") {
      return "Edit movie";
    } else if (type === "add") {
      return "Add movie";
    }
    return;
  };

  return (
    showForm && (
      <div className="movie-form-container">
        <div className="heading-container">
          <button className="close-button" onClick={onClickClose}>
            X
          </button>
          <h2 className="movie-form-heading">{setHeading()}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="label">
              Title
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
              ></input>
            </label>
          </div>
          <div className="input-container">
            <label className="label">
              Rating
              <input
                name="rating"
                type="text"
                value={rating}
                onChange={handleRatingChange}
              ></input>
            </label>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  );
};

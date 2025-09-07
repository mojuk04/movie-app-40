import React from "react";
import "../css/Moviecard.css";

const MovieCard = ({ movie }) => {
  const addFavorite = () => {
    alert("favorite movie");
  };
  return (
    <section className="movie-card-section">
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay"></div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
          <button className="favorite-btn" onClick={addFavorite}>
            Add to watch Later
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;

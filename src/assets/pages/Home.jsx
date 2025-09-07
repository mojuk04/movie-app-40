import React, { useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import "../../css/Home.css";
import { searchMovies, getPopularMovies } from "../../services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const loadMovies = await getPopularMovies();
        setMovies(loadMovies);
      } catch (err) {
        console.log(err);
        setError("Error... Couldn't load your movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults != {}) {
        setMovies(searchResults);
      } else {
        setMovies(<div>Not found</div>);
      }
      setError(null);
    } catch (err) {
      setError("Failed to search movie....\n retry in a second");
    } finally {
      setLoading(false);
    }
    setSearchQuery(searchQuery);
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

// https://www.youtube.com/watch?v=03FAepR-WVQ

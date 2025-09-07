import "./css/App.css";
// import MovieCard from "./Components/MovieCard";
import Home from "./assets/pages/Home";
import Favorites from "./assets/pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

{
  /* <MovieCard movie={{ title: "Movie - 1", release_date: "2024" }} />
<MovieCard movie={{ title: "Movie - 2", release_date: "2025" }} /> */
}

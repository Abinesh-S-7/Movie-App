import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    if (!search) return;

    const res = await axios.get(
      `http://localhost:5000/movies/${search}`
    );

    setMovies(res.data.Search || []);
  };

  return (
    <div className="app">

      <h1 className="title">
        🎬 Movie Search App
      </h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchMovie}>
          Search
        </button>

      </div>

      <div className="movies-container">

        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>

            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.Title}
            />

            <div className="movie-info">

              <h3>{movie.Title}</h3>

              <p>{movie.Year}</p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
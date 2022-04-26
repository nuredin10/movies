import "./App.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      {/* {movies.map((movie) =>{
        return(
          <>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
          </>
        )
      })} */}

      <Router>
        <Routes>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/movies" element={<Movies movies={movies} />}></Route>
          <Route path="/tvseries" element={<TvSeries/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

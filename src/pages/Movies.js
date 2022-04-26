import {useState, useEffect} from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
// import '../components/trendings.scss'
import './movies.scss'
function Movies({movies}) {
  const [searchKey, setSearchKey] = useState('')
  const [searchedResult, setSearchedResult] = useState([])

  const fetchMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    console.log(data);
    setSearchedResult(data.results);
  };
  // useEffect(()=>{
    fetchMovies()
  // },searchKey)
  return (
    <div className="contanier">
      <Nav/>
      <h2 className="movies-title">Movies</h2>
      <Search searchKey={searchKey} setSearchKey={setSearchKey}/>
      <div className="wrapper cards">
          {searchedResult ? searchedResult.map((movie) =>(
              <div className="card">
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            </div>
          )) : movies.map((movie) =>(
            <div className="card">
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            </div>
          ))}
          {/* {movies.map((movie) =>(
            <div className="card">
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            </div>
          ))} */}
      </div>
      </div>
  );
}

export default Movies;

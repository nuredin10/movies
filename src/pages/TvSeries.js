import {useState, useEffect} from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
// import '../components/trendings.scss'
import './movies.scss'
function TvSeries() {
  const [searchKey, setSearchKey] = useState('')
  const [searchedResult, setSearchedResult] = useState([])
  const [tvseries, setTvSeries] = useState([])

  const fetchMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    // console.log(data);
    setTvSeries(data.results);
  };
  const fetchSearch = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${searchKey}&api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    // console.log(data);
    setSearchedResult(data.results);
  };

  useEffect(()=>{
    fetchMovies()
  },[])
  useEffect(()=>{
    fetchSearch()
  },searchKey)
  return (
    <div className="contanier">
      <Nav/>
      <h2 className="movies-title">Tv Series</h2>
      <Search searchKey={searchKey} setSearchKey={setSearchKey}/>
      <div className="wrapper cards">
          {searchedResult ? searchedResult.map((movie) =>(
              <div className="card">
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            </div>
          )) : tvseries.map((movie) =>(
            <div className="card">
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            </div>
          ))}
          {/* {searchedResult.map((movie) =>(
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

export default TvSeries;

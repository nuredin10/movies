import {useState, useEffect} from "react";
import "./trendings.scss";
import Card from "./Card";
function TopRated() {
  const [topRated, setTopRated] = useState([])

  const fetchMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated&api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    console.log(data);
    setTopRated(data.results);
  };

  useEffect(()=>{
    fetchMovies();
  },[])

  return (
    <div className="contanier">
      <div className="title">
        <h2>Top Rated Movies</h2>
        <button>View more</button>
      </div>
      <div className="wrapper">
        <Card topRated={topRated}/>
      </div>
    </div>
  );
}

export default TopRated;

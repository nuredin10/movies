import {useState, useEffect} from "react";
import "./trendings.scss";
import Card from "./Card";
function Trendigs() {
  const [trendings, setTrendings] = useState([])

  const fetchMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=9f0ef637be31150148e58d2dacb732a2`
    );
    const data = await api.json();
    console.log(data);
    setTrendings(data.results);
  };

  useEffect(()=>{
    fetchMovies();
  },[])

  return (
    <div className="contanier">
      <div className="title">
        <h2>Trending movies</h2>
        <button>View more</button>
      </div>
      <div className="wrapper">
        <Card trendings={trendings}/>
      </div>
    </div>
  );
}

export default Trendigs;

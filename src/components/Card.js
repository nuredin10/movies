import React from "react";
import "./trendings.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "swiper/css";

function Card({ trendings,toprated }) {
  return (
    <div className="cards">
      <Splide
        options={{
          perPage: 6,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1.1rem",
        }}
      >
        {trendings.map((movie) => (
          <SplideSlide className="card">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              ></img>

            <h3>{movie.title}</h3>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Card;

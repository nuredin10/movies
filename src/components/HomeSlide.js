import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./HomeSlide.scss";
import { Link } from "react-router-dom";
function HomeSlide({ movies }) {
  SwiperCore.use([Autoplay]);
  return (
    <>
    
      <div className="home-slide">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidePreview={1}
        >
          {movies.map((movie) =>
            movie.vote_average > 7 ? (
              <SwiperSlide>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                ></img>
                <div className="slide-content">
                  <div className="title">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div className="buttons">
                      <button className="bg">Watch now</button>
                      <button className="outlined">Watch trailer</button>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    ></img>
                  </div>
                </div>

                <div className="gradient"></div>
              </SwiperSlide>
            ) : (
              <div></div>
            )
          )}
        </Swiper>
      </div>
      <div className="nnav">
        <Link to="/">
          <h3>logo</h3>
        </Link>

        <ul>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/movies" className="link">
            Movies
          </Link>
          <Link to="/tvseries" className="link">
            Tv Series
          </Link>
        </ul>
        <div className="ggradient"></div>
      </div>
    </>
  );
}

export default HomeSlide;

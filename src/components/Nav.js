import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
function Nav() {

  return (
    <div className="nav" >
      <Link to="/">
        <h3>logo</h3>
      </Link>

      <ul>
        <Link to="/" className="link" >
          Home
        </Link>
        <Link to="/movies" className="link">
          Movies
        </Link>
        <Link to="/tvseries" className="link" >
          Tv Series
        </Link>
      </ul>
      <div className="ggradient"></div>
    </div>
  );
}

export default Nav;

import React from "react";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1>
        <Bounce top cascade>
          Rock-Paper-Scissors
        </Bounce>
      </h1>
      <NavLink to="/game">
        <button>Play</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </div>
  );
};

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./About.module.css";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
      <NavLink to="/home">
        <div className={classes.backdrop}>
          <Fade><p>Tap anywhere to exit</p></Fade>
        </div>
      </NavLink>
      <div className={classes.message}>
        <h3>About</h3>
        <span>
          <p>
            This game was created from scratch with React. I used mainly state
            to make out the logic of the application. I also faced issues like
            "Too many re-renders. React limits the number of renders to prevent
            an infinite loop." and overcame them by using common variables
            rather than state. Generally, it was an easy project to pull off and
            I hope you enjoy playing as much as I enjoyed creating it.
          </p>
        </span>
      </div>
    </>
  );
};

export default About;

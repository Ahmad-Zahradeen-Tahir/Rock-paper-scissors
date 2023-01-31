import React from "react";
import background from ".././images/pexels-pixabay-36717.jpg";
import classes from './Background.module.css'

const Background = (props) => {
  return (
    <>
      <video autoPlay loop muted className={classes.wallpaper}>
        <source src={background} type="video/mp4" />
      </video>
      {props.children}
    </>
  );
};

export default Background;

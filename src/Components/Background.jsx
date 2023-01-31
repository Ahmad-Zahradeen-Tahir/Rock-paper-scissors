import React from "react";
import background from ".././images/pexels-pixabay-36717.jpg";
import classes from './Background.module.css'

const Background = (props) => {
  return (
    <>
      <img src={background} className={classes.wallpaper}/>
      {props.children}
    </>
  );
};

export default Background;

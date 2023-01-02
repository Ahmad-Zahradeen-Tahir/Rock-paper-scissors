import React from "react";
import background from ".././images/Sunset - 65182.mp4";
import classes from './Background.module.css'
import music from './backgroundMusic.mp3'

const Background = (props) => {
  const sound = () => {
    new Audio(music).play()
  }
  sound()
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

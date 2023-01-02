import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Option from "../Components/Option";
import classes from "./Game.module.css";
import rock from "../images/SeekPng.com_rock-paper-scissors-png_8161371.png";
import paper from "../images/PngItem_2667252.png";
import scissors from "../images/pngaaa.com-3313787.png";

let SCORE = {p1:0, p2:0}

const Game = (props) => {
  const [selection, setSelection] = useState();
  const [ai, setAi] = useState();

  const play = (e) => {
    setSelection(e.target.id);
    setAi(Math.floor(Math.random() * 3) + 1);
  };

  useEffect(() => {
    SCORE.p1=0
    SCORE.p2=0
  },[])

  let answer = "";
  if (selection == 1) {
    answer = <Option answer="answer" disabled={true} img={rock} />;
  } else if (selection == 2) {
    answer = <Option answer="answer" disabled={true} img={paper} />;
  } else if (selection == 3) {
    answer = <Option answer="answer" disabled={true} img={scissors} />;
  }

  let com = "";
  if (ai == 1) {
    com = <Option answer="answer" disabled={true} img={rock} />;
  } else if (ai == 2) {
    com = <Option answer="answer" disabled={true} img={paper} />;
  } else if (ai == 3) {
    com = <Option answer="answer" disabled={true} img={scissors} />;
  }

  let result = "";
  let color = "";
  if (
    (selection == 1 && ai == 3) ||
    (selection == 2 && ai == 1) ||
    (selection == 3 && ai == 2)
  ) {
    result = "You win!!!";
    SCORE.p1++
    color = "green";
  } else if (selection == ai && ai > 0) {
    result = "It's a tie";
    color = "white";
  } else if (
    (selection == 1 && ai == 2) ||
    (selection == 2 && ai == 3) ||
    (selection == 3 && ai == 1)
  ) {
    result = "You lose";
    SCORE.p2++
    color = "red";
  } else {
    SCORE.p1=0
    SCORE.p2=0
    result = "can you beat me?";
  }

  return (
    <div className={classes.game}>
      <div className={classes.bottom}>
        <NavLink to="/home">
          <button>{"Quit"}</button>
        </NavLink>
      </div>
      <div className={classes.mid}>
        <div className={classes.left}>
          {answer}
        </div>
        <div className={classes.result}>
          <h2>{SCORE.p1} : {SCORE.p2}</h2>
          <h2 className={classes[color]}>{result}</h2>
        </div>
        <div className={classes.right}>
          {com}
        </div>
      </div>
      <div className={classes.top}>
        <Option
          id={1}
          play={play}
          answer="option"
          getSelection={getSelection}
          img={rock}
        />
        <Option
          id={2}
          play={play}
          answer="option"
          getSelection={getSelection}
          img={paper}
        />
        <Option
          id={3}
          play={play}
          answer="option"
          getSelection={getSelection}
          img={scissors}
        />
      </div>
    </div>
  );
};

export default Game;

import React, { useState } from "react";
import HButton from "./HButton";

const HList = () => {
  const clickedBtn = (e) => {
    console.log(e.target.textContent);
  };

  // create an array of jobe time stamps, for now
  const arr = [];

  for (let i = 7; i <= 24; i++) {
    arr.push(
      <h1 onClick={clickedBtn} className="numberList" key={i}>
        {i}
      </h1>
    );
  }

  return <div className="hourSelect">{arr}</div>;
};

export default HList;

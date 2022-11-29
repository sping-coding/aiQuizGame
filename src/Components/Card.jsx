import React from "react";
import background from "./image/퀴즈배경.png"


const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;

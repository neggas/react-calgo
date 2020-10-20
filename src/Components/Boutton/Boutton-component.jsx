import React from "react";
import "./Boutton-style.css";

export const Boutton = ({ value, itemClass, handleClick }) => {
  return (
    <div className={`btn ${itemClass}`} onClick={handleClick}>
      {value}
    </div>
  );
};

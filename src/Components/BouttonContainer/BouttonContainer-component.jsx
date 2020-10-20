import React from "react";
import { Boutton } from "../Boutton/Boutton-component";
export const BouttonContainer = ({ bouttons, handleClick }) => {
  return (
    <div id="buttons-container">
      {bouttons.map((el, key) => (
        <Boutton
          value={el.value}
          key={el}
          itemClass={el.itemClass}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

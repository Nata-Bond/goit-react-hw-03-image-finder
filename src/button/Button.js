import React from "react";
import s from "./button.module.css";

const Button = ({ fetchImages }) => {
  return (
    <button className={s.Button} type="button" onClick={fetchImages}>
      Load more
    </button>
  );
};

export default Button;

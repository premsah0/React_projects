import { MdMessage } from "react-icons/md";
import React from "react";

function Button(props) {
  return (
    <button> Button
      {props.text}
      {props.icon}
    </button>
  );
}

export default Button;

import React from "react";
import "./style.css"
import { Container } from "../Grid"

// Destructuring the type, className, children and onClick props, applying them to the button element
function ActionButton(props) {
  switch (props.type) {
    case "success":
      var a = "btn btn-success button"
      break;
    case "danger":
      // eslint-disable-next-line no-redeclare
      var a = "btn btn-danger button"
      break;
    default:
      // eslint-disable-next-line no-redeclare
      var a = "btn btn-warning button"
  }
  return (
    <button type="button" {...props} className={a} >{props.value}
    </button>
    

  );
}

export default ActionButton;

import React from "react";
import "./style.css"

// Destructuring the type, className, children and onClick props, applying them to the button element
function ActionButton(props) {
  switch (props.type) {
    case "success":
      var a = "btn btn-success"
      break;
    case "danger":
      var a = "btn btn-danger"
      break;
    default:
      var a = "btn btn-warning"
  }
  return (
    <button type="button" {...props} className={a} >{props.value}
    </button>

  );
}

export default ActionButton;

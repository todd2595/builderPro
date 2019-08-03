import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Form(props) {
  return (
    <form className="form-inline">
      <div className="form-group mb-2">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name={props.name}
          type="text"
          className="form-control"
          placeholder="enter word here"
          id="search"
        />
        <br />
        <button onClick={(event) => props.handleFormSubmit(event)} className="btn btn-primary mb-2">
          Guess
        </button>
      </div>
    </form>
  );
}

export default Form;

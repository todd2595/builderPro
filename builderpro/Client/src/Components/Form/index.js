import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name={props.name}
          type="text"
          className="form-control"
          placeholder="Search For a Word"
          id="search"
        />
        <br />
        <button onClick={(event) => props.handleFormSubmit(event)} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;

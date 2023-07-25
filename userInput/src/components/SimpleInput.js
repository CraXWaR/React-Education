import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputValid = !enteredNameIsValid && nameTouched;

  const nameChange = (e) => {
    setEnteredName(e.target.value);
  };

  const nameBlur = (e) => {
    setNameTouched(true);
  };

  const formHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setNameTouched(false);
  };
  const nameClasses = nameInputValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChange}
          onBlur={nameBlur}
          value={enteredName}
        />
        {nameInputValid && <p className="error-text">Name can't be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

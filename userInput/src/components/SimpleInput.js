import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [nameTouched, setNameTouched] = useState();

  useEffect(() => {
    if (nameValid) {
      console.log("Name is valid");
    }
  }, [nameValid]);

  const nameChange = (e) => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== "") {
      setNameValid(true);
    }
  };

  const nameBlur = (e) => {
    setNameTouched(true);

    if (enteredName.trim() === "") {
      setNameValid(false);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (enteredName.trim() === "") {
      setNameValid(false);
      return;
    }
    setNameValid(true);

    console.log(enteredName);
    setEnteredName("");
  };
  const nameInputValid = !nameValid && nameTouched;
  const nameClasses = nameInputValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChange}
          onBlur={nameBlur}
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

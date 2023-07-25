import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState();
  const [nameValid, setNameValid] = useState(true);

  const nameChange = (e) => {
    setEnteredName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setNameValid(false);
      return;
    }
    setNameValid(true);

    console.log(enteredName);
    setEnteredName("");

    const enteredNameRef = nameRef.current.value;
    console.log(enteredNameRef);
  };

  const nameClasses = nameValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          ref={nameRef}
          onChange={nameChange}
        />
        {!nameValid && <p className="error-text">Name can't be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

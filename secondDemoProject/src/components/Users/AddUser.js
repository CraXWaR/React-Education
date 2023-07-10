import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid input", message: "Enter valid name and age" });
      return;
    }

    if (Number(age) < 1) {
      setError({ title: "Invalid input", message: "Enter valid age (> 0)" });
      return;
    }

    props.onAdd(username, age);

    setUsername("");
    setAge("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorhandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

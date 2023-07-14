import React, { useRef, useState } from "react";

import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputReft = useRef();

  const sumbitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputReft.current.value;
    const enteredAmountToNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAdd(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Input
        ref={amountInputReft}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealForm;

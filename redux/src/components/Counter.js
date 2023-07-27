import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const increment = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: "decrement" });
  };

  const increase = () => {
    dispatch(counterActions.increase(10));
    // dispatch({ type: "increase", amount: 10 });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increase by 10</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

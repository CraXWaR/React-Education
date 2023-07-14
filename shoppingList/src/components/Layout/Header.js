import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shopping List</h1>
        <HeaderButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </Fragment>
  );
};

export default Header;

import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth-slice";

import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

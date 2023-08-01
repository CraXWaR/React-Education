import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import classes from "./Root.module.css";

const RootLeyout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.contet}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLeyout;

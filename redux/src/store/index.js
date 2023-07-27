import { configureStore } from "@reduxjs/toolkit";

import counsterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counsterReducer, auth: authReducer },
});

export default store;

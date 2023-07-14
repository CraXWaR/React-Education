import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Crart";

function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <Fragment>
      {cart && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

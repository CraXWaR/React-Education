import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Crart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

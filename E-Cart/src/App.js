import React from "react";
import CartProvider from "./CartProvider";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <h1>Cloth Shopping Cart</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

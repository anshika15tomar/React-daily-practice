import React, { useContext } from "react";
import CartContext from "./CartContext";
import "./App.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <section>
      <h2>🛒 Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} width={50} />
            <div>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;

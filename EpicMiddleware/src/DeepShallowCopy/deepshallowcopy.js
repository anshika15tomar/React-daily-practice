import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Laptop', options: { color: 'Silver', warranty: '1 year' } },
    { id: 2, name: 'Phone', options: { color: 'Black', warranty: '6 months' } },
  ]);

 
  const updateColorShallow = () => {
    const newCart = [...cart];
    newCart[0].options.color = 'Space Gray';
    setCart(newCart);
  };

 
  const updateColorDeep = () => {
   const newCart = JSON.parse(JSON.stringify(cart));
    newCart[0].options.color = 'Space Gray';

    setCart(newCart);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul>
        {cart.map(item => (
          <li>
            {item.name} - Color: {item.options.color} - Warranty: {item.options.warranty}
          </li>
        ))}
      </ul>

      <button onClick={updateColorShallow}>Update Color (Shallow Copy)</button>
      <button onClick={updateColorDeep}>Update Color (Deep Copy)</button>
    </div>
  );
};

export default ShoppingCart;

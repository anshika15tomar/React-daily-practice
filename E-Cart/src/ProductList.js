import React, { useEffect, useState, useContext } from "react";
import CartContext from "./CartContext";
import "./App.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <h2>Women's Clothing</h2>
      {products.map((product) => (
        <div className="item" key={product.id}>
          <img src={product.image} alt={product.title} width={50} />
          <div>
            <p>{product.title}</p>
            <p>₹{product.price}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;

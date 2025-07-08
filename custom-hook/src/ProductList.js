// src/components/ProductList.js
import React from "react";
import useApi from "./useApi";

const ProductList = () => {
  const { data, loading, error } = useApi("https://dummyjson.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
      {data?.products?.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <img src={product.thumbnail} alt={product.title} width={100} />
          <h4>{product.title}</h4>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

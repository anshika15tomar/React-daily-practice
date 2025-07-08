// src/components/DynamicList.jsx
import React, { useEffect, useState } from 'react';
import './DynamicList.css';

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;//env file se api fetch karta hai.
  const isProd = process.env.NODE_ENV === 'production';

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => setItems(data.slice(0, 50))) 
      .catch(err => console.error('API Error:', err));
  }, [apiURL]);

  return (
    <div className="list">
      <h2>{isProd ? 'Products (Production)' : 'Blog Posts (Development)'}</h2>
      <div className="cards">
        {items.map((item) => (
          <div className="card">
            {isProd ? (
              <>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>₹ {Math.floor(item.price * 80)}</p>
                <button>Add to Cart</button>
              </>
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>{item.body.slice(0, 100)}...</p>
                <button>Read More</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicList;

import React, { useState } from "react";
import MessageCard from "./MessageCard";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Counter</h1>
      <button onClick={increase} style={styles.button}>
        Increase Counter
      </button>
      <p>Counter: {count}</p>

      <MessageCard />
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer"
  }
};

export default App;

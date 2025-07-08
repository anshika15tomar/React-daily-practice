import React, { useReducer } from "react";

const counterReducer = (state, action) => {//state update karne ke rules dega 
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
//main component , UI banane ke liye 
const CounterApp = () => {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>count: {state.count}</h2>

      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial",
    backgroundColor: "pink",
    borderRadius: "10px",
    width: "300px",
    margin: "2rem auto",
    
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
};

export default CounterApp;

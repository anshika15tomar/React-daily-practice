import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="app" style={styles.container}>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div className="buttons">
          <button style={styles.button} onClick={this.increment}> Increment</button>
          <button style={styles.button} onClick={this.decrement}>Decrement</button>
          <button style={styles.button} onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor: "#f99999",
    padding:"30px",
    width:"30%",
    position:"absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", 
    borderRadius: "10px",
    textAlign: "center",
    border:"1px solid black",

  },
  button:{
    margin:"10px",
    padding:"10px",
    backgroundColor:"skyblue",
    borderRadius: "10px",

  }
}
export default Counter;

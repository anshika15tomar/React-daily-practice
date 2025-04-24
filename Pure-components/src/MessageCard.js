import React, { PureComponent } from "react";

class MessageCard extends PureComponent {
  render() {
    console.log("MessageCard Rendered");
    return (
      <div style={styles.card} >
        <h3> Welcome, Anshika!</h3>
        <p>This message is rendered using PureComponent.</p>
      </div>
    );
  }
}

const styles = {
  card: {
    border: "1px solid #aaa",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "20px",
    backgroundColor: "#ADD8E6", 
    fontFamily: "sans-serif"
    
  }
 
};

export default MessageCard;

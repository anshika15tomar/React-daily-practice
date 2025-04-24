import React, { Component } from 'react';
import './App.css';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Click the button to generate a quote',
    };
  }

  quotes = [
    
      "Don't watch the clock; do what it does. Keep going.",
      "The secret of getting ahead is getting started.",
      "Believe in yourself and all that you are.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "Your limitation—it’s only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Sometimes later becomes never. Do it now.",
      "Don’t stop when you’re tired. Stop when you’re done.",
      "Discipline is choosing between what you want now and what you want most.",
      "Hardships often prepare ordinary people for an extraordinary destiny.",
      "The best way to get started is to quit talking and begin doing.",
      "If you want something you've never had, you must be willing to do something you've never done.",
      "Small steps in the right direction can turn out to be the biggest steps of your life.",
      "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
      "You are stronger than you think, braver than you feel, and smarter than you believe.",
      "Stars can't shine without darkness.",
      "Stay patient and trust your journey.",
      "A winner is just a loser who tried one more time."
  
  
  ];

  generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.setState({ quote: this.quotes[randomIndex] });
  };

  render() {
    return (
      <div className="app">
        <h1>Motivational Quote Generator</h1>
        <p className="quote">"{this.state.quote}"</p>
        <button onClick={this.generateQuote}>Get New Quote</button>
      </div>
    );
  }
}

export default QuoteGenerator;

// src/App.jsx
import React from 'react';
import DynamicList from './DynamicList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> &#127757; EnvSmart Multi-API App</h1>
      <p>Environment: <strong>{process.env.NODE_ENV}</strong></p>
      <DynamicList />
    </div>
  );
}

export default App;

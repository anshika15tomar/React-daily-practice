import React from 'react';
import ReactDOM from 'react-dom/client';
// ✅ Make sure you're importing from 'react-dom/client'
import { Provider } from 'react-redux';
// In src/index.js
import store from './Epicmiddleware/store/store.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

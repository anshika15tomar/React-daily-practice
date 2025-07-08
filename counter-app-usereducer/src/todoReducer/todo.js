import React, { useReducer, useState } from 'react';
import './App.css';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div className="app">
      <h1>Todo List with useReducer</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter your task"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {state.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      {state.length > 0 && (
        <button onClick={() => dispatch({ type: 'CLEAR_ALL' })} className="clear-btn">
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;

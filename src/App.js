import React from 'react';
import './App.css';
import { Button } from './Button';
import { RandomQuote } from './RandomQuote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomQuote />
      </header>
    </div>
  );
}

export default App;

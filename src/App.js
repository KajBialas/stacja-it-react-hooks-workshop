import React from 'react';
import Counter from './Counter';
import CounterF from './CounterF';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Treść Strony - nagłówek</h1>
      <Counter />
      <CounterF/>
    </div>
  );
}

export default App;

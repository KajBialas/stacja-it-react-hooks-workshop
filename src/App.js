import React from 'react';
import Counter from './Counter';
import CounterF from './CounterF';
import WindowResize from './WindowsResize';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Treść Strony - nagłówek</h1>
      <Counter />
      <CounterF/>
      <WindowResize />
    </div>
  );
}

export default App;

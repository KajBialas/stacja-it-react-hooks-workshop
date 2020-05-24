import React from 'react';
import Counter from './Counter';
import CounterF from './CounterF';
import WindowResize from './WindowsResize';
import Header from './Header';
import Users from './Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <CounterF/>
      <WindowResize />
      <Users />
    </div>
  );
}

export default App;

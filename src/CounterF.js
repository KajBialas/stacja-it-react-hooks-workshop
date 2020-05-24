import React, { useReducer, useContext } from 'react';
import { CounterContext } from './App';

function CounterF() {
  const {counterValue, incrementCounter} = useContext(CounterContext)

  return (
    <div>
      <h2>Counter:</h2>
      <div>{counterValue}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
  )
}

export default CounterF;
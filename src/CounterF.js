import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    case 'RESET':
      return {value: 0};
  }
};

function CounterF() {
  const [counterState, dispatch] = useReducer(counterReducer, {value: 0});

  return (
    <div>
      <h2>Counter:</h2>
      <div>{counterState.value}</div>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
    </div>
  )
}

export default CounterF;
import React, { useState, useEffect } from 'react';

function CounterF() {
  const [counterValue, setCounterValue] = useState(10);

  const incrementCounter = () => {
    setCounterValue((prevState) => prevState + 1);
  };

  const decrementCounter = () => {
    setCounterValue(counterValue - 1)
  };

  const resetCounter = () => {
    setCounterValue(10)
  };

  useEffect(() => {
    console.log('DIDMOUNT / DIDUPDATE');

    return () => {
      console.log('WILL UNMOUNT')
    }
  }, [counterValue]);

  return (
    <div>
      <h2>Counter:</h2>
      <div>{counterValue}</div>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
      <button onClick={resetCounter}>RESET</button>
    </div>
  )
}

export default CounterF;
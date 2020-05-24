import React, { useState } from 'react';
import Counter from './Counter';
import CounterF from './CounterF';
import WindowResize from './WindowsResize';
import Header from './Header';
import Users from './Users';
import './App.css';

export const UserContext = React.createContext('');
export const CounterContext = React.createContext(0);

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <UserContext.Provider value={{
        userEmail: userEmail,
        login: () => setUserEmail('kaj.bialas@gmail.com')
      }} >
        <CounterContext.Provider value={{
          counterValue: counter,
          incrementCounter: () => setCounter(counter+1)
        }}>
          <div>
            {userEmail ? userEmail : <button onClick={() => setUserEmail('kaj.bialas@gmail.com')}>ZALOGUJ SIE</button>}
          </div>
          <Header />
          <Counter />
          <CounterF/>
          <WindowResize />
          <Users />
        </CounterContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

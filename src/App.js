import React, { useState } from 'react';
import Counter from './Counter';
import CounterF from './CounterF';
import WindowResize from './WindowsResize';
import Header from './Header';
import Users from './Users';
import './App.css';

export const UserContext = React.createContext('');

function App() {
  const [userEmail, setUserEmail] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{
        userEmail: userEmail,
        login: () => setUserEmail('kaj.bialas@gmail.com')
      }} >
      <div>
        {userEmail ? userEmail : <button onClick={() => setUserEmail('kaj.bialas@gmail.com')}>ZALOGUJ SIE</button>}
      </div>
      <Header />
      <Counter />
      <CounterF/>
      <WindowResize />
      <Users />
      </UserContext.Provider>
    </div>
  );
}

export default App;

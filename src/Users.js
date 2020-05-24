import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => response.json()) 
      .then(json => setUsers(json));
  }, []);

  const renderUsers = () => users.map((user) => <div key={user.id}>{user.name}</div>);

  return(
    <div>
      <h2>Użytkownicy</h2>
      {renderUsers()}
    </div>
  )
}

export default Users;
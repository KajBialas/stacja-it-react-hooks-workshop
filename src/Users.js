import React, { useState, useEffect } from 'react';

function Users() {
  const [usersData, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState(false);

  useEffect(() => {
    setUsersLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => response.json()) 
      .then(json => setTimeout(() => {
        setUsersLoading(false);
        setUsers(json);
      }
      , 3000))
      .catch(e => {
        setUsersError(true);
        setUsersLoading(false);
      });
  }, []);

  const renderUsers = () => usersData.map((user) => <div key={user.id}>{user.name}</div>);

  return(
    <div>
      <h2>Użytkownicy</h2>
      {usersLoading && <div>Ładowanie danych</div>}
      {usersError && <div>Bład pobierania danych</div>}
      {renderUsers()}
    </div>
  )
}

export default Users;
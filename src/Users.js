import React, { useReducer, useEffect, useContext } from 'react';
import { INITIAL_STATE, USERS_ACTION_TYPES, usersReducer} from './UsersReducer';
import { UserContext } from './App';

function Users() {
  const [usersState, dispatch] = useReducer(usersReducer, INITIAL_STATE);
  const userEmail = useContext(UserContext)

  useEffect(() => {
    dispatch({type: USERS_ACTION_TYPES.LOADING});
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => response.json()) 
      .then(json => setTimeout(() => {
          dispatch({type: USERS_ACTION_TYPES.SUCCESS, data: json});
      }
      , 3000))
      .catch(e => {
        dispatch({type: USERS_ACTION_TYPES.ERROR});
      });
  }, []);

  const renderUsers = () => usersState.data.map((user) => <div key={user.id}>{user.name}</div>);

  return(
    <div>
      <h2>Użytkownicy</h2>
      {usersState.isLoading && <div>Ładowanie danych</div>}
      {usersState.isError && <div>Bład pobierania danych</div>}
      {renderUsers()}
      <div>Obecny użytkownik: {userEmail.userEmail}</div>
      <button onClick={userEmail.login}>LOGUJ</button>
    </div>
  )
}

export default Users;
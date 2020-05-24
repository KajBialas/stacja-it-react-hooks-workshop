import React, { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

const USERS_ACTION_TYPES = {
  LOADING: 'USERS_LOADING',
  ERROR: 'USERS_ERROR',
  SUCCESS: 'USERS_SUCCESS',
};

function usersReducer(state, action) {
  switch(action.type) {
    case USERS_ACTION_TYPES.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USERS_ACTION_TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case USERS_ACTION_TYPES.SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: [...action.data],
      }
  }
}

function Users() {
  const [usersState, dispatch] = useReducer(usersReducer, INITIAL_STATE);

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
    </div>
  )
}

export default Users;
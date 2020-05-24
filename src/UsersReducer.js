export const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

export const USERS_ACTION_TYPES = {
  LOADING: 'USERS_LOADING',
  ERROR: 'USERS_ERROR',
  SUCCESS: 'USERS_SUCCESS',
};

export function usersReducer(state, action) {
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
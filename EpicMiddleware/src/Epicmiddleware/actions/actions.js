//action.js
export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => ({ type: FETCH_USERS });

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: "FETCH_USERS_ERROR",
  payload: error,
});

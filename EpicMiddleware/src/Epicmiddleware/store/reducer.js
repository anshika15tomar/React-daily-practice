const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, loading: true, error: null };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USERS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

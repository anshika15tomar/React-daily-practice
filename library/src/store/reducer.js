
import { SET_BOOKS } from "./actions";

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default reducer;
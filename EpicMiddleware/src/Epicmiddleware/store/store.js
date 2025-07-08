import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../store/reducer.js';
import { fetchUsersEpic } from '../components/epics.js';
const epicMiddleware = createEpicMiddleware();


//Middleware ko Redux store me daala
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(fetchUsersEpic);

export default store;

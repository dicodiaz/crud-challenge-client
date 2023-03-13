import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import localStorageMiddleware from './middlewares/local-storage-middleware';
import customersReducer from './slices/customers-slice';
import driversReducer from './slices/drivers-slice';

const reducer = {
  customersReducer,
  driversReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, localStorageMiddleware),
  devTools: import.meta.env.DEV,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

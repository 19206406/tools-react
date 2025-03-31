import { configureStore, Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => { // esto es lo aconsejable para la persistencia de los datos 
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = store => next => action => {
  const { type, payload } = action;
  // fase 1
  console.log(type, payload);
  console.log(store.getState());
  next(action);

  // fase 2
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabase),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
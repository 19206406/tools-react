import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "John Doe",
    email: "l7a9w@example.com",
    github: "https://github.com/johndoe",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "l7a9w@example.com",
    github: "https://github.com/janedoe",
  },
  {
    id: "3",
    name: "Bob Doe",
    email: "l7a9w@example.com",
    github: "https://github.com/bobdoe",
  },
]; 

export type userID = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: userID;
}

const initialState: UserWithId[] = (() => { // función auto invocada para manejar a los usuarios 
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})(); 


export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    }, 
    deleteUserById: (state, action: PayloadAction<userID>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;
export const { addNewUser, deleteUserById } = usersSlice.actions; // una mejor exportación de las cosas

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    fullName: '',
    token: '', 
}

export const userSlice = createSlice({
    name: 'user', // nombre del slice 
    initialState: initialState, // es lo que yo quiero tener inicialmente en mi estado global
    reducers: { // son las funciones que van a modificar el estado global de la aplicación, o para hacer una acción en la aplicación 
        setUser: (state, action) => { // no hay que poner el type solo es payload action -> payload 
            state.email = action.payload.email; // debo de enviar algo en el payload llamado email 
            state.fullName = action.payload.fullName; 
            state.token = action.payload.token; 
        }, 
        unsetUser: (state) => { 
            state.email = '';
            state.fullName = '';
            state.token = '';
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions; // esto es oligatorio

export default userSlice.reducer; // esto es para exportar el reducer global del userSlice 
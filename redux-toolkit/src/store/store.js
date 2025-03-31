// en el store vamos a tener todo el contexto global de la aplicación, por lo que vamos a importar los reducers que hemos creado y los vamos a combinar en un solo objeto que va a ser el que se va a encargar de manejar el estado global de la aplicación.

import { configureStore } from "@reduxjs/toolkit";

// Reducer 

import userReducer from "../reducers/user/userSlice";
import cartReducer from "../reducers/cart/cartSlice";

export default configureStore({
    reducer: {
        user: userReducer, 
        cart: cartReducer,
    }                      
})
import { useState } from "react";
import { counterContext } from "./counterContext"

// este compornente es para probeer el estado a los demas componentes
export const StateCompo = ( { children } ) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( c => c + 1);
    }
    
    const decrement = () => {
        setCounter( c => c - 1);
    }

    const reset = () => {
        setCounter(0);
    }
  return (
    <counterContext.Provider
        value={{
            counter,
            increment,
            decrement,
            reset
        }}
    > {/* Aqui se provee el estado a los demas componentes */} 

        {children}

    </counterContext.Provider>
  )
}


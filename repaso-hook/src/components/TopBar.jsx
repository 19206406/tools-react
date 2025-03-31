import { useContext } from "react"
import { counterContext } from "../context/counterContext";

export const TopBar = () => {

    const { reset } = useContext(counterContext); 

  return (
    <>
        <h1>TopBar</h1>
        <button
            onClick={ () => reset()}
        >
            Resetear
        </button>
    </>
  )
}


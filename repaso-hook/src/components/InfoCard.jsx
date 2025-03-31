import { useContext } from "react"
import { counterContext } from "../context/counterContext";

export const InfoCard = () => {

    const { counter } = useContext(counterContext); 

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  ) 
}


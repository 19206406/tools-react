import { useContext } from 'react'
import { counterContext } from '../context/counterContext'

export const Header = () => {

    
    // utilizar el contexto 
    const { counter, increment } = useContext(counterContext); // se llamo el archivo counterContext.js de javaScript 


  return (
    <div>
      <div>
        Header 

        <h4>{counter}</h4>
        <button
            onClick={ () => increment()}>
            incrementar 
        </button>
      </div>
    </div>
  )
}

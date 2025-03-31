
import { useState, useMemo } from "react";

const findLargestPrime = (n) => {
  console.log('Calculando número primo...'); 
  for (let i = n - 1; i > 1; i--){
    if (isPrime(i)) return i; 
  }
  return null; 
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; 
  }
  return num > 1; 
}

export const App = () => {

  const [num, setNum] = useState(50); 
  const [count, setCount] = useState(0); 

  const largestPrime = useMemo(() => findLargestPrime(num), [num]); 

  return(
    <>

      <div>
        <h2>Número primo más grande menor que {num}: {largestPrime}</h2>
        <button onClick={() => setNum(num + 1)}>Incrementar número</button>
        <button onClick={() => setCount(count + 1)}>Incrementar contador ({count})</button>
      </div>
    
    </>
  ); 

}

import { useState } from 'react'
import './App.css'
import { StateCompo } from './context/stateCompo'
import { Header } from './components/Header'
import { InfoCard } from './components/InfoCard'
import { TopBar } from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StateCompo> {/**Con esto envolvemos ese contexto en general para que todos los componentes lo puedan utilizar  */}
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Header /> 

      <InfoCard />

      <TopBar />
    </>
    </StateCompo>
  )
}

export default App

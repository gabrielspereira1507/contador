import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Contador de Cliques</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Você clicou  {count} vezes
          </button>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

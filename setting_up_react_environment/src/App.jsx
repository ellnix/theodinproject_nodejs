import { useState } from 'react'
import './App.css'
import { Greeting, Food } from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <Food food="apple pie" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

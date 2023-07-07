import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return{
    
  }

  return (
    <>
      <h1>FSA Contact List Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
       Project Collaboration: Marsha King & Glen Factor
      </p>
    </>
  )
}

export default App

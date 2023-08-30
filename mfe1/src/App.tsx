import React, { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        I'm Fist Microfrontend
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <nav className="horizontal-nav">
        <Link to="a">Page A</Link>
        <Link to="b">Page B</Link>
      </nav>
      
      <Routes>
        <Route index path="a" element={<div className='card'>I'm page A</div>} />
        <Route path="b" element={<div className='card'>I'm page B</div>} />
      </Routes>
    </>
  )
}

export default App

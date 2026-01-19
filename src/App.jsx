import { useState } from 'react'
import Navbar from './navBar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Welcome to Your Workout App</h1>
        <div className="card">
        </div>
      </div>
    </>
  )
}

export default App

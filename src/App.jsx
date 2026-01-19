import Navbar from './components/navBar/Navbar'
import './App.css'
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/"/>
        <Route path="/workouts"/>
        <Route path="/about"/>
        <Route path="/profile"/>
      </Routes>
      </div>
  )
}

export default App

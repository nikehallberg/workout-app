import Navbar from './components/navBar/Navbar'
import Workouts from './components/workouts/Workouts'
import About from './components/about/About'
import Profile from './components/profile/Profile'
import Home from './components/home/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/workouts" element={<Workouts />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

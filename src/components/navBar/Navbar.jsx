import "./Navbar.css"
import logo1 from "../../assets/workoutapplogo.png"
// import logo2 from "./assets/workoutapplogo2.png"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showWorkoutNav, setShowWorkoutNav] = useState(false)
  const dropdownRef = useRef(null)

  const toggleWorkoutNav = () => {
    setShowWorkoutNav(!showWorkoutNav)
  }
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWorkoutNav(false);
      }
    }
    if (showWorkoutNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showWorkoutNav]);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo1} alt="Workout App Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
            Home
            </Link>
          </li>
          <li className="navbar-item" ref={dropdownRef}>
            <Link 
              to="/workouts" 
              className="navbar-link" 
              onClick={toggleWorkoutNav}
            >
            Workouts
            </Link>
            {showWorkoutNav && (
              <ul className="workout-nav">
                <li>Workouts</li>
                <li>Build your workout</li>
                <li>Specific needs</li>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
            About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">
            Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

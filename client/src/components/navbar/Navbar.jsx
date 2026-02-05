import "./Navbar.css"
import logo1 from "../../assets/workoutapplogo.png"
// import logo2 from "./assets/workoutapplogo2.png"
import { Link, NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showWorkoutNav, setShowWorkoutNav] = useState(false)
  const [showNutritionNav, setShowNutritionNav] = useState(false)
  const [showHomeNav, setShowHomeNav] = useState(false)
  const dropdownRef = useRef(null)
  const nutritionDropdownRef = useRef(null)
  const homeDropdownRef = useRef(null)

  // click dropdown
  // const toggleWorkoutNav = () => {
  //   setShowWorkoutNav(!showWorkoutNav)
  // }

  // hover dropdown
  const handleMouseEnter = () => {
    setShowWorkoutNav(true)
  }

  const handleMouseLeave = () => {
    setShowWorkoutNav(false)
  }

  const handleDropdownClick = () => {
    setShowWorkoutNav(false);
  };

  // Nutrition dropdown handlers
  const handleNutritionMouseEnter = () => {
    setShowNutritionNav(true)
  }

  const handleNutritionMouseLeave = () => {
    setShowNutritionNav(false)
  }

  const handleNutritionDropdownClick = () => {
    setShowNutritionNav(false);
  };

  // Home dropdown handlers
  const handleHomeMouseEnter = () => {
    setShowHomeNav(true)
  }

  const handleHomeMouseLeave = () => {
    setShowHomeNav(false)
  }

  const handleHomeDropdownClick = () => {
    setShowHomeNav(false);
  };

  // click dropdown extra logic
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowWorkoutNav(false);
  //     }
  //   }
  //   if (showWorkoutNav) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [showWorkoutNav]);

  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
          <img src={logo1} alt="Workout App Logo" className="logo" />
        </Link>
        </div>
        <button>
          Login
        </button>
        <button>
          Register
        </button>
        <ul className="navbar-menu">
          <li className="navbar-item" ref={homeDropdownRef} onMouseEnter={handleHomeMouseEnter} onMouseLeave={handleHomeMouseLeave}>
            <Link to="/" className="navbar-link">
            Home
            </Link>
            {showHomeNav && (
              <ul className="workout-nav">
                <li>
                  <Link to="/about" className="dropdown-link" onClick={handleHomeDropdownClick}>
                    About
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link 
              to="/workouts" 
              className="navbar-link"
              // onClick={toggleWorkoutNav} 
            >
            Workouts
            </Link>
            {showWorkoutNav && (
              <ul className="workout-nav">
                <li>
                  <Link to="/workouts" className="dropdown-link" onClick={handleDropdownClick}>
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link to="/build-workout" className="dropdown-link" onClick={handleDropdownClick}>
                    Build your workout
                  </Link>
                </li>
                <li>
                  <Link to="/specific-needs" className="dropdown-link" onClick={handleDropdownClick}>
                    Specific needs
                  </Link>
                </li>
                <li>
                  <Link to="/strength-training" className="dropdown-link" onClick={handleDropdownClick}>
                    Strength Training
                  </Link>
                </li>
                <li>
                  <Link to="/cardio-workouts" className="dropdown-link" onClick={handleDropdownClick}>
                    Cardio Workouts
                  </Link>
                </li>
                <li>
                  <Link to="/yoga-flexibility" className="dropdown-link" onClick={handleDropdownClick}>
                    Yoga & Flexibility
                  </Link>
                </li>
                <li>
                  <Link to="/workout-plans" className="dropdown-link" onClick={handleDropdownClick}>
                    Workout Plans
                  </Link>
                </li>
                <li>
                  <Link to="/exercise-library" className="dropdown-link" onClick={handleDropdownClick}>
                    Exercise Library
                  </Link>
                </li>
                <li>
                  <Link to="/progress-tracker" className="dropdown-link" onClick={handleDropdownClick}>
                    Progress Tracker
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item" ref={nutritionDropdownRef} onMouseEnter={handleNutritionMouseEnter} onMouseLeave={handleNutritionMouseLeave}>
            <Link to="/nutrition" className="navbar-link">
            Nutrition
            </Link>
            {showNutritionNav && (
              <ul className="workout-nav">
                <li>
                  <Link to="/nutrition" className="dropdown-link" onClick={handleNutritionDropdownClick}>
                    Nutrition Overview
                  </Link>
                </li>
                <li>
                  <Link to="/meal-plans" className="dropdown-link" onClick={handleNutritionDropdownClick}>
                    Meal Plans
                  </Link>
                </li>
                <li>
                  <Link to="/calorie-tracker" className="dropdown-link" onClick={handleNutritionDropdownClick}>
                    Calorie Tracker
                  </Link>
                </li>
                <li>
                  <Link to="/nutrition-tips" className="dropdown-link" onClick={handleNutritionDropdownClick}>
                    Nutrition Tips
                  </Link>
                </li>
              </ul>
            )}
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

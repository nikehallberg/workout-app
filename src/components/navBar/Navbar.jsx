import "./Navbar.css"
import logo1 from "../../assets/workoutapplogo.png"
// import logo2 from "./assets/workoutapplogo2.png"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo1} alt="Workout App Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
            Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/workouts" className="navbar-link">
            Workouts
            </Link>
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
        <ul className="workout-nav">
          <li>
            Workouts
          </li>
          <li>
            Build your workout
          </li>
          <li>
            Specific needs
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

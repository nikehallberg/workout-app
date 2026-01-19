import "./Navbar.css"
import logo1 from "../assets/workoutapplogo.png"
import logo2 from "../assets/workoutapplogo2.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo1} alt="Workout App Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#workouts" className="navbar-link">Workouts</a>
          </li>
          <li className="navbar-item">
            <a href="#progress" className="navbar-link">Progress</a>
          </li>
          <li className="navbar-item">
            <a href="#profile" className="navbar-link">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

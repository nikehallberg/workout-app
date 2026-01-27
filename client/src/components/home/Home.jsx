import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FitTracker</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      
      <section className="features">
        <h2>Transform Your Fitness Journey</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div className="feature-grid">
          <div className="feature">
            <h3>Track Workouts</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
          <div className="feature">
            <h3>Monitor Nutrition</h3>
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
          </div>
          <div className="feature">
            <h3>Achieve Goals</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

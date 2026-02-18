import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FitTracker</h1>
      <p>Your comprehensive fitness companion designed to help you achieve your health and wellness goals. Track workouts, monitor nutrition, and transform your lifestyle with personalized guidance and motivation.</p>
      
      <section className="features">
        <h2>Transform Your Fitness Journey</h2>
        <p>Everything you need to build healthy habits, stay motivated, and reach your goals. From beginner-friendly workouts to advanced training programs, we support every step of your transformation.</p>
        
        <div className="feature-grid">
          <div className="feature">
            <h3>Track Workouts</h3>
            <p>Log exercises, sets, reps, and weights to monitor your progress and stay motivated with detailed workout history and performance analytics.</p>
          </div>
          <div className="feature">
            <h3>Monitor Nutrition</h3>
            <p>Track calories, macronutrients, and meals with comprehensive food database and personalized meal plans for your specific goals.</p>
          </div>
          <div className="feature">
            <h3>Achieve Goals</h3>
            <p>Set personalized fitness targets, track milestones, and celebrate achievements with coaching guidance and community support.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

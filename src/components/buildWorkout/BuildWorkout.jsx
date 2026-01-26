import "./BuildWorkout.css"

const BuildWorkout = () => {
  return (
    <div className="build-workout-container">
      <svg width="200" height="400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="25" fill="#fdbcb4" stroke="#000" strokeWidth="2"/>
        <rect x="75" y="75" width="50" height="80" fill="#4CAF50" stroke="#000" strokeWidth="2"/>
        <rect x="45" y="85" width="15" height="60" fill="#fdbcb4" stroke="#000" strokeWidth="2"/>
        <rect x="140" y="85" width="15" height="60" fill="#fdbcb4" stroke="#000" strokeWidth="2"/>
        <rect x="85" y="155" width="15" height="80" fill="#2196F3" stroke="#000" strokeWidth="2"/>
        <rect x="105" y="155" width="15" height="80" fill="#2196F3" stroke="#000" strokeWidth="2"/>
        <circle cx="52" cy="155" r="8" fill="#fdbcb4" stroke="#000" strokeWidth="2"/>
        <circle cx="148" cy="155" r="8" fill="#fdbcb4" stroke="#000" strokeWidth="2"/>
        <ellipse cx="92" cy="245" rx="12" ry="8" fill="#000"/>
        <ellipse cx="112" cy="245" rx="12" ry="8" fill="#000"/>
        <circle cx="92" cy="45" r="2" fill="#000"/> 
        <circle cx="108" cy="45" r="2" fill="#000"/> 
        <ellipse cx="100" cy="55" rx="3" ry="2" fill="#000"/> 
      </svg>
      
      {/* <h1>Build Your Workout</h1>
      <p>Create a custom workout tailored to your specific goals and preferences.</p>
      
      <section className="workout-builder">
        <h2>Workout Builder</h2>
        
        <div className="builder-section">
          <h3>Select Your Goals</h3>
          <p>Choose what you want to achieve with your workout routine.</p>
          <div className="goal-options">
            <button className="goal-btn">Weight Loss</button>
            <button className="goal-btn">Muscle Gain</button>
            <button className="goal-btn">Endurance</button>
            <button className="goal-btn">Strength</button>
            <button className="goal-btn">Flexibility</button>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Workout Duration</h3>
          <p>How long do you want your workout to be?</p>
          <div className="duration-options">
            <button className="duration-btn">15 minutes</button>
            <button className="duration-btn">30 minutes</button>
            <button className="duration-btn">45 minutes</button>
            <button className="duration-btn">60 minutes</button>
            <button className="duration-btn">90+ minutes</button>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Equipment Available</h3>
          <p>Select the equipment you have access to.</p>
          <div className="equipment-options">
            <label className="equipment-item">
              <input type="checkbox" />
              <span>No Equipment (Bodyweight)</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Dumbbells</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Resistance Bands</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Full Gym Access</span>
            </label>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Experience Level</h3>
          <p>What's your current fitness level?</p>
          <div className="level-options">
            <button className="level-btn">Beginner</button>
            <button className="level-btn">Intermediate</button>
            <button className="level-btn">Advanced</button>
          </div>
        </div>
        
        <div className="generate-section">
          <button className="generate-workout-btn">Generate My Workout</button>
        </div>
      </section>
      
      <section className="workout-preview">
        <h2>Your Custom Workout</h2>
        <p>Your personalized workout will appear here once you've made your selections above.</p>
        <div className="workout-placeholder">
          <p>Select your preferences to generate a custom workout plan.</p>
        </div>
      </section> */}
    </div>
  )
}

export default BuildWorkout
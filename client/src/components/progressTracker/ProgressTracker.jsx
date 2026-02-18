
const ProgressTracker = () => {
  return (
    <div className="progress-tracker-container">
      <h1>Progress Tracker</h1>
      <p>Track your fitness journey with comprehensive monitoring tools. Monitor your improvements across multiple metrics including weight loss, strength gains, and endurance milestones to stay motivated and achieve your goals.</p>
      
      <section className="tracking-metrics">
        <h2>Tracking Metrics</h2>
        
        <div className="category">
          <h3>Weight & Body Composition</h3>
          <p>Monitor your weight changes, body fat percentage, muscle mass, and BMI over time. Track measurements like waist, chest, arms, and thighs to get a complete picture of your body transformation progress.</p>
        </div>
        
        <div className="category">
          <h3>Strength Gains</h3>
          <p>Record your personal records in key lifts like bench press, squat, deadlift, and overhead press. Track your one-rep max improvements and monitor how your working weights increase over time across all exercises.</p>
        </div>
        
        <div className="category">
          <h3>Endurance Improvements</h3>
          <p>Track your cardiovascular progress through running times, cycling distances, swimming laps, and heart rate recovery. Monitor improvements in stamina, VO2 max, and overall aerobic capacity.</p>
        </div>
      </section>
      
      <section className="progress-visualization">
        <h2>Progress Visualization</h2>
        
        <div className="category">
          <h3>Charts & Graphs</h3>
          <p>Visualize your progress with interactive charts showing weight trends, strength progression curves, and performance analytics. Easy-to-read graphs help you identify patterns and celebrate your achievements over time.</p>
        </div>
        
        <div className="category">
          <h3>Photo Progress</h3>
          <p>Document your transformation with progress photos. Take front, side, and back photos at regular intervals to visually track muscle development, fat loss, and overall physique changes that numbers alone can't capture.</p>
        </div>
      </section>
      
      <section className="goal-setting">
        <h2>Goal Setting & Achievements</h2>
        <p>Set SMART fitness goals and track your journey towards achieving them. Whether it's losing 20 pounds, running a 5K, or bench pressing your body weight, break down big goals into manageable milestones and celebrate each victory.</p>
        
        <p>Unlock achievement badges as you hit new personal records and consistency milestones. Share your accomplishments with friends and stay motivated by seeing how far you've come since starting your fitness journey.</p>
      </section>
    </div>
  )
}

export default ProgressTracker
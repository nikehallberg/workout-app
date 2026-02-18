
const Workouts = () => {
  return (
    <div className="workouts-container">
      <h1>Your Workouts</h1>
      <p>Access your personal workout history, track your progress, and plan upcoming training sessions. Everything you need to stay consistent and motivated on your fitness journey.</p>
      
      <section className="workout-categories">
        <h2>Workout Categories</h2>
        
        <div className="category">
          <h3>Strength Training</h3>
          <p>Build muscle and increase power with resistance exercises including free weights, machines, and bodyweight movements. Track your lifts, sets, and progressive overload for optimal strength development.</p>
        </div>
        
        <div className="category">
          <h3>Cardio</h3>
          <p>Improve cardiovascular health and endurance through running, cycling, swimming, and HIIT workouts. Monitor your heart rate, distance, and calories burned to optimize your cardio training.</p>
        </div>
        
        <div className="category">
          <h3>Flexibility & Stretching</h3>
          <p>Maintain mobility and prevent injury with dedicated stretching routines and yoga flows. Essential for recovery and maintaining range of motion across all your training activities.</p>
        </div>
      </section>
      
      <section className="recent-workouts">
        <h2>Recent Workouts</h2>
        <p>Review your last training sessions, check completed exercises, and analyze your performance trends. Use this data to adjust your program and celebrate your consistency and progress.</p>
      </section>
    </div>
  )
}

export default Workouts
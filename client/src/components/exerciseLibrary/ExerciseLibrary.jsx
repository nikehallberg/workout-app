
const ExerciseLibrary = () => {
  return (
    <div className="exercise-library-container">
      <h1>Exercise Library</h1>
      <p>Explore our comprehensive database of exercises with detailed instructions, form cues, and video demonstrations. Find the perfect movements for every muscle group and skill level.</p>
      
      <section className="exercise-categories">
        <h2>Exercise Categories</h2>
        
        <div className="category">
          <h3>Upper Body</h3>
          <p>Strengthen your chest, shoulders, arms, and back with exercises ranging from push-ups and pull-ups to bench press and rows. Build functional upper body strength for daily activities and athletic performance.</p>
        </div>
        
        <div className="category">
          <h3>Lower Body</h3>
          <p>Develop powerful legs and glutes with squats, lunges, deadlifts, and plyometric movements. Essential exercises for building a strong foundation and improving athletic performance across all activities.</p>
        </div>
        
        <div className="category">
          <h3>Core & Abs</h3>
          <p>Build a strong, stable core with planks, crunches, and rotational movements. Core strength improves posture, reduces back pain, and enhances performance in all other exercises and daily activities.</p>
        </div>
        
        <div className="category">
          <h3>Full Body</h3>
          <p>Efficient compound movements that work multiple muscle groups simultaneously. Perfect for time-effective workouts and building functional strength that transfers to real-world movements and activities.</p>
        </div>
      </section>
      
      <section className="exercise-equipment">
        <h2>Equipment-Based Exercises</h2>
        
        <div className="category">
          <h3>Dumbbell Exercises</h3>
          <p>Versatile dumbbell movements for strength, muscle building, and functional fitness. Perfect for home gyms or adding variety to your routine with unilateral training and stabilization challenges.</p>
        </div>
        
        <div className="category">
          <h3>Barbell Exercises</h3>
          <p>Master the big lifts including squats, deadlifts, bench press, and rows. Barbell exercises allow for heavy loading and are essential for building maximal strength and muscle mass.</p>
        </div>
        
        <div className="category">
          <h3>Bodyweight Exercises</h3>
          <p>Effective exercises requiring no equipment that can be done anywhere. Build strength, endurance, and mobility using your own body weight as resistance for convenient, effective workouts.</p>
        </div>
      </section>
      
      <section className="exercise-search">
        <h2>Search & Filter</h2>
        <p>Quickly find exercises by muscle group, equipment type, difficulty level, or movement pattern. Advanced filtering options help you discover new exercises and build custom workout routines tailored to your needs.</p>
      </section>
    </div>
  )
}

export default ExerciseLibrary
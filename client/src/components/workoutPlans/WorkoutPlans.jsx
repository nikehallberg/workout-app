
const WorkoutPlans = () => {
  return (
    <div className="workout-plans-container">
      <h1>Workout Plans</h1>
      <p>Discover expertly designed workout plans tailored to your fitness level and goals. Whether you're just starting out or looking to break through plateaus, find the perfect structured program to guide your training.</p>
      
      <section className="plan-categories">
        <h2>Workout Plan Categories</h2>
        
        <div className="category">
          <h3>Beginner Plans</h3>
          <p>Start your fitness journey with foundational workouts focusing on proper form and movement patterns. These plans gradually build strength and endurance while establishing healthy exercise habits that will serve you for life.</p>
        </div>
        
        <div className="category">
          <h3>Intermediate Plans</h3>
          <p>Challenge yourself with progressive overload and more complex movement patterns. These plans introduce supersets, compound lifts, and varied training techniques to continue building strength and muscle definition.</p>
        </div>
        
        <div className="category">
          <h3>Advanced Plans</h3>
          <p>Push your limits with high-intensity programs featuring periodization, advanced techniques, and specialized training protocols. Perfect for experienced athletes looking to maximize performance and achieve elite fitness levels.</p>
        </div>
      </section>
      
      <section className="plan-duration">
        <h2>Plan Duration Options</h2>
        
        <div className="category">
          <h3>4-Week Plans</h3>
          <p>Quick transformation programs perfect for jumpstarting new habits or preparing for special events. These intensive plans deliver noticeable results in just one month with focused, high-impact workouts.</p>
        </div>
        
        <div className="category">
          <h3>8-Week Plans</h3>
          <p>The sweet spot for meaningful transformation. These programs provide enough time to build significant strength gains, establish new movement patterns, and create lasting changes in body composition and fitness levels.</p>
        </div>
        
        <div className="category">
          <h3>12-Week Plans</h3>
          <p>Comprehensive transformation programs that systematically build fitness through multiple phases. These long-term plans allow for substantial muscle growth, strength development, and complete lifestyle changes.</p>
        </div>
      </section>
      
      <section className="customization">
        <h2>Plan Customization</h2>
        <p>Tailor any workout plan to fit your schedule, equipment availability, and personal preferences. Swap exercises, adjust intensity levels, and modify rest periods to create a program that works perfectly for your lifestyle and goals.</p>
      </section>
    </div>
  )
}

export default WorkoutPlans
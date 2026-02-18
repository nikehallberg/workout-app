
import "./StrengthTraining.css"

const StrengthTraining = () => {
  return (
    <div className="strength-training-container">
      <h1>Strength Training</h1>
      <p>Build muscle, increase bone density, and boost metabolism with our comprehensive strength training programs. From free weights to machines to bodyweight exercises, discover the best methods to get stronger and more powerful.</p>
      
      <section className="training-types">
        <h2>Types of Strength Training</h2>
        
        <div className="category">
          <h3>Free Weights</h3>
          <p>Master the fundamentals with dumbbells, barbells, and kettlebells. Free weight training engages stabilizing muscles, improves functional strength, and allows for natural movement patterns that translate to real-world activities.</p>
        </div>
        
        <div className="category">
          <h3>Machine Training</h3>
          <p>Perfect for beginners and isolation work, machines provide controlled movement patterns and built-in safety features. Ideal for targeting specific muscle groups and achieving consistent form while building confidence in the gym.</p>
        </div>
        
        <div className="category">
          <h3>Bodyweight Exercises</h3>
          <p>Train anywhere, anytime with no equipment required. Bodyweight exercises like push-ups, pull-ups, squats, and planks build functional strength while improving mobility, balance, and coordination throughout your daily life.</p>
        </div>
      </section>
      
      <section className="workout-programs">
        <h2>Strength Training Programs</h2>
        <p>Follow proven programming methods like 5x5, pyramid sets, and periodization to maximize your strength gains. Our structured programs ensure progressive overload while allowing adequate recovery time for optimal muscle development.</p>
        
        <p>Whether your goal is powerlifting, bodybuilding, or general fitness, we have specialized strength programs designed to help you reach new personal records safely and efficiently through systematic progression.</p>
      </section>
    </div>
  )
}

export default StrengthTraining
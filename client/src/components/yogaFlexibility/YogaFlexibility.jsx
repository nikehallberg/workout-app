
import "./YogaFlexibility.css"

const YogaFlexibility = () => {
  return (
    <div className="yoga-flexibility-container">
      <h1>Yoga & Flexibility</h1>
      <p>Enhance your mobility, reduce stress, and improve overall well-being with our comprehensive yoga and flexibility programs. Perfect for all levels, from gentle beginner flows to advanced poses and deep stretching routines.</p>
      
      <section className="yoga-styles">
        <h2>Yoga Styles</h2>
        
        <div className="category">
          <h3>Hatha Yoga</h3>
          <p>Focus on foundational poses with longer holds to build strength, balance, and alignment. Perfect for beginners, Hatha yoga emphasizes proper form and breathing techniques while developing body awareness and mindfulness.</p>
        </div>
        
        <div className="category">
          <h3>Vinyasa Flow</h3>
          <p>Experience dynamic, flowing sequences that synchronize movement with breath. Vinyasa builds cardiovascular endurance while improving flexibility and strength through smooth transitions between poses.</p>
        </div>
        
        <div className="category">
          <h3>Restorative Yoga</h3>
          <p>Deeply relaxing practice using props to support passive poses held for extended periods. Ideal for stress relief, recovery, and promoting better sleep while gently opening tight muscles and joints.</p>
        </div>
      </section>
      
      <section className="flexibility-training">
        <h2>Flexibility Training</h2>
        <p>Dedicated stretching routines to improve range of motion, prevent injury, and enhance athletic performance. Essential for maintaining mobility and counteracting the effects of sitting and exercise-induced tightness.</p>
        
        <div className="category">
          <h3>Static Stretching</h3>
          <p>Hold stretches for 15-60 seconds to gradually lengthen muscles and improve flexibility. Best performed after workouts when muscles are warm, static stretching helps reduce tension and improve recovery.</p>
        </div>
        
        <div className="category">
          <h3>Dynamic Stretching</h3>
          <p>Active movements that take joints through their full range of motion. Perfect for warm-ups, dynamic stretching prepares muscles for exercise while improving mobility and movement patterns.</p>
        </div>
      </section>
      
      <section className="mindfulness">
        <h2>Mindfulness & Meditation</h2>
        <p>Cultivate mental clarity and emotional balance through guided meditation and mindfulness practices. Learn breathing techniques, body awareness, and stress management tools that complement your physical training.</p>
      </section>
    </div>
  )
}

export default YogaFlexibility
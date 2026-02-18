import './NutritionTips.css'

const NutritionTips = () => {
  return (
    <div className="nutrition-tips-container">
      <h1>Nutrition Tips</h1>
      <p>Fuel your fitness goals with expert nutrition guidance. Learn evidence-based strategies for optimal performance, recovery, and body composition changes that complement your training program.</p>
      
      <section className="daily-tips">
        <h2>Daily Nutrition Tips</h2>
        
        <div className="tip">
          <h3>Stay Hydrated</h3>
          <p>Drink half your body weight in ounces of water daily, plus extra during workouts. Proper hydration improves performance, aids recovery, supports metabolism, and helps regulate appetite throughout the day.</p>
        </div>
        
        <div className="tip">
          <h3>Eat the Rainbow</h3>
          <p>Include colorful fruits and vegetables in every meal to ensure a wide variety of vitamins, minerals, and antioxidants. Different colors provide different nutrients that support immune function, reduce inflammation, and optimize recovery.</p>
        </div>
        
        <div className="tip">
          <h3>Portion Control</h3>
          <p>Use the plate method: fill half your plate with vegetables, one quarter with lean protein, and one quarter with whole grains. This simple visual guide helps maintain appropriate portion sizes for sustainable weight management.</p>
        </div>
      </section>
      
      <section className="meal-timing">
        <h2>Meal Timing Strategies</h2>
        <p>Time your nutrition around your workouts for optimal performance and recovery. Eat a balanced meal 2-3 hours before training, or a light snack 30-60 minutes prior. Post-workout, consume protein and carbs within 30 minutes for best results.</p>
        
        <p>Consider intermittent fasting or meal frequency strategies that fit your lifestyle and goals. Whether you prefer three large meals or six smaller ones, consistency and total daily nutrition matter more than specific timing for most fitness goals.</p>
      </section>
    </div>
  )
}

export default NutritionTips
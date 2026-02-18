import './MealPlans.css'

const MealPlans = () => {
  return (
    <div className="meal-plans-container">
      <h1>Meal Plans</h1>
      <p>Discover structured meal plans designed to support your specific fitness goals. Whether you're looking to lose weight, gain muscle, or maintain your current physique, find the perfect eating strategy for success.</p>
      
      <section className="weekly-plans">
        <h2>Weekly Meal Plans</h2>
        <p>Complete 7-day meal plans with shopping lists, prep instructions, and nutritional breakdowns. Each plan is designed by nutrition experts to align with specific fitness objectives and dietary preferences.</p>
        
        <div className="plan">
          <h3>Weight Loss Plan</h3>
          <p>Calorie-controlled meals featuring lean proteins, fiber-rich vegetables, and complex carbohydrates. Designed to create a sustainable calorie deficit while maintaining muscle mass and energy levels for your workouts.</p>
        </div>
        
        <div className="plan">
          <h3>Muscle Gain Plan</h3>
          <p>High-protein, nutrient-dense meals to support muscle growth and recovery. Includes strategic carbohydrate timing around workouts and adequate calories to fuel intense training sessions and muscle development.</p>
        </div>
        
        <div className="plan">
          <h3>Maintenance Plan</h3>
          <p>Balanced nutrition for sustaining your current weight and fitness level. Focuses on whole foods, optimal macro ratios, and meal variety to maintain long-term healthy eating habits and consistent energy.</p>
        </div>
      </section>
      
      <section className="meal-prep">
        <h2>Meal Prep Tips</h2>
        <p>Master the art of meal preparation to save time, money, and stay consistent with your nutrition goals. Learn efficient cooking techniques, proper food storage, and weekly prep strategies for success.</p>
        
        <p>Batch cook proteins, prepare vegetables in advance, and portion meals for the week. Use proper containers, label with dates, and rotate ingredients to maintain variety while staying organized and committed to your plan.</p>
      </section>
    </div>
  )
}

export default MealPlans
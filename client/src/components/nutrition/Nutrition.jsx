import './Nutrition.css'

const Nutrition = () => {
  return (
    <div className="nutrition-container">
      <h1>Nutrition Guide</h1>
      <p>Master the fundamentals of nutrition to fuel your workouts and optimize your results. Learn how proper nutrition supports your fitness goals and overall health through evidence-based guidance.</p>
      
      <section className="macronutrients">
        <h2>Understanding Macronutrients</h2>
        <p>Learn how proteins, carbohydrates, and fats work together to fuel your body and support your fitness goals. Proper macronutrient balance is essential for energy, recovery, and body composition changes.</p>
        
        <div className="macro">
          <h3>Proteins</h3>
          <p>Essential for muscle repair and growth. Aim for 0.8-1.2g per pound of body weight daily from sources like lean meats, fish, eggs, dairy, legumes, and protein supplements to support recovery and muscle development.</p>
        </div>
        
        <div className="macro">
          <h3>Carbohydrates</h3>
          <p>Your body's preferred energy source for workouts and brain function. Choose complex carbs like oats, rice, and sweet potatoes for sustained energy, and simple carbs around workouts for quick fuel.</p>
        </div>
        
        <div className="macro">
          <h3>Fats</h3>
          <p>Important for hormone production and vitamin absorption. Include healthy fats from nuts, avocados, olive oil, and fatty fish. Aim for 20-35% of total calories from quality fat sources.</p>
        </div>
      </section>
      
      <section className="healthy-eating">
        <h2>Healthy Eating Principles</h2>
        <p>Build sustainable eating habits that support your fitness goals and long-term health. Focus on whole foods, proper portions, and consistent meal timing to optimize your nutrition and energy levels.</p>
        
        <p>Emphasize nutrient-dense foods like vegetables, fruits, lean proteins, and whole grains. Stay hydrated, plan your meals ahead, and allow flexibility for social occasions while maintaining your overall nutrition goals.</p>
      </section>
    </div>
  )
}

export default Nutrition
import React, { useState, useEffect } from 'react'
import './CalorieTracker.css'

const CalorieTracker = () => {
  const [dailyGoal, setDailyGoal] = useState(2000)
  const [totalCalories, setTotalCalories] = useState(0)
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: []
  })
  const [showAddFood, setShowAddFood] = useState(false)
  const [currentMeal, setCurrentMeal] = useState('')
  const [newFood, setNewFood] = useState({ name: '', calories: '', quantity: 1 })

  // Calculate total calories whenever meals change
  useEffect(() => {
    const total = Object.values(meals).flat().reduce((sum, food) => sum + (food.calories * food.quantity), 0)
    setTotalCalories(total)
  }, [meals])

  const addFood = () => {
    if (newFood.name && newFood.calories && currentMeal) {
      const foodItem = {
        id: Date.now(),
        name: newFood.name,
        calories: parseInt(newFood.calories),
        quantity: parseFloat(newFood.quantity)
      }
      
      setMeals(prev => ({
        ...prev,
        [currentMeal]: [...prev[currentMeal], foodItem]
      }))
      
      setNewFood({ name: '', calories: '', quantity: 1 })
      setShowAddFood(false)
      setCurrentMeal('')
    }
  }

  const removeFood = (mealType, foodId) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: prev[mealType].filter(food => food.id !== foodId)
    }))
  }

  const openAddFood = (mealType) => {
    setCurrentMeal(mealType)
    setShowAddFood(true)
  }

  const caloriesRemaining = dailyGoal - totalCalories
  const progressPercentage = Math.min((totalCalories / dailyGoal) * 100, 100)

  const getMealCalories = (mealType) => {
    return meals[mealType].reduce((sum, food) => sum + (food.calories * food.quantity), 0)
  }

  return (
    <div className="calorie-tracker-container">
      <h1>Calorie Tracker</h1>
      <p>Track your daily calorie intake and reach your fitness goals</p>
      
      {/* Daily Summary */}
      <section className="daily-summary">
        <h2>Today's Summary</h2>
        
        <div className="calorie-overview">
          <div className="calorie-circle">
            <div className="progress-ring">
              <svg width="200" height="200">
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 85}`}
                  strokeDashoffset={`${2 * Math.PI * 85 * (1 - progressPercentage / 100)}`}
                  strokeLinecap="round"
                  className="progress-circle"
                />
              </svg>
              <div className="circle-content">
                <div className="consumed">{totalCalories}</div>
                <div className="label">calories</div>
                <div className="remaining">{caloriesRemaining} remaining</div>
              </div>
            </div>
          </div>
          
          <div className="calorie-stats">
            <div className="stat-card">
              <h3>Daily Goal</h3>
              <div className="stat-number">{dailyGoal}</div>
              <input 
                type="number" 
                value={dailyGoal} 
                onChange={(e) => setDailyGoal(parseInt(e.target.value) || 2000)}
                className="goal-input"
              />
            </div>
            <div className="stat-card">
              <h3>Consumed</h3>
              <div className="stat-number consumed-color">{totalCalories}</div>
            </div>
            <div className="stat-card">
              <h3>Remaining</h3>
              <div className="stat-number remaining-color">{caloriesRemaining}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meal Log */}
      <section className="meal-log">
        <h2>Meal Log</h2>
        
        {Object.entries(meals).map(([mealType, foods]) => (
          <div key={mealType} className="meal-section">
            <div className="meal-header">
              <h3>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
              <div className="meal-calories">{getMealCalories(mealType)} calories</div>
              <button 
                className="add-food-btn"
                onClick={() => openAddFood(mealType)}
              >
                + Add Food
              </button>
            </div>
            
            <div className="food-list">
              {foods.map(food => (
                <div key={food.id} className="food-item">
                  <div className="food-info">
                    <span className="food-name">{food.name}</span>
                    <span className="food-details">
                      {food.quantity} serving{food.quantity !== 1 ? 's' : ''} - {food.calories * food.quantity} cal
                    </span>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFood(mealType, food.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
              {foods.length === 0 && (
                <div className="no-foods">No foods logged for {mealType}</div>
              )}
            </div>
          </div>
        ))}
      </section>
      
      {/* Add Food Modal */}
      {showAddFood && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add Food to {currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)}</h3>
              <button 
                className="close-btn"
                onClick={() => setShowAddFood(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Food Name</label>
                <input
                  type="text"
                  value={newFood.name}
                  onChange={(e) => setNewFood(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Apple, Chicken breast"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Calories per serving</label>
                  <input
                    type="number"
                    value={newFood.calories}
                    onChange={(e) => setNewFood(prev => ({ ...prev, calories: e.target.value }))}
                    placeholder="100"
                  />
                </div>
                
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newFood.quantity}
                    onChange={(e) => setNewFood(prev => ({ ...prev, quantity: e.target.value }))}
                    placeholder="1"
                  />
                </div>
              </div>
              
              <div className="total-calories">
                Total: {(parseFloat(newFood.calories) || 0) * (parseFloat(newFood.quantity) || 0)} calories
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowAddFood(false)}>Cancel</button>
              <button className="add-btn" onClick={addFood}>Add Food</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Quick Stats */}
      <section className="nutrition-goals">
        <h2>Quick Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Average per meal</span>
            <span className="stat-value">{Math.round(totalCalories / 4)} cal</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Progress to goal</span>
            <span className="stat-value">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total foods logged</span>
            <span className="stat-value">{Object.values(meals).flat().length}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CalorieTracker
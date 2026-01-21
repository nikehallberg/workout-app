import Navbar from './components/navBar/Navbar'
import Workouts from './components/workouts/Workouts'
import Nutrition from './components/nutrition/Nutrition'
import MealPlans from './components/mealPlans/MealPlans'
import CalorieTracker from './components/calorieTracker/CalorieTracker'
import NutritionTips from './components/nutritionTips/NutritionTips'
import About from './components/about/About'
import Profile from './components/profile/Profile'
import Home from './components/home/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/workouts" element={<Workouts />}/>
          <Route path="/nutrition" element={<Nutrition />}/>
          <Route path="/meal-plans" element={<MealPlans />}/>
          <Route path="/calorie-tracker" element={<CalorieTracker />}/>
          <Route path="/nutrition-tips" element={<NutritionTips />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

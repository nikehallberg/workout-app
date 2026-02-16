import Navbar from './components/navbar/Navbar'
import Workouts from './components/workouts/Workouts'
import Nutrition from './components/nutrition/Nutrition'
import MealPlans from './components/mealPlans/MealPlans'
import CalorieTracker from './components/calorieTracker/CalorieTracker'
import NutritionTips from './components/nutritionTips/NutritionTips'
import About from './components/about/About'
import Profile from './components/profile/Profile'
import Home from './components/home/Home'
import StrengthTraining from './components/strengthTraining/StrengthTraining'
import CardioWorkouts from './components/cardioWorkouts/CardioWorkouts'
import YogaFlexibility from './components/yogaFlexibility/YogaFlexibility'
import WorkoutPlans from './components/workoutPlans/WorkoutPlans'
import ExerciseLibrary from './components/exerciseLibrary/ExerciseLibrary'
import ProgressTracker from './components/progressTracker/ProgressTracker'
import BuildWorkout from './components/buildWorkout/BuildWorkout'
import SpecificNeeds from './components/specificNeeds/SpecificNeeds'
import './App.css'
import './components/sharedLogic/shared.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/workouts" element={<Workouts />}/>
            <Route path="/nutrition" element={<Nutrition />}/>
            <Route path="/meal-plans" element={<MealPlans />}/>
            <Route path="/calorie-tracker" element={<CalorieTracker />}/>
            <Route path="/nutrition-tips" element={<NutritionTips />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/strength-training" element={<StrengthTraining />}/>
            <Route path="/cardio-workouts" element={<CardioWorkouts />}/>
            <Route path="/specific-needs" element={<SpecificNeeds />}/>
            <Route path="/yoga-flexibility" element={<YogaFlexibility />}/>
            <Route path="/workout-plans" element={<WorkoutPlans />}/>
            <Route path="/exercise-library" element={<ExerciseLibrary />}/>
            <Route path="/progress-tracker" element={<ProgressTracker />}/>
            <Route path="/build-workout" element={<BuildWorkout />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

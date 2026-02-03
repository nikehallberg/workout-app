import React, { useState } from 'react';
import './BuildWorkout.css';

const BuildWorkout = () => {
  const [selectedMuscles, setSelectedMuscles] = useState(new Set());

  const muscleGroups = {
    // Upper Body
    chest: { name: 'Chest (Pectoralis)', color: '#FF6B6B' },
    anteriorDelts: { name: 'Front Delts', color: '#4ECDC4' },
    lateralDelts: { name: 'Side Delts', color: '#45B7D1' },
    posteriorDelts: { name: 'Rear Delts', color: '#3498DB' },
    biceps: { name: 'Biceps', color: '#9B59B6' },
    triceps: { name: 'Triceps', color: '#96CEB4' },
    forearms: { name: 'Forearms', color: '#FFEAA7' },
    lats: { name: 'Latissimus Dorsi', color: '#DDA0DD' },
    rhomboids: { name: 'Rhomboids', color: '#BB8FCE' },
    traps: { name: 'Trapezius', color: '#98D8C8' },
    lowerBack: { name: 'Lower Back', color: '#F39C12' },
    
    // Core
    upperAbs: { name: 'Upper Abs', color: '#F7DC6F' },
    lowerAbs: { name: 'Lower Abs', color: '#E67E22' },
    obliques: { name: 'Obliques', color: '#E74C3C' },
    
    // Lower Body
    quadriceps: { name: 'Quadriceps', color: '#85C1E9' },
    hamstrings: { name: 'Hamstrings', color: '#F8C471' },
    glutes: { name: 'Glutes', color: '#82E0AA' },
    calves: { name: 'Calves', color: '#F1948A' },
    shins: { name: 'Tibialis Anterior', color: '#AED6F1' }
  };

  const toggleMuscle = (muscleId) => {
    const newSelected = new Set(selectedMuscles);
    if (newSelected.has(muscleId)) {
      newSelected.delete(muscleId);
    } else {
      newSelected.add(muscleId);
    }
    setSelectedMuscles(newSelected);
  };

  const clearSelection = () => {
    setSelectedMuscles(new Set());
  };

  const getMuscleStyle = (muscleId) => ({
    fill: selectedMuscles.has(muscleId) ? muscleGroups[muscleId].color : '#E8E8E8',
    stroke: selectedMuscles.has(muscleId) ? '#333' : '#CCC',
    strokeWidth: selectedMuscles.has(muscleId) ? 3 : 1,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  return (
    <div className="build-workout">
      <div className="workout-header">
        <h1>Build Your Workout</h1>
        <p>Click on muscle groups to select them for your workout</p>
        <button onClick={clearSelection} className="clear-btn">
          Clear Selection
        </button>
      </div>

      <div className="body-selector-container">
        {/* Front View */}
        <div className="body-view">
          <h3>Front View</h3>
          <svg width="220" height="450" viewBox="0 0 220 450" className="body-svg">
            {/* Define gradients for muscle depth */}
            <defs>
              <radialGradient id="muscleGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.7"/>
              </radialGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4D2A7" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#FDB462" stopOpacity="1"/>
                <stop offset="100%" stopColor="#E6A87A" stopOpacity="0.9"/>
              </linearGradient>
            </defs>
            {/* Head with realistic shaping */}
            <ellipse cx="110" cy="35" rx="28" ry="30" fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1.5"/>
            <circle cx="105" cy="32" r="2" fill="#333"/>
            <circle cx="115" cy="32" r="2" fill="#333"/>
            <path d="M 105 42 Q 110 45 115 42" stroke="#333" strokeWidth="1" fill="none"/>
            
            {/* Neck with anatomical curve */}
            <path d="M 98 60 Q 110 58 122 60 Q 120 75 118 78 Q 110 80 102 78 Q 100 75 98 60 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
            
            {/* Clavicle bones */}
            <path d="M 85 78 Q 110 75 135 78" stroke="#D2B48C" strokeWidth="2" fill="none"/>
            
            {/* Anterior Deltoids - more anatomical shape */}
            <path d="M 70 80 Q 75 75 82 78 Q 85 88 80 95 Q 75 98 68 95 Q 65 88 70 80 Z" 
              style={getMuscleStyle('anteriorDelts')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('anteriorDelts')}/>
            <path d="M 150 80 Q 145 75 138 78 Q 135 88 140 95 Q 145 98 152 95 Q 155 88 150 80 Z" 
              style={getMuscleStyle('anteriorDelts')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('anteriorDelts')}/>
            
            {/* Lateral Deltoids */}
            <path d="M 55 88 Q 50 95 52 105 Q 58 108 65 105 Q 68 95 65 88 Q 60 85 55 88 Z" 
              style={getMuscleStyle('lateralDelts')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('lateralDelts')}/>
            <path d="M 165 88 Q 170 95 168 105 Q 162 108 155 105 Q 152 95 155 88 Q 160 85 165 88 Z" 
              style={getMuscleStyle('lateralDelts')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('lateralDelts')}/>
            
            {/* Pectoralis Major - anatomically correct fan shape */}
            <path d="M 85 85 Q 95 82 110 85 Q 125 82 135 85 Q 138 95 135 110 Q 125 118 110 120 Q 95 118 85 110 Q 82 95 85 85 Z" 
              style={getMuscleStyle('chest')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('chest')}/>
            
            {/* Rib cage outline */}
            <path d="M 90 120 Q 110 115 130 120 Q 135 140 130 160 Q 110 165 90 160 Q 85 140 90 120 Z" 
              fill="none" stroke="#D2B48C" strokeWidth="1" opacity="0.5"/>
            
            {/* Biceps - more realistic muscle belly */}
            <path d="M 60 115 Q 55 120 58 135 Q 62 145 68 142 Q 72 135 70 125 Q 68 118 60 115 Z" 
              style={getMuscleStyle('biceps')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('biceps')}/>
            <path d="M 160 115 Q 165 120 162 135 Q 158 145 152 142 Q 148 135 150 125 Q 152 118 160 115 Z" 
              style={getMuscleStyle('biceps')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('biceps')}/>
            
            {/* Forearms with realistic taper */}
            <path d="M 55 150 Q 50 155 52 175 Q 55 195 58 195 Q 62 190 65 175 Q 63 160 60 150 Q 58 148 55 150 Z" 
              style={getMuscleStyle('forearms')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('forearms')}/>
            <path d="M 165 150 Q 170 155 168 175 Q 165 195 162 195 Q 158 190 155 175 Q 157 160 160 150 Q 162 148 165 150 Z" 
              style={getMuscleStyle('forearms')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Upper Abdominals - six pack definition */}
            <path d="M 95 125 Q 110 122 125 125 Q 128 140 125 145 Q 110 148 95 145 Q 92 140 95 125 Z" 
              style={getMuscleStyle('upperAbs')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('upperAbs')}/>
            <rect x="102" y="130" width="5" height="10" fill="#D2B48C" opacity="0.8"/>
            <rect x="113" y="130" width="5" height="10" fill="#D2B48C" opacity="0.8"/>
            
            {/* Lower Abdominals */}
            <path d="M 98 150 Q 110 147 122 150 Q 125 165 122 170 Q 110 173 98 170 Q 95 165 98 150 Z" 
              style={getMuscleStyle('lowerAbs')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('lowerAbs')}/>
            <rect x="102" y="155" width="5" height="10" fill="#D2B48C" opacity="0.8"/>
            <rect x="113" y="155" width="5" height="10" fill="#D2B48C" opacity="0.8"/>
            
            {/* External Obliques */}
            <path d="M 75 135 Q 70 140 72 160 Q 78 170 85 165 Q 88 155 85 145 Q 82 138 75 135 Z" 
              style={getMuscleStyle('obliques')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('obliques')}/>
            <path d="M 145 135 Q 150 140 148 160 Q 142 170 135 165 Q 132 155 135 145 Q 138 138 145 135 Z" 
              style={getMuscleStyle('obliques')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('obliques')}/>
            
            {/* Hip bones and pelvis */}
            <ellipse cx="92" cy="185" rx="8" ry="6" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            <ellipse cx="128" cy="185" rx="8" ry="6" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            <path d="M 85 190 Q 110 185 135 190 Q 130 200 110 205 Q 90 200 85 190 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
            
            {/* Quadriceps - four distinct heads */}
            <path d="M 85 210 Q 80 220 85 260 Q 90 285 95 285 Q 100 270 98 240 Q 95 220 85 210 Z" 
              style={getMuscleStyle('quadriceps')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('quadriceps')}/>
            <path d="M 125 210 Q 130 220 125 260 Q 120 285 115 285 Q 110 270 112 240 Q 115 220 125 210 Z" 
              style={getMuscleStyle('quadriceps')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('quadriceps')}/>
            
            {/* Knee joints */}
            <circle cx="95" cy="295" r="8" fill="#D2B48C" stroke="#B8860B" strokeWidth="2"/>
            <circle cx="125" cy="295" r="8" fill="#D2B48C" stroke="#B8860B" strokeWidth="2"/>
            
            {/* Tibialis Anterior */}
            <path d="M 82 310 Q 78 320 80 350 Q 85 375 88 375 Q 92 365 90 340 Q 88 325 82 310 Z" 
              style={getMuscleStyle('shins')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('shins')}/>
            <path d="M 128 310 Q 132 320 130 350 Q 125 375 122 375 Q 118 365 120 340 Q 122 325 128 310 Z" 
              style={getMuscleStyle('shins')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('shins')}/>
            
            {/* Calves - front view */}
            <ellipse cx="100" cy="365" rx="8" ry="15" 
              style={getMuscleStyle('calves')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('calves')}/>
            <ellipse cx="120" cy="365" rx="8" ry="15" 
              style={getMuscleStyle('calves')} fill="url(#muscleGradient)"
              onClick={() => toggleMuscle('calves')}/>
            
            {/* Ankle joints */}
            <circle cx="95" cy="390" r="4" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            <circle cx="125" cy="390" r="4" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            
            {/* Feet with toes */}
            <path d="M 85 400 Q 90 395 100 398 Q 105 405 100 410 Q 90 415 80 410 Q 78 405 85 400 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
            <path d="M 125 400 Q 120 395 110 398 Q 105 405 110 410 Q 120 415 130 410 Q 132 405 125 400 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
          </svg>
        </div>

        {/* Back View */}
        <div className="body-view">
          <h3>Back View</h3>
          <svg width="220" height="450" viewBox="0 0 220 450" className="body-svg">
            <defs>
              <radialGradient id="backMuscleGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.7"/>
              </radialGradient>
              <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D2B48C" stopOpacity="1"/>
                <stop offset="50%" stopColor="#F5DEB3" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#D2B48C" stopOpacity="1"/>
              </linearGradient>
            </defs>
            {/* Head - back view */}
            <ellipse cx="110" cy="35" rx="28" ry="30" fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1.5"/>
            
            {/* Cervical spine */}
            <line x1="110" y1="60" x2="110" y2="180" stroke="url(#spineGradient)" strokeWidth="3"/>
            <circle cx="110" cy="70" r="2" fill="#D2B48C"/>
            <circle cx="110" cy="85" r="2" fill="#D2B48C"/>
            <circle cx="110" cy="100" r="2" fill="#D2B48C"/>
            <circle cx="110" cy="115" r="2" fill="#D2B48C"/>
            
            {/* Neck muscles */}
            <path d="M 98 60 Q 110 58 122 60 Q 125 70 122 75 Q 110 78 98 75 Q 95 70 98 60 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
            
            {/* Trapezius - anatomically correct diamond shape */}
            <path d="M 85 75 Q 95 70 110 72 Q 125 70 135 75 Q 140 90 135 110 Q 125 120 110 115 Q 95 120 85 110 Q 80 90 85 75 Z" 
              style={getMuscleStyle('traps')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('traps')}/>
            
            {/* Posterior Deltoids */}
            <path d="M 70 80 Q 65 85 68 95 Q 75 105 82 100 Q 85 90 82 82 Q 78 78 70 80 Z" 
              style={getMuscleStyle('posteriorDelts')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('posteriorDelts')}/>
            <path d="M 150 80 Q 155 85 152 95 Q 145 105 138 100 Q 135 90 138 82 Q 142 78 150 80 Z" 
              style={getMuscleStyle('posteriorDelts')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('posteriorDelts')}/>
            
            {/* Lateral Deltoids - back view */}
            <path d="M 55 88 Q 50 95 53 108 Q 60 115 67 110 Q 70 100 67 90 Q 62 85 55 88 Z" 
              style={getMuscleStyle('lateralDelts')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('lateralDelts')}/>
            <path d="M 165 88 Q 170 95 167 108 Q 160 115 153 110 Q 150 100 153 90 Q 158 85 165 88 Z" 
              style={getMuscleStyle('lateralDelts')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('lateralDelts')}/>
            
            {/* Rhomboids */}
            <path d="M 95 105 Q 105 100 115 102 Q 125 105 125 115 Q 120 125 110 128 Q 100 125 95 115 Q 95 110 95 105 Z" 
              style={getMuscleStyle('rhomboids')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('rhomboids')}/>
            
            {/* Latissimus Dorsi - wing-like shape */}
            <path d="M 82 115 Q 70 125 65 140 Q 68 155 78 165 Q 88 160 95 150 Q 100 140 95 130 Q 90 120 82 115 Z" 
              style={getMuscleStyle('lats')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('lats')}/>
            <path d="M 138 115 Q 150 125 155 140 Q 152 155 142 165 Q 132 160 125 150 Q 120 140 125 130 Q 130 120 138 115 Z" 
              style={getMuscleStyle('lats')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('lats')}/>
            
            {/* Triceps - horseshoe shape */}
            <path d="M 60 115 Q 55 125 58 140 Q 65 150 72 145 Q 75 135 72 125 Q 68 118 60 115 Z" 
              style={getMuscleStyle('triceps')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('triceps')}/>
            <path d="M 160 115 Q 165 125 162 140 Q 155 150 148 145 Q 145 135 148 125 Q 152 118 160 115 Z" 
              style={getMuscleStyle('triceps')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('triceps')}/>
            
            {/* Forearms - back view */}
            <path d="M 55 155 Q 50 165 52 185 Q 58 200 65 195 Q 68 180 65 165 Q 62 158 55 155 Z" 
              style={getMuscleStyle('forearms')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('forearms')}/>
            <path d="M 165 155 Q 170 165 168 185 Q 162 200 155 195 Q 152 180 155 165 Q 158 158 165 155 Z" 
              style={getMuscleStyle('forearms')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Erector Spinae (Lower Back) */}
            <path d="M 100 140 Q 95 150 98 170 Q 105 180 115 175 Q 120 165 118 150 Q 115 142 100 140 Z" 
              style={getMuscleStyle('lowerBack')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('lowerBack')}/>
            
            {/* Lumbar vertebrae */}
            <circle cx="110" cy="135" r="2" fill="#D2B48C"/>
            <circle cx="110" cy="150" r="2" fill="#D2B48C"/>
            <circle cx="110" cy="165" r="2" fill="#D2B48C"/>
            
            {/* Gluteus Maximus - realistic shape */}
            <path d="M 85 180 Q 80 190 85 200 Q 95 210 105 205 Q 110 195 105 185 Q 95 178 85 180 Z" 
              style={getMuscleStyle('glutes')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('glutes')}/>
            <path d="M 135 180 Q 140 190 135 200 Q 125 210 115 205 Q 110 195 115 185 Q 125 178 135 180 Z" 
              style={getMuscleStyle('glutes')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('glutes')}/>
            
            {/* Hamstrings - three distinct heads */}
            <path d="M 85 215 Q 80 230 85 260 Q 90 285 95 285 Q 100 270 98 245 Q 95 225 85 215 Z" 
              style={getMuscleStyle('hamstrings')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('hamstrings')}/>
            <path d="M 125 215 Q 130 230 125 260 Q 120 285 115 285 Q 110 270 112 245 Q 115 225 125 215 Z" 
              style={getMuscleStyle('hamstrings')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('hamstrings')}/>
            
            {/* Knee joints - back view */}
            <circle cx="95" cy="295" r="6" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            <circle cx="125" cy="295" r="6" fill="#D2B48C" stroke="#B8860B" strokeWidth="1"/>
            
            {/* Gastrocnemius (Calves) - diamond shape */}
            <path d="M 85 310 Q 80 320 85 340 Q 90 365 95 368 Q 100 360 98 340 Q 95 325 90 315 Q 88 310 85 310 Z" 
              style={getMuscleStyle('calves')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('calves')}/>
            <path d="M 125 310 Q 130 320 125 340 Q 120 365 115 368 Q 110 360 112 340 Q 115 325 120 315 Q 122 310 125 310 Z" 
              style={getMuscleStyle('calves')} fill="url(#backMuscleGradient)"
              onClick={() => toggleMuscle('calves')}/>
            
            {/* Achilles tendons */}
            <line x1="95" y1="368" x2="95" y2="390" stroke="#D2B48C" strokeWidth="3"/>
            <line x1="125" y1="368" x2="125" y2="390" stroke="#D2B48C" strokeWidth="3"/>
            
            {/* Feet - back view */}
            <path d="M 85 400 Q 80 405 85 410 Q 95 415 100 410 Q 105 405 100 400 Q 90 395 85 400 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
            <path d="M 125 400 Q 130 405 125 410 Q 115 415 110 410 Q 105 405 110 400 Q 120 395 125 400 Z" 
              fill="url(#bodyGradient)" stroke="#B8860B" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Selected Muscles Panel */}
      <div className="selected-muscles">
        <h3>Selected Muscle Groups ({selectedMuscles.size})</h3>
        <div className="muscle-list">
          {Array.from(selectedMuscles).map(muscleId => (
            <div 
              key={muscleId} 
              className="muscle-tag"
              style={{ backgroundColor: muscleGroups[muscleId].color }}
            >
              <span>{muscleGroups[muscleId].name}</span>
              <button 
                onClick={() => toggleMuscle(muscleId)}
                className="remove-muscle"
              >
                ×n
              </button>
            </div>
          ))}
        </div>
        
        {selectedMuscles.size > 0 && (
          <div className="workout-actions">
            <button className="create-workout-btn">
              Create Workout for Selected Muscles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildWorkout;

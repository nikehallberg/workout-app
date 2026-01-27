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
            {/* Head */}
            <ellipse cx="110" cy="35" rx="28" ry="25" fill="#FDB462" stroke="#333" strokeWidth="2"/>
            
            {/* Neck */}
            <rect x="98" y="55" width="24" height="18" fill="#FDB462" stroke="#333" strokeWidth="1"/>
            
            {/* Anterior Deltoids */}
            <ellipse cx="75" cy="85" rx="18" ry="15" 
              style={getMuscleStyle('anteriorDelts')} 
              onClick={() => toggleMuscle('anteriorDelts')}/>
            <ellipse cx="145" cy="85" rx="18" ry="15" 
              style={getMuscleStyle('anteriorDelts')} 
              onClick={() => toggleMuscle('anteriorDelts')}/>
            
            {/* Lateral Deltoids */}
            <ellipse cx="58" cy="95" rx="12" ry="18" 
              style={getMuscleStyle('lateralDelts')} 
              onClick={() => toggleMuscle('lateralDelts')}/>
            <ellipse cx="162" cy="95" rx="12" ry="18" 
              style={getMuscleStyle('lateralDelts')} 
              onClick={() => toggleMuscle('lateralDelts')}/>
            
            {/* Chest (Pectoralis Major) */}
            <path d="M 85 95 Q 95 85 110 90 Q 125 85 135 95 Q 130 110 110 115 Q 90 110 85 95 Z" 
              style={getMuscleStyle('chest')} 
              onClick={() => toggleMuscle('chest')}/>
            
            {/* Biceps */}
            <ellipse cx="65" cy="125" rx="10" ry="25" 
              style={getMuscleStyle('biceps')} 
              onClick={() => toggleMuscle('biceps')}/>
            <ellipse cx="155" cy="125" rx="10" ry="25" 
              style={getMuscleStyle('biceps')} 
              onClick={() => toggleMuscle('biceps')}/>
            
            {/* Forearms */}
            <ellipse cx="58" cy="170" rx="8" ry="28" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            <ellipse cx="162" cy="170" rx="8" ry="28" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Upper Abdominals */}
            <rect x="92" y="125" width="36" height="25" rx="8" 
              style={getMuscleStyle('upperAbs')} 
              onClick={() => toggleMuscle('upperAbs')}/>
            
            {/* Lower Abdominals */}
            <rect x="95" y="150" width="30" height="25" rx="6" 
              style={getMuscleStyle('lowerAbs')} 
              onClick={() => toggleMuscle('lowerAbs')}/>
            
            {/* Obliques */}
            <ellipse cx="75" cy="150" rx="12" ry="20" 
              style={getMuscleStyle('obliques')} 
              onClick={() => toggleMuscle('obliques')}/>
            <ellipse cx="145" cy="150" rx="12" ry="20" 
              style={getMuscleStyle('obliques')} 
              onClick={() => toggleMuscle('obliques')}/>
            
            {/* Hip area */}
            <ellipse cx="110" cy="190" rx="25" ry="15" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            
            {/* Quadriceps */}
            <ellipse cx="90" cy="240" rx="18" ry="40" 
              style={getMuscleStyle('quadriceps')} 
              onClick={() => toggleMuscle('quadriceps')}/>
            <ellipse cx="130" cy="240" rx="18" ry="40" 
              style={getMuscleStyle('quadriceps')} 
              onClick={() => toggleMuscle('quadriceps')}/>
            
            {/* Knee caps */}
            <ellipse cx="90" cy="295" rx="8" ry="6" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            <ellipse cx="130" cy="295" rx="8" ry="6" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            
            {/* Shins (Tibialis Anterior) */}
            <ellipse cx="85" cy="340" rx="8" ry="35" 
              style={getMuscleStyle('shins')} 
              onClick={() => toggleMuscle('shins')}/>
            <ellipse cx="135" cy="340" rx="8" ry="35" 
              style={getMuscleStyle('shins')} 
              onClick={() => toggleMuscle('shins')}/>
            
            {/* Calves (front view) */}
            <ellipse cx="95" cy="370" rx="10" ry="20" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            <ellipse cx="125" cy="370" rx="10" ry="20" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            
            {/* Feet */}
            <ellipse cx="85" cy="410" rx="12" ry="8" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            <ellipse cx="135" cy="410" rx="12" ry="8" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
          </svg>
        </div>

        {/* Back View */}
        <div className="body-view">
          <h3>Back View</h3>
          <svg width="220" height="450" viewBox="0 0 220 450" className="body-svg">
            {/* Head */}
            <ellipse cx="110" cy="35" rx="28" ry="25" fill="#FDB462" stroke="#333" strokeWidth="2"/>
            
            {/* Neck */}
            <rect x="98" y="55" width="24" height="18" fill="#FDB462" stroke="#333" strokeWidth="1"/>
            
            {/* Trapezius */}
            <path d="M 85 75 Q 110 70 135 75 Q 140 85 135 95 Q 110 100 85 95 Q 80 85 85 75 Z" 
              style={getMuscleStyle('traps')} 
              onClick={() => toggleMuscle('traps')}/>
            
            {/* Posterior Deltoids */}
            <ellipse cx="75" cy="85" rx="15" ry="18" 
              style={getMuscleStyle('posteriorDelts')} 
              onClick={() => toggleMuscle('posteriorDelts')}/>
            <ellipse cx="145" cy="85" rx="15" ry="18" 
              style={getMuscleStyle('posteriorDelts')} 
              onClick={() => toggleMuscle('posteriorDelts')}/>
            
            {/* Lateral Deltoids */}
            <ellipse cx="58" cy="95" rx="12" ry="18" 
              style={getMuscleStyle('lateralDelts')} 
              onClick={() => toggleMuscle('lateralDelts')}/>
            <ellipse cx="162" cy="95" rx="12" ry="18" 
              style={getMuscleStyle('lateralDelts')} 
              onClick={() => toggleMuscle('lateralDelts')}/>
            
            {/* Latissimus Dorsi */}
            <path d="M 85 110 Q 75 120 70 135 Q 75 150 85 155 Q 95 150 100 135 Q 95 125 85 110 Z" 
              style={getMuscleStyle('lats')} 
              onClick={() => toggleMuscle('lats')}/>
            <path d="M 135 110 Q 145 120 150 135 Q 145 150 135 155 Q 125 150 120 135 Q 125 125 135 110 Z" 
              style={getMuscleStyle('lats')} 
              onClick={() => toggleMuscle('lats')}/>
            
            {/* Rhomboids */}
            <path d="M 95 105 Q 110 100 125 105 Q 120 120 110 125 Q 100 120 95 105 Z" 
              style={getMuscleStyle('rhomboids')} 
              onClick={() => toggleMuscle('rhomboids')}/>
            
            {/* Triceps */}
            <ellipse cx="65" cy="125" rx="12" ry="25" 
              style={getMuscleStyle('triceps')} 
              onClick={() => toggleMuscle('triceps')}/>
            <ellipse cx="155" cy="125" rx="12" ry="25" 
              style={getMuscleStyle('triceps')} 
              onClick={() => toggleMuscle('triceps')}/>
            
            {/* Forearms */}
            <ellipse cx="58" cy="170" rx="8" ry="28" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            <ellipse cx="162" cy="170" rx="8" ry="28" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Lower Back (Erector Spinae) */}
            <ellipse cx="110" cy="155" rx="20" ry="25" 
              style={getMuscleStyle('lowerBack')} 
              onClick={() => toggleMuscle('lowerBack')}/>
            
            {/* Glutes */}
            <ellipse cx="95" cy="195" rx="20" ry="18" 
              style={getMuscleStyle('glutes')} 
              onClick={() => toggleMuscle('glutes')}/>
            <ellipse cx="125" cy="195" rx="20" ry="18" 
              style={getMuscleStyle('glutes')} 
              onClick={() => toggleMuscle('glutes')}/>
            
            {/* Hamstrings */}
            <ellipse cx="90" cy="250" rx="16" ry="38" 
              style={getMuscleStyle('hamstrings')} 
              onClick={() => toggleMuscle('hamstrings')}/>
            <ellipse cx="130" cy="250" rx="16" ry="38" 
              style={getMuscleStyle('hamstrings')} 
              onClick={() => toggleMuscle('hamstrings')}/>
            
            {/* Knee caps */}
            <ellipse cx="90" cy="295" rx="8" ry="6" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            <ellipse cx="130" cy="295" rx="8" ry="6" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            
            {/* Calves (back view - larger) */}
            <ellipse cx="90" cy="350" rx="14" ry="35" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            <ellipse cx="130" cy="350" rx="14" ry="35" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            
            {/* Feet */}
            <ellipse cx="85" cy="410" rx="12" ry="8" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
            <ellipse cx="135" cy="410" rx="12" ry="8" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
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
                ×
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

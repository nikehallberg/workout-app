import React, { useState } from 'react';
import './BuildWorkout.css';

const BuildWorkout = () => {
  const [selectedMuscles, setSelectedMuscles] = useState(new Set());

  const muscleGroups = {
    // Upper Body
    chest: { name: 'Chest', color: '#FF6B6B' },
    shoulders: { name: 'Shoulders', color: '#4ECDC4' },
    biceps: { name: 'Biceps', color: '#45B7D1' },
    triceps: { name: 'Triceps', color: '#96CEB4' },
    forearms: { name: 'Forearms', color: '#FFEAA7' },
    upperBack: { name: 'Upper Back', color: '#DDA0DD' },
    lowerBack: { name: 'Lower Back', color: '#98D8C8' },
    
    // Core
    abs: { name: 'Abdominals', color: '#F7DC6F' },
    obliques: { name: 'Obliques', color: '#BB8FCE' },
    
    // Lower Body
    quadriceps: { name: 'Quadriceps', color: '#85C1E9' },
    hamstrings: { name: 'Hamstrings', color: '#F8C471' },
    glutes: { name: 'Glutes', color: '#82E0AA' },
    calves: { name: 'Calves', color: '#F1948A' },
    shins: { name: 'Shins', color: '#AED6F1' }
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
          <svg width="200" height="400" viewBox="0 0 200 400" className="body-svg">
            {/* Head */}
            <ellipse cx="100" cy="30" rx="25" ry="20" fill="#FDB462" stroke="#333" strokeWidth="2"/>
            
            {/* Neck */}
            <rect x="90" y="45" width="20" height="15" fill="#FDB462" stroke="#333" strokeWidth="1"/>
            
            {/* Shoulders */}
            <ellipse cx="70" cy="75" rx="20" ry="12" 
              style={getMuscleStyle('shoulders')} 
              onClick={() => toggleMuscle('shoulders')}/>
            <ellipse cx="130" cy="75" rx="20" ry="12" 
              style={getMuscleStyle('shoulders')} 
              onClick={() => toggleMuscle('shoulders')}/>
            
            {/* Chest */}
            <ellipse cx="100" cy="90" rx="35" ry="25" 
              style={getMuscleStyle('chest')} 
              onClick={() => toggleMuscle('chest')}/>
            
            {/* Biceps */}
            <ellipse cx="60" cy="110" rx="12" ry="20" 
              style={getMuscleStyle('biceps')} 
              onClick={() => toggleMuscle('biceps')}/>
            <ellipse cx="140" cy="110" rx="12" ry="20" 
              style={getMuscleStyle('biceps')} 
              onClick={() => toggleMuscle('biceps')}/>
            
            {/* Forearms */}
            <ellipse cx="55" cy="150" rx="8" ry="25" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            <ellipse cx="145" cy="150" rx="8" ry="25" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Abdominals */}
            <rect x="85" y="120" width="30" height="40" rx="5" 
              style={getMuscleStyle('abs')} 
              onClick={() => toggleMuscle('abs')}/>
            
            {/* Obliques */}
            <ellipse cx="70" cy="140" rx="8" ry="15" 
              style={getMuscleStyle('obliques')} 
              onClick={() => toggleMuscle('obliques')}/>
            <ellipse cx="130" cy="140" rx="8" ry="15" 
              style={getMuscleStyle('obliques')} 
              onClick={() => toggleMuscle('obliques')}/>
            
            {/* Quadriceps */}
            <ellipse cx="85" cy="220" rx="15" ry="35" 
              style={getMuscleStyle('quadriceps')} 
              onClick={() => toggleMuscle('quadriceps')}/>
            <ellipse cx="115" cy="220" rx="15" ry="35" 
              style={getMuscleStyle('quadriceps')} 
              onClick={() => toggleMuscle('quadriceps')}/>
            
            {/* Shins */}
            <ellipse cx="85" cy="310" rx="8" ry="30" 
              style={getMuscleStyle('shins')} 
              onClick={() => toggleMuscle('shins')}/>
            <ellipse cx="115" cy="310" rx="8" ry="30" 
              style={getMuscleStyle('shins')} 
              onClick={() => toggleMuscle('shins')}/>
            
            {/* Calves */}
            <ellipse cx="85" cy="350" rx="10" ry="20" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            <ellipse cx="115" cy="350" rx="10" ry="20" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
          </svg>
        </div>

        {/* Back View */}
        <div className="body-view">
          <h3>Back View</h3>
          <svg width="200" height="400" viewBox="0 0 200 400" className="body-svg">
            {/* Head */}
            <ellipse cx="100" cy="30" rx="25" ry="20" fill="#FDB462" stroke="#333" strokeWidth="2"/>
            
            {/* Neck */}
            <rect x="90" y="45" width="20" height="15" fill="#FDB462" stroke="#333" strokeWidth="1"/>
            
            {/* Shoulders */}
            <ellipse cx="70" cy="75" rx="20" ry="12" 
              style={getMuscleStyle('shoulders')} 
              onClick={() => toggleMuscle('shoulders')}/>
            <ellipse cx="130" cy="75" rx="20" ry="12" 
              style={getMuscleStyle('shoulders')} 
              onClick={() => toggleMuscle('shoulders')}/>
            
            {/* Upper Back */}
            <ellipse cx="100" cy="100" rx="40" ry="30" 
              style={getMuscleStyle('upperBack')} 
              onClick={() => toggleMuscle('upperBack')}/>
            
            {/* Triceps */}
            <ellipse cx="60" cy="110" rx="12" ry="20" 
              style={getMuscleStyle('triceps')} 
              onClick={() => toggleMuscle('triceps')}/>
            <ellipse cx="140" cy="110" rx="12" ry="20" 
              style={getMuscleStyle('triceps')} 
              onClick={() => toggleMuscle('triceps')}/>
            
            {/* Forearms */}
            <ellipse cx="55" cy="150" rx="8" ry="25" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            <ellipse cx="145" cy="150" rx="8" ry="25" 
              style={getMuscleStyle('forearms')} 
              onClick={() => toggleMuscle('forearms')}/>
            
            {/* Lower Back */}
            <ellipse cx="100" cy="150" rx="25" ry="20" 
              style={getMuscleStyle('lowerBack')} 
              onClick={() => toggleMuscle('lowerBack')}/>
            
            {/* Glutes */}
            <ellipse cx="100" cy="190" rx="30" ry="20" 
              style={getMuscleStyle('glutes')} 
              onClick={() => toggleMuscle('glutes')}/>
            
            {/* Hamstrings */}
            <ellipse cx="85" cy="230" rx="15" ry="35" 
              style={getMuscleStyle('hamstrings')} 
              onClick={() => toggleMuscle('hamstrings')}/>
            <ellipse cx="115" cy="230" rx="15" ry="35" 
              style={getMuscleStyle('hamstrings')} 
              onClick={() => toggleMuscle('hamstrings')}/>
            
            {/* Calves */}
            <ellipse cx="85" cy="320" rx="12" ry="35" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
            <ellipse cx="115" cy="320" rx="12" ry="35" 
              style={getMuscleStyle('calves')} 
              onClick={() => toggleMuscle('calves')}/>
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

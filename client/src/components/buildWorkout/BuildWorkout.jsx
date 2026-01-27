import { useState } from "react"
import "./BuildWorkout.css"
import bodyMapImage from "../../assets/bodymap.png" // Add your body map image to src/assets/

const BuildWorkout = () => {
  const [selectedMuscles, setSelectedMuscles] = useState([])
  const [hoveredMuscle, setHoveredMuscle] = useState(null)

  const handleMuscleClick = (muscleName) => {
    setSelectedMuscles(prev => 
      prev.includes(muscleName) 
        ? prev.filter(m => m !== muscleName)
        : [...prev, muscleName]
    )
  }

  const getMuscleStyle = (muscleName) => {
    if (selectedMuscles.includes(muscleName)) {
      return { fill: 'rgba(52, 152, 219, 0.7)', stroke: '#2980b9', strokeWidth: 3 }
    }
    if (hoveredMuscle === muscleName) {
      return { fill: 'rgba(231, 76, 60, 0.6)', stroke: '#c0392b', strokeWidth: 2 }
    }
    return { fill: 'rgba(255, 255, 255, 0.1)', stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1 }
  }

  return (
    <div className="build-workout-container">
      <h1>Build Your Workout</h1>
      <p>Click on muscle groups to target them in your workout.</p>
      
      <section className="muscle-map" style={{ position: 'relative' }}>
        <img 
          src={bodyMapImage} 
          alt="This is an image of the muscles of the human body. Users can click on a muscle and watch video tutorials for muscle functions and the best exercises for that muscle." 
          aria-label="Human anatomy" 
          loading="lazy"
          style={{ width: '100%', height: 'auto' }}
        />
        
        <svg viewBox="0 0 373 331" style={{ position: 'absolute', top: '0px' }}>
          {/* Comprehensive muscle group polygons */}
          
          {/* Upper back muscles */}
          <polygon points="274,173,278,178,281,179,284,179,282,188,281,197,281,205,282,214,278,199,276,194,275,190,274,184,274,179" 
            style={getMuscleStyle('upper-trapezius')}
            onClick={() => handleMuscleClick('upper-trapezius')}
            onMouseEnter={() => setHoveredMuscle('upper-trapezius')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="260,180,266,177,270,173,270,181,269,186,267,193,259,214,262,195" 
            style={getMuscleStyle('rhomboids')}
            onClick={() => handleMuscleClick('rhomboids')}
            onMouseEnter={() => setHoveredMuscle('rhomboids')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Shoulder muscles */}
          <polygon points="122,142,115,166,110,155" 
            style={getMuscleStyle('left-deltoid')}
            onClick={() => handleMuscleClick('left-deltoid')}
            onMouseEnter={() => setHoveredMuscle('left-deltoid')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="79,142,90,156,86,166" 
            style={getMuscleStyle('right-deltoid')}
            onClick={() => handleMuscleClick('right-deltoid')}
            onMouseEnter={() => setHoveredMuscle('right-deltoid')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Arm muscles */}
          <polygon points="110,155,112,161,115,167,112,175,110,184,110,194,110,203,105,189,102,180,102,169,105,168,106,166,107,163,109,158" 
            style={getMuscleStyle('left-bicep')}
            onClick={() => handleMuscleClick('left-bicep')}
            onMouseEnter={() => setHoveredMuscle('left-bicep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="90,155,86,166,91,181,93,192,93,204,97,191,99,179,99,170,95,167,94,165,93,163,93,160" 
            style={getMuscleStyle('right-bicep')}
            onClick={() => handleMuscleClick('right-bicep')}
            onMouseEnter={() => setHoveredMuscle('right-bicep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Back muscles */}
          <polygon points="284,119,285,126,285,132,260,132,259,126,260,122,261,118,264,112,266,108,279,108" 
            style={getMuscleStyle('middle-trapezius')}
            onClick={() => handleMuscleClick('middle-trapezius')}
            onMouseEnter={() => setHoveredMuscle('middle-trapezius')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Neck muscles */}
          <polygon points="127,78,125,86,125,95,125,106,127,100,128,93,128,82" 
            style={getMuscleStyle('left-sternocleidomastoid')}
            onClick={() => handleMuscleClick('left-sternocleidomastoid')}
            onMouseEnter={() => setHoveredMuscle('left-sternocleidomastoid')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="73,78,76,86,76,106,74,101,73,95" 
            style={getMuscleStyle('right-sternocleidomastoid')}
            onClick={() => handleMuscleClick('right-sternocleidomastoid')}
            onMouseEnter={() => setHoveredMuscle('right-sternocleidomastoid')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Additional back muscles */}
          <polygon points="303,82,302,90,301,98,297,112,294,119,288,129,283,115,275,101,277,96,279,90,284,81,288,82,292,83,300,82,302,81" 
            style={getMuscleStyle('left-latissimus-dorsi')}
            onClick={() => handleMuscleClick('left-latissimus-dorsi')}
            onMouseEnter={() => setHoveredMuscle('left-latissimus-dorsi')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="242,81,246,83,250,83,255,82,260,82,266,91,270,102,266,108,262,115,257,131,251,120,248,112,246,105,243,97,243,94,242,90" 
            style={getMuscleStyle('right-latissimus-dorsi')}
            onClick={() => handleMuscleClick('right-latissimus-dorsi')}
            onMouseEnter={() => setHoveredMuscle('right-latissimus-dorsi')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Additional muscle polygons from the provided code */}
          <polygon points="84,95,79,100,80,101,78,102,77,104,79,106,76,109,76,103,76,92,76,84,79,89,85,91,83,94" 
            style={getMuscleStyle('left-serratus')}
            onClick={() => handleMuscleClick('left-serratus')}
            onMouseEnter={() => setHoveredMuscle('left-serratus')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="125,86,125,96,125,106,125,108,123,107,122,107,124,104,122,102,120,101,122,99,119,97,117,95,118,94,116,92,121,90" 
            style={getMuscleStyle('right-serratus')}
            onClick={() => handleMuscleClick('right-serratus')}
            onMouseEnter={() => setHoveredMuscle('right-serratus')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Chest area - highlighted */}
          <polygon points="88,93,94,92,99,91,101,91,107,92,114,92,114,100,114,108,114,116,114,123,113,127,113,131,112,137,109,149,106,160,95,160,91,147,88,135,87,131,87,127,86,121,87,117,87,107,86,104,86,99,87,95" 
            style={getMuscleStyle('pectoralis-major')}
            onClick={() => handleMuscleClick('pectoralis-major')}
            onMouseEnter={() => setHoveredMuscle('pectoralis-major')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Back torso */}
          <polygon points="266,35,279,35,280,42,282,46,294,53,298,55,303,56,300,58,291,58,288,63,287,68,285,77,283,84,278,92,275,100,272,108,266,92,260,81,257,68,256,63,254,60,252,58,242,56,247,55,260,48,264,44" 
            style={getMuscleStyle('erector-spinae')}
            onClick={() => handleMuscleClick('erector-spinae')}
            onMouseEnter={() => setHoveredMuscle('erector-spinae')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Back arms */}
          <polygon points="311,112,316,117,320,116,324,106,327,110,330,116,331,119,333,125,336,136,337,140,327,145,322,138,317,129,314,122,311,116" 
            style={getMuscleStyle('left-tricep')}
            onClick={() => handleMuscleClick('left-tricep')}
            onMouseEnter={() => setHoveredMuscle('left-tricep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="233,112,232,116,229,123,223,135,215,146,206,142,208,135,210,128,212,119,216,111,220,105,221,110,222,116,227,118" 
            style={getMuscleStyle('right-tricep')}
            onClick={() => handleMuscleClick('right-tricep')}
            onMouseEnter={() => setHoveredMuscle('right-tricep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Forearms */}
          <polygon points="149,107,156,117,157,122,159,129,162,136,164,141,156,146,153,142,150,138,142,127,139,120,137,116,138,115,139,114,141,114,147,118,147,113" 
            style={getMuscleStyle('left-forearm')}
            onClick={() => handleMuscleClick('left-forearm')}
            onMouseEnter={() => setHoveredMuscle('left-forearm')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="53,107,55,114,61,112,64,116,63,120,60,125,58,128,57,132,51,139,47,145,38,141,40,137,42,132,44,125,45,120,46,116,48,113,51,109" 
            style={getMuscleStyle('right-forearm')}
            onClick={() => handleMuscleClick('right-forearm')}
            onMouseEnter={() => setHoveredMuscle('right-forearm')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Leg muscles - back view */}
          <polygon points="292,227,294,230,297,223,303,231,304,237,307,246,309,254,309,268,307,282,304,293,297,293,295,283,291,271,288,261,288,252,288,245,287,239" 
            style={getMuscleStyle('left-hamstring')}
            onClick={() => handleMuscleClick('left-hamstring')}
            onMouseEnter={() => setHoveredMuscle('left-hamstring')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="243,223,246,229,249,226,253,239,251,245,251,260,248,270,242,281,240,293,233,293,230,277,229,264,231,251,233,243,236,235,238,230" 
            style={getMuscleStyle('right-hamstring')}
            onClick={() => handleMuscleClick('right-hamstring')}
            onMouseEnter={() => setHoveredMuscle('right-hamstring')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Leg muscles - front view */}
          <polygon points="70,229,67,239,65,247,65,256,66,267,67,278,67,286,71,286,70,266,69,246,71,229" 
            style={getMuscleStyle('left-calf')}
            onClick={() => handleMuscleClick('left-calf')}
            onMouseEnter={() => setHoveredMuscle('left-calf')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="134,229,135,230,138,237,140,243,141,247,141,252,141,258,141,267,141,284,137,285,136,264,136,246" 
            style={getMuscleStyle('right-calf')}
            onClick={() => handleMuscleClick('right-calf')}
            onMouseEnter={() => setHoveredMuscle('right-calf')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Core area */}
          <polygon points="263,138,257,141,252,145,249,148,248,150,245,159,246,168,249,178,260,179,265,177,269,174,271,171,272,166,274,173,279,178,285,179,292,179,296,172,299,165,299,160,298,156,297,150,295,147,292,144,282,138,276,143,272,149,269,143,267,141" 
            style={getMuscleStyle('lower-back')}
            onClick={() => handleMuscleClick('lower-back')}
            onMouseEnter={() => setHoveredMuscle('lower-back')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Thigh muscles */}
          <polygon points="123,149,119,169,115,184,112,199,112,208,113,216,115,218,117,219,119,218,120,216,120,208,126,208,127,214,130,219,132,210,133,204,134,196,133,180,132,172,130,163" 
            style={getMuscleStyle('left-quadricep')}
            onClick={() => handleMuscleClick('left-quadricep')}
            onMouseEnter={() => setHoveredMuscle('left-quadricep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          <polygon points="78,148,73,159,71,167,69,174,69,187,69,196,71,207,74,219,78,212,78,208,83,208,83,214,84,216,85,218,87,218,90,217,91,210,91,199,88,188,80,161" 
            style={getMuscleStyle('right-quadricep')}
            onClick={() => handleMuscleClick('right-quadricep')}
            onMouseEnter={() => setHoveredMuscle('right-quadricep')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
          
          {/* Additional smaller muscle groups */}
          <polygon points="91,41,91,51,96,61,103,61,109,51,109,41,104,44,97,44" 
            style={getMuscleStyle('face-neck')}
            onClick={() => handleMuscleClick('face-neck')}
            onMouseEnter={() => setHoveredMuscle('face-neck')}
            onMouseLeave={() => setHoveredMuscle(null)}
            className="muscle-area" />
        </svg>
      </section>
      
      {/* Selected muscles display - Always visible */}
      <div className="selected-muscles">
        <h3>Selected Muscle Groups:</h3>
        <div className="muscle-tags">
          {selectedMuscles.length > 0 ? (
            selectedMuscles.map(muscle => (
              <span key={muscle} className="muscle-tag">
                {muscle.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                <button onClick={() => handleMuscleClick(muscle)}>×</button>
              </span>
            ))
          ) : (
            <p>Click on muscle groups above to select them</p>
          )}
        </div>
        
        {/* Available muscle groups - Always visible */}
        <div className="available-muscles">
          <h4>Available Muscle Groups:</h4>
          <div className="muscle-options">
            {['pectoralis-major', 'left-bicep', 'right-bicep', 'left-tricep', 'right-tricep', 'left-deltoid', 'right-deltoid', 'left-forearm', 'right-forearm', 'left-quadricep', 'right-quadricep', 'left-hamstring', 'right-hamstring', 'left-calf', 'right-calf', 'upper-trapezius', 'middle-trapezius', 'rhomboids', 'left-latissimus-dorsi', 'right-latissimus-dorsi', 'erector-spinae', 'lower-back', 'left-sternocleidomastoid', 'right-sternocleidomastoid', 'left-serratus', 'right-serratus', 'face-neck'].map(muscle => (
              <button 
                key={muscle}
                className={`muscle-option-btn ${selectedMuscles.includes(muscle) ? 'selected' : ''}`}
                onClick={() => handleMuscleClick(muscle)}
              >
                {muscle.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Generate workout button */}
      {selectedMuscles.length > 0 && (
        <div className="generate-section">
          <button className="generate-workout-btn">
            Generate Workout for Selected Muscles ({selectedMuscles.length} groups)
          </button>
        </div>
      )}
      
      {/* <h1>Build Your Workout</h1>
      <p>Create a custom workout tailored to your specific goals and preferences.</p>
      
      <section className="workout-builder">
        <h2>Workout Builder</h2>
        
        <div className="builder-section">
          <h3>Select Your Goals</h3>
          <p>Choose what you want to achieve with your workout routine.</p>
          <div className="goal-options">
            <button className="goal-btn">Weight Loss</button>
            <button className="goal-btn">Muscle Gain</button>
            <button className="goal-btn">Endurance</button>
            <button className="goal-btn">Strength</button>
            <button className="goal-btn">Flexibility</button>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Workout Duration</h3>
          <p>How long do you want your workout to be?</p>
          <div className="duration-options">
            <button className="duration-btn">15 minutes</button>
            <button className="duration-btn">30 minutes</button>
            <button className="duration-btn">45 minutes</button>
            <button className="duration-btn">60 minutes</button>
            <button className="duration-btn">90+ minutes</button>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Equipment Available</h3>
          <p>Select the equipment you have access to.</p>
          <div className="equipment-options">
            <label className="equipment-item">
              <input type="checkbox" />
              <span>No Equipment (Bodyweight)</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Dumbbells</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Resistance Bands</span>
            </label>
            <label className="equipment-item">
              <input type="checkbox" />
              <span>Full Gym Access</span>
            </label>
          </div>
        </div>
        
        <div className="builder-section">
          <h3>Experience Level</h3>
          <p>What's your current fitness level?</p>
          <div className="level-options">
            <button className="level-btn">Beginner</button>
            <button className="level-btn">Intermediate</button>
            <button className="level-btn">Advanced</button>
          </div>
        </div>
        
        <div className="generate-section">
          <button className="generate-workout-btn">Generate My Workout</button>
        </div>
      </section>
      
      <section className="workout-preview">
        <h2>Your Custom Workout</h2>
        <p>Your personalized workout will appear here once you've made your selections above.</p>
        <div className="workout-placeholder">
          <p>Select your preferences to generate a custom workout plan.</p>
        </div>
      </section> */}
    </div>
  )
}

export default BuildWorkout
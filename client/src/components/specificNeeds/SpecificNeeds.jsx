import "./SpecificNeeds.css"

const SpecificNeeds = () => {
  return (
    <div className="specific-needs-container">
      <h1>Specific Needs Workouts</h1>
      <p>Specialized workout programs designed for specific conditions, goals, and requirements.</p>
      
      <section className="needs-categories">
        <h2>Workout Categories</h2>
        
        <div className="needs-grid">
          <div className="need-category">
            <h3>Injury Recovery</h3>
            <p>Gentle exercises and rehabilitation programs to help you safely return to fitness after injury.</p>
            <ul>
              <li>Lower back pain relief</li>
              <li>Knee injury recovery</li>
              <li>Shoulder rehabilitation</li>
              <li>Post-surgery recovery</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
          
          <div className="need-category">
            <h3>Senior Fitness</h3>
            <p>Age-appropriate exercises focusing on balance, mobility, and strength for older adults.</p>
            <ul>
              <li>Balance improvement</li>
              <li>Joint mobility</li>
              <li>Fall prevention</li>
              <li>Bone density support</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
          
          <div className="need-category">
            <h3>Pregnancy & Postpartum</h3>
            <p>Safe and effective exercises for expecting mothers and new moms.</p>
            <ul>
              <li>Prenatal fitness</li>
              <li>Core recovery</li>
              <li>Pelvic floor strengthening</li>
              <li>Energy boosting routines</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
          
          <div className="need-category">
            <h3>Desk Workers</h3>
            <p>Combat the effects of prolonged sitting with targeted exercises and stretches.</p>
            <ul>
              <li>Posture correction</li>
              <li>Neck and shoulder relief</li>
              <li>Hip flexor stretches</li>
              <li>Quick office breaks</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
          
          <div className="need-category">
            <h3>Chronic Conditions</h3>
            <p>Modified exercise programs for managing various chronic health conditions.</p>
            <ul>
              <li>Diabetes management</li>
              <li>Heart disease support</li>
              <li>Arthritis relief</li>
              <li>Fibromyalgia care</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
          
          <div className="need-category">
            <h3>Limited Mobility</h3>
            <p>Adaptive exercises for individuals with physical limitations or disabilities.</p>
            <ul>
              <li>Chair exercises</li>
              <li>Wheelchair workouts</li>
              <li>Upper body focus</li>
              <li>Range of motion</li>
            </ul>
            <button className="category-btn">View Workouts</button>
          </div>
        </div>
      </section>
      
      <section className="consultation-info">
        <h2>Important Note</h2>
        <div className="info-box">
          <p>Before starting any specialized workout program, especially for injury recovery or chronic conditions, please consult with your healthcare provider or a qualified fitness professional.</p>
          <p>These programs are designed to be general guidelines and may need to be modified based on your individual circumstances.</p>
        </div>
      </section>
      
      <section className="getting-started">
        <h2>Getting Started</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Assess Your Needs</h4>
              <p>Identify your specific requirements and limitations.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Choose Your Category</h4>
              <p>Select the most appropriate workout category above.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Start Slowly</h4>
              <p>Begin with beginner-level exercises and progress gradually.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Listen to Your Body</h4>
              <p>Stop if you experience pain or discomfort.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpecificNeeds
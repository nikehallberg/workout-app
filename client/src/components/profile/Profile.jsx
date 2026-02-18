
const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <p>Manage your personal fitness information, track your stats, and customize your training preferences. Keep your profile updated to get the most personalized workout and nutrition recommendations.</p>
      
      <section className="personal-info">
        <h2>Personal Information</h2>
        <p>Update your basic information including age, height, weight, and activity level to ensure accurate calorie calculations and personalized workout recommendations.</p>
        
        <div className="stats">
          <h3>Your Stats</h3>
          <p>Current measurements and fitness metrics including BMI, body fat percentage, and fitness level assessments to track your overall health and progress over time.</p>
        </div>
      </section>
      
      <section className="fitness-goals">
        <h2>Fitness Goals</h2>
        <p>Set and track your fitness objectives whether it's weight loss, muscle gain, improved endurance, or overall health. Clear goals help maintain motivation and guide your training decisions.</p>
        
        <p>Choose specific, measurable targets with realistic timelines. Break down larger goals into smaller milestones to celebrate progress and maintain momentum throughout your fitness journey.</p>
      </section>
      
      <section className="achievements">
        <h2>Achievements</h2>
        <p>Celebrate your fitness milestones and earned badges. From consistency streaks to personal records, track all your accomplishments and share your success with the community.</p>
        
        <p>Unlock special achievements for reaching goals, maintaining workout streaks, trying new activities, and hitting personal bests. These rewards help maintain motivation and recognize your dedication.</p>
      </section>
    </div>
  )
}

export default Profile
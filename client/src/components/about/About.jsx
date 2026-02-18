import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About FitTracker</h1>
      <p>FitTracker is your comprehensive fitness companion, designed to help you achieve your health and wellness goals through personalized workout plans, nutrition guidance, and progress tracking tools.</p>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>We believe fitness should be accessible, enjoyable, and sustainable for everyone. Our mission is to provide the tools, guidance, and motivation needed to make healthy living a permanent part of your lifestyle, regardless of your starting point or fitness level.</p>
      </section>
      
      <section className="team">
        <h2>Our Team</h2>
        <p>Our team consists of certified personal trainers, registered dietitians, and fitness technology experts who are passionate about helping you succeed. We combine years of experience with the latest research to provide evidence-based guidance.</p>
        
        <p>Every feature is designed with your success in mind, backed by experts who understand the challenges of building and maintaining healthy habits. We're here to support you every step of your fitness journey.</p>
      </section>
    </div>
  )
}

export default About
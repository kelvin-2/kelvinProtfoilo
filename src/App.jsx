import { useState } from 'react'
import './App.css'
import NavBar from './componets/NavBar';

// Import your section components instead of HomePage
// import SkillsSection from './sections/SkillsSection';
// import ProjectsSection from './sections/ProjectsSection';
// import ContactSection from './sections/ContactSection';
import AboutSection from './componets/AboutSection';
import HomeSection from './pages/HomePage';

function App() {
  return (
    <>
      <NavBar />
      
      {/* All sections rendered on a single page */}
      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
        
        {/* <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        
 */}
      </main>
    </>
  )
}

export default App
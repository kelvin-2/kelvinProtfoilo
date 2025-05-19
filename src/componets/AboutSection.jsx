import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        const sectionPosition = aboutSection.getBoundingClientRect();
        // Section becomes visible when it's 30% into the viewport
        if (sectionPosition.top < window.innerHeight * 0.7) {
          setIsVisible(true);
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case section is already visible
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div id="about-section" className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-16">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-white text-4xl font-bold mb-16 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left column with cards */}
          <div className="flex-1 flex flex-col gap-6">
            <div className={`bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-blue-400 text-xl mb-3">Who I Am</h3>
              <p className="text-gray-300 text-lg">
                Computer Science student at Nelson Mandela University with a passion for building thoughtful, user-friendly software.
              </p>
            </div>
            
            <div className={`bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-blue-400 text-xl mb-3">What I Do</h3>
              <p className="text-gray-300 text-lg">
                I work across the full web stack — crafting responsive front-end interfaces in React and developing robust back-end systems with Supabase and NodeJs.
              </p>
            </div>
            
            <div className={`bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-blue-400 text-xl mb-3">Beyond Coding</h3>
              <p className="text-gray-300 text-lg">
                Outside of coding, I enjoy music, tech podcasts, and exploring creative ways to blend design with functionality.
              </p>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className={`flex-1 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-900 relative z-10">
                <img 
                  src="images/kelvinimage.png" 
                  alt="Kelvin" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
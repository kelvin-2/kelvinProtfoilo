import React from "react";
import { motion } from "framer-motion"

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
         {/* Profile image with glowing effect */}
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 relative z-10">
          <img 
            src="/images/kelvinimage.png" 
            alt="Kelvin" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-60 animate-pulse"></div>
      </div>
      
       {/* Introduction text with animated typing effect */}
       <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 tracking-tight text-center relative z-10">
        Hi, I'm <span className="text-blue-400">Kelvin</span>
      </h1>

      <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light text-center relative z-10">
        <span className="typed-text">Web developer & UI/UX enthusiast</span>
      </div>

     {/* Social media links */}
     <div className="flex items-center gap-6 justify-center relative z-10 mb-8">
        <a href="https://github.com/kelvin-2" target="_blank" rel="noopener noreferrer" 
           className="text-gray-300 hover:text-white p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 group">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        
        <a href="www.linkedin.com/in/tichaona-kelvin-mudzingwa-a9122226a" target="_blank" rel="noopener noreferrer" 
           className="text-gray-300 hover:text-white p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 group">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        
        <a href="mailto:tkmudzingwa@gmail.com" 
           className="text-gray-300 hover:text-white p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 group">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        
      </div>

       {/* Scroll indicator */}
       <div className="absolute bottom-8 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
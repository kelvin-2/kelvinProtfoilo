import React from "react";
import { motion } from "framer-motion"
import kelvinImage from '../assets/kelvinimage.png';

function Hero() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Profile image with glowing effect */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-3 border-gray-700 relative z-10 shadow-2xl">
          <img 
            src={kelvinImage} 
            alt="Kelvin" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 animate-pulse"></div>
      </motion.div>
      
      {/* Introduction text */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 tracking-tight text-center leading-tight"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I'm <span className="text-blue-400">Kelvin</span>
      </motion.h1>

      <motion.div
        className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 font-light text-center max-w-sm sm:max-w-2xl leading-relaxed"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="typed-text">Web developer & UI/UX enthusiast</span>
      </motion.div>

      {/* Social media links */}
      <motion.div
        className="flex items-center gap-4 sm:gap-6 justify-center mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a 
          href="https://github.com/kelvin-2" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white active:text-blue-400 p-3 sm:p-4 rounded-full bg-gray-800/30 hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-300 group backdrop-blur-sm touch-manipulation"
          aria-label="GitHub Profile"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-active:scale-95 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/tichaona-kelvin-mudzingwa-a9122226a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white active:text-blue-400 p-3 sm:p-4 rounded-full bg-gray-800/30 hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-300 group backdrop-blur-sm touch-manipulation"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-active:scale-95 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        
        <a 
          href="mailto:tkmudzingwa@gmail.com" 
          className="text-gray-300 hover:text-white active:text-blue-400 p-3 sm:p-4 rounded-full bg-gray-800/30 hover:bg-gray-700/50 active:bg-gray-600/50 transition-all duration-300 group backdrop-blur-sm touch-manipulation"
          aria-label="Email Contact"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-active:scale-95 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </motion.div>

      {/* Call-to-action button */}
      <motion.div
        className="mb-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-medium transition-all duration-300 touch-manipulation shadow-lg hover:shadow-xl text-base sm:text-lg">
          View My Work
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}

export default Hero;
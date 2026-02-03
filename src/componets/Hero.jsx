import React, { useState } from "react";
import { motion } from "framer-motion";
import kelvinImage from '../assets/kelvinimage.png';

function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const scrollToWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kelvin-2',
      icon: (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      ),
      color: 'from-purple-400 to-pink-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tichaona-kelvin-mudzingwa-a9122226a',
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </>
      ),
      color: 'from-cyan-400 to-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:tkmudzingwa@gmail.com',
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </>
      ),
      color: 'from-lime-400 to-green-400'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-8 relative overflow-hidden">
      
      {/* Profile image with enhanced glowing effect */}
      <motion.div
        className="relative mb-6 sm:mb-8 z-10"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.34, 1.56, 0.64, 1],
          type: "spring"
        }}
      >
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden relative z-20"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 p-1 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img 
                src={kelvinImage} 
                alt="Kelvin" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Animated rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400/50"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
        />
        
        {/* Glow effects - reduced on mobile */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-xl sm:blur-2xl opacity-30 sm:opacity-40 animate-pulse"></div>
      </motion.div>
      
      {/* Introduction text with playful animation */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-3 sm:mb-4 tracking-tight text-center leading-tight z-10 px-2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        Hi, I'm{" "}
        <motion.span 
          className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          Kelvin
        </motion.span>
      </motion.h1>

      <motion.div
        className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 md:mb-10 font-light text-center max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed z-10 px-2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Full-Stack Developer
          </span>
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 1 }}
          />
        </span>
      </motion.div>

      {/* Social media links with tooltips */}
      <motion.div
        className="flex items-center gap-3 sm:gap-5 md:gap-7 justify-center mb-8 sm:mb-10 z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7 + (index * 0.1),
              ease: [0.34, 1.56, 0.64, 1]
            }}
            onHoverStart={() => setHoveredIcon(social.name)}
            onHoverEnd={() => setHoveredIcon(null)}
          >
            {/* Tooltip - hidden on mobile, shown on hover for desktop */}
            <motion.div
              className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: hoveredIcon === social.name ? 1 : 0,
                y: hoveredIcon === social.name ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
            >
              {social.name}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </motion.div>

            <motion.a 
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative block p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`${social.name} Profile`}
            >
              {/* Ripple effect on click */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 group-active:opacity-30`}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon glow - reduced on mobile */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} blur-lg sm:blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 text-gray-300 group-hover:text-white transition-colors" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {social.icon}
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced call-to-action button */}
      <motion.div
        className="mb-12 sm:mb-16 z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.button 
          onClick={scrollToWork}
          className="relative px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          />
          
          {/* Button glow - reduced on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-lg sm:blur-xl opacity-50 sm:opacity-60 group-hover:opacity-80 transition-opacity"></div>
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
          <span className="relative z-10 text-white flex items-center gap-2">
            View My Work
            <motion.svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
        </motion.button>
      </motion.div>

      {/* Playful scroll indicator - hidden on very small screens */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
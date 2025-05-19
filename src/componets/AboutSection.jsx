import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-20% 0px -20% 0px" });
  
  // Parallax effect for the background elements
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="about-section" ref={aboutRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl font-bold mb-16 text-center relative"
        >
          About <span className="text-blue-400">Me</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></span>
        </motion.h2>
        
        <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left column - Image with animated border */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Profile image container */}
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-blue-400/30 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                    <img 
                      src="images/kelvinimage.png" 
                      alt="Kelvin" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Animated ring */}
                <div className="absolute inset-0 border-4 border-blue-400/25 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Text content */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {/* Enhanced bio card with glass effect */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/40 backdrop-blur-md rounded-xl p-8 border border-gray-700/30 shadow-lg"
              >
                <h3 className="text-blue-400 font-semibold text-xl mb-4">Who I Am</h3>
                <div className="space-y-4 text-gray-200">
                  <p className="leading-relaxed">
                    Computer Science student at Nelson Mandela University with a passion for building thoughtful, user-friendly software.
                  </p>
                  
                  <p className="leading-relaxed">
                    I work across the full web stack — crafting responsive front-end interfaces in React and developing robust back-end systems with Supabase and Node.js.
                  </p>
                  
                  <p className="leading-relaxed">
                    Outside of coding, I enjoy music, tech podcasts, and exploring creative ways to blend design with functionality.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;


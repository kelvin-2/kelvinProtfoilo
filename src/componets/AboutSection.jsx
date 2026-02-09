import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-20% 0px -20% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // const highlights = [
  //   { number: "0+", label: "Years Experience" },
  //   { number: "5+", label: "Projects Completed" },
  //   { number: "100%", label: "Client Satisfaction" },
  //   { number: "24/7", label: "Dedicated Support" },
  // ];

  return (
    <div 
      id="about-section"
      ref={aboutRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, ${
                ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981'][Math.floor(Math.random() * 5)]
              }, transparent)`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-400/30 backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.4)",
              ],
            }}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 font-semibold text-sm md:text-base">
              Full-Stack Developer & Designer
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-6 max-w-4xl">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Crafting</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Digital Experiences
              </span>
              <br />
              <span className="text-white">That Matter</span>
            </motion.h2>

            <motion.div
              className="flex gap-2 justify-center"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="h-1.5 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="h-1.5 w-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a passionate developer who transforms ideas into elegant, functional web applications. 
              With a keen eye for design and a love for clean code, I build digital solutions that not 
              only look stunning but deliver exceptional user experiences.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              From concept to deployment, I handle every aspect of web development—crafting intuitive 
              interfaces, architecting robust backends, and ensuring seamless performance. My approach 
              combines technical excellence with creative problem-solving to bring your vision to life.
            </p>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {item.number}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm mt-1">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          {/* <motion.div
            className="flex flex-wrap gap-4 pt-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Collaborate</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div> */}
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
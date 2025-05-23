import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Skills() {
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

  // Tech stack data - only icons
  const techIcons = [
    "devicon-csharp-plain",
    "devicon-html5-plain",
    "devicon-vitejs-plain",
    "devicon-javascript-plain",
    "devicon-tailwindcss-plain",
    "devicon-react-original",
    "devicon-nodejs-plain",
    "devicon-java-plain",
    "devicon-postgresql-plain",
    "devicon-python-plain",
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-npm-original-wordmark",
    "devicon-vscode-plain",
    "devicon-linux-plain",
  ];

  // Skill categories
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["C#", "Node.js", "Java"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "Supabase"]
    }
  ];

  // Skill proficiency data
  const proficiencySkills = [
    { skill: "C#", level: 95 },
    { skill: "HTML/CSS", level: 90 },
    { skill: "JavaScript", level: 88 },
    { skill: "React", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Java", level: 75 },
    { skill: "PostgreSQL", level: 82 },
    { skill: "Supabase", level: 78 }
  ];

  return (
    <div id="about-section" ref={aboutRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center relative"
        >
          Tech <span className="text-blue-400">Stack</span>
          <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-blue-400 rounded-full"></span>
        </motion.h2>
        
        {/* Animated tech stack carousel */}
        <div className="overflow-hidden mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {techIcons.concat(techIcons).map((icon, index) => (
              <div key={index} className="mx-4 sm:mx-6 lg:mx-8 flex-shrink-0">
                <i className={`${icon} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-400 hover:text-blue-300 transition-colors duration-300`}></i>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mb-12 sm:mb-16"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-blue-900/20 hover:border-blue-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-blue-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + (idx * 0.2) + (skillIdx * 0.1) }}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                    ></motion.div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills proficiency bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-4xl mx-auto"
        >
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">Proficiency</h3>
          <div className="space-y-4 sm:space-y-6">
            {proficiencySkills.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="w-full">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="text-blue-300 text-sm sm:text-base font-medium">{item.skill}</span>
                  <span className="text-gray-400 text-sm sm:text-base font-mono">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-blue-900/30 rounded-full h-1.5 sm:h-2 relative overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.2 + (idx * 0.1),
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* CDN for devicons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
      />
    </div>
  );
}

export default Skills;
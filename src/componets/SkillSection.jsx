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

  // Tech stack data
  const techStack = [
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Supabase", icon: "simple-icons:supabase" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    // Duplicate icons to create continuous flow
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
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
          Tech <span className="text-blue-400">Stack</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></span>
        </motion.h2>
        
        {/* Animated tech stack carousel */}
        <div className="w-full overflow-hidden mb-20">
          <motion.div 
            className="flex items-center"
            animate={{ x: [0, -1500] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center mx-8">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-blue-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <i className={`${tech.icon} text-4xl md:text-5xl text-blue-400`}></i>
                </div>
                <p className="mt-2 text-blue-300 text-sm">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-blue-900/20 transition-all duration-300"
            >
              <h3 className="text-blue-400 text-xl font-bold mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center text-gray-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + (idx * 0.2) + (skillIdx * 0.1) }}
                      className="w-2 h-2 bg-blue-400 rounded-full mr-2"
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
          className="mt-16 w-full"
        >
          <h3 className="text-white text-2xl font-bold mb-8 text-center">Proficiency</h3>
          <div className="space-y-6">
            {["C#", "HTML/CSS", "JavaScript", "React", "Node.js", "Java", "PostgreSQL", "Supabase"].map((skill, idx) => (
              <motion.div key={idx} variants={itemVariants} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-blue-300">{skill}</span>
                  <span className="text-gray-400">
                    {Math.floor(70 + Math.random() * 30)}%
                  </span>
                </div>
                <div className="w-full bg-blue-900/30 rounded-full h-2">
                  <motion.div
                    className="bg-blue-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${70 + Math.random() * 30}%` }}
                    transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
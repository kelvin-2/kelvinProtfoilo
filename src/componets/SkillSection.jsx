import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Skills() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, margin: "-20% 0px -20% 0px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Tech stack with color mappings
  const techStack = [
    { icon: "devicon-csharp-plain", name: "C#", color: "#68217A", glow: "#9B4DCA" },
    { icon: "devicon-html5-plain", name: "HTML5", color: "#E34F26", glow: "#FF6B45" },
    { icon: "devicon-vitejs-plain", name: "Vite", color: "#646CFF", glow: "#747BFF" },
    { icon: "devicon-javascript-plain", name: "JavaScript", color: "#F7DF1E", glow: "#FFE866" },
    { icon: "devicon-tailwindcss-plain", name: "Tailwind", color: "#06B6D4", glow: "#22D3EE" },
    { icon: "devicon-react-original", name: "React", color: "#61DAFB", glow: "#7DE7FF" },
    { icon: "devicon-nodejs-plain", name: "Node.js", color: "#339933", glow: "#4DB84D" },
    { icon: "devicon-java-plain", name: "Java", color: "#007396", glow: "#00A8E0" },
    { icon: "devicon-postgresql-plain", name: "PostgreSQL", color: "#4169E1", glow: "#5B7FE6" },
    { icon: "devicon-python-plain", name: "Python", color: "#3776AB", glow: "#4B8BBF" },
    { icon: "devicon-git-plain", name: "Git", color: "#F05032", glow: "#FF6B52" },
    { icon: "devicon-github-original", name: "GitHub", color: "#181717", glow: "#4A4A4A" },
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Crafting beautiful, responsive user interfaces",
      skills: [
        { name: "HTML & CSS", level: 90, icon: "🎨" },
        { name: "JavaScript (ES6+)", level: 88, icon: "⚡" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Tailwind CSS", level: 87, icon: "🎭" },
      ],
      gradient: "from-cyan-500 via-blue-500 to-purple-500"
    },
    {
      category: "Backend Development",
      description: "Building robust server-side solutions",
      skills: [
        { name: "C# & .NET", level: 95, icon: "💎" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Java", level: 75, icon: "☕" },
        { name: "REST APIs", level: 85, icon: "🔌" },
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      category: "Database & Tools",
      description: "Managing data and development workflow",
      skills: [
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "Supabase", level: 78, icon: "⚡" },
        { name: "Git & GitHub", level: 88, icon: "🔀" },
        { name: "VS Code", level: 92, icon: "💻" },
      ],
      gradient: "from-pink-500 via-rose-500 to-red-500"
    }
  ];

  return (
    <div 
      id="about-section" 
      ref={aboutRef} 
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0E27] px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      style={{
        fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ 
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          y: y1
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ 
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          y: y2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{ 
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          rotate
        }}
      />

      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Skills & Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of technologies and tools I wield to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Floating Tech Icons Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-24"
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              onHoverStart={() => setHoveredSkill(tech.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-gray-500/50">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${tech.glow}40 0%, transparent 70%)` }}
                />
                
                {/* Icon */}
                <i 
                  className={`${tech.icon} text-4xl sm:text-5xl relative z-10 transition-all duration-300`}
                  style={{ 
                    color: tech.color,
                    filter: hoveredSkill === tech.name ? `drop-shadow(0 0 20px ${tech.glow})` : 'none'
                  }}
                />
                
                {/* Tech name on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredSkill === tech.name ? 1 : 0, y: hoveredSkill === tech.name ? 0 : 10 }}
                  className="absolute bottom-2 left-0 right-0 text-center"
                >
                  <span className="text-xs font-semibold text-white px-2 py-1 bg-black/60 rounded-full backdrop-blur-sm">
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl" />
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              <div className="absolute inset-[1px] bg-[#0A0E27] rounded-3xl" />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Category header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) + (skillIdx * 0.05) }}
                      className="group/skill"
                    >
                      {/* Skill name and level */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-200 font-medium text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs font-mono tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                        {/* Background glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.6 + (idx * 0.1) + (skillIdx * 0.05), ease: "easeOut" }}
                        />
                        
                        {/* Actual progress */}
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.6 + (idx * 0.1) + (skillIdx * 0.05), ease: "easeOut" }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-gray-700/30 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">Continuously learning and evolving</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Devicons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
      />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default Skills;
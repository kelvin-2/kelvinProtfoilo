import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, X, Sparkles, Code2, Palette, Layers, GraduationCap, Building2 } from 'lucide-react';
import Uinstay from '../assets/uinStay.png';
import Music from '../assets/music.png';
import Portfolio from '../assets/portofolio.png';

function Projects() {
  const projectsRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const isInView = useInView(projectsRef, { once: false, margin: "-10% 0px -10% 0px" });
  
  // Parallax effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "uinStay – Student Accommodation Finder",
      description: "A responsive web app for students to search and explore off-campus accommodation options with real-time filters and location-based results.",
      longDescription: "uinStay is a student-focused accommodation platform designed to simplify the process of finding suitable housing near campus. It features real-time search filters, interactive property listings, and mobile-friendly navigation. The app connects seamlessly with a Supabase backend for efficient data management and includes developer tools for streamlined debugging.",
      image: Uinstay, 
      techStack: ["React", "Supabase", "Tailwind CSS", "PostgreSQL", "Vite"],
      features: [
        "Location-based property search",
        "Filter by price range and payment methods",
        "Responsive, mobile-friendly interface",
        "Developer debug tools for easy testing"
      ],
      liveLink: "https://uinstay.netlify.app/",
      codeLinks: [
        { label: "Frontend", url: "https://github.com/kelvin-2/uin-Stay" },
        { label: "Backend", url: "https://github.com/YOUR-USERNAME/uin-stay-backend" } // Update with actual backend repo URL
      ],
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      thumbnailIcon: Layers,
      thumbnailColor: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      title: "Kingdom Christian College Website",
      description: "A modern, responsive school website with integrated CMS for easy content management by staff members.",
      longDescription: "Designed and developed a complete website solution for Kingdom Christian College, featuring a clean and user-friendly interface that significantly improved the school's online presence. Integrated Sanity CMS to empower staff with the ability to update content independently without technical knowledge. Collaborated closely with stakeholders to understand requirements and deliver custom features tailored to the school's needs.",
      image: null,
      techStack: ["React", "Sanity CMS", "Tailwind CSS", "Responsive Design"],
      features: [
        "Integrated Sanity CMS for easy content updates",
        "Modern, clean user interface",
        "Fully responsive design across all devices",
        "Custom features based on stakeholder requirements"
      ],
      liveLink: "https://kccschool.co.za/",
      codeLinks: null,
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      thumbnailIcon: GraduationCap,
      thumbnailColor: "from-blue-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Emanzini Guest Lounge Booking System",
      description: "A full-stack booking management system for a guest lounge, featuring secure authentication and an intuitive booking interface.",
      longDescription: "Developed a comprehensive booking system for Emanzini Guest Lounge that streamlines the entire reservation process. The system includes robust database architecture, secure user authentication, and separate interfaces for customers and management. Built with scalability in mind and deployed to production, meeting all client requirements and timelines. Handles booking management, customer information, and administrative tasks efficiently.",
      image: null,
      techStack: ["React", "Node.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
      features: [
        "Secure user authentication system",
        "Intuitive booking interface for customers",
        "Management dashboard for administrators",
        "Database architecture with PostgreSQL",
        "Production deployment and maintenance"
      ],
      liveLink: null,
      codeLinks: null,
      gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
      thumbnailIcon: Building2,
      thumbnailColor: "from-amber-500 to-orange-500"
    },
    {
      id: 5,
      title: "TheLee Playlist – Personal Music Showcase",
      description: "A personal music hub to explore my favorite albums, artists, and musical insights, with future plans for Spotify integration.",
      longDescription: "TheLee Playlist is a web-based music portfolio where I share my top albums, artist highlights, and personal music takes—from timeless classics to hidden gems. Designed with simplicity and clarity in mind, the site features clean navigation and responsive layouts. Future iterations aim to integrate the Spotify API for live track previews and dynamic music data.",
      image: Music,
      techStack: ["React", "Spotify API", "CSS"],
      features: [
        "Curated list of favorite albums with descriptions",
        "Artist spotlights and personal rankings",
        "Clean, responsive user interface",
        "Planned Spotify API integration for audio previews"
      ],
      codeLinks: [
        { label: "Source Code", url: "https://github.com/kelvin-2/theLeePlaylist" }
      ],
      gradient: "from-pink-500/20 via-rose-500/20 to-orange-500/20",
      thumbnailIcon: Sparkles,
      thumbnailColor: "from-pink-500 to-orange-500"
    },
  ];

  // Swipe handlers for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextProject();
    }
    if (touchStart - touchEnd < -75) {
      prevProject();
    }
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProjectDetails = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeProject) {
        closeProjectDetails();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeProject]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div 
      id="projects-section" 
      ref={projectsRef} 
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Enhanced background with animated gradients */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse delay-500"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px]"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Projects & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Creations</span>
          </h2>
          
          <motion.div 
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: isMobile ? 96 : 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base lg:text-lg px-4 leading-relaxed">
            A curated collection of projects showcasing modern web development, 
            creative problem-solving, and user-centric design principles.
          </p>
        </motion.div>
        
        {/* Mobile Carousel View */}
        {isMobile ? (
          <div className="relative px-4">
            <motion.div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <ProjectCard 
                      project={project} 
                      openProjectDetails={openProjectDetails}
                      index={index}
                      isInView={isInView}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? 'w-8 h-2 bg-blue-400' 
                      : 'w-2 h-2 bg-blue-500/30'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid View */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project} 
                openProjectDetails={openProjectDetails}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
      
      {/* Enhanced Modal */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          closeProjectDetails={closeProjectDetails}
        />
      )}
    </div>
  );
}

// Thumbnail Component for projects without images
const ProjectThumbnail = ({ project }) => {
  const Icon = project.thumbnailIcon || Code2;
  
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${project.thumbnailColor} flex items-center justify-center overflow-hidden`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Main Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Icon className="w-24 h-24 md:w-32 md:h-32 text-white/80" strokeWidth={1.5} />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-white/30"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/50"></div>
    </div>
  );
};

// Separate Project Card Component - Now Clickable
const ProjectCard = ({ project, openProjectDetails, index, isInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => openProjectDetails(project)}
      className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-blue-500/20 cursor-pointer`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
      
      {/* Click indicator */}
      <motion.div
        className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        Click to view details
      </motion.div>
      
      {/* Project Image or Thumbnail */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden">
        {project.image ? (
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <ProjectThumbnail project={project} />
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Floating tech badges */}
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[60%]">
          {project.techStack.slice(0, 2).map((tech, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20 font-medium"
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 2 && (
            <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
              +{project.techStack.length - 2}
            </span>
          )}
        </div>
        
        {/* Project number badge */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center">
            <span className="text-blue-300 font-bold text-lg">0{project.id}</span>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="relative p-6 flex-grow flex flex-col bg-black/40 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white text-xl md:text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <Code2 className="w-5 h-5 text-blue-400 flex-shrink-0 ml-2 group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              openProjectDetails(project);
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4" />
            View Details
          </motion.button>
          
          <div className="flex gap-3">
            {project.liveLink && (
              <motion.a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Live</span>
              </motion.a>
            )}
            {project.codeLinks && project.codeLinks.length > 0 && (
              <>
                {project.codeLinks.length === 1 ? (
                  <motion.a 
                    href={project.codeLinks[0].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </motion.a>
                ) : (
                  project.codeLinks.map((link, idx) => (
                    <motion.a 
                      key={idx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs px-3 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>{link.label}</span>
                    </motion.a>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Separate Modal Component
const ProjectModal = ({ project, closeProjectDetails }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeProjectDetails}
    >
      <motion.div 
        className={`bg-gradient-to-br ${project.gradient} backdrop-blur-2xl border border-white/20 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl`}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image or Thumbnail */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <ProjectThumbnail project={project} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          
          {/* Close button */}
          <motion.button 
            onClick={closeProjectDetails}
            className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/50 flex items-center justify-center">
                <span className="text-blue-300 font-bold">0{project.id}</span>
              </div>
              <Palette className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white text-2xl md:text-4xl font-bold">{project.title}</h3>
          </div>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 md:p-8 bg-black/40 backdrop-blur-sm">
          {/* Description */}
          <div className="mb-8">
            <h4 className="text-blue-300 text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              About This Project
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            <h4 className="text-blue-300 text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-blue-300 text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            {project.liveLink && (
              <motion.a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-base font-medium shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </motion.a>
            )}
            {project.codeLinks && project.codeLinks.length > 0 && (
              <div className="flex-1 flex flex-col sm:flex-row gap-3">
                {project.codeLinks.map((link, idx) => (
                  <motion.a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 hover:bg-white/10 border-2 border-white/20 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-base font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    {link.label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
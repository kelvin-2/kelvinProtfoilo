import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

function Projects() {
  const projectsRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  const isInView = useInView(projectsRef, { once: false, margin: "-10% 0px -10% 0px" });
  
  // Parallax effect for the background elements
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
      longDescription: "This portfolio showcases my skills and projects using modern web technologies. It features smooth page transitions, responsive design for all devices, and interactive elements to improve user engagement. Implemented with accessibility in mind and optimized for performance.",
      image: "images/portofolio.png",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      features: ["Animated UI transitions", "Contact form with validation", "Performance optimized assets"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/kelvin-2/kelvinProtfoilo"
    },
    {
        id: 2,
        title: "uinStay – Student Accommodation Finder",
        description: "A responsive web app for students to search and explore off-campus accommodation options with real-time filters and location-based results.",
        longDescription: "uinStay is a student-focused accommodation platform designed to simplify the process of finding suitable housing near campus. It features real-time search filters, interactive property listings, and mobile-friendly navigation. The app connects seamlessly with a Supabase backend for efficient data management and includes developer tools for streamlined debugging.",
        image: "images/uinStay.png", 
        techStack: ["React", "Supabase", "Tailwind CSS", "PostgreSQL", "Vite"],
        features: [
          "Location-based property search",
          "Filter by price range and payment methods",
          "Responsive, mobile-friendly interface",
          "Developer debug tools for easy testing"
        ],
        liveLink: "https://uin-stay-vtmv.vercel.app/",
        codeLink: "https://github.com/kelvin-2/uin-Stay"
      },
      
      {
        id: 3,
        title: "TheLee Playlist – Personal Music Showcase",
        description: "A personal music hub to explore my favorite albums, artists, and musical insights, with future plans for Spotify integration.",
        longDescription: "TheLee Playlist is a web-based music portfolio where I share my top albums, artist highlights, and personal music takes—from timeless classics to hidden gems. Designed with simplicity and clarity in mind, the site features clean navigation and responsive layouts. Future iterations aim to integrate the Spotify API for live track previews and dynamic music data.",
        image: "images/music.png", // Replace with actual image path
        techStack: ["React", "Spotify API","CSS"],
        features: [
          "Curated list of favorite albums with descriptions",
          "Artist spotlights and personal rankings",
          "Clean, responsive user interface",
          "Planned Spotify API integration for audio previews"
        ],
        // liveLink: "https://example.com", // Replace with actual live site link
        codeLink: "https://github.com/kelvin-2/theLeePlaylist" 
      },

    // {
    //   id: 4,
    //   title: "AI Image Generator",
    //   description: "Web application that uses machine learning to generate unique images based on text prompts.",
    //   longDescription: "This app leverages AI to create unique images from text descriptions. Users can input prompts and receive AI-generated visuals, with options to adjust style, complexity, and artistic influences. The application includes image history, favorites, and sharing capabilities.",
    //   image: "/api/placeholder/600/400",
    //   techStack: ["Python", "TensorFlow", "React", "Flask", "Redis"],
    //   features: ["Text-to-image generation", "Style customization", "Image history", "Social sharing"],
    //   liveLink: "https://example.com",
    //   codeLink: "https://github.com/yourusername/project4"
    // },
    // {
    //   id: 5,
    //   title: "Weather Dashboard",
    //   description: "Interactive weather application with location-based forecasts, historical data comparison, and severe weather alerts.",
    //   longDescription: "A feature-rich weather application that provides users with accurate forecasts, historical weather data, and severe weather alerts. The app includes interactive maps, hourly and weekly forecasts, and customizable notification settings.",
    //   image: "/api/placeholder/600/400",
    //   techStack: ["JavaScript", "React", "Node.js", "OpenWeather API", "Mapbox"],
    //   features: ["Location-based forecasts", "Interactive weather maps", "Historical data", "Weather alerts"],
    //   liveLink: "https://example.com",
    //   codeLink: "https://github.com/yourusername/project6"
    // },
  ];

  // Pagination logic
  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const paginatedProjects = projects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  // Modal function for project details
  const openProjectDetails = (project) => {
    setActiveProject(project);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <div id="projects-section" ref={projectsRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-24 overflow-hidden">
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/6 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Explore my recent work spanning web applications, interactive experiences, and software solutions.
            Each project represents my passion for creating intuitive and impactful digital experiences.
          </p>
        </motion.div>
        
        {/* Projects Grid with improved cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300 flex flex-col shadow-lg shadow-blue-900/5"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" 
              }}
            >
              {/* Project Image with overlay effect */}
              <div className="relative w-full h-48 overflow-hidden group">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Tech stack floating pills on image */}
                <div className="absolute bottom-0 left-0 p-4 flex flex-wrap gap-2 w-full">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-blue-500/30 backdrop-blur-md text-blue-100 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="bg-blue-500/30 backdrop-blur-md text-blue-100 text-xs px-2 py-1 rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-blue-300 text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow text-sm">{project.description}</p>
                
                {/* Links */}
                <div className="flex gap-3 mt-2">
                  <motion.button
                    onClick={() => openProjectDetails(project)}
                    className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-sm px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-center flex-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Details
                  </motion.button>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 text-sm px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Pagination Controls */}
        {pageCount > 1 && (
          <motion.div 
            className="flex justify-center items-center mt-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={prevPage}
              className="bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 p-2 rounded-full transition-all duration-300 border border-blue-500/30 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {[...Array(pageCount)].map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx ? 'bg-blue-400 scale-125' : 'bg-blue-500/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextPage}
              className="bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 p-2 rounded-full transition-all duration-300 border border-blue-500/30 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === pageCount - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
        
        {/* View All Projects */}
        {/* <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="bg-gradient-to-r from-blue-500/30 to-indigo-500/30 hover:from-blue-500/40 hover:to-indigo-500/40 text-blue-100 px-8 py-3 rounded-md transition-all duration-300 border border-blue-400/20 flex items-center shadow-lg shadow-blue-500/5"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div> */}
      </motion.div>
      
      {/* Project Details Modal */}
      {activeProject && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/30 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Modal Header */}
            <div className="relative h-60 overflow-hidden">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
              
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold">{activeProject.title}</h3>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-blue-300 text-lg font-semibold mb-2">About this project</h4>
                <p className="text-gray-300">{activeProject.longDescription}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-blue-300 text-lg font-semibold mb-2">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {activeProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-blue-300 text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <motion.a 
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-md flex items-center justify-center flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </motion.a>
                <motion.a 
                  href={activeProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-blue-500/50 text-blue-300 px-6 py-3 rounded-md flex items-center justify-center flex-1"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Projects;
import React from "react";
import { motion } from "framer-motion"

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20"></div>
        <div className="relative p-1.5 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full">
          <div className="bg-white p-0.5 rounded-full">
            <img 
              src="images/kelvin.png" 
              alt="Kelvin's avatar"
              className="w-32 h-32 rounded-full object-cover shadow-sm" 
            />
          </div>
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-gray-400 text-4xl text-center"
      >
        Hi, I'm <span className="text-blue-500 font-semibold">Kelvin</span>, Web developer
      </motion.h1>
    </div>
  );
}

export default Hero;
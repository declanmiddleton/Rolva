"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B7CFF]/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#FF9F40]/10 rounded-full blur-[120px]" 
      />
    </div>
  );
}

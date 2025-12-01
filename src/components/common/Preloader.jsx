import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  
  const logoVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 1 }
      }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative w-24 h-24 flex justify-center items-center">
        {/* Central Logo */}
        <motion.div
          className="text-purple-400 font-bold text-6xl"
          variants={logoVariants}
        >
          K
        </motion.div>
        
        {/* Animated Lines */}
        {/* Horizontal */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-purple-500"
          variants={lineVariants}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-purple-500"
          variants={lineVariants}
        />
        {/* Vertical */}
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-purple-500 origin-top"
          variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.5, delay: 0.5 }}}}
        />
        <motion.div
          className="absolute top-0 right-0 w-px h-full bg-purple-500 origin-top"
          variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.5, delay: 0.5 }}}}
        />
      </div>
      <motion.p 
        className="text-purple-400 mt-4 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        LOADING...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;

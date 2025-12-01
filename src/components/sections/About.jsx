import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Target, Zap, Code, Brain, User } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import GlitchText from '../common/GlitchText'

const StatCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])
  
  return <span>{count}{suffix}</span>
}

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: 3, icon: Code, suffix: '+' },
    { label: 'Technologies', value: 20, icon: Zap, suffix: '+' },
    { label: 'Years Experience', value: 1, icon: Target, suffix: '+' },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
      {/* Separator line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-75 blur-sm z-0" />
      
      {/* Full section gradient overlay - transparent top, visible bottom */}
      <div className="absolute inset-0 pointer-events-none z-0 dark:bg-gradient-to-b dark:from-transparent dark:via-black/25 dark:to-black/55" />
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-black dark:text-white">About </span>
          <GlitchText text="Me" className="from-purple-400 to-pink-400 inline-block" />
        </motion.h2>

        {/* Profile Picture Section */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Animated Border Rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-purple-500/30" />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-pink-500/30" />
            </motion.div>

            {/* Profile Picture Container */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/70 shadow-2xl shadow-purple-500/30"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              {/* Profile Image - Replace with your actual image */}
              <img
                src={`${import.meta.env.BASE_URL}profile-picture.jpg`} // Put your image in public folder
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              
              {/* Fallback Avatar Icon */}
              <div 
                className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500"
                style={{ display: 'none' }}
              >
                <User size={100} className="text-white/80" />
              </div>

              {/* Floating Particles on Hover */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${10 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Bio */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-grow bg-slate-100 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/40 hover:border-purple-500/40 transition-all group">
              <motion.div 
                className="inline-block p-3 bg-purple-500/10 rounded-lg mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-8 h-8 text-purple-400" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                My Journey
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            I&apos;m a passionate and innovative Computer Engineering student with a strong focus on Machine Learning and AI. My journey in technology is driven by a curiosity to understand and build intelligent systems that solve real-world problems.
              </p>
              
              <div className="my-4" /> {/* Separator */}
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently focusing on machine learning fundamentals and real-world projects. 
                I&apos;m passionate about exploring new technologies and applying them to solve complex problems.
              </p>
              
              <div className="my-4" /> {/* Separator */}
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My goal is to leverage AI and machine learning to build innovative solutions that impact society positively. I thrive in environments that challenge me to learn and grow, constantly seeking new knowledge and hands-on experience in cutting-edge technologies.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-purple-500/10 p-4 rounded-lg border-2 border-purple-500/40 backdrop-blur-sm hover:bg-purple-500/10 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-6 h-6 text-purple-400 mb-2 group-hover:animate-bounce" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="font-semibold text-purple-400">{personalInfo.location}</p>
              </motion.div>

              <motion.div 
                className="bg-pink-500/10 p-4 rounded-lg border-2 border-pink-500/40 backdrop-blur-sm hover:bg-pink-500/20 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-6 h-6 text-pink-400 mb-2 group-hover:animate-spin" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Focus</p>
                <p className="font-semibold text-pink-400">ML & AI</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex-grow bg-slate-100 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/40">
              <h3 className="text-2xl font-bold mb-8">Quick Stats</h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-400/20 dark:bg-slate-700/30 hover:bg-purple-500/10 transition-all">
                      <motion.div 
                        className="p-3 bg-purple-500/20 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="w-6 h-6 text-purple-400" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-purple-400 mb-1">
                          <StatCounter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Preview */}
            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/40"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
                Core Competencies
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'React', 'Node.js', 'TensorFlow'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800/50 rounded-full border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
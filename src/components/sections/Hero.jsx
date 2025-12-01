import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Brain, Sparkles, Code, Download } from 'lucide-react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// Data Imports
import { personalInfo } from '../../data/personalInfo'
import { useScrollTo } from '../../hooks/useScrollTo'
import GlitchText from '../common/GlitchText'



// =====================================
//  Background Neural Network
// =====================================
const NeuralNetwork = () => {
  const nodes = [
    { x: 15, y: 40, layer: 0 },
    { x: 15, y: 60, layer: 0 },
    { x: 50, y: 35, layer: 1 },
    { x: 50, y: 50, layer: 1 },
    { x: 50, y: 65, layer: 1 },
    { x: 85, y: 45, layer: 2 },
    { x: 85, y: 55, layer: 2 }
  ]

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((targetNode, j) => {
          const k = i + 1 + j
          if (targetNode.layer === node.layer + 1) {
            return (
              <motion.line
                key={`${i}-${k}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                className="text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            )
          }
          return null
        })
      )}
    </svg>
  )
}

// =====================================
//  Main Hero Component
// =====================================
const Hero = () => {
  const scrollToSection = useScrollTo()
  const [currentRole, setCurrentRole] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const roles = [
    'ML Enthusiast',
    'Computer Engineering Student',
    'IoT & Sensor Developer',
    'Future ML Engineer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = personalInfo.resume
    link.download = 'Kisal_Kavinda_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-8 pb-8 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75 blur-sm z-0" />
      <div className="absolute inset-0 pointer-events-none z-0 dark:bg-gradient-to-b dark:from-transparent dark:via-black/25 dark:to-black/55" />
      <NeuralNetwork />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-block relative mb-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <motion.div
                className="absolute inset-0 bg-purple-600 rounded-full opacity-60 blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative p-4 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/30">
                <Brain size={64} className="text-purple-400" />
              </div>
            </motion.div>

            <motion.div
              className="mb-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-purple-400 font-mono text-sm sm:text-base">
                <Sparkles className="w-4 h-4" />
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <GlitchText
                text={personalInfo.name}
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                delay={0.3}
              />
            </motion.h1>

            <div className="h-16 sm:h-20 mb-2 relative overflow-hidden">
              <AnimatePresence mode='wait'>
                <motion.h2
                  key={roles[currentRole]}
                  className="absolute inset-x-0 text-xl md:text-2xl lg:text-3xl font-semibold text-pink-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I&apos;m an innovative Computer Engineering student passionate about crafting intelligent systems and exploring emerging technologies.
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start flex-wrap mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="group px-8 py-3 border-2 border-purple-600 hover:bg-purple-600/20 rounded-lg font-semibold transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {['TensorFlow', 'Python', 'HTML', 'CSS', 'Java', 'PHP', 'PyCharm'].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm text-gray-700 dark:text-purple-300 hover:border-purple-500/50 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN (3D Model) ================= */}
          <motion.div
            className="w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px] relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[550px] aspect-square mx-auto cursor-pointer group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* ✅ Fixed Lottie Animation (centered & proportional) */}
              <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                animate={{
                  scale: isHovering ? 1.08 : 1,
                  rotate: isHovering ? 3 : 0
                }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 180 }}
              >
                <DotLottieReact
                  src={`${import.meta.env.BASE_URL}animations/Animation - 1708102454731.json`}
                  loop
                  autoplay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.3 },
            y: { duration: 2, repeat: Infinity }
          }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
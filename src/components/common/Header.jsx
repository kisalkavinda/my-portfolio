import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Navigation from './navigation'
import ThemeToggle from './ThemeToggle'
import { personalInfo } from '../../data/personalInfo'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Include ALL sections including tech-stack and github-stats
  const activeSection = useScrollSpy([
    'home', 
    'about', 
    'skills', 
    'tech-stack',
    'projects', 
    'github-stats',
        'certificates',
        'neural-network',
        'contact'  ])

  return (
          <motion.header
            className="fixed top-0 w-full bg-slate-100 dark:bg-slate-900 backdrop-blur-md z-50 border-b-2 border-purple-500/40 
                       dark:bg-gradient-to-r dark:from-purple-900/20 dark:via-slate-900 dark:to-purple-900/20 dark:bg-[length:400%_400%] dark:animate-gradient"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.name.split(' ')[0]}
        </motion.h1>

        <Navigation 
          activeSection={activeSection} 
          className="hidden md:flex gap-8" 
        />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[var(--bg-secondary)] dark:bg-slate-900 border-t border-purple-500/20 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navigation 
              activeSection={activeSection} 
              className="flex flex-col w-full" 
              onItemClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
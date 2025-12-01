import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../../hooks/useDarkMode.jsx'

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default ThemeToggle
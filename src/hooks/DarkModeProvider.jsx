import React, { useState, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Always start with dark mode

  useEffect(() => {
    // Always set to dark mode on initial load
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const value = {
    darkMode,
    toggleDarkMode,
    setDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
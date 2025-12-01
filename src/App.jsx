import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import { Routes, Route } from 'react-router-dom' // <--- Removed BrowserRouter from here
import { DarkModeProvider } from './hooks/DarkModeProvider.jsx'
import Landing from './components/sections/Landing'
import ProjectDetails from './components/sections/ProjectDetails'
import MainLayout from './components/MainLayout'

function App() {
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    })
    AOS.refresh()
  }, [])

  const handleLandingComplete = () => {
    setShowLanding(false)
  }

  // Gets the base path from vite.config.js (e.g., '/my-portfolio/' on GitHub, '/' on localhost)
  // We remove the trailing slash for cleaner URL joining, unless it's just '/'
  const basePath = import.meta.env.BASE_URL.endsWith('/') && import.meta.env.BASE_URL !== '/'
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;

  return (
    <DarkModeProvider>
      {/* REMOVED <BrowserRouter> wrapper. It is now handled in main.jsx */}
      
      {showLanding ? (
        <Landing onComplete={handleLandingComplete} />
      ) : (
        <div className="min-h-screen bg-[var(--bg-primary)] dark:bg-slate-900 text-[var(--text-primary)] dark:text-white transition-colors duration-500 w-full overflow-x-hidden">
          <Routes>
            {/* We update the paths to include the basePath.
              - On Localhost: basePath is '/' -> path matches "/"
              - On GitHub: basePath is '/my-portfolio' -> path matches "/my-portfolio"
            */}
            <Route path={`${basePath === '/' ? '/' : basePath}`} element={<MainLayout />} />
            <Route path={`${basePath === '/' ? '' : basePath}/project/:id`} element={<ProjectDetails />} />
          </Routes>
        </div>
      )}
      
    </DarkModeProvider>
  )
}

export default App
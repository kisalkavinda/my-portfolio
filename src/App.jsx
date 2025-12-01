import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

  return (
    <DarkModeProvider>
      <BrowserRouter>
        {showLanding ? (
          <Landing onComplete={handleLandingComplete} />
        ) : (
          <div className="min-h-screen bg-[var(--bg-primary)] dark:bg-slate-900 text-[var(--text-primary)] dark:text-white transition-colors duration-500 w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
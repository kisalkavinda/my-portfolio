import React from 'react'
import { useScrollTo } from '../../hooks/useScrollTo'

const Navigation = ({ activeSection, className = '', onItemClick }) => {
  const scrollToSection = useScrollTo()

  const navItems = [
    { id: 'home', label: 'Home', sections: ['home'] },
    { id: 'about', label: 'About', sections: ['about'] },
    { id: 'skills', label: 'Skills', sections: ['skills', 'tech-stack'] }, // Groups skills and tech-stack
    { id: 'projects', label: 'Projects', sections: ['projects', 'github-stats'] }, // Groups projects and github
    { id: 'certificates', label: 'Certificates', sections: ['certificates'] },
    { id: 'contact', label: 'Contact', sections: ['contact'] }
  ]

  const handleClick = (sectionId) => {
    scrollToSection(sectionId)
    if (onItemClick) {
      onItemClick()
    }
  }

  // Check if current section matches any of the item's sections
  const isActive = (item) => {
    return item.sections.includes(activeSection)
  }

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-4 py-2 text-base transition-all duration-300 ${
            isActive(item)
              ? 'text-purple-400 font-semibold scale-105' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-purple-600/20 hover:text-purple-300 rounded-md'
          }`}
        >
          {item.label}  
        </button>
      ))}
    </nav>
  )
}

export default Navigation
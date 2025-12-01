import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Share2 } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'

const SocialLinks = ({ isSocialLinksOpen, setIsSocialLinksOpen, setIsChatbotOpen }) => {
  // Use the global state for `isExpanded`
  // const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      color: 'hover:bg-gray-700',
      bgColor: 'bg-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      color: 'hover:bg-purple-600',
      bgColor: 'bg-purple-500'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:bg-sky-500',
      bgColor: 'bg-sky-400'
    }
  ]

  return (
    <div className="fixed right-8 bottom-[6.5rem] z-40 no-print">
      {/* Social Links */}
      <AnimatePresence>
        {isSocialLinksOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${link.bgColor} text-white rounded-full shadow-lg ${link.color} transition-all group relative`}
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                
                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => {
          setIsSocialLinksOpen(!isSocialLinksOpen)
          if (!isSocialLinksOpen) {
            setIsChatbotOpen(false)
          }
        }}
        className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isSocialLinksOpen ? 45 : 0 }}
      >
        <Share2 size={24} />
      </motion.button>

      {/* Pulse Animation */}
      {!isSocialLinksOpen && (
        <motion.div
          className="absolute inset-0 bg-purple-500 rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  )
}

export default SocialLinks
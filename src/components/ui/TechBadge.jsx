import { motion } from 'framer-motion'

const TechBadge = ({ tech, delay = 0 }) => {
  return (
    <motion.span
      className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-purple-400 hover:from-purple-500/20 hover:to-pink-500/20 transition-all cursor-default group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.1, y: -2 }}
    >
      <span className="group-hover:text-pink-400 transition-colors">{tech}</span>
    </motion.span>
  )
}

export default TechBadge
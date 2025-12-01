import React from 'react'
import { motion } from 'framer-motion'

export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20">
      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
        <div className="h-4 bg-slate-400/30 dark:bg-slate-700/50 rounded w-3/4 animate-pulse" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
          <div className="h-6 w-20 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 flex-1 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
          <div className="h-10 flex-1 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export const SkillCardSkeleton = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 space-y-4">
      <div className="w-16 h-16 bg-slate-400/30 dark:bg-slate-700/50 rounded-full animate-pulse" />
      <div className="h-6 bg-slate-400/30 dark:bg-slate-700/50 rounded w-2/3 animate-pulse" />
      <div className="h-2 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
      <div className="h-4 bg-slate-400/30 dark:bg-slate-700/50 rounded animate-pulse" />
    </div>
  )
}

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-purple-500 rounded-full" />
        </motion.div>
        
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-purple-400">Loading</h3>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PageLoader
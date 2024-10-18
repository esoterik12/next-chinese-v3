'use client'
import { motion } from 'framer-motion'

interface AnimatedToggleProps {
  motionKey: string
  children: React.ReactNode
}

const AnimatedToggle = ({ motionKey, children }: AnimatedToggleProps) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedToggle

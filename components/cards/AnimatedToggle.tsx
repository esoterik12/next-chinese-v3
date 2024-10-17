'use client'
import { motion } from 'framer-motion'

interface AnimatedToggleProps {
  key: string
  children: React.ReactNode
}

const AnimatedToggle = ({ key, children }: AnimatedToggleProps) => {
  return (
    <motion.div
      key={key}
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

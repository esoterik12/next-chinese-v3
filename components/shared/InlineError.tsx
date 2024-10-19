'use client'
import { motion } from 'framer-motion'

interface InlineErrorProps {
  children: React.ReactNode
  classes: string
  initialX?: number
  initialY?: number
}

const InlineError = ({
  children,
  classes,
  initialX = 0,
  initialY = -10
}: InlineErrorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}

export default InlineError

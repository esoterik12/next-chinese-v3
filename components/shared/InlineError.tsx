'use client'
import { motion } from 'framer-motion'

interface InlineErrorProps {
  children: React.ReactNode
  classes: string
}

const InlineError = ({ children, classes }: InlineErrorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}

export default InlineError

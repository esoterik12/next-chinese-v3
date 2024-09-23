import { ReactElement } from 'react'
import { motion } from 'framer-motion'

type AnimatedSectionProps = {
  children: ReactElement
  entryDelay?: number
  initialY?: number
  exitY?: number
  classes?: string
  motionKey?: string // Unique keys necessary for multiple sections wrapped in AnimatePresence
}

const AnimatedSection = ({
  children,
  entryDelay = 0.15,
  initialY = -12, // default is to come from the top
  exitY = 10, // default is to exit to the bottom
  classes,
  motionKey
}: AnimatedSectionProps) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: entryDelay }}
      exit={{ opacity: 0, y: exitY, transition: { duration: 0.2 } }}
      className={`flex gap-x-3 text-center ${classes}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

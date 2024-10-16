import { ReactElement } from 'react'
import { motion } from 'framer-motion'

type AnimatedSectionProps = {
  children: ReactElement
  entryDelay?: number
  entryTransition?: number
  initialY?: number
  exitY?: number
  classes?: string
  motionKey?: string // Unique keys necessary for multiple sections wrapped in AnimatePresence
  exitDelay?: number
  easeType?: 'easeIn' | 'easeOut' | 'easeInOut' | [number, number, number, number] // Option to choose easing
}

const AnimatedSection = ({
  children,
  entryDelay = 0.06,
  entryTransition = 0.2,
  initialY = -5, // default is to come from the top
  exitY = 10, // default is to exit to the bottom
  classes,
  motionKey,
  exitDelay = 0,
  easeType = 'easeInOut' // Default easing type
}: AnimatedSectionProps) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: entryTransition,
        delay: entryDelay,
        ease: easeType // Add easing type
      }}
      exit={{
        opacity: 0,
        y: exitY,
        transition: { duration: 0.2, delay: exitDelay, ease: easeType }
      }}
      className={`flex gap-x-3 ${classes}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

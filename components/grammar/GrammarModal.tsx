import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IconPuzzle from '../icons/IconPuzzle'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const animationCompleteRef = useRef(false) // Track animation state

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Close modal when clicking outside
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (
      animationCompleteRef.current &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-10 flex justify-end bg-zinc-950 bg-opacity-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.3}}
          onMouseDown={handleOverlayClick} // Detect clicks on overlay
        >
          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
            className='relative h-screen w-screen max-w-[350px] overflow-hidden bg-zinc-300 shadow-xl'
            initial={{ x: 450, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 450, opacity: 0.5 }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 30
            }}
            onAnimationStart={() => {
              animationCompleteRef.current = false 
            }}
            onAnimationComplete={() => {
              animationCompleteRef.current = true 
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute right-4 top-4 text-zinc-500 hover:text-zinc-300'
            >
              <span className='sr-only'>Close</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className='p-6'>
              <div className='flex h-6 flex-row items-center'>
                <IconPuzzle classes='h-6 w-6 text-sky-500' />
                <p className='custom-large-text font-medium text-zinc-900'>
                  &nbsp;Grammar Focus
                </p>
              </div>
              <div className='mt-4 text-sm text-zinc-600'>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal

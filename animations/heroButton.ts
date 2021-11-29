import { Variants } from 'framer-motion'

export const heroButtonVariant: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0.1,
    originX: 0
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      staggerChildren: 1
    }
  }
}

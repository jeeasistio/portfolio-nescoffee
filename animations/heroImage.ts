import { Variants } from 'framer-motion'

export const heroImageVariant: Variants = {
  hidden: {
    scaleX: 0,
    originX: 1
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 3,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  }
}

import { Variants } from 'framer-motion/types/types'

export const heroButtonCtnVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

export const heroButtonVariant: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  }
}

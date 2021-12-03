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
    opacity: 0,
    x: -40
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  }
}

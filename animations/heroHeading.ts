import { Variants } from 'framer-motion/types/types'

export const heroHeadingVariant: Variants = {
  hidden: {
    y: 80
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      staggerChildren: 0.05
    }
  }
}

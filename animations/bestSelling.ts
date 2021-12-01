import { Variants } from 'framer-motion/types/types'

export const bestSellingVariant: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  }
}

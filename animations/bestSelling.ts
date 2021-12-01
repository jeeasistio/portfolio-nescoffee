import { Variants } from 'framer-motion/types/types'

export const bestSellingVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 2
    }
  }
}

import { Variants } from 'framer-motion/types/types'

export const bestSellingProductsVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 65,
      mass: 3
    }
  }
}

export const imageVariant: Variants = {
  normal: {
    scale: 1
  },
  big: {
    scale: 1.1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 65,
      mass: 3
    }
  }
}

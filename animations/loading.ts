import { Variants } from 'framer-motion/types/types'

export const loadingVariant: Variants = {
  animate: {
    originX: 0,
    x: ['0%', '100%'],
    scaleX: [0, 0.3, 0.6, 0.9, 1],
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      repeat: 3
    }
  }
}

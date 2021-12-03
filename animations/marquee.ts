import { Variants } from 'framer-motion/types/types'

export const marquee: Variants = {
  initial: {
    x: '100%'
  },
  animate: {
    x: 0,
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity
    }
  }
}

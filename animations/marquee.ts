import { Variants } from 'framer-motion/types/types'

export const marquee: Variants = {
  animate: {
    x: ['100%', '0%'],
    transition: {
      duration: 12,
      ease: 'linear',
      repeat: Infinity
    }
  }
}

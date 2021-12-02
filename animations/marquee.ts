import { Variants } from 'framer-motion/types/types'

export const marquee: Variants = {
  initial: {
    x: '100%'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 5,
      ease: 'linear',
      times: 'infinite'
    }
  }
}

import { Variants } from 'framer-motion/types/types'

export const fadeFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  })
}

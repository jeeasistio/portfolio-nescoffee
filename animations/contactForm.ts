import { Variants } from 'framer-motion/types/types'

export const contactFormCtnVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      delay: 0.6
    }
  }
}

export const contactFormBtnVariant: Variants = {
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
      mass: 3,
      delay: 1
    }
  }
}

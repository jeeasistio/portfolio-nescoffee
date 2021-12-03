import { Variants } from 'framer-motion/types/types'

export const heroImageVariant: Variants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      delay: 1,
      when: 'beforeChildren'
    }
  }
}

export const letsDiscussVariant: Variants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3,
      when: 'beforeChildren'
    }
  }
}

export const imageShadowVariant: Variants = {
  hidden: {
    x: -20,
    y: -20,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 45,
      mass: 3
    }
  }
}

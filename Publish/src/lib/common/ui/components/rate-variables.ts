import { cva } from 'class-variance-authority'

const RateVariants = cva(`rate`, {
  variants: {
    size: {
      small: 'small',
      medium: 'medium',
      large: 'large'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export { RateVariants }

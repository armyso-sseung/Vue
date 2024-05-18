import { cva } from 'class-variance-authority'

const ProgressVariants = cva(`progress`, {
  variants: {
    renderType: {
      percent: 'type-percent',
      price: 'type-price'
    }
  },
  defaultVariants: {
    renderType: 'percent'
  }
})

export { ProgressVariants }

import { cva } from 'class-variance-authority'

const SelectTriggerVariants = cva('', {
  variants: {
    type: {
      default: '',
      error: 'error'
    },
    line: {
      true: 'line-type'
    }
  },
  defaultVariants: {
    type: 'default'
  }
})

export { SelectTriggerVariants }

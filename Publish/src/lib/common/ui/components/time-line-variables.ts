import { cva } from 'class-variance-authority'

const TimeLineContainerVariants = cva(`time-line-container`, {
  variants: {},
  defaultVariants: {}
})

const TimeLineVariants = cva(`time-line-item`, {
  variants: {},
  defaultVariants: {}
})

export { TimeLineContainerVariants, TimeLineVariants }
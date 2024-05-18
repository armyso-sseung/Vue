import { cva } from 'class-variance-authority'

const DividerVariants = cva(`divider bg-gray10 border-0 mo:-mx-5 h-1`, {
  variants: {
    lineBold: {
      true: 'h-2 border-t border-gray4'
    },
    lineThin: {
      true: 'h-px bg-gray3'
    }
  },
  defaultVariants: {
    lineBold: false,
    lineThin: false
  }
})

export { DividerVariants }

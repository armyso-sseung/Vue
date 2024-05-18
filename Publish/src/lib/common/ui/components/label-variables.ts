import { cva } from 'class-variance-authority'

const LabelVariants = cva('text-black', {
  variants: {
    variant: {
      disabled: 'text-gray7',
      error: 'text-error',
      chkbold: 'chkbold peer-checked/chk:font-bold'
    },
    type: {
      default: 'body1 ml-2',
      title: 'body1 mb-1.5 block',
      right: 'body1 mr-2'
    }
  },
  defaultVariants: {
    type: 'default'
  }
})

export { LabelVariants }

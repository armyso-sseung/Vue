import { cva } from 'class-variance-authority'

const ContentsWrapVariants = cva('size-full ', {
  variants: {
    size: {
      default: 'pc:w-large px-5 pc:px-10 pc:mx-auto',
      medium: 'pc:w-medium px-5 pc:px-10 pc:mx-auto',
      small: 'pc:w-[455px] px-5 pc:px-10 pc:mx-auto',
      full: 'w-full px-0 pc:mx-auto pc:min-w-large'
    },
    bg: {
      default: 'bg-white'
    },
    spacing: {
      default: 'pt-5 pc:pt-10',
      large: 'pt-10 pc:pt-10',
      zero: 'pt-0 pc:pt-0'
    }
  },
  defaultVariants: {
    size: 'default',
    bg: 'default',
    spacing: 'default'
  }
})

export { ContentsWrapVariants }
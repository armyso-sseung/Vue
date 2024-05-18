import { cva } from 'class-variance-authority'

const headerInnerVariants = cva('', {
  variants: {
    pd: {
      default: 'pl-5 pr-4',
      MAIN: 'pl-5 pr-10',
      PRODUCT_DETAIL: 'pl-5 pr-4'
    },
    justify: {
      default: 'justify-center',
      MAIN: 'justify-between',
      PRODUCT_DETAIL: ''
    }
  }
})

export { headerInnerVariants }

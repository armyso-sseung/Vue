import { cva } from 'class-variance-authority'

const DrawerVariants = cva(`drawer-custom`, {
  variants: {
    mobileBodyull: {
      true: 'm-body-full'
    },
    pcBodyFit: {
      true: 'pc-body-fit'
    }
  },
  defaultVariants: {
    mobileBodyull: false,
    pcBodyFit: false
  }
})

export { DrawerVariants }

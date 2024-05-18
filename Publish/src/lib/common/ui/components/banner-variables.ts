import { cva } from 'class-variance-authority'

const BannerMsgVariants = cva(`banner-msg`, {
  variants: {
    variant: {
      red: "px-5 py-4 bg-primary/5 body1 text-secondary1 flex items-center before:mr-3 before:size-8 before:bg-primary/0.5 before:bg-[url('/images/icons/ico_warning_red.svg')] before:bg-no-repeat before:bg-center before:shrink-0"
    }
  },
  defaultVariants: {}
})

export { BannerMsgVariants }

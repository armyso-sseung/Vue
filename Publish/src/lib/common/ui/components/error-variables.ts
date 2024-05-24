import { cva } from 'class-variance-authority'

export const ErrorTitleVariants = cva('relative text-center pt-14 ', {
  variants: {
    type: {
      default:
        "text-black after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:size-12 after:bg-[url('/images/icons/ico_error_warning.svg')]",
      adult:
        "text-black after:absolute after:bg-no-repeat after:bg-center after:top-0 after:left-1/2 after:-translate-x-1/2 after:size-20 after:bg-[url('/images/icons/ico_error_adult.svg')]",
      nopage:
        "text-black after:absolute after:bg-no-repeat after:bg-center after:top-0 after:left-1/2 after:-translate-x-1/2 after:size-12 after:bg-[url('/images/icons/ico_no_page.svg')]"
    }
  },
  defaultVariants: {
    type: 'default'
  }
})

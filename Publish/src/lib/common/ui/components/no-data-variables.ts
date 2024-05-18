import { cva } from 'class-variance-authority'

const NodataTitleVariants = cva(
  'relative text-center font-medium pt-14 text-base after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:size-12',
  {
    variants: {
      type: {
        default:
          "text-black text-base after:bg-[url('/images/icons/ico_warning.svg')]",
        waring:
          "text-black text-base pb-5 after:bg-[url('/images/icons/ico_warning.svg')]",
        chkecking:
          "text-black text-base after:bg-[url('/images/icons/ico_checking.svg')]",
        cart: "text-black text-base after:bg-[url('/images/icons/ico_cart.svg')]"
      }
    },
    defaultVariants: {
      type: 'default'
    }
  }
)

export { NodataTitleVariants }

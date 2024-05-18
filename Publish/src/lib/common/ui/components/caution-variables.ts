import { cva } from 'class-variance-authority'
const CautionTitleVariants = cva('tit font-bold', {
  variants: {
    size: {
      default: 'text-xs',
      lg: 'text-sm'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

const CautionContVariants = cva(
  "relative mt-1 before:content-[''] before:absolute before:left-0 before:size-0.5 before:rounded-full first:mt-0",
  {
    variants: {
      size: {
        default: 'pl-2.5 text-xs before:top-[0.438rem]', // 12px
        md: 'pl-2.5 text-sm before:top-[0.538rem]' // 14px
      },
      type: {
        default: 'text-black before:bg-black',
        point: 'text-secondary1 before:bg-secondary1'
      }
    },
    defaultVariants: {
      size: 'default',
      type: 'default'
    }
  }
)

export { CautionTitleVariants, CautionContVariants }

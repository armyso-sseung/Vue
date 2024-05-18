import { cva } from 'class-variance-authority'

const TextInputVariants = cva(
  'h-10 w-full px-4 bg-white body1 text-black placeholder:text-gray7 focus:outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray4 focus:border-black',
        readonly: 'text-gray7',
        disabled: 'text-gray7',
        error: 'border-error',
        success: 'border-secondary2'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const TextCustomVariants = cva('', {
  variants: {
    shape: {
      default: 'border read-only:bg-gray4 disabled:bg-gray4',
      line: 'bg-transparent border-b pl-0 read-only:bg-gray1 disabled:bg-gray1'
    },
    deleteBtn: {
      default: '',
      on: 'del-on pr-9'
    }
  },
  defaultVariants: {
    shape: 'default',
    deleteBtn: 'default'
  }
})

const TextareatVariants = cva(
  'block min-h-[214px] px-4 py-2.5 w-full focus:outline-none border placeholder:text-sm placeholder:text-gray7 subtitle2 invalid:border-error invalid:focus:border-error',
  {
    variants: {
      variant: {
        default: 'border-gray4 focus:border focus:border-black',
        disabled: 'bg-gray2 text-gray7 pointer-events-none',
        success: 'border-info'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export { TextInputVariants, TextCustomVariants, TextareatVariants }

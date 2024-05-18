import { cva } from 'class-variance-authority'

const CheckboxVariants = cva(
  'size-5 inline-block cursor-pointer text-black bg-cover bg-no-repeat align-middle subtitle2',
  {
    variants: {
      variant: {
        default:
          'chkbold border border-black checked:bg-icon-checkbox-on peer/chk',
        disabled:
          'border border-gray4 pointer-events-none checked:bg-icon-checkbox-dis-on',
        readonly: 'pointer-events-none',
        error:
          'border border-error text-error checked:bg-icon-checkbox-err-on checked:border-none'
      },
      box: {
        default: '',
        nobox:
          'border-none bg-icon-checkbox02-off checked:bg-icon-checkbox02-on',
        select:
          'chkbold size-5 border-none checked:bg-icon-checkbox03-on peer/chk'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export { CheckboxVariants }

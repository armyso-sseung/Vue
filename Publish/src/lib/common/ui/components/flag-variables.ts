import { cva } from 'class-variance-authority'

const FlagVariants = cva('flex px-1 text-center caption1 items-center', {
  variants: {
    bgcolor: {
      type1: 'bg-primary text-white',
      type2: 'bg-secondary2 text-white',
      type3: 'bg-gray9 text-white',
      type4: 'bg-gray3 text-black',
      type5: 'bg-secondary1 text-white'
    },
    border: {
      type1: 'border border-primary text-primary',
      type2: 'border border-secondary2 text-secondary2',
      type3: 'border border-gray5 text-black',
      type4: 'border border-gray4 text-gray7'
    }
  }
})

export { FlagVariants }

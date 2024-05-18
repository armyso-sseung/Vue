import { cva } from 'class-variance-authority'

export const SlideBannerVariants = cva('', {
  variants: {
    type: {
      full: 'w-full',
      card: 'pc:max-w-[1200px]',
      common: 'w-full'
    }
  },
  defaultVariants: {
    type: 'card'
  }
})

const SlideBannerStyles = {
  full: {
    size: {
      mo: { width: '100%', height: 'auto' },
      pc: { width: '100%', height: '372px' }
    },
    classes: {
      linkBox:
        'relative flex size-full justify-start pc:justify-center items-end pc:items-center',
      img: 'absolute size-full object-cover inset-0',
      textBox: 'relative text-left pc:text-center pb-[42px] p-5 ',
      title: 'text-xl pc:text-3xl font-bold',
      description: 'body1 pc:text-xl font-default pc:font-bold'
    }
  },
  card: {
    size: {
      mo: { width: '240px', height: 'auto' },
      pc: { width: '384px', height: 'auto' }
    },
    classes: {
      linkBox: 'relative flex flex-col size-full justify-start items-start',
      img: 'relative w-full pc:h-[384px] h-[240px] object-cover',
      textBox: 'relative mt-2 pc:mt-5 w-full text-overflow',
      title: 'subtitle2',
      description:
        'body1 font-default pc:font-bold leading-4 pc:leading-5 pc:opacity-70'
    }
  },
  common: {
    size: {
      mo: { width: '100%', height: '250px' },
      pc: { width: '100%', height: '250px' }
    },
    classes: {
      linkBox:
        'relative flex size-full justify-start pc:justify-center items-end pc:items-center',
      img: 'absolute size-full object-cover inset-0',
      textBox: 'relative text-left pc:text-center pb-[42px] p-5 ',
      title: 'text-xl pc:text-3xl font-bold',
      description: 'body1 pc:text-xl font-default pc:font-bold'
    }
  }
}

export const fullSize = SlideBannerStyles.full.size
export const fullStyles = SlideBannerStyles.full.classes
export const cardSize = SlideBannerStyles.card.size
export const cardStyles = SlideBannerStyles.card.classes
export const commonSize = SlideBannerStyles.common.size
export const commonStyles = SlideBannerStyles.common.classes

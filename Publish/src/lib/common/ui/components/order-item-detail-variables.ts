import { cva } from 'class-variance-authority'

const OrderItemDetailVariables = cva('', {
  variants: {
    wrap: {
      order: 'unit-item flex-colum flex-auto space-y-3',
      cart: 'unit-item flex-colum flex-auto space-y-3 pr-7'
    },
    link: {
      order: 'block',
      cart: ''
    },
    detailWrap: {
      order: 'flex w-full space-x-2 pc:space-x-3',
      cart: 'flex space-x-2'
    },
    imageWrap: {
      order: 'unit-img size-20 shrink-0',
      cart: 'unit-img relative size-20 shrink-0'
    },
    detailGoodsWrap: {
      order: 'unit-info flex-colum flex-auto space-y-1',
      cart: 'unit-info flex-colum space-y-1'
    },
    price: {
      order: 'body1 flex gap-2',
      cart: 'body1'
    }
  }
})

export { OrderItemDetailVariables }

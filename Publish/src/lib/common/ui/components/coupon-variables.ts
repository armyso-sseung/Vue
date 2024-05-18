import { cva } from 'class-variance-authority'

const CouponVariants = cva('btn-coupon', {
  variants: {
    // downStatus 이름 변경해서 사용하셔도 됩니다.
    downStatus: {
      normal: 'status-normal',
      ready: 'status-down-ready',
      received: 'status-received',
      used: 'status-completed'
    }
  },
  defaultVariants: {
    downStatus: 'normal'
  }
})

export { CouponVariants }
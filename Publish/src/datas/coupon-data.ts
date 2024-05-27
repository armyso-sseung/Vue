import type { CouponProps } from '~/types/common/component-type'

export const couponDataList: CouponProps[] = [
  {
    benefit: '10%',
    couponNm: '1월 얼리버드 할인 쿠폰',
    date: '2023.12.01 ~ 2024.01.31',
    minAmount: 5000,
    maxAmount: 2000,
    desc: '일부 브랜드 적용 제외',
    device: [],
    downStatus: 'ready'
  },
  {
    benefit: '10%',
    couponNm: '1월 얼리버드 할인 쿠폰',
    date: '2023.12.01 ~ 2024.01.31',
    minAmount: 5000,
    maxAmount: 2000,
    desc: '일부 브랜드 적용 제외',
    device: ['Mobile', 'PC', 'App'],
    downStatus: 'ready'
  },
  {
    benefit: '10%',
    couponNm: '1월 얼리버드 할인 쿠폰',
    date: '2023.12.01 ~ 2024.01.31',
    minAmount: 5000,
    maxAmount: 2000,
    desc: '일부 브랜드 적용 제외',
    device: ['Mobile', 'PC', 'App'],
    downStatus: 'received'
  },
  {
    benefit: '10%',
    couponNm: '1월 얼리버드 할인 쿠폰1',
    date: '2023.12.01 ~ 2024.01.31',
    minAmount: 5000,
    maxAmount: 2000,
    desc: '일부 브랜드 적용 제외',
    device: ['Mobile', 'PC', 'App'],
    downStatus: 'normal'
  },
  {
    benefit: '10%',
    couponNm: '1월 얼리버드 할인 쿠폰2',
    date: '2023.12.01 ~ 2024.01.31',
    minAmount: 5000,
    maxAmount: 2000,
    desc: '일부 브랜드 적용 제외',
    device: ['Mobile', 'PC', 'App'],
    downStatus: 'used'
  }
]

/**
 * downStatus: 'normal' | 'ready' | 'received' | 'used'
 * normal: 보유쿠폰
 * ready: 쿠폰받기
 * received: 받기완료
 * used: 사용완료
 */

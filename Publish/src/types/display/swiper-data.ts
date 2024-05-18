import type { Content } from '~/types/display/shop-data-model'
import { defineAsyncComponent } from '#imports'
import type { CommonProps } from '~/types/common/common-props'

export interface SwiperModel {
  swipeTyp: string
  text?: Content[]
  image?: Content[]
  className?: string
}

export interface SwiperModelProps extends CommonProps {
  swipeContent: SwiperModel
  priority?: boolean
}

/**
 * 스와이퍼 타입
 * */
export const SwiperType: { [key: string]: { [key: string]: number } } = {
  IMG_A: {
    image: 1,
    text: 2
  },
  IMG_B: {
    image: 1,
    text: 1
  },
  IMG_NONE_TEXT: {
    image: 1
  }
}

/**
 * 스와이퍼 컴포넌트
 * */
export const SwipeComponent: { [key: string]: any } = {
  IMG_A: defineAsyncComponent(
    () => import('~/components/display/corner/innerComponent/swiper/ImgA.vue')
  ),
  IMG_B: defineAsyncComponent(
    () => import('~/components/display/corner/innerComponent/swiper/ImgB.vue')
  ),
  IMG_NONE_TEXT: defineAsyncComponent(
    () =>
      import(
        '~/components/display/corner/innerComponent/swiper/ImgNoneText.vue'
      )
  )
}

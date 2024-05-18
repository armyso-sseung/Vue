import type { InjectionKey } from 'vue'

export const GOODS = {
  // 상품 판매 상태 코드
  SALE_STATE_CD: {
    SOLD_OUT: '20',
    SALE: '10',
    SALE_ENDS: '40'
  },
  // 싱품 구성 코드
  COMPOSITION_CD: {
    PACKAGE: '20',
    GENERAL: '10'
  },
  // 상품 유형 코드
  TYPE_CD: {
    GENERAL: '10',
    GIFTS: '20'
  },
  // 판매 방식 코드 (PR003)
  SALE_METHOD_CD: {
    NORMAL: '10',
    RESERVATION: '20'
  }
}

export const GOODS_CONTENTS = {
  // 컨텐츠 유형 코드
  TYPE_CD: {
    DETAIL: '01',
    VIDEO: '02',
    IMAGE: '03'
  },
  // 이미지 구분 코드
  IMAGE: {
    BASIC: 'P10',
    ADDITION: 'P20',
    VIDEO: 'M10'
  }
}

export const GOODS_REVIEW_TYPE = {
  TEXT: '10',
  IMG: '20',
  VIDEO: '30'
} as const

export const CONTENT_STATUS = {
  CREATE: 'C',
  UPDATE: 'U',
  DELETE: 'D'
} as const

export const GOODS_REVIEW_DECLARETYPE = {
  NOT_RELATED_GOODS: '10',
  SWEARER: '20',
  VIOLENCE: '30',
  COPYRIGHT_PERSONAL_INFORMATION: '40',
  ADVERTISEMENT: '50',
  DUPLICATION: '60',
  ETC: '90'
} as const

export const GOODS_BR_REPLACE = '&lt;br /&gt;'

interface GoodsReviewThumbnailInjection {
  openDetailModal: (index?: number) => void
  openThumbnailModal: (index?: number) => void
  openDeclarationModal: (params?: number | string) => void
}

export const GoodsReviewThumbnailInjectionKey: InjectionKey<GoodsReviewThumbnailInjection> =
  Symbol('GoodsReviewThunailInjection')

export const GOODS_MODAL_INDEX = {
  _1DEPTH: 1001,
  _2DEPTH: 1002,
  _3DEPTH: 1003,
  _4DEPTH: 1004
}

export const GOODS_ORDER = {
  // 장바구니 유입 구분 코드 (OM042)
  BASKET_INFLOW: {
    BASKET: '10',
    BUY: '20',
    WISH: '30'
  },
  // 장바구니 구분 코드 (OM001)
  BASKET_SHIPPING: {
    COURIER: '10',
    PICKUP: '20',
    QUICK: '30',
    REGULAR: '40'
  },
  // 주문 구분 코드 (OM002)
  ORDER: {
    GENERAL: '10',
    GIFT: '20',
    E_GIFT_CARD: '30',
    ALLIANCE: '40'
  }
}

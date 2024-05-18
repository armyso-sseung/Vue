export const HEADER_TYPE = {
  MAIN: 'MAIN',
  SIMPLE: 'SIMPLE',
  SEARCH: 'SEARCH',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  CART: 'CART',
  ORDER_SHEET: 'ORDER_SHEET',
  ORDER_COMPLETE: 'ORDER_COMPLETE',
  ORDER_FAIL: 'ORDER_FAIL',
  DEFAULT: 'DEFAULT'
} as const

/**
 * 유입전시카테고리 구분
 * */
export const INFLOW_DISPLAY_CATEGORY_TYPE = {
  display: '01',
  plan: '02',
  search: '06',
  float: '08',
  wishList: '09',
  none: '10'
}

export const RESPONSE_CODE = {
  SUCCESS: {
    code: '0000',
    message: 'success',
    name: 'success'
  },
  ACCESS_DENIED: {
    code: '0403',
    message: 'access_denied',
    name: 'access_denied'
  },
  UNKNOWN_ERROR: {
    code: '9000',
    message: 'unknown error',
    name: 'unknown error'
  }
}

export const TERMS_TYPE = {
  SERVICE: { PATH: '/common/terms/service', NAME: '이용약관', CODE: '100' },
  PRIVACY: {
    PATH: '/common/terms/privacy',
    NAME: '개인정보처리방침',
    CODE: '300'
  },
  YOUTH: { PATH: '/common/terms/youth', NAME: '청소년보호방침', CODE: '400' },
  FINANCE: {
    PATH: '/common/terms/finance',
    NAME: '전자금융거래약관',
    CODE: '600'
  }
}

export const TERMS_CODE_MAP = new Map([
  ['100', TERMS_TYPE.SERVICE],
  ['300', TERMS_TYPE.PRIVACY],
  ['400', TERMS_TYPE.YOUTH],
  ['600', TERMS_TYPE.FINANCE]
])

export const CUSTOMER_PATH = '/customer'

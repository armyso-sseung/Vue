export const PLAN = {
  CONTENT_CODE: {
    IMAGE: '10'
  },
  IMAGE_TYPE_CODE: {
    LIST_CONTENT_1: '02',
    LIST_CONTENT_2: '05'
  },
  RESULT_CODE: {
    LOGIN_ERROR: '7010',
    DISPLAY_LIMIT: '7020'
  },
  DIV_OBJ_CODE: {
    TEXT: '10',
    IMAGE: '20',
    HTML: '30'
  },
  SORT: {
    RECENT: 'recent',
    CLOSE: 'close'
  },
  BRAND_ALL: 'ALL',
  YES: 'Y'
}
export const DisplayMediaCode = {
  PC: '10',
  MO: '20',
  COMMON: '99'
}

export const BRAND_DEFAULT_VALUE = {
  PAGE_NO: '0',
  PAGE_SIZE: '8',
  SORT_DEFAULT: 'newGoods',
  CATEGORY_ALL: 'all'
}

export const BRAND_SORT_MAP: { [key: string]: { [key: string]: string } } = {
  saleDesc: { sort: 'desc', sortField: 'ordQty' },
  lowPrice: { sort: 'asc', sortField: 'aplyPrc' },
  highPrice: { sort: 'desc', sortField: 'aplyPrc' },
  rateDesc: { sort: 'desc', sortField: 'dcRate' },
  newGoods: { sort: 'desc', sortField: 'goodsRegDtm' },
  reviewDesc: { sort: 'desc', sortField: 'goodsRevCnt' }
}

export const BRAND_TYPE = {
  BRAND: 'brand',
  FROM: 'from',
  ORDER: 'order',
  BRAND_NO: 'brandNo',
  DISP_CTG_NO: 'dispCtgNo'
}

export const BRAND_CORNER = {
  BASE_URL: '/display/shop/brand/'
}

export const BRAND_SHOP = {
  BRAND_WISH_PARAM: 'pageNo=1&pageSize=100',
  YES: 'Y',
  NO: 'N'
}

// DP007(이동프레임 공통코드)
export const MOVE_FRAME = {
  EXTERNAL: { code: '01', name: '새창' },
  INTERNAL: { code: '02', name: '내부링크' }
}

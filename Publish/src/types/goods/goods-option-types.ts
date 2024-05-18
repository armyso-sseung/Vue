import type { GoodsBase } from '~/types/goods/goods-detail-types'

export interface OptionInfo {
  goodsNo: string
  optnCatNm: string
  optnNo: string
  optnNm: string
  itmNo: string | null
  limtQty: number
  stkQty: number
  safeStkQty: number
  itmSaleStatCd: string
  addSalePrc: number
  basePrc: number
  imgPathNm: string
  imgFileNm: string
  rgbVal: string
  nextLevelOption: Map<string, OptionInfo> | null
}

export type OptionPrice = {
  goodsNo: string
  itmNo: string
  norPrc: number
  salePrc: number
  orgSalePrc: number
  maxBenefitAmt: number
  saleRate: number
}

export type GoodsOptionInfo = {
  goodsBase: GoodsBase
  options: Map<string, OptionInfo>
}

export type BuyQtyLmtInfo = {
  buyQtyLmtYn: string
  maxLmtQty: number
  minLmtQty: number
}

export type BasketRequestParam = {
  goodsNo: string
  itmNo: string
  bsketInfGbCd: string // 장바구니 유입 구분 코드
  bsketGbCd: string // 장바구니 구분 코드
  chlNo: string
  chlDtlNo: string
  bsketQty: number
  ordGbCd: string // 주문 구분 코드
  infDispCtgNoGbCd: string // 유입전시카테고리구분코드
  infDispCtgNo: string
  repDispCtgNo: string
  conrNo: string
  sngGoodsYn: 'Y' | 'N'
}

export type GoodsPurchaseType =
  | 'gift'
  | 'regular'
  | 'buy'
  | 'restock'
  | 'basket'

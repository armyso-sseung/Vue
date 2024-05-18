import type { DlvAmtInfo, DlvGrpInfo } from '~/types/order/order'

type CartCommonResponse<T> = {
  code: string
  payload: T
  message?: string
}

export type BasketCount = {
  bsketGbCd: string
  count: number
}

export type DeliveryPolicyMap = Map<string, DlvAmtInfo>
export type DeliNoByBsketNoMap = Map<string, string>

type CartProduct = {
  groupList: DlvGrpInfo[]
  countList: BasketCount[]
}

// GiftInfo.asGoodsList type과 동일하게
export type AeFvrInfo = {
  aeFvrSeq: string
  aplyMinAmt: number
  aplyMaxAmt: number
  aeGoodsNm: string
  aeGoodsImgPath: string
  aeGoodsNo?: string
  aeGoodsItmNo?: string
}

export type AeEvtInfo = {
  goodsNo: string
  itmNo: string
  aeNo: string
  addEvtTypCd: string
  aeStrDtm: string
  aeEndDtm: string
  payStrDt: string
  payEndDt: string
  tmEvtYn: string
  aplyStrTm?: string
  aplyEndTm?: string
  aeDesc: string
  aeNm: string
  aeGoodsList: AeFvrInfo[]
}

type FreeGiftList = {
  aeEvtList: AeEvtInfo[]
}

export type RegisterBasketParam = {
  bsketInfGbCd: string
  bsketGbCd: string
  chlNo: string
  chlDtlNo: string
  infDispCtgNoGbCd: string
  infDispCtgNo: string
  repDispCtgNo: string
  conrNo?: string
  goodsNo: string
  itmNo: string
  bsketQty: number
  ordGbCd: string
}

export type ChangeOptionsParam = {
  bsketNo: string
  optionChange: boolean
} & Pick<RegisterBasketParam, 'goodsNo' | 'itmNo' | 'bsketQty' | 'bsketGbCd'>

export type CartProductResponse = {} & CartCommonResponse<CartProduct>
export type FreeGiftListResponse = {} & CartCommonResponse<FreeGiftList>

// 카드혜택제공 월 info
export type CardBenefitMonth = {
  tgtAmt: number
  nint1MonYn: string
  nint2MonYn: string
  nint3MonYn: string
  nint4MonYn: string
  nint5MonYn: string
  nint6MonYn: string
  nint7MonYn: string
  nint8MonYn: string
  nint9MonYn: string
  nint10MonYn: string
  nint11MonYn: string
  nint12MonYn: string
  months?: string
}

// 카드혜택제공 info
export type CardBenefit = {
  nintInstGdNo: string
  acqrCd: string
  acqrNm: string
  aplyStrDtm: string
  aplyEndDtm: string
  nintInstNm: string
  nintAplyTgtCont: string
  nintExcpTgtCont: string
  sctnNintYn: string
  pgGbCd: string
  pgGbNm: string
  monthList: CardBenefitMonth[]
}

export type DeliveryAmountInfo = {
  aplyAdtnAmt: number
  deliPolcNo: string
  dlexAmt: number
  dlexTypCd: string
  dlvBenefitInfo: string
  entrNo: string
  ordCostGbCd: string
  stdAdtnAmt: number
}

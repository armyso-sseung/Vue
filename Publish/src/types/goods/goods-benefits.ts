export type CouponInfo = {
  promoNo: string
  promoNm: string
  promoTypCd: string
  promoDesc: string
  cpnIsuNo: string
  valiStrtDtm: string
  valiEndDtm: string
  fixamtFxrtGbCd: string
  dcRateAmt: number
  dcCpnCd: string
  minBuyAmt: number
  maxDcAmt: number
}

export type CouponRequestGoodsInfo = {
  goodsNo: string
  itmNo: string
  supPcost: number
  norPrc: number
  salePrc: number
  cnt: number
  stdCtgNo: string
  dispCtgNo: string
  brandNo: string
  entrNo: string
  chlNo: string
}

export type GetCouponListRequest = {
  ordMediaCd: string
  cpnType: string
  sortGb: string
  rowsPerPage: number
  pageIdx: number
  goodsList: CouponRequestGoodsInfo[]
}

export type DownloadCouponRequest = {
  promoNoList: string[]
  dpCpnCd: string | null
  downloadByPromoNo: boolean
}

export type DownloadCouponInfo = {
  promoNo: string
  promoNm: string
  cpnIsuNo: string
}

export type CategoryDataList = {
  dispCtgNo: string
  ctgFullPath: string
  ctgFullPathNm: string
  siteNo: string
  siteNm: string
  dpmlNo: string
}

export type SearchProductList = {
  id: string
  goodsNo: string
  goodsNm: string
  prestNm: string
  adveWrd: string
  schKwdNm: string[]
  brandNo: string
  brandNm: string
  buyrAgeLmtCd: string
  goodsRegDtm: string
  saleStatCd: string
  deliProcTypCd: string
  deliWayCd: string
  deliDday: string
  rcntSalePrc: string
  salePrc: string
  aplyPrc: string
  dcRate: string
  dispCtgNo: CategoryDataList[]
  dlexTypCd: string
  payWayMeanCd: string
  rservSaleYn: string
  goodsRevCnt: string
  goodsRevHlpfulCnt: string
  goodsRevStarscrAvgVal: string
  wishListCnt: string
  goodsDtlDesc: string
  sendGb: string
  langCd: string
  extraData: string
  goodsRepImgPathNm: string
  iconJson: string
  totalCnt: number
}

export type AssocwordDataList = {
  assocword: string
}

export type BrandDataList = {
  brandNo: string
  brandNm: string
}

export type SearchResponse = {
  totalCount: number
  searchDataList: SearchProductList[]
  categoryDataList: CategoryDataList[]
  assocwordDataList: AssocwordDataList[]
  brandDataList: BrandDataList[]
}

export type SearchRequest = {
  searchWord: string
}

export interface SearchCommonResponse<ResT> {
  payload?: ResT
  message?: string
}

export interface RecommWord {
  recommWord: string
  schWord: string
  siteLink: string
  recommType: string
}

export interface RecommPayload {
  totalCount: null
  searchDataList: RecommWord[]
}

export interface RecentSearchData {
  itemName: string
  searchDate: string
}

export interface PopularSearchData {
  keywordList: string[]
}

export interface RecommendationPlayload {
  // item: RecommendationWord
  item: { title: string }
}

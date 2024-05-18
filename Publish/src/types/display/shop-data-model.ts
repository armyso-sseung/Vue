import type { DisplayCategory } from '~/types/display/category-data-model'
import type { PlanInfoList } from '~/types/display/plan-data-model'
import type { GoodsSummary } from '~/types/display/goods-summary'
import type { InflowProps } from '~/types/common/common-props'

export interface Content {
  linkUrlAddr?: string
  movFrmeCd?: string
  contTitleNm?: string
  contPathNm?: string
  contFileNm?: string
  pcContPathNm?: string
  pcContFileNm?: string
  altCont?: string
  htmlFileCont?: string
  ttlClorText?: string
  wrdClorText?: string
}

export interface Brand {
  brandNo: string
  brandImgPathNm: string
  brandImgFileNm: string
  brandNm: string
}

// TODO - 상품, 상품리뷰, 기획전, 브랜드, 카테고리 각 담당자가 interface 정의 후 삭제 및 ContentInfo에 적용 예정
export interface GoodsReview {
  goodsNo: string
  goodsNm: string
  goodsRepImgPathNm: string
  revScrVal: number
  revCont: string
}

export interface ShopInfo {
  shopNo: string
  shopTypCd: string
  dpmlNo: string
  dispShopNm: string
  prtTypCd: string
  shopDescCont?: string
}

export interface Template {
  tmplNo: string
  shopTmplNo: string
  tmplNm: string
  tmplTypCd: string
  tmplPathNm?: string
  tmplFileNm: string
}

export interface ContentInfo {
  dispSetSeq: string
  conrTgtCd: string
  conrTgtCnt: number
  productList?: GoodsSummary[]
  brandList?: Brand[]
  productReviewList?: GoodsReview[]
  planShopList?: PlanInfoList[]
  htmlList?: Content[]
  imageList?: Content[]
  textList?: Content[]
  videoList?: Content[]
}

export interface SetInfo {
  dispSetSeq: string
  dispShopNo: string
  tmplConrNo: string
  setNm?: string
  dispStrDtm: Date
  dispEndDtm: Date
  dispSeq: number
  dispYn: string
  setDesc?: string
  conrNo: string
  swipeTyp?: string
  contentInfoList?: ContentInfo[]
}

export interface Corner {
  conrNo: string
  conrNm: string
  conrTypCd: string
  vueCmptId: string
  mappTtl?: string
  setCnt?: number
  setList?: SetInfo[]
}

export interface ShopResponse {
  shopInfo?: ShopInfo
  template: Template
  conrList?: Corner[]
  categoryInfo?: DisplayCategory
  brandInfo?: Brand
  error?: boolean
  message?: string
}

export interface ShopProps {
  inflowInfo?: InflowProps
  template?: Template
  conrList?: Corner[]
  categoryInfo?: DisplayCategory
  brandInfo?: Brand
}

export interface CornerProps {
  data: Corner
  inflowInfo?: InflowProps
}

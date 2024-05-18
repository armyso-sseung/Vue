import type { AssociationGoodsInfo } from '@/types/goods/goods-detail-types'
import type { InflowProps } from '~/types/common/common-props'
import type { GoodsSummary } from '~/types/display/goods-summary'
import type { ProductUnitDataTypeFunction } from '~/utils/product-unit-utils'
import type { FilterDataType, SearchDataType } from "~/types/search/search-filter";

/**
 * ProductItem 컴포넌트 내 공통 상품유닛
 * */
export type GoodsUnit = {
  goodsNo: string
  goodsNm: string
  sortSeq?: string
  brandNm?: string
  buyrAgeLmtCd: string
  rcntSalePrc: number // 판매가
  aplyPrc: number // 적용가
  dcRate?: number // 할인율
  goodsRepImgPathNm: string
  goodsRevCnt?: number
  goodsRevStarscrAvgVal?: number
  saleStatCd?: string
  wishGoodsYn?: string
  iconList?: string[]
}

/**
 * 상품유닛 optional props
 * */
export type GoodsUnitOptionalProps = {
  type?: 'card' | 'list'
  cols?: number
  imageSizes?: string
  imageWidth?: number

  // 유입 정보
  inflowInfo?: InflowProps

  // 랭킹번호
  rank?: number
  // 순서
  index?: number

  // 랭킹번호 노출여부
  showRank?: boolean
  // 순서 노출여부
  showIndex?: boolean
  // 좋아요 버튼 노출여부
  showLike?: boolean
  // 장바구니 버튼 노출여부
  showCart?: boolean
  // 브랜드정보 숨김여부
  hideBrand?: boolean
  // 리뷰정보 숨김여부
  hideReview?: boolean
  // 리뷰평점 숨김여부
  hideReviewStar?: boolean
  // 아이콘정보 숨김여부
  hideIcon?: boolean

  // 좋아요 클릭 후 callback 함수
  likeCallback?: () => {}
}

/**
 * ProductItem 내 사용 props
 * */
export type ProductItemProps = {
  data: GoodsUnit
  className?: string
} & GoodsUnitOptionalProps

/**
 * 상품목록 공통 props
 * - 사용 컴포넌트: product-list, product-slide, product-bundle-button-list
 * TODO: GoodsSummary 외 다른 타입들 추가(연관상품, 검색)
 */
export type ProductListProps = {
  data: GoodsSummary[] | AssociationGoodsInfo[] | SearchDataType[]
  dataType: keyof typeof ProductUnitDataTypeFunction
} & GoodsUnitOptionalProps

/*
  2024-01-22 : 한곳에 다 밀어넣음. 용도에 따른 분리 필요 시 별도 작업
*/
import type {
  GoodsBenefitResponse,
  BenefitOrderPromotionInfo,
  OrderDlvInfo,
  OrderBenefitGoodsInfo
} from './order'

export type OrderPromotionInfo = {
  promoNo?: string // 최대혜택여부
  isMaxYn?: string // 최대혜택여부
  dcAmt?: bigint // 할인금액
  dcAmtPerCnt?: bigint // 개수별할인금액
  cpnIsuNo?: string // 쿠폰발급번호
  valiEndDtm?: string
}

export type DiscountGoodsInfo = {
  goodsNo?: string // 상품번호
  goodsNm?: string // 상품명
  brandNm?: string // 브랜드명
  itmNo?: string // 단품번호
  dcAmt?: bigint // 할인 금액
  bnfInfo?: OrderPromotionInfo // 혜택정보
}

export type PromotionSelectedInfo = {
  totalDcAmt?: bigint // 전체 할인 금액
  goodsList?: DiscountGoodsInfo[] // 상품별 할인 금액
}

export type BenefitResponse = {
  totalDcAmt: number // 전체할인금액
  goodsBenefitList: GoodsBenefitResponse[] // 상품혜택정보 리스트
  orderBenefitList: BenefitOrderPromotionInfo[] // 주문혜택정보 리스트
}

export type DlvCouponInfo = {
  dlvCpnCnt: number // 사용 가능한 배송비 쿠폰 수
  dlvGrpInfo: OrderDlvInfo[] // 배송그룹 정보
}

export type CouponPopupResponse = {
  executivesDiscountInfo?: PromotionSelectedInfo // 임직원 할인 정보
  goodsDirectDiscountInfo?: PromotionSelectedInfo // 상품 즉시 할인 정보
  goodsBenefitList: GoodsBenefitResponse[] // 상품 단위 혜택 정보
  orderBenefitList: BenefitOrderPromotionInfo[] // 상품 단위 혜택 정보
  dlvCouponInfo: DlvCouponInfo // 배송비 쿠폰 정보
  totalDcAmt: number
  maxBenefitInfo: BenefitResponse
}

export type CouponBenefitinfo = {
  goodsNo?: string // 상품번호
  itmNo?: string // 단품번호
  promoNoList?: string[] // 사용 가능 혜택번호 리스트
}

export type BasketCouponGoodsInfo = {
  goodsNo?: string // 상품번호
  itmNo?: string // 단품번호
}

export type BasketCouponBenefitinfo = {
  promoNo?: string // 프로모션번호
  goodsList?: BasketCouponGoodsInfo // 사용 가능한 상품 리스트
}

export type CouponIssuedInfo = {
  cpnIsuNo?: string // 쿠폰발급번호
  mbrNo?: string // 회원번호
  cpnNo?: string // 프로모션번호
  cpnIsuDtm?: string // 쿠폰발급일시
  valiStrtDtm?: string // 유효시작일시
  valiEndDtm?: string // 유효종료일시
  useYn?: string // 사용여부
  useDtm?: string // 사용일자
}

export type PromotionInfo = {
  couponIssuedInfo?: CouponIssuedInfo // 쿠폰 발급 정보 리스트
  goodsNo?: string // 상품번호
  itmNo?: string // 단품번호
  baseAmt?: bigint // 기준금액
}

export type DlvBenefitInfo = {
  promoNo?: string // 프로모션번호
  promoNm?: string // 프로모션명
  promoTypCd?: string // 프로모션유형
  ourChrgRate?: number // 자사분담률
  entrChrgRate?: number // 협력사분담률
  cpnIsuNo?: string // 쿠폰발급번호
}

export type PromotionDeliGrpValidationRequest = {
  deliNo: string // 배송번호
  entrNo: string // 협력사번호
  dlexAmt: number // 배송비
  addDlexAmt: bigint // 추가배송비
  benefitInfo: DlvBenefitInfo // 혜택 정보 리스트
}

export type BenefitMapProps = {
  promoNo: string
  promoNm: string
  promoTypCd: string
  ourChrgRate: number
  entrChrgRate: number
  fixamtFxrtGbCd: string
  dcRateAmt: number
  minBuyQty: number
  minBuyAmt: number
  maxDcAmt: number
}

export type ApplicableIssuedBenefitProps = {
  isSelected: boolean
  promoNo?: string
  promoNm?: string
  cpnIsuNo: string
  valiStrtDtm: string
  valiEndDtm: string
  dcAmt: bigint
  dcAmtPerCnt: bigint
  goodsList?: OrderBenefitGoodsInfo[]
}

export type DcAmtBaseProps = {
  depth: string
  dcAmt: bigint
}

export type GoodsMapProps = {
  goodsNoAndItmNo: string
  goodsNo: string
  itmNo: string
  goodsNm: string
  brandNm: string
  supPcost: bigint
  norPrc: bigint
  salePrc: bigint
  stdCtgNo: string
  dispCateNo: string
  brandNo: string
  entrNo: string
  chlNo: string
  cnt: string
  dcAmtBaseList: DcAmtBaseProps[]
}

export type BenefitIssuedMapProps = {
  promoNo: string
  cpnIsuNo: string
  valiStrtDtm: string
  valiEndDtm: string
}

export type BenefitSelectedMgmtIsuProps = {
  cpnIsuNo: string
  selectedGoodsNoAndItmNoList: string[]
}

export type BenefitSelectedMgmtMapProps = {
  isuList: BenefitSelectedMgmtIsuProps[]
}

export type BenefitMap = Map<string, BenefitMapProps>
export type BenefitIssuedMap = Map<string | undefined, BenefitIssuedMapProps>
export type BenefitSelectedMgmtMap = Map<
  string | undefined,
  BenefitSelectedMgmtMapProps
>
export type GoodsMap = Map<string, GoodsMapProps>

export type GoodsBenefitListProps = {
  goodsNoAndItmNo?: string
  promoNo?: string
  dcAmt?: bigint
  dcAmtPerCnt?: bigint
  supPcost?: number
  amtBeforeDiscount?: number
  totalDcAmtThisBenefit?: bigint
  cnt?: number
}

export type GoodsBenefitProps = {
  goodsNoAndItmNo?: string
  goodsNo?: string
  itmNo?: string
  supPcost?: bigint
  amtBeforeDiscount?: number
  cnt?: number
  promoNo?: string
  totalDcAmtThisBenefit?: bigint
  benefitList?: GoodsBenefitListProps[]
  goodsList?: GoodsBenefitListProps[]
}

export type TotalBenefitProps = {
  goodsBenefitList: GoodsBenefitProps[]
  orderBenefitList: GoodsBenefitProps[]
}

export type ApplicableTotalBenefitProps = {
  goodsBenefitList: GoodsBenefitProps[]
  orderBenefitList: GoodsBenefitProps[]
}

export type BenefitBaseContextProps = {
  benefitMap: BenefitMap
  benefitIssuedMap: BenefitIssuedMap
  benefitSelectedMgmtMap: BenefitSelectedMgmtMap
  goodsMap: GoodsMap
  totalBenefitBase: TotalBenefitProps
}

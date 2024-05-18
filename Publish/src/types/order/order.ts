import type { StCdDtlResponse } from '~/types/common/code'
import type {
  BenefitResponse,
  DlvCouponInfo,
  PromotionDeliGrpValidationRequest
} from '@/types/order/promotion'

export type OrderSheetRequest = {
  bsketNoList: number[]
  deliMethodCd: string
  ordGbCd: string
  fromShoppingbag: boolean
  ordMediaCd?: string
}

export type OrderCodeInfo = {
  cd: string
  cdDesc?: string
  cdNm: string
  ref1Val?: string
  ref2Val?: string
  ref3Val?: string
  ref4Val?: string
  ref5Val?: string
  ref6Val?: string
  ref7Val?: string
  sortSeq?: number
}

export type OrderCardCompany = {
  payWayCd: string
  useYn: string
  langCd: string
  cdNm: string
  cdDesc: string
  pgGbCd: string
  isMainPaymethod: boolean
  memberSubPaymethodAmount: number
  cardCompanyList: OrderCodeInfo[]
}

export type OrderSubPayMethodInfo = {
  cardCompanyList: OrderCardCompany[]
  cdDesc: string
  cdNm: string
  langCd: string
  mainPaymethod: boolean
  memberSubPaymethodAmount: number
  payAmt?: number
  payWayCd: string
  pgGbCd: string
  useYn: string
}

export type OrderMainPayMethodInfo = {
  cardCompanyList: OrderCodeInfo[]
  cdDesc: string
  cdNm: string
  langCd: string
  mainPaymethod: boolean
  memberSubPaymethodAmount: number
  payWayCd: string
  pgGbCd: string
  useYn: string
  selectCardCd: string
}

export type OrderMemberInfo = {
  pPushAgrYn: string
  brth: string
  cellEndNo: string
  cellSctNo: string
  cellTxnoNo: string
  ciCtacValYn: string
  comGbCd?: string
  comGbNm?: string
  dtlAddr: string
  emailAddr: string
  emailRecvAgrYn: string
  frstLoginDtm: string
  frstOrdDt: string
  histEndDt: string
  histStrDt: string
  loginCnt: number
  loginId: string
  lstOrdDt: string
  mbrGbCd?: string
  mbrGbNm: string
  mbrGradeCd: string
  mbrGradeNm: string
  mbrJoinDtm: string
  mbrMgrCd: string
  mbrMgrNm: string
  mbrNm: string
  mbrNo: string
  mgrGbCd: string
  nafrGbCd: string
  nafrGbNm: string
  ordCnt: number
  ordLmtYn: string
  pwdChgDtm?: string
  sexGbCd: string
  sexGbNm: string
  smpctAcctLinkGbCd: string
  smpctAcctLinkGbNm: string
  smsRecvAgrYn: string
  stafYn: string
  telEndNo?: string
  telRgnNo?: string
  telTxnoNo?: string
  zipAddr: string
  zipNo: string
}

export type OrderSheetInfo = {
  ordGbCd: string
  mainPayMethodInfoList: OrderMainPayMethodInfo[]
  subPayMethodInfoList: OrderSubPayMethodInfo[]
  memberInfo: OrderMemberInfo
}

export type AddrInfoProps = {
  mbrDlvpSeq?: string
  name?: string
  baseDlvpYn?: string
  defaultAddr?: string
  zipCode?: string
  phoneNumber?: string
  deliMsg?: string
  comnFrdrEtcMethod?: string
  access?: string
}

export type GiftCard = {
  prstTypCd: string
  prstMsg: string
}

export type OrdererInfo = {
  loginId: string
  mgrGbCd: string
  mbrGradeCd: string
  mbrMgrCd: string
  fstOrdYn: string
  ordManZipNo: string
  ordManZipAddr: string
  mbrNo: string
  ordManNm: string
  umemPwd: string
  umemPwdChk?: string
  ordManEmailAddr: string
  cellTxnoNo: string
  cellSctNo: string
  cellEndNo: string
  telRgnNo: string
  telTxnoNo: string
  telEndNo: string
  ordLmtYn: string
  brth: string
  adlCertiYn: string
  comGbCd: string
  stafYn: string
  nonMemberAge: number
  nonMemberCertiYn: string
  isNonMemberPassword?: boolean
  isNonMemberEmail?: boolean
}

export type OrdBaseInfo = {
  ordNo: string
  siteNo: string
  ordMediaCd: string
  ordGbCd: string
  rfdBankCd: string
  rfdActnNo: string
  rcdActnDepositorNm: string
  rglrDeliNo: string
  chlNo: string
  chlDtlNo: string
  ordererInfo: OrdererInfo
  giftCard: GiftCard
}

export type OrderPromotionInfo = {
  isMaxYn?: string // 최대혜택여부
  dcAmt?: bigint // 할인금액
  dcAmtPerCnt?: bigint // 개수별할인금액
  cpnIsuNo?: string // 쿠폰발급번호
}

export type GoodsBenefitResponse = {
  goodsNo?: string // 상품번호
  itmNo?: string // 단품번호
  dcAmt: bigint // 전체할인금액
  benefitList?: OrderPromotionInfo[] // 상품에 사용가능한 혜택 정보
  goodsNoAndItmNo?: string
  promoNo?: string
  cpnIsuNo?: string
  dcAmtPerCnt?: bigint
}

export type BasketGoods = {
  brandNm: string
  goodsNm: string
  itmNm: string
  salePrc: number
  goodsImg: string // 상품이미지
  event: string
  order: string
  deliveryStatus: string
  goodsNo: string // 상품번호
  itmNo: string // 단품번호
  bsketNo: number // 장바구니번호
  bsketQty: number // 장바구니 수량
  entrNo?: string // 협력사번호
  ordQty: number
  saleMethCd: string // 판매방식코드(PR003)
  brandNo: string // 브랜드번호
  buyrAgeLmtCd: string // 구매연령제한코드
  saleStatCd: string // 판매상태코드(PR005)
  supPcost: bigint // 공급원가
  norPrc: bigint // 정상가
  stkQty: number // 단품수량
  maxDcAmt: bigint // 최대혜택금액
  itmSaleStatCd: string // 단품판매상태코드(PR005)
  gvgfPsbYn: string // 선물하기가능여부
  rglrDeliGoodsYn: string // 정기배송상품여부
  prestNm?: string
  maxBsketQty: number
  sngGoodsYn: string
  fwdidcPrarDy?: string // 출고지시예정일자

  // infDispCtgNo?: string,  //유입전시카테고리번호
  // repDispCtgNo?: string;  //대표전시카테고리번호
  // conrNo?: string;  //코너번호
  // sysModDtm?: string;  //시스템수정시간 /* order api 에서는 LocalDateTime type임. 확인 필요. */
  // stdCtgNo?: string,  //표준카테고리번호
  // goodsCompCd?: string;  //상품구성코드(PR001)
  // goodsTypCd?: string;  //상품유형코드(PR002)
  // dispYn?: string;  //전시여부
  // saleStrDtm?: string;  //판매시작일시  /* order api 에서는 LocalDateTime type임. 확인 필요. */
  // saleEndDtm?: string;  //판매종료일시  /* order api 에서는 LocalDateTime type임. 확인 필요. */
  // buyTypCd?: string;  //매입유형코드(PR006)
  // taxGbCd?: string;  //과면세구분코드(PR007)
  // stkMgrYn?: string;  //재고관리여부
  // buyQtyLmtYn?: string;  //구매수량제한여부
  // minLmtQty?: number;  //최소제한수량
  // maxLmtQty?: number;  //최대제한수량
  // safeStkNotiYn?: string;  //안전재고알림여부
  // deliGoodsGbCd?: string;  //배송상품구분코드(PR010)
  // deliWayCd?: string;  //배송수단코드(PR009)
  // deliPsbRgnCd?: string;  //배송가능지역코드(PR030)
  // deliDday?: bigint;  //배송기일
  // deliPolcNo?: string;  //배송정책번호
  // bpckPsbYn?: string;  //합포장가능여부
  // rtnPsbYn?: string;  //반품가능여부
  // exchPsbYn?: string;  //교환가능여부
  // preSalePrc?: bigint;  //종전판매가
  // mrgnRate?: number;  //마진율
  // payMeanInfo?: string;  //결제수단
  // rsvStrtDtm?: string;  //예약시작일시  /* order api 에서는 LocalDateTime type임. 확인 필요. */
  // rsvEndDtm?: string;  //예약종료일시   /* order api 에서는 LocalDateTime type임. 확인 필요. */
  // hsCd?: string;  //품목분류코드
  // wishYn?: string;  //위시리스트 여부
}

export type DlvBenefitInfo = {
  // promoNo?: string; //프로모션번호
  // promoNm?: string; //프로모션명
  // promoTypCd?: string; //프로모션유형
  // ourChrgRate?: number; //자사분담률
  // entrChrgRate?: number; //협력사분담률
  // cpnIsuNo?: string; //쿠폰발급번호
}

export type DlvAmtInfo = {
  ordCostGbCd?: string // 주문비용구분코드(OM043)
  dlexTypCd: string // 배송비유형코드(VD005)
  stdAdtnAmt: bigint // 기준부가비용금액
  dlexAmt: bigint // 배송비금액
  aplyAdtnAmt: bigint // 적용부가비용금액
  // trdTypCd?: string; // 거래유형코드(VD002)
  entrNo?: string // 협력사번호
  // deliPolcNo?: string; // 배송정책번호
  dlvBenefitInfo?: DlvBenefitInfo // 배송혜택정보
}

export type DlvGrpInfo = {
  deliNo: string
  basketGoodsList: BasketGoods[] // 장바구니상품정보
  dlvAmtInfoList: DlvAmtInfo[] // 배송비정보
}

export type OrdDlvInfo = {
  dlvGrpInfoList?: DlvGrpInfo[] // comnFrdrPwdMask
}

export type AeFvrInfo = {
  aeFvrSeq: string
  aplyMinAmt: bigint
  aplyMaxAmt: bigint
  aeGoodsNm: string
  aeGoodsNo: string
  aeGoodsItmNo: string
  aeGoodsImgPath: string
}

export type AeEvtInfo = {
  goodsNo: string
  itmNo: string
  aeNo: string
  addEvtTypCd: string
  aeStrDtm: Date
  aeEndDtm: Date
  payStrDt: string
  payEndDt: string
  tmEvtYn: string
  aplyStrTm: string
  aplyEndTm: string
  aeDesc: string
  aeNm: string
  aeGoodsList: AeFvrInfo[]
}

export type OrdGoodsInfo = {
  basketGoods: BasketGoods
  aplyGoodsBnfInfo: GoodsBenefitResponse
  aeEvtList: AeEvtInfo[]
}

export type OrderDlvInfo = {
  deliNo: string // 배송번호
  entrNo: string // 협력사번호
  dlexAmt: number // 배송비
  addDlexAmt: bigint // 추가배송비
  dlvBenefitInfo: DlvBenefitInfo // 혜택 정보 리스트
  benefitInfo?: DlvBenefitInfo // 혜택 정보 리스트(쿠폰선택팝업에서)
  baseDlvpYn: string
  deliMsg?: string
  deliMsgCd: string
  deliMsgCdNm?: string
  comnFrdrCogoMethodCd: string
  comnFrdrCogoMethodCdNm?: string
  comnFrdrEtcMethod?: string
  comnFrdrPwd?: string
  comnFrdrPwdMask?: string
  dlvGrpInfoList: DlvGrpInfo[]
  dlvpNm: string
  dlvpSeq: string
  dtlAddr: string
  mbrDlvpSeq: string
  rcvmnCellEndNo: string
  rcvmnCellSctNo: string
  rcvmnCellTxnoNo: string
  rcvmnEmailAddr?: string
  rcvmnNm: string
  rcvmnTelEndNo?: string
  rcvmnTelRgnNo?: string
  rcvmnTelTxnoNo?: string
  shopTrafMsg?: string
  zipAddr: string
  zipNo: string
  setDlv: boolean
}

export type OrderGoodsInfo = {
  accmAmt: number
  goodsNo: string
  goodsNoAndItmNo: string
  itmNo: string
  ourChrgRate: number
}

export type OrderBenefitGoodsInfo = {
  goodsNoAndItmNo?: string
  goodsNo?: string // 상품번호
  itmNo?: string // 단품번호
  dcAmt?: bigint // 할인금액
}

export type BenefitOrderPromotionInfo = {
  promoNo: string
  promoNm?: string
  promoTypCd?: string
  ourChrgRate?: number
  entrChrgRate?: number
  fixamtFxrtGbCd?: string
  dcRateAmt?: number
  minBuyQty?: number
  minBuyAmt?: number
  maxDcAmt?: number
  isMaxYn?: string // 최대혜택여부
  dcAmt?: bigint // 할인금액
  cpnIsuNo?: string // 쿠폰발급번호
  goods?: OrderBenefitGoodsInfo[] // 상품정보 리스트
  totalDcAmtThisBenefit?: bigint
  goodsList?: OrderBenefitGoodsInfo[]
}

export type AccmInfo = {
  goodsNo: string
  itmNo: string
  accmAmt: number
  goodsNoAndItmNo: string
}

export type AccmPromotionInfo = {
  accmGbCd: string
  accmRate: bigint
  accmAmt: bigint
  promoNo: string
  promoNm: string
  promoTypCd: string
  ourChrgRate: number
  entrChrgRate: number
  fixamtFxrtGbCd: string
  goodsAccmList: AccmInfo[]
}

export type AccmResponse = {
  totalAccmAmt: bigint
  accmList: AccmPromotionInfo[]
}

export type CartPaymentParamProps = {
  price?: number
  discount?: number
  delivery?: number
  deliveryDiscount?: number
  itemCount?: number
  totalPrice?: number
  mileageTotal?: number
  accmInfo?: AccmResponse
  type?: boolean
  orderCheck?: boolean
  applyMileagePrice?: number
  checkedRows?: number[]
  isNonMemberEmail?: boolean
}

export type OrderRegisterRequest = {
  accmInfo: AccmResponse
  ordBaseInfo: OrdBaseInfo // 주문기본정보
  ordGoodsInfoList: OrdGoodsInfo[] // 주문상품정보
  ordDlvInfoList: OrderDlvInfo[] // 주문배송정보
  ordBnfInfo?: BenefitOrderPromotionInfo // 주문프로모션정보
  paymentRequest: { orderInfo: {} }
  dlvCouponInfo: DlvCouponInfo
  deliMethodCd: string
}

export type OrderSheetResponse = {
  orderSheetInfo: OrderSheetInfo
  orderRegisterRequest: OrderRegisterRequest
  deliveryMessageCodeList?: StCdDtlResponse[]
  cmnFrdrCogoMethodCdList?: StCdDtlResponse[]
  multiDeliveryCodeList: StCdDtlResponse
  aeEvtList: AeEvtInfo[]
  emailCodeList?: StCdDtlResponse[]
  bsketNoList: number[]
  deliMethodCd: string
  ordGbCd: string
  ordMediaCd: string
}

export type OrderDeliveryParam = {
  deliveryCnt: number
  deliveryCheck: boolean
  benefitPrice: number
  cartPaymentParam: CartPaymentParamProps
  ordDlvInfoList: Array<OrderDlvInfo>
  memberInfo: OrderMemberInfo
  emailCodeList: StCdDtlResponse[]
  ordGoodsInfoList: Array<OrdGoodsInfo>
  deliveryMessageCodeList: StCdDtlResponse[]
  comnFrdrCogoMethodCdList: StCdDtlResponse[]
}

export type CartPaymentProps = {
  price?: string
  discount?: string
  delivery?: string
  deliveryDiscount?: string
  itemCount?: string
  totalPrice?: string
  type?: string
  orderCheck?: boolean
  mileageTotal?: number
  accmInfo?: AccmResponse
  checkedGoodsList?: BasketGoods[]
  applyMileagePrice?: string
}

export type PaymentRequestModel = {
  orderInfo: object
  payInfoList: Array<object>
}

export type CouponPopupGoods = {
  brandNm: string
  brandNo: string
  chlNo: string
  cnt: number
  dispCateNo: string
  entrNo: string
  goodsNm: string
  goodsNo: string
  goodsNoAndItmNo: string
  itmNo: string
  norPrc: number
  salePrc: number
  stdCtgNo: string
  supPcost: number
}

export type CouponPopupDataProps = {
  ordMediaCd: string
  ordTypeGbCd: string
  cpnPopupGbCd: string
  goodsList: CouponPopupGoods[]
  dlvGrpList: PromotionDeliGrpValidationRequest[]
}

export type goodsProps = {
  brandNm: string
  goodsNo: string
  goodsNm: string
  itmNm: string
  price: number
  thumbnailUrl: string
  event?: string
  order?: string
  prestNm?: string
  deliveryStatus?: string
  ordQty: number
  maxBsketQty: number
  bsketNo?: number
  bsketQty?: number
  fwdidcPrarDy?: string
}

export type GiftOrderRecipient = {
  rcvmnNm: string
  cellSctNo: string
  cellTxnoNo: string
  cellEndNo: string
}

export type TopNotificationRequest = {
  dispMediaCd: string
  scrnLgrpCd: string
  scrnMgrpCd: string
}

export type TopNotificationResponse = {
  ntcConts: string[]
}

export type SelectPayInfo = {
  payWay: string
  mainPay: string
  cardPay: string
}

export type OrderMileageParam = {
  subPayMethodInfoList: Array<OrderSubPayMethodInfo>
  totalOrderAmount: number
  resetMileage?: boolean
}

export type selectedBenefitInfoProps = {
  dlvCouponInfo: DlvCouponInfo
  goodsBenefitList: GoodsBenefitResponse[]
  maxBenefitInfo?: BenefitResponse
  orderBenefitList?: BenefitOrderPromotionInfo[]
  maxDlvBenefitAmount: number
  maxBenefitAmount: number
  isBenefitApply: boolean
  benefitCount: number
}

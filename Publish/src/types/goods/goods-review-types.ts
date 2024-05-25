export type GoodsPartial<T, U extends keyof T> = Partial<Pick<T, U>> &
  Omit<T, U>

export type ReviewMember = {
  mbrNo: string
  loginId: string
  mbrStatCd: string
  mbrGradeCd: string
  mbrGradeCdNm: string
}

export type ReviewContents = {
  revNo: string
  contSn: string
  contFilePathNm: string
  contFileNm: string
  revGbCd: string
  dispSeq: number
  status: string
  fileContentsYn: string
  thumbnail?: string
  file?: File
}

export type ReviewEvaluations = {
  siteNo: string
  langCd: string
  revNo: string
  evltItemNo: string
  evltItemNm: string
  evltValNo: string
  evltVal: string
  sortSeq: number
  repValueYn: string
  evltValPrcnt: number
}

export type ReviewData = {
  siteNo: string
  langCd: string
  sysRegDtm: string
  sysRegId: string
  sysModDtm: string
  sysModId: string
  revNo: string
  member: ReviewMember
  goodsNo: string
  entrNo: string
  stdCtgNo: string
  revTypCd: string
  revGbCd: string
  revWrtDtm: string
  revCont: string
  revScrVal: number
  stfd1Yn: string
  stfd2Yn: string
  stfd3Yn: string
  frstRevYn: string
  revDispStatCd: string
  contDispStatCd: string
  dispProcDtm: string
  dispProcmnId: string
  delYn: string
  hlpfulCnt: number
  myClickedHelpYn: string
  myReviewYn: string
  contents: Array<ReviewContents>
  evaluations: Array<ReviewEvaluations>
}

export type ReviewDataList = {
  data: Array<ReviewData>
  totalCnt: number
  textRevCnt?: number
  photoVideoRevCnt?: number
}

export type ReviewListData = {
  goods: object
  reviewListData: ReviewDataList
}

export type ReviewTopRankEvaluationList = {
  siteNo: string
  langCd: string
  revNo: string
  evltItemNo: string
  evltItemNm: string
  sortSeq: number
  repValueYn: string
  evaluations: Array<ReviewEvaluations>
  notEmpty: boolean
  evltValPrcnt: number
}

export type ReviewSummary = {
  goodsNo: string
  avgScr: number
  topRankEvaluationList: Array<ReviewTopRankEvaluationList>
}

export type ReviewThumbnails = {
  revNo: string
  contSn: string
  contFilePathNm: string
  revGbCd: string
  contentCnt: number
  status: string
  fileContentsYn: string
  contFileNm: string
}

export type ReviewResponse<T> = {
  code: string
  payload: T
  message?: string
}

export type ReviewThumbnailList = {
  data: Array<ReviewThumbnails>
  totalCnt: number
}

export type ReviewThumbnailResponse = {
  code: string
  payload: ReviewThumbnailList
  message?: string
}

export type ReviewHlpful = {
  revNo: string
  delYn: string
  hlpfulCnt: number
}

export type ReviewCommonResponse = {
  code: string
  message?: string
  error?: boolean
}

export type PossibleReview = {
  brandNm: string
  dday: number
  deliFnshDtm: string
  goodsNm: string
  goodsNo: string
  imgUrl: string
  itmNo: string
  ordNo: string
  ordProcSeq: number
  ordSeq: number
  stdCtgNo: string
}

export type PosssibleReviewList = {
  totCnt: number
  revWritePsbList: Array<PossibleReview>
}

export type ReviewGoodsInfo = {
  goodsNo: string
  goodsNm: string
  brandNm: string
  contFilePathNm: string
  entrNo: string | null
  stdCtgNo: string | null
}

export type MypageReview = {
  goods: ReviewGoodsInfo
  review: ReviewData
}

export type MypageReviewList = {
  data: Array<MypageReview>
  totalCnt: number
}

// export interface GoodsReviewModalRef {
//   submitHandler?: (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>)=>void
// }

export type ReviewEvaluationValue = {
  evltItemNo: string
  evltItemNm: string
  evltValNo: string
  evltVal: string
  sortSeq: number
}

export type ReviewEvaluationList = {
  selectedEvltValNo?: string
  evltItemNo: string
  evltItemNm: string
  useYn: string
  valueList: Array<Omit<ReviewEvaluationValue, 'evltItemNm'>>
}

export interface GoodsReviewContent {
  revNo: string
  contSn: string
  contFilePathNm: string
  dispSeq?: number
}

type GoodsReviewFileDeleteType = GoodsPartial<
  GoodsReviewContent,
  'contFilePathNm'
>[]

export type GoodsReviewFile = {
  thumbnail: string
  revGbCd: string
  dispSeq?: number
  contSn: string | undefined
  status: string
  file: File | null
  id?: number
  revNo?: string
  contFilePathNm?: string
  contFileNm?: string
  fileContentsYn?: string
}

export type GoodsReviewModel = {
  revNo?: string
  revCont?: string
  revScrVal?: number
  ordNo?: string
  itmNo?: string
  evaluations: ReviewEvaluationList | {}
  contents?: Array<ReviewContents>
  goodsNo?: string
  orderDetail?: { ordNo: string; ordSeq: number }
  deleteGoodsReviewContList?: GoodsReviewFileDeleteType
  attachFileList?: (ReviewContents | { file?: File })[]
  fileList?: Array<GoodsReviewFile>
}

export type GoodsReviewFileInputModel = {
  attachFileList: (GoodsReviewContent | { file?: File })[]
  deleteGoodsReviewContList: GoodsReviewFileDeleteType
}

export interface GoodsCommonResponse<T> {
  code: string
  error?: boolean
  isProcess?: string
  payload?: T
  message?: string
}

export interface GoodsReviewContentUploadType {
  thumbnail: string
  revGbCd: '20' | '30'
  dispSeq?: number
  contSn?: string
  status: 'D' | 'C' | 'U'
  file: File | null
  id: number
  revNo?: string
}

export type GoodsPeriod = '1week' | '1month' | '3month' | 'details'

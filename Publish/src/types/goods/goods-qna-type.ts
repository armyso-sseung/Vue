// custom type util

// <타겟타입, 'removeProp1' | 'removeProp2', 'partialProp1' | 'partialProp2' >, 원하는 타입만 partial 처리
import type { GoodsPartial } from '~/types/goods/goods-review-types'

export type GoodsRePack<
  T,
  U extends keyof T,
  V extends keyof Omit<T, U>
> = Omit<T, U | V> & Partial<Pick<T, V>>

// type
export interface GoodsCommonDataList<T> {
  data: T[]
  totalCnt: number
}

export type GoodsYN = 'Y' | 'N'

export interface GoodsPaginationModel {
  pageNo: number
  pageSize: number
}

export interface GoodsSearchModel {
  searchStartDate?: string
  searchEndDate?: string
}

export interface GoodsQnAGoodsBase {
  goodsNo: string
  goodsNm: string
  brandNm: string
  contFilePathNm: string
  entrNo: string
  stdCtgNo: string
}

export interface GoodsQnaContent {
  questNo: string
  contSn: string
  contFilePathNm: string
}

export interface GoodsQnaAnswer {
  questNo: string
  goodsNo: string
  mbrNo: string
  loginId: string
  mbrStatCd: string
  entrNo: string
  questTypCd: string
  questTitle: string
  questCont: string
  procStatCd: string
  prodId: string
  notiMethodCd: string
  scrtScrpYn: string
  kakaoSMScheck: string
  cellSctNo: string
  cellTxnoNo: string
  cellEndNo: string
  questDispStatCd: string
  emailAddr: string
  delYn: string
  ansCont: string
  sysRegDtm: string
  contents: GoodsQnaContent[]
}

export interface GoodsQnaDetail {
  questNo: string
  goodsNo: string
  mbrNo: string
  loginId: string
  mbrStatCd: string
  entrNo: string
  questTypCd: string
  questTitle: string
  questCont: string
  questDtm: string
  procStatCd: string
  prodId: string
  notiMethodCd: string
  scrtScrpYn: GoodsYN
  kakaoSMScheck: GoodsYN
  cellSctNo: string
  cellTxnoNo: string
  cellEndNo: string
  questDispStatCd: string
  emailAddr: string
  delYn: GoodsYN
  contents: GoodsQnaContent[]
  answerList?: GoodsQnaAnswer[]
}

type GoodsQnaFileDeleteType = GoodsPartial<GoodsQnaContent, 'contFilePathNm'>[]

type GoodsQnAFileInputModel = {
  attachFileList: (GoodsQnaContent | { file: File })[]
  deleteGoodsQnaContList: GoodsQnaFileDeleteType
}

// 요청용 모델 (detail에서 필요한 prop만 가져옴)
export type GoodsQnAModel = Partial<
  Pick<GoodsQnaDetail, 'questNo' | 'entrNo'>
> &
  Pick<
    GoodsQnaDetail,
    | 'questTitle'
    | 'questCont'
    | 'cellSctNo'
    | 'cellTxnoNo'
    | 'cellEndNo'
    | 'emailAddr'
    | 'scrtScrpYn'
    | 'kakaoSMScheck'
  > &
  GoodsQnAFileInputModel

export interface GoodsQnaCommonResponse {
  goods: GoodsQnAGoodsBase // 상품정보
  question: GoodsQnaDetail // QnA상세
  questionListData: GoodsCommonDataList<GoodsQnaDetail> // 리스트 데이터
  questionList: GoodsQnaDetail[] // 실제 안쓰임?
}

export type GoodsQnaMypageListResponseModel = Pick<
  GoodsQnaCommonResponse,
  'goods' | 'question'
>

import type { ErrorType } from '~/types/common/error'

export type LoginRequest = {
  loginFromCd: string
  loginType: string
  lgnId: string
  passwd: string | null
  captchaCd?: string
  otp?: string
}

export type LoginResponse = {
  accessToken?: string
  refreshToken?: string
  mbrNo?: string
  ciCtacValYn?: string
  mbrMgrCd?: string
  pwdChgYn?: string
  tmpPwdIssuYn?: string
  loginId?: string
  resultMessage?: string
  resultCode?: string
}

export type AutoBioLoginResponse = {
  token: string
}

export type MemberInfo = ErrorType & {
  mbrNo: string
  mbrGradeCd: string
  mbrGradeNm: string
  mbrGbCd: string
  mbrGbNm: string
  mbrMgrCd: string
  mbrMgrNm: string
  brth: string
  sexGbCd: string
  sexGbNm: string
  nafrGbCd: string
  nafrGbNm: string
  stafYn: string
  comGbCd: string
  comGbNm: string
  frstLoginDtm: string
  mbrNm: string
  loginId: string
  zipNo: string
  zipAddr: string
  dtlAddr: string
  cellSctNo: string
  cellTxnoNo: string
  cellEndNo: string
  emailAddr: string
  emailRecvAgrYn: string
  smsRecvAgrYn: string
  kakaoRecvAgrYn: string
  histStrDt: string
  histEndDt: string
  smpctAcctLinkGbCd: string
  smpctAcctLinkGbNm: string
  frstOrdDt: string
  lstOrdDt: string
  loginCnt: string
  mbrJoinDtm: string
  pwdChgDtm: string
  appPushAgrYn: string
  ciCtacValYn: string
  ordLmtYn: string
  smpctGbCd: string
  smpctId: string
}

export type SocialAuthResponse = {
  brth: string
  mbrNm: string
  emailAddr: string
  sexGbCd: string
  mbrMgrCd: string
  ciCtacVal: string
  smpctGbCd: string
  nafrGbCd: string
  phoneNumber: string
  mbrNo: string
  connectYn: string
  smpctId: string
  loginId: string
}

export type MbrCiDtlResponse = {
  loginId: string
  mbrNo: string
}

export type MbrCiResponse = {
  ciCheckYn: string
  memberInfo: MbrCiDtlResponse
}

export type PostCodeResponse = {
  zipNo: string
  address: string
}

export type EtMbrDlvpInfo = {
  mbrDlvpSeq?: string
  dlvpNm?: string
  rcvmnNm: string
  baseDlvpYn?: string
  zipNoSeq?: string
  zipNo?: string
  zipAddr?: string
  dtlAddr?: string
  emailAddr?: string
  cellSctNo: string
  cellTxnoNo: string
  cellEndNo: string
  telRgnNo?: string
  telTxnoNo?: string
  telEndNo?: string
  deliMsgCd?: string
  deliMsg?: string
  comnFrdrCogoMethodCd?: string
  comnFrdrEtcMethod?: string
  comnFrdrPwd?: string
  useYn?: string
  userSortSeq?: string
  comnFrdrPwdMask?: string
}

export type EtMbrDlvpInfoResponse = {
  totCnt: number
  dlvpList: EtMbrDlvpInfo[]
  maxDlvpCnt: number
}

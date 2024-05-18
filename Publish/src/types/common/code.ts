export interface StCdDtlResponse {
  cd: string
  cdNm: string
  cdDesc: string
  sortSeq: string
  ref1Val: string
  ref2Val: string
  ref3Val: string
  ref4Val: string
  ref5Val: string
  ref6Val: string
  ref7Val: string
}

export interface CodeList {
  grpCd: string
  grpCdNm?: string
  codeInfo: StCdDtlResponse[]
}

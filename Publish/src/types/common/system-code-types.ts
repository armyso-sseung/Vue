type CommonCodeRequest = {
  grpCd: string
  midCd?: string
  ref1Val?: string
  ref2Val?: string
  ref3Val?: string
}

type CommonCode = {
  cd: string // 코드
  cdNm: string // 코드명
  cdDesc: string // 코드설명
  sortSeq: string // 정렬순서
  ref1Val: string // 참조1값
  ref2Val: string // 참조2값
  ref3Val: string // 참조3값
  ref4Val: string // 참조4값
  ref5Val: string // 참조5값
  ref6Val: string // 참조6값
  ref7Val: string // 참조7값
}

type CommonGroupCode = {
  grpCd: string
  grpCdNm: string
  codeInfo: CommonCode[]
}

export type { CommonCodeRequest, CommonCode, CommonGroupCode }

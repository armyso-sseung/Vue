export type EtEntrDlvpInfoTypes = {
  entrDlvpNo: string | null | undefined // 협력사배송지번호
  entrNo: string | null | undefined // 협력사번호
  dlvpTypCd: string | null | undefined // 배송지유형코드(VD007)
  dlvpTypCdNm: string | null | undefined // 배송지유형코드명
  dlvpNm: string | null | undefined // 배송지명
  useYn: string | null | undefined // 사용여부
  zipNoSeq: string | null | undefined // 우편번호순번
  zipNo: string | null | undefined // 우편번호
  zipAddr: string | null | undefined // 우편주소
  dtlAddr: string | null | undefined // 상세주소
  utakmnNm: string | null | undefined // 담당자명
  aempTelRgnNo: string | null | undefined // 담당자전화지역번호
  aempTelTxnoNo: string | null | undefined // 담당자전화국번번호
  aempTelEndNo: string | null | undefined // 담당자전화끝번호
  aempCellSctNo: string | null | undefined // 담당자휴대폰구분번호
  aempCellTxnoNo: string | null | undefined // 담당자휴대폰국번번호
  aempCellEndNo: string | null | undefined // 담당자휴대폰끝번호
}

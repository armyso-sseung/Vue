export type RestockRequest = {
  langCd?: string // 언어코드(CM009)
  reWhsgNotiSgtNo?: string // 재입고알림 신청번호
  mbrNo?: string // 회원번호
  goodsNo: string // 상품번호
  itmNo: string // 단품번호
  reWhsgNotiMethodCd: string // 재입고알림방법코드
  reWhsgNotiStatCd?: string // 재입고알림상태코드
  telRgnNo?: string // 휴대폰 앞자리
  telTxnoNo?: string // 휴대폰 중간자리
  telEndNo?: string // 휴대폰 끝자리
  emailAddr?: string // 이메일주소
  indInfoGthrMkusAgrYn: 'Y' | 'N' // 개인정보수집이용동의여부
  reWhsgNotiCnclPathCd?: string // 재입고알림취소경로코드
  delYn: 'Y' | 'N' // 삭제여부
}

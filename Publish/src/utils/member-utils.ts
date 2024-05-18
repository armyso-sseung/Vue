import { isMobile } from '#build/imports'
import { isApp } from '~/utils/device-utils'

import { ME026 } from '~/constants/member-constants'

/**
 * 비밀번호 유효성 검증
 * - 하나의 영문자, 하나의 숫자, 하나의 특수문자 또는 기호를 포함
 * - 최소 8자 이상의 길이
 * */
export const isValidPasswordPattern = (pwd: string) => {
  return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[^a-zA-Z0-9ㄱ-힣]).{8,30}$/.test(pwd)
}

/**
 * 로그인 매체 코드
 * */
export const useLoginMediaCd = () => {
  let mediaCd = ME026.PC_WEB.code
  if (isMobile()) {
    mediaCd = isApp() ? ME026.MOBILE_APP.code : ME026.MOBILE_WEB.code
  }
  return mediaCd
}

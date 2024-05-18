export const MEMBER_COOKIE_KEY = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  CAPTCHA_YN: 'captchaYn',
  AUTO_LOGIN_TOKEN: 'autoLoginToken',
  AGE: 'age',
  ADL_CERTI: 'adl_certi',
  NON_MEMBER_INFO: 'nonMemberInfo'
}

export const MEMBER_LOCAL_STORAGE_KEY = {
  AUTO_LOGIN: 'AUTO_LOGIN'
}

export const LOGIN_RESPONSE_CODE = {
  NORMAL: '0000',
  INVALID_LOGIN_INFO: '2003',
  CHG_PASSWORD: '2005',
  TMP_PASSWORD: '2006',
  INVALID_PWD: '2007',
  INVALID_PWD_FIVE: '2008',
  FAIL_INCORRECT_CAPTCHA: '2012',
  CREATE_CAPTCHA: '2013'
}

export const PASSWORD_RESPONSE_CODE = {
  NORMAL: '0000',
  INVALID_LOGIN_ID: '3002',
  FAIL_NOW_PWD: '3004'
}

export const ME002 = {
  UNION_MEMBER: { code: '10', name: '통합회원' },
  GENERAL_MEMBER: { code: '20', name: '일반회원' },
  SOCIAL_MEMBER: { code: '30', name: '소셜회원' },
  NO_MEMBER: { code: '99', name: '비회원' }
}

export const ME016 = {
  ACCUMULATE: { code: '10', name: '적립' },
  USE: { code: '20', name: '사용' }
}

export const ME025 = {
  SMS_RECV_AGR: { code: '10', name: 'SMS 수신동의' },
  EMAIL_RECV_AGR: { code: '20', name: '이메일 수신동의' },
  KAKAO_RECV_AGR: { code: '50', name: '카카오톡 수신동의' }
}

export const ME026 = {
  PC_WEB: { code: '10', name: 'PC-WEB' },
  MOBILE_WEB: { code: '20', name: '모바일WEB' },
  MOBILE_APP: { code: '30', name: '모바일APP' }
}

export const ME052 = {
  KAKAO: { code: '10', name: '카카오톡' },
  NAVER: { code: '20', name: '네이버' }
}

export const ME053 = {
  REFRESH_TOKEN: { code: '10', name: '리프레시토큰' },
  AUTO_LOGIN_TOKEN: { code: '20', name: '자동로그인토큰' },
  BIO_LOGIN_TOKEN: { code: '30', name: '생체인식토큰' },
  NEW_REFRESH_TOKEN: { code: '40', name: 'NEW리프레시토큰' },
  CHG_PASSWORD_TOKEN: { code: '50', name: '비밀번호변경토큰' }
}

export const ME056 = {
  NORMAL: { code: '10', name: '일반로그인' },
  AUTO_LOGIN: { code: '20', name: '자동로그인' },
  SOCIAL_LOGIN: { code: '50', name: '소셜로그인' }
}

export const MEMBER_URL = {
  FIND_POST_CODE_POPUP:
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  NAVER_SCRIPT_URL:
    'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js',
  KAKAO_SCRIPT_URL: 'https://developers.kakao.com/sdk/js/kakao.js'
}

export const SOCIAL_LOGIN_KEY = {
  KAKAO: '249d3bf77c8900ab5fee557e0406994f',
  NAVER: 'C_eEUKGIUtKiugJvRHbE'
}

export const ME035 = {
  PRODUCT: { code: '10', name: '상품' },
  BRAND: { code: '20', name: '브랜드' },
  CONTENTS: { code: '30', name: '기획전' }
}

export const ME039 = {
  DIRECT: { code: '70', name: '직접입력' }
}

export const ME040 = {
  COMMON_ENTRANCE_CODE: { code: '10', name: '공동현관 출입번호' },
  ETC: { code: '30', name: '기타' }
}

export const REX_PATTERN = {
  ONLY_NUMBER: /^[0-9]+$/,
  NOT_KOR: /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
  EMAIL_ID: /^[a-zA-Z0-9-_\\.]+$/,
  EMAIL_DOMAIN: /[\W\uAC00-\uD7A30-9]/,
  NOT_KOR_EN_MIX: /^(?:[ㄱ-ㅎㅏ-ㅣ가-힣0-9]+|[a-zA-Z0-9]+)$/,
  KOR_EN_NUM_MIX: /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]*$/
}

export const ME008 = {
  GREEN: { code: '10', name: 'GREEN' },
  FAMILY: { code: '20', name: 'FAMILY' },
  GOLD: { code: '30', name: 'GOLD' },
  VIP: { code: '40', name: 'VIP' },
  VVIP: { code: '50', name: 'VVIP' }
}

export const CHG_GB = {
  CHANGE_AFTER_90DAYS: { code: '10', name: '90일 뒤 변경 요청' },
  CHANGE_NOW: { code: '20', name: '바로 변경' },
  VERIFY_CURRENT_PASSWORD: { code: '30', name: '현재 비밀번호 검증' }
}

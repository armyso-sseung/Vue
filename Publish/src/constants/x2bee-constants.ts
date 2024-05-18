export const COMMON = {
  API_URL: process.env.API_URL,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PWD: process.env.REDIS_PWD,
  STORE_PREFIX: process.env.STORE_PREFIX
} as const
export type COMMON_TYPE = (typeof COMMON)[keyof typeof COMMON]

export const ENVIRONMENT = {
  LOCAL: 'local',
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}

export const S3_IMAGE_URL = 'https://img-stg.x2bee.com'
export const NO_IMAGE_PATH = '/images/common/no_img.svg'
export const ADULT_IMAGE_PATH = '/images/common/img_adult.svg'
export const ICON_SWIPER_STOP_PATH = '/images/icons/ico_swiper_stop.svg'
export const ICON_SWIPER_PLAY_PATH = '/images/icons/ico_swiper_play.svg'

export enum DEVICE_OS {
  ANDROID = 'android',
  IOS = 'ios'
}

export enum LANG_CD_INFO {
  KO = 'ko',
  EN = 'en'
}

export const COOKIE_CHANNEL_NO_NAME: 'chl_no' = 'chl_no'
export const DEFAULT_CHANNEL_NO: '1000001' = '1000001'

export const COOKIE_LANG_CD_NAME: 'lang_cd' = 'lang_cd'
// export const LANG_CD_INFO: { readonly KO: 'ko'; readonly EN: 'en' } = {
//   KO: 'ko',
//   EN: 'en'
// } as const
export const DEFAULT_LANG_CD: LANG_CD_INFO.KO = LANG_CD_INFO.KO

export const COOKIE_SITE_NO_NAME: 'site_no' = 'site_no'
export const DEFAULT_SITE_NO: '1' = '1'

export const COOKIE_MALL_NO_NAME: 'mall_no' = 'mall_no'
export const DEFAULT_MALL_NO: '10001' = '10001'

export enum COOKIE_INFO {
  COOKIE_CHANNEL_NO_NAME = 'chl_no',
  DEFAULT_CHANNEL_NO = '1000001',
  COOKIE_LANG_CD_NAME = 'lang_cd',
  DEFAULT_LANG_CD = LANG_CD_INFO.KO,
  COOKIE_SITE_NO_NAME = 'site_no',
  DEFAULT_SITE_NO = '1',
  COOKIE_MALL_NO_NAME = 'mall_no',
  DEFAULT_MALL_NO = '10001',
  COOKIE_ACCESS_TOKEN_NAME = 'accessToken',
  COOKIE_REFRESH_TOKEN_NAME = 'refreshToken',
  COOKIE_AUTO_LOGIN_TOKEN_NAME = 'autoLoginToken',
  COOKIE_MBR_NO_NAME = 'mbrNo'
}

export enum DEVICE {
  PC = 'pc',
  MO = 'mo'
}

export enum RESPONSE {
  RESULT_CODE_SUCCESS = '0000'
}

type ValuesOf<E> = E[keyof E]

export enum SITE_INFO {
  ADDRESS = '서울특별시 송파구 법원로9길 26 H Business Park D동 6층',
  NAME = '플래티어',
  DESC = 'X2BEE MALL FO by Plateer const',
  ENAME = 'PLATEER',
  PHONE = '02-554-4668',
  FAX = '02-554-4583',
  CS_PHONE = '02-554-4668',
  MASTER_EMAIL = 'master@plateer.com',
  CUSTOMER_SERVICE_PHONE = '1800-5700',
  COPYRIGHT = 'Copyright© LOGO Corp. All rights reserved.'
}

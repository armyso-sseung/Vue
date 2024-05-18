import {
  getCookieDefaultOptions,
  getCookieOptionsWithExpires,
  setDocumentCookie
} from '~/utils/cookie-utils'
import { useCookie } from '#imports'
import { MEMBER_COOKIE_KEY } from '~/constants/member-constants'

export const useCookieAccessToken = () => {
  return useCookie(MEMBER_COOKIE_KEY.ACCESS_TOKEN, getCookieDefaultOptions())
}

export const useCookieRefreshToken = () => {
  return useCookie(MEMBER_COOKIE_KEY.REFRESH_TOKEN, getCookieDefaultOptions())
}

export const useCookieAutoLoginToken = () => {
  const appDate = new Date()
  appDate.setFullYear(appDate.getFullYear() + 10)

  return useCookie(
    MEMBER_COOKIE_KEY.AUTO_LOGIN_TOKEN,
    getCookieOptionsWithExpires(appDate)
  )
}

export const useCookieCaptchaYn = () => {
  return useCookie(MEMBER_COOKIE_KEY.CAPTCHA_YN, getCookieDefaultOptions())
}

export const useCookieAge = () => {
  return useCookie(MEMBER_COOKIE_KEY.AGE)
}

export const useCookieAdlCerti = () => {
  return useCookie(MEMBER_COOKIE_KEY.ADL_CERTI)
}

export const useCookieNonMemberInfo = () => {
  return useCookie(MEMBER_COOKIE_KEY.NON_MEMBER_INFO)
}

export const setAccessToken = (accessToken: string) => {
  if (process.client) {
    setDocumentCookie({
      name: MEMBER_COOKIE_KEY.ACCESS_TOKEN,
      value: accessToken,
      maxAge: 60 * 60 * 24
    })
  } else {
    useCookieAccessToken().value = accessToken
  }
}

import type {
  CookieOptionType,
  DocumentCookie
} from '~/types/common/cookie-type'

import { isProduction } from '~/utils/common'

export const getCookieDefaultOptions = (): CookieOptionType => {
  return {
    maxAge: 60 * 60 * 24,
    path: '/',
    secure: isProduction()
  }
}

export const getCookieOptionsWithExpires = (date: Date) => {
  return {
    expires: date,
    path: '/',
    secure: isProduction()
  }
}

export function setDocumentCookie({
  name,
  value,
  expires,
  maxAge
}: DocumentCookie) {
  let cookie = `${name}=${value}; path=/;`
  if (isProduction()) {
    cookie += 'secure;'
  }

  if (expires) {
    cookie += `expires=${expires}`
  }
  if (maxAge) {
    cookie += `maxAge=${maxAge}`
  }
  document.cookie = cookie
}

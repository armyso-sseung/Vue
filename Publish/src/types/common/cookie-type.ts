import type { CookieOptions } from '#app'

export type CookieOptionType = {
  maxAge: number
  path: string
  secure: boolean
}

export type DocumentCookie = {
  name: string
  value: string | object
  maxAge?: number
  expires?: Date
}

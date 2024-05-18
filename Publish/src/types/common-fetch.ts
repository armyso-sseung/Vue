import type { FetchOptions } from 'ofetch'

export interface FetchCustomOptions extends FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  ignoreAuth?: boolean | null
  ignoreInitCookie?: boolean
}

export interface ResponseEntity {
  timestamp?: Date | string | number | null
  code?: string | null
  message?: string | null
  name?: string
  isProcess?: boolean | null
  payload?: object | null
  error?: boolean | null
  httpStatus?: number | string | null
  headers: object
}

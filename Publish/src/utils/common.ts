import type { RuntimeConfig } from 'nuxt/schema'
import dayjs from 'dayjs'

import { useCookie } from '#app/composables/cookie'
import { useRuntimeConfig } from '#build/imports'

import { COOKIE_INFO, ENVIRONMENT } from '~/constants/x2bee-constants'

export function isEmptyObject(obj: object): boolean {
  return obj === null || obj === undefined || Object.keys(obj).length === 0
}

export function isNotEmptyObject(obj: object): boolean {
  return !isEmptyObject(obj)
}

export function IsEmptyArrayCheck(array: any): boolean {
  if (IsArray(array)) {
    if (array.length > 0) {
      return false
    }
  }
  return true
}

export function IsArray(array: []): boolean {
  return Array.isArray(array)
}

// 공백 및 null 체크
export function IsEmpty(data: any): boolean {
  if (
    data === '' ||
    data === null ||
    data === undefined ||
    data === 'null' ||
    data === 'undefined'
  ) {
    return true
  } else {
    return false
  }
}

export function IsNotEmptyArray(array: any): boolean {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      return true
    }
  }
  return false
}

interface DateProps {
  date?: string | number | Date | dayjs.Dayjs | null
}

export function dateFormatTypeHM({ date }: DateProps) {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export function dateFormatType({ date }: DateProps) {
  return dayjs(date).format('YYYY-MM-DD')
}

export function dateFormatTypeHMS({ date }: DateProps) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

export function dateFormatTypeDotYMD({ date }: DateProps) {
  return dayjs(date).format('YYYY.MM.DD')
}

export function dateFormatTypeDotMD({ date }: DateProps) {
  return dayjs(date).format('MM.DD')
}

export function dateFormatTypeOnlyHms({ date }: DateProps) {
  return dayjs(date).format('HH:mm:ss')
}

export function dateFormatTypeOnlyHm({ date }: DateProps) {
  return dayjs(date).format('HH:mm')
}

export function trackingInfoDays({ date }: DateProps) {
  return dayjs(date)
    .locale(
      useCookie(COOKIE_INFO.COOKIE_LANG_CD_NAME).value ||
        COOKIE_INFO.DEFAULT_LANG_CD
    )
    .format('ddd')
}

export function convertDateToStr({ date }: DateProps, format: string) {
  return dayjs(date).format(format)
}

export function getLangCd(): string {
  return (
    useCookie(COOKIE_INFO.COOKIE_LANG_CD_NAME).value ??
    COOKIE_INFO.DEFAULT_LANG_CD
  )
}

export const isProduction = () => {
  const config: RuntimeConfig = useRuntimeConfig()
  return config.public.APP_ENV === ENVIRONMENT.PRODUCTION
}

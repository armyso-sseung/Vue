import type { INFLOW_DISPLAY_CATEGORY_TYPE } from '@/constants/common-constants'
import { HEADER_TYPE } from '@/constants/common-constants'

export type InflowProps = {
  infDispCtgNoGb?: keyof typeof INFLOW_DISPLAY_CATEGORY_TYPE
  infDispCtgNo?: string
}

type CommonProps = {
  id?: string
  className?: string
}

type CommonEmits = {
  click: [event: Event]
  change: [event: Event]
  submit: [event: Event]
}

type LoadingProps = {
  height?: string
  width?: string
}

type HeaderType = keyof typeof HEADER_TYPE

export type { CommonProps, CommonEmits, HeaderType, LoadingProps }

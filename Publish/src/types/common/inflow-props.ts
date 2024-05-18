import type { INFLOW_DISPLAY_CATEGORY_TYPE } from '~/constants/common-constants'

export type InflowProps = {
  infDispCtgNoGb?: keyof typeof INFLOW_DISPLAY_CATEGORY_TYPE
  infDispCtgNo?: string
}

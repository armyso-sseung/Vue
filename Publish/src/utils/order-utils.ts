import { isAOS, isIOS, isMobile } from '#imports'
import { OM007 } from '~/constants/order-constants'

export const getOrderMediaCd = () => {
  if (isMobile() || isAOS() || isIOS()) {
    return OM007.MO.code
  }
  return OM007.PC.code
}

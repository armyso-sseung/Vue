import { getOrderMediaCd, IsNotEmptyArray, ref } from '#imports'
import { OM001 } from '~/constants/order-constants'

import type { BasketGoods, DlvGrpInfo } from '~/types/order/order'
import type {
  BasketCount,
  DeliNoByBsketNoMap,
  DeliveryPolicyMap
} from '~/types/order/cart'

import { CartApi } from '~/api/order/basket'

export const useCartList = () => {
  type FetchCartDataParam = {
    bsketGbCd: string
    callback?: () => void
  }

  // data
  const basketGoodsList = ref<BasketGoods[]>([])
  const courierCount = ref(0)
  const regularOrderCount = ref(0)
  const groupList = ref<DlvGrpInfo[]>([])
  const deliveryPolicyMap = ref<DeliveryPolicyMap>(new Map())
  const deliNoByBsketNoMap = ref<DeliNoByBsketNoMap>(new Map())

  // functions
  const fetchCartData = async ({ bsketGbCd, callback }: FetchCartDataParam) => {
    const { payload: cartProducts } = await CartApi({
      ordMediaCd: getOrderMediaCd(),
      bsketGbCd
    })

    const updatedValidGoods: BasketGoods[] = []
    const updatedDeliveryPolicyMap: DeliveryPolicyMap = new Map()
    const updatedDeliNoByBsketNoMap: DeliNoByBsketNoMap = new Map()

    if (IsNotEmptyArray(cartProducts.groupList)) {
      cartProducts.groupList.forEach((group) => {
        group.basketGoodsList?.forEach((goods) => {
          updatedValidGoods.push(goods)
          updatedDeliveryPolicyMap.set(group.deliNo, group.dlvAmtInfoList[0])
          updatedDeliNoByBsketNoMap.set(String(goods.bsketNo), group.deliNo)
        })
      })
    }

    setCountData(cartProducts.countList)
    groupList.value = cartProducts.groupList
    basketGoodsList.value = updatedValidGoods
    deliveryPolicyMap.value = updatedDeliveryPolicyMap
    deliNoByBsketNoMap.value = updatedDeliNoByBsketNoMap

    if (callback) {
      callback()
    }
  }

  const setCountData = (countList: BasketCount[]) => {
    const { SHOPPING_BAG_COURIER, SHOPPING_BAG_REGULAR } = OM001
    // count 초기화
    courierCount.value = 0
    regularOrderCount.value = 0

    if (IsNotEmptyArray(countList)) {
      countList.forEach((count) => {
        if (count.bsketGbCd === SHOPPING_BAG_COURIER.code) {
          courierCount.value = count.count ?? 0
        } else if (count.bsketGbCd === SHOPPING_BAG_REGULAR.code) {
          regularOrderCount.value = count.count ?? 0
        }
      })
    }
  }

  return {
    fetchCartData,
    courierCount,
    regularOrderCount,
    groupList,
    basketGoodsList,
    deliveryPolicyMap,
    deliNoByBsketNoMap
  }
}

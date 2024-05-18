import {
  getOrderMediaCd,
  isAuthenticated,
  IsEmptyArrayCheck,
  ref
} from '#imports'

import type { AeEvtInfo } from '~/types/order/cart'
import type { BasketGoods } from '~/types/order/order'

import { RESPONSE } from '~/constants/x2bee-constants'
import { GetFreeGiftList } from '~/api/order/basket'

export const useCartAtEvtList = () => {
  type FetchAeEvtListParam = {
    validGoods: BasketGoods[]
    dialogOpen: (message: string) => void
  }

  const aeEvtList = ref<AeEvtInfo[]>([])

  const fetchAeEvtList = async ({
    validGoods,
    dialogOpen
  }: FetchAeEvtListParam) => {
    if (!isAuthenticated() || IsEmptyArrayCheck(validGoods)) {
      return
    }

    const { code, payload, message } = await GetFreeGiftList({
      ordMediaCd: getOrderMediaCd(),
      goodsInfo: validGoods.map((goods) => ({
        goodsNo: goods.goodsNo,
        itmNo: goods.itmNo,
        salePrc: goods.salePrc,
        cnt: goods.bsketQty
      }))
    })

    if (code !== RESPONSE.RESULT_CODE_SUCCESS) {
      dialogOpen(message as string)
      return
    }

    aeEvtList.value = payload.aeEvtList
  }

  return {
    aeEvtList,
    fetchAeEvtList
  }
}

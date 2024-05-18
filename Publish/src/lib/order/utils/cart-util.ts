import type { StCdDtlResponse } from '~/types/common/code'
import type { BasketGoods } from '~/types/order/order'
import type { EtMbrDlvpInfoResponse } from '~/types/member/shipping'

import {
  GetMemberDefaultDeliveryAddress,
  ValidateBasket
} from '~/api/order/basket'

import { PR003, PR005 } from '~/constants/order-constants'

// 품절
export const isSoldOut = (item: BasketGoods) => {
  return (
    item.stkQty < 1 ||
    item.saleStatCd !== PR005.SALES.code ||
    item.itmSaleStatCd !== PR005.SALES.code
  )
}

// 정기주문 불가
export const isNotRegularDelivery = (
  isRegularOrder: boolean,
  item: BasketGoods
) => {
  return isRegularOrder && item.rglrDeliGoodsYn === 'N'
}

// 선물하기 가능
export const isGiftAvailable = (item: BasketGoods) => {
  return (
    item.gvgfPsbYn === 'Y' &&
    item.saleMethCd !== PR003.RSV_SALE.code &&
    Number(item.buyrAgeLmtCd || '0') < 19
  )
}

// 예약판매 여부
export const isReservationSale = (item: BasketGoods) => {
  return item.saleMethCd === PR003.RSV_SALE.code
}

export const salePrice = (item: BasketGoods) => {
  return Number(
    BigInt(item.salePrc) * BigInt(item.bsketQty) - BigInt(item.maxDcAmt ?? 0)
  )
}

export const getCodeNm = (
  codeList: StCdDtlResponse[] | undefined,
  code: string | undefined
) => {
  if (typeof codeList === 'undefined') return ''
  return codeList.find((detail) => detail.cd === code)?.cdNm ?? ''
}

export const validateDeliveryAddress = async () => {
  const data = await GetMemberDefaultDeliveryAddress()

  if (data.error) {
    throw Object.assign(Error, { code: data.code, message: data.message })
  }

  return (data.payload as EtMbrDlvpInfoResponse)?.dlvpList as {
    zipNo: string
    zipAddr: string
    dtlAddr: string
  }[]
}

export const checkValidateBasket = async (
  ordGbCd: string,
  bsketNoList: number[],
  bsketGbCd: string
) => {
  const data = await ValidateBasket({
    ordGbCd,
    bsketGbCd,
    bsketNoList
  })

  if (data.error) {
    throw Object.assign(Error, { code: data.code, message: data.message })
  }
}

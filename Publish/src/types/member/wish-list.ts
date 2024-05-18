import type { GoodsSummary } from '~/types/display/goods-summary'
import type { GoodsUnit } from '~/types/common/product-item-types'
import type { ErrorType } from '~/types/common/error'

export type WishListInfo = {
  wishListGbCd: string
  wishListNo: string
}

export type WishProductListResponse = {
  totalCnt: number
  saleProductCnt: number
  wishListGbCd: string
  productList: (GoodsSummary & GoodsUnit)[]
}

export type BrandResponse = {
  brandNo: string
  useYn: string
  brandImgPathNm: string
  brandImgFileNm: string
  langCd: string
  brandNm: string
  brandDescCmt: string
  schKwdNm: string
  productList: (GoodsSummary & GoodsUnit)[]
}

export type WishBrandList = {
  totalCnt: number
  brandNewGoodsList: BrandResponse[]
}

export type WishBrandListResponse = {
  code?: string
  payload: WishBrandList
}

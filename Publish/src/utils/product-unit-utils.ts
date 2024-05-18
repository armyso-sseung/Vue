import type { GoodsSummary } from '~/types/display/goods-summary'
import type { GoodsUnit } from '@/types/common/product-item-types'
import type { AssociationGoodsInfo } from '@/types/goods/goods-detail-types'

export const ProductUnitDataTypeFunction = {
  GoodsSummary: (data: GoodsSummary): GoodsUnit => {
    return data as GoodsUnit
  },
  AssociationGoodsInfo: (data: AssociationGoodsInfo): GoodsUnit => {
    return {
      goodsNo: data.goodsNo,
      saleStatCd: data.saleStatCd,
      goodsNm: data.goodsNm,
      sortSeq: data.sortSeq,
      brandNm: data.brandNm,
      buyrAgeLmtCd: data.buyrAgeLmtCd,
      rcntSalePrc: data.norPrc,
      aplyPrc: data.aplyPrc,
      dcRate: data.saleRate,
      goodsRepImgPathNm: data.contFilePathNm,
      goodsRevCnt: 0,
      iconList: data.iconJson ?? []
    }
  }
}

export type ProductUnit = {} & GoodsSummary & AssociationGoodsInfo

export const getProductUnit = (
  data: ProductUnit,
  dataType: keyof typeof ProductUnitDataTypeFunction
) => {
  return ProductUnitDataTypeFunction[dataType](data)
}

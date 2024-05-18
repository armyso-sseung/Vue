import type { InflowProps } from '~/types/common/inflow-props'
import type { FilterDataType } from '~/types/search/search-filter'

export interface BrandGoodsProps {
  goodsList: FilterDataType
  inflowInfo?: InflowProps
}

export interface BrandContentsProps {
  brandNm: string
  imgUrl: string
  linkUrl?: string
}

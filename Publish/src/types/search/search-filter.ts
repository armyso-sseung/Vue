import type { LocationQuery } from 'vue-router'
import type { InflowProps } from '@/types/common/common-props'

export interface FilterLayoutProps {
  inflowInfo?: InflowProps
}

export interface FilterType {
  searchWord: string
  ctgFullPath: string
  from: string
  order: string
  dispCtgNo: string
  brandNo: string[]
  prcTyp: string
  minPrc: string
  maxPrc: string
  goodsRevStarscrAvgVal: string
  dlexTypCd: string[]
  buyrAgeLmtCd: string
  queryString?: {}
}

interface DispCtgInfoType {
  dispCtgNo: string
  ctgFullPath: string
  ctgFullPathNm: string
  siteNo: string
  siteNm: string
  dpmlNo: string
  lrgCtgNm: string
  lrgCtgNo: string | null
}

export interface SearchDataType {
  id: string
  goodsNo: string
  goodsNm: string
  prestNm: string | null
  adveWrd: string | null
  schKwdNm: string[]
  brandNo: string
  brandNm: string
  buyrAgeLmtCd: string
  goodsRegDtm: Date
  saleStatCd: string
  deliProcTypCd: string
  deliWayCd: string
  deliDday: string
  rcntSalePrc: string
  salePrc: number
  aplyPrc: number
  dcRate: string
  dispCtgNo: DispCtgInfoType[]
  dlexTypCd: string
  payWayMeanCd: string
  rservSaleYn: string
  goodsRevCnt: string
  goodsRevHlpfulCnt: string
  goodsRevStarscrAvgVal: string
  wishListCnt: string
  goodsDtlDesc: string | null
  sendGb: string
  langCd: string
  extraData: string
  goodsRepImgPathNm: string
  iconJson?: null
  iconList?: string[]
}

export interface SubCtgGrpDataType {
  subCtgNm: string
  subCtgNo: string
  count: number
  subCtgGrpData: SubCtgGrpDataType[] | null
}

export interface CtgGrpDataType {
  lrgCtgNm: string
  lrgCtgNo: string
  count?: number
  subCtgGrpData?: SubCtgGrpDataType[]
}

export interface FilterDataType {
  totalCount: number
  totalPage: number
  from: string
  size: string
  minPrc: number
  maxPrc: number
  searchDataList: SearchDataType[]
  categoryDataList: DispCtgInfoType[]
  assocwordDataList: string[]
  brandDataList: { [key: string]: string }[] | []
  lrgCtgGrpCnt: { [key: string]: number }[]
  lrgCtgGrpNoCnt: number | null
  lrgCtgGrpData: CtgGrpDataType[]
}

export interface CategoryType {
  dispCtgNo?: string
  dispCtgNm?: string
  subCtgGrpData?: SubCtgGrpDataType
}

export interface FilterCategoryType {
  current: CategoryType
  categoryList: CategoryType[][] | []
}

export type SearchFilterPramsType = {
  dispCtgNo: string
  from: string
  size: string
  order: string
  filter: string
  searchWord: string
  ctgFullPath: string
}

export interface FilterContextType {
  filter: FilterType
  filterData: FilterDataType | undefined
  filterCategory: FilterCategoryType
  filterHandler: (filterItem: { [key: string]: string | string[] }) => void
  isShop: boolean
  onFilter: boolean
  searchApi: (
    params: SearchFilterPramsType
  ) => Promise<{ dataList: SearchDataType[]; totalCount: number }>
}

export interface FilterProviderType {
  searchWord?: string
  dispCtgNo?: string
}

export interface FilterPropsType {
  open: boolean
  setOpen: (b: boolean) => void
}

export interface FilterFunctionType {
  label?: string
  key: string
  value: string | string[] | number
  priceValue?: Object
}

export interface BrandFilterType {
  brandDataList: { [key: string]: string }[] | []
}

export interface PriceType {
  label: string
  value: { minPrc: number; maxPrc: number | '' }
}

export interface PriceMapType {
  A?: PriceType
  B?: PriceType
  C?: PriceType
  D?: PriceType
  E?: PriceType
  F?: PriceType
  G?: PriceType
}

export type SearchBrandType = {
  dispCtgNo: string
  from: string
  order: string
  queryString: LocationQuery
}

export type SearchBrandProps = {
  searchParams: SearchBrandType
  brandSearchApi: (
    params: SearchFilterPramsType
  ) => Promise<{ dataList: SearchDataType[]; totalCount: number }>
}

export type FilterBrandProps = {
  brandDataList: { [key: string]: string }[] | []
}

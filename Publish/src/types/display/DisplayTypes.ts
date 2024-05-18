type DisplayCategory = {
  dispCtgNo: string
  dispCtgNm: string
  dispSeq?: number
  uprDispCtgNo?: string
  lrgCtgNo?: string
  midCtgNo?: string
  smlCtgNo?: string
  thnCtgNo?: string
  leafYn?: string
  depth?: string
  subCategoryList?: DisplayCategory[]
}

type DisplayList = {
  displayNo: string
  displayname: string
  displaysubtext: string
  thumbnailUrl: string
  startdate: string
  enddate: string
  linkUrl: string
  wishGoodsYn?: string
  goodsNo?: string
}

export type { DisplayCategory, DisplayList }

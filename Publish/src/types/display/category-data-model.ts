export interface DisplayCategory {
  dispCtgNo: string
  dispCtgNm: string
  dispSeq: number
  uprDispCtgNo: string
  lrgCtgNo: string
  midCtgNo: string
  smlCtgNo: string
  thnCtgNo: string
  leafYn: string
  depth: string
  subCategoryList?: DisplayCategory[]
}

export interface CategoryNavigation {
  targetCategory: DisplayCategory
  targetCategoryNav: {
    depth1: DisplayCategory | undefined
    depth2: DisplayCategory | undefined
    depth3: DisplayCategory | undefined
    depth4: DisplayCategory | undefined
  }
}

import type { ErrorType } from '@/types/common/error'

export type IconData = {
  siteNo: string
  dispIconNo: string
  iconNm: string
  iconTypCd: string
  pcIconFileNm: string
  pcIconPathNm: string
  moIconFileNm: string
  moIconPathNm: string
}

export type IconResponse = {
  iconList: IconData[]
} & ErrorType

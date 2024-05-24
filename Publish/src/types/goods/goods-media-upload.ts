export interface FileModel {
  id: number
  file?: File
  status: 'new' | 'current' | 'delete' | 'U' // 상품평 API에서 순서변경시 update 상태를 'U'로 표기
  contSn?: string
  preview: string
  fileType?: string
  dispSeq?: number
}

export interface CurrentContents {
  contSn: string
  contFilePathNm?: string
  dispSeq?: number
  fileType?: string
}

export interface MediaUploadProps {
  fileName: string
  type?: 'image' | 'video'
  width?: string
  height?: string
  contents?: CurrentContents[]
  limit: number
  sortable?: boolean
  accept?: string
  validate?: (file: File) => boolean
  addFile?: (file: File) => void
  deleteFile?: (fileIndex: number) => void
}

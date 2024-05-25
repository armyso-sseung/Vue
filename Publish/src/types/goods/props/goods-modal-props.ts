export interface GoodsPackageProps {
  isPackage?: boolean // 묶음 상품 여부
  isGoodsInPackage?: boolean // 묶음 상품 내 상품 여부
  // isGoodsInPackageDetail?: boolean,
}

// useGoodsModalMaker에서 직접 관리 옵션사용시 타입 명시 필요
export interface GoodsModalDefaultProps {
  isOpen: boolean
  closeCallback: () => void
}

export type GoodsModalWithIndexProps = GoodsModalDefaultProps & {
  index: number
}

// export type GoodsModalWithImgTopIndexProps = GoodsModalDefaultProps & {
//   [GOODS_MODAL.DETAIL_IMG.INDEX]: number
// }
//
// export type GoodsModalWithQuestNoProps = GoodsModalDefaultProps & {
//   [GOODS_MODAL.QNA_WRITE.GOODS_NO]: string
//   [GOODS_MODAL.QNA_WRITE.QNA_NO]?: string
// }
//
// export type GoodsModalWithRevNoProps = GoodsModalDefaultProps & {
//   [GOODS_MODAL.REVIEW_WRITE.GOODS_NO]: string
//   [GOODS_MODAL.REVIEW_WRITE.REV_NO]?: string
//   [GOODS_MODAL.REVIEW_WRITE.ORD_NO]?: string
//   [GOODS_MODAL.REVIEW_WRITE.ORD_SEQ]?: number
//   [GOODS_MODAL.REVIEW_WRITE.ITM_NO]?: string
// }

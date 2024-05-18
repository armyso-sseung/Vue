import type { AeEvtInfo } from '~/types/order/cart'
import type { DlvGrpInfo } from '~/types/order/order'

export type DialogParams = {
  title: string
  afterClose?: () => void
  handleOk?: () => void
  moveURL?: string
}

export type CartItemProps = {
  groupList: DlvGrpInfo[]
  aeEvtList: AeEvtInfo[]
  tag?: string | 'regularCart' | 'generalCart'
}

export type CartItemEmits = {
  handleAfterDelete: []
}

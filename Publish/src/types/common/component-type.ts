import type { CSSProperties, InputTypeHTMLAttribute, VNode } from 'vue'
import type { TextAreaProps } from 'ant-design-vue'
import type { DefaultOptionType } from 'ant-design-vue/es/vc-select/Select'
import type { VariantProps } from 'class-variance-authority'
import type { SelectValue } from 'ant-design-vue/es/select'
import type { CommonEmits, CommonProps } from '~/types/common/common-props'
import type { ButtonVariants } from '~/lib/common/ui/components/button-variables'
import type { DisplayCategory } from '~/types/display/DisplayTypes'
import type { SelectTriggerVariants } from '~/lib/common/ui/components/select-variables'
import type { BannerMsgVariants } from '~/lib/common/ui/components/banner-variables'
import type { FlagVariants } from '~/lib/common/ui/components/flag-variables'

interface ButtonProps extends CommonProps {
  variant?: VariantProps<typeof ButtonVariants>['variant']
  size?: 'xxl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs' | 'flg' | 'fbase' | 'fsm'
  rounded?: 'rounded'
}

type ButtonEmits = Pick<CommonEmits, 'click'>

interface ButtonAreaProps extends CommonProps {
  type?: 'default' | 'column' | 'row' | 'right'
  size?: 'default' | 'full'
}

type ButtonAreaEmits = Pick<CommonEmits, 'click'>

interface CheckboxProps extends CommonProps {
  variant?: 'default' | 'disabled' | 'readonly' | 'error'
  box?: 'default' | 'nobox' | 'select'
  checked?: boolean
  value: string
}

interface TextInputProps extends CommonProps {
  variant?: 'default' | 'readonly' | 'disabled' | 'error' | 'success'
  shape?: 'default' | 'line'
  textRight?: boolean
  placeholder?: string | undefined
  readonly?: boolean
  disabled?: boolean
  minLength?: number
  maxLength?: number
  type?: InputTypeHTMLAttribute
}

type TextInputEmits = Pick<CommonEmits, 'change'>

interface TextareaProps extends CommonProps, TextAreaProps {
  variant?: 'default' | 'disabled' | 'success'
  placeholder?: string | undefined
  minLength?: number
  maxLength?: number
  disabled?: boolean
  name?: string
  id?: string
}

type TextareaEmits = Pick<CommonEmits, 'change'>

interface SelectProps extends CommonProps {
  type?: 'default' | 'error'
  line?: VariantProps<typeof SelectTriggerVariants>['line']
  placeholder?: string | undefined
  optionLabelProp: 'label' | 'children'
  options?: DefaultOptionType[]
}

type SelectEmits = Pick<CommonEmits, 'click'> & {
  onChange: [value: SelectValue]
}

interface SelectOptionItemProps extends CommonProps {
  key: string
  value: string
  label: string
  disabled?: boolean
}

interface RadioGroupProps extends CommonProps {}

type RadioGroupEmits = Pick<CommonEmits, 'click'>

interface RadioGroupItemProps extends CommonProps {
  id?: string
  name?: string
  disabled?: boolean
  value: string
}

type RadioGroupItemEmits = Pick<CommonEmits, 'click'>

interface RadioOptionProps {
  label: string
  value: string
  disabled?: boolean
}

interface RadioButtonProps extends CommonProps {
  options: RadioOptionProps[]
  size?: 'base' | 'lg' | 'sm'
  disabled?: boolean
  name: string
}

type RadioButtonEmits = Pick<CommonEmits, 'change'> & {
  onChange: [value: string]
}

interface SwiperProps extends CommonProps {
  type?: 'page' | 'popup'
  subCategoryList?: DisplayCategory[]
}

type SwiperSlideDataType = {
  id: string
  label: string
}

type SwiperSlideProps = {
  data: SwiperSlideDataType
  text?: string
  active?: boolean
}

type BannerSlideProps = {
  type: 'full' | 'card'
}

interface BannerMsgProps extends CommonProps {
  variant?: VariantProps<typeof BannerMsgVariants>['variant']
  showCloseBtn?: boolean
}

type ContentsType = {
  linkUrlAddr?: string
  movFrmeCd?: string
  contTitleNm?: string
  contPathNm?: string
  contFileNm?: string
  pcContPathNm?: string
  pcContFileNm?: string
  altCont?: string
  htmlFileCont?: string
  ttlClorText?: string
  wrdClorText?: string
}

type IconDataType = {
  imageList: ContentsType[]
  textList: ContentsType[]
}

interface ImageTextIconProps extends CommonProps {
  iconData: IconDataType[]
}

type ThumbnailData = {
  type: string
  thumbnailUrl: string
  alt: string
}

interface ThumbnailSlideProps extends CommonProps {
  thumbnailData: ThumbnailData[]
  zoom?: boolean
  showThumbNavMobile?: boolean
}

interface VideoPlayerProps extends CommonProps {
  source: string
  videoClassName?: string
  controls?: boolean
  isPlayable?: boolean
}

interface LabelProps extends CommonProps {
  variant?: 'disabled' | 'error' | 'chkbold'
  type?: 'default' | 'title' | 'right'
  htmlFor: string
}

interface ImgMediaProps extends CommonProps {
  src?: string
  alt?: string
  width?: number
  pcSrc?: string
  pcAlt?: string
  pcWidth?: number
  pcClassName?: string
  priority?: boolean
}

type ImgMediaEmits = Pick<CommonEmits, 'click'>

type NuxtImageProps = {
  src?: string
  alt?: string
  width?: number
  priority?: boolean
}

interface LikeButtonProps extends CommonProps {
  type: 'product' | 'brand' | 'plan'
  wishYn?: string
  wishNo: string
  goodsDetail?: boolean
  callback?: Function
}

interface SwitchbtnProps extends CommonProps {
  onMsg: string
  offMsg: string
  state: boolean
}

type SwitchbtnEmits = Pick<CommonEmits, 'click'> & {
  handleOk: []
}

interface DialogProps extends CommonProps {
  title?: string
  width?: number
  footerType?: string
  maskClosable?: boolean
  afterOpen?: () => void
  afterClose?: () => void
  handleOk?: () => void
}

type DialogEmits = {
  afterOpen: []
  afterClose: []
  onOk: [event: MouseEvent | Event]
  onCancel: [event: MouseEvent | Event]
}

interface CommonModalProps extends CommonProps {
  btnFixed?: boolean
  full?: boolean
  mobileBodyull?: boolean
  pcBodyull?: boolean
  cancelText?: string
  okText?: string
  title?: string
}

type CommonModalEmits = {
  afterOpen: []
  afterClose: []
  onOk: [event: MouseEvent]
  onCancel: [event: MouseEvent]
}

type TabsEmits = {
  onValueChange: [value: string]
}

interface TabsProps extends CommonProps {
  defaultValue?: string
}
interface TabsListProps extends CommonProps {}

interface TabsTriggerProps extends CommonProps {
  value: string
}

type TabsTriggerEmits = Pick<CommonEmits, 'click'>

interface TabsContentProps extends CommonProps {
  value: string
}

interface CommonDrawerProps extends CommonProps {
  mobileBodyull?: boolean
  pcBodyFit?: boolean
  closable?: boolean
  placement?: 'top' | 'right' | 'bottom' | 'left'
  width?: string | number
  title?: string
  mask?: boolean
  maskClosable?: boolean
}

type CommonDrawerEmits = {
  close: [event?: MouseEvent]
}

type BreadcrumbItemType = {
  href?: string
  title: string | VNode
}

interface CommonBreadcrumbProps extends CommonProps {
  items: BreadcrumbItemType[]
}

interface CounterProps extends CommonProps {}

interface CounterButtonProps extends CommonProps {
  disabled?: boolean
}

interface CounterGroupProps extends CommonProps {}

interface NumberDivProps extends CommonProps {}

interface CouponProps extends CommonProps {
  benefit: string
  couponNm: string
  date: string
  minAmount?: number | null
  maxAmount?: number | null
  desc?: string
  device?: string[]
  downStatus: 'normal' | 'ready' | 'received' | 'used'
}

interface FlagProps extends CommonProps {
  bgcolor?: VariantProps<typeof FlagVariants>['bgcolor']
  border?: VariantProps<typeof FlagVariants>['border']
}

interface DatePickerProps extends CommonProps {
  format?: string
  placeholder?: string
  allowClear?: false
  superNextIcon?: false
  picker?: 'date' | 'month'
}

interface CommonStepProps {
  className?: string
  description?: string
  icon?: string | VNode
  status?: 'wait' | 'process' | 'finish' | 'error'
  disabled?: boolean
  title?: string
  subTitle?: string
  style?: CSSProperties
}

interface CommonStepsProps extends CommonProps {
  items?: CommonStepProps[]
  progressDot?: boolean
  current?: number
}

interface SwitchBtnProps extends CommonProps {
  onMsg: string
  offMsg: string
}

type SwitchBtnEmits = {
  onOk: [event: MouseEvent]
  onCancel: [event: MouseEvent]
}

type msgType = 'QNA' | '주문' | '이벤트' | '쿠폰' | '정보제공' | '기타'

interface TimeLineContainerProps extends CommonProps {
  title: string
}

interface TimeLineProps extends CommonProps {
  date: string
  title: string
  msg: string
  msgType: msgType
}

interface SortAreaProps extends CommonProps {}

type CommonTooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

interface CommonTooltipProps extends CommonProps {
  text: string
  placement?: CommonTooltipPlacement
  isDark?: boolean
}

type PlacementMapType = {
  [key: string]: CommonTooltipPlacement
}

interface MenuDtlInfo {
  menuDtlId: string
  menuDtlNm: string
  callUrl: string
  iconUrl: string
  myBkmkMenuYn: string
}

interface MenuInfo {
  uprMenuId: string
  uprMenuNm: string
  menuDtlList: MenuDtlInfo[]
}

interface SideMenuProps extends CommonProps {
  staticMenuInfo?: MenuInfo[]
  sidebar?: 'mypage' | 'customer'
  pageTitle?: string
}

type SideMenuEmits = Pick<CommonEmits, 'click'>

interface AccordionProps extends CommonProps {
  defaultValue?: string[]
  type: 'single' | 'multiple'
}

interface AccordionItemProps extends CommonProps {
  value: string
}

interface AccordionTriggerProps extends CommonProps {}

type AccordionTriggerEmits = Pick<CommonEmits, 'click'>

interface AccordionContentProps extends CommonProps {}

interface ContainerProps extends CommonProps {
  btnFloating?: boolean
}

interface ContentsProps extends CommonProps {
  spacing?: 'default' | 'large' | 'zero'
  size?: 'default' | 'medium' | 'small' | 'full'
  bg?: 'default'
  className?: string
  sidebar?: 'mypage' | 'customer'
}

export type {
  ButtonProps,
  ButtonEmits,
  ButtonAreaProps,
  ButtonAreaEmits,
  CheckboxProps,
  TextInputProps,
  TextInputEmits,
  TextareaProps,
  TextareaEmits,
  SelectProps,
  SelectEmits,
  SelectOptionItemProps,
  RadioGroupProps,
  RadioGroupEmits,
  RadioGroupItemProps,
  RadioGroupItemEmits,
  RadioButtonProps,
  RadioButtonEmits,
  SwiperProps,
  SwiperSlideProps,
  BannerSlideProps,
  BannerMsgProps,
  ImageTextIconProps,
  ContentsType,
  ThumbnailSlideProps,
  VideoPlayerProps,
  LabelProps,
  ImgMediaProps,
  ImgMediaEmits,
  NuxtImageProps,
  LikeButtonProps,
  SwitchbtnProps,
  SwitchbtnEmits,
  DialogProps,
  DialogEmits,
  CommonModalProps,
  CommonModalEmits,
  TabsProps,
  TabsEmits,
  TabsListProps,
  TabsTriggerProps,
  TabsTriggerEmits,
  TabsContentProps,
  CommonDrawerProps,
  CommonDrawerEmits,
  CommonBreadcrumbProps,
  CounterProps,
  CounterButtonProps,
  CounterGroupProps,
  NumberDivProps,
  CouponProps,
  FlagProps,
  DatePickerProps,
  CommonStepProps,
  CommonStepsProps,
  SwitchBtnProps,
  SwitchBtnEmits,
  TimeLineContainerProps,
  TimeLineProps,
  SortAreaProps,
  CommonTooltipPlacement,
  CommonTooltipProps,
  PlacementMapType,
  SideMenuProps,
  SideMenuEmits,
  MenuInfo,
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionTriggerEmits,
  AccordionContentProps,
  ContainerProps,
  ContentsProps
}

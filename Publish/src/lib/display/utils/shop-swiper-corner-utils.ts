import type { SetInfo } from '~/types/display/shop-data-model'
import type { SwiperModel } from '~/types/display/swiper-data'
import { IsEmpty, IsEmptyArrayCheck } from '#imports'

interface SwiperCornerProps {
  setList: SetInfo[]
  maxCnt?: number
}

const SWIPER_MIN_CONTENTS = 1
/**
 * 스와이퍼 콘텐츠 리스트 반환
 * @param setList
 * @return SwiperModel[]
 * */
export const getSwiperCornerContent = ({
  setList = [],
  maxCnt
}: SwiperCornerProps) => {
  const contentList = setList
    .slice(0, maxCnt ?? setList.length)
    .filter(
      ({ swipeTyp, contentInfoList }) =>
        swipeTyp && (contentInfoList ?? []).length >= SWIPER_MIN_CONTENTS
    )
    .map((setInfo) => getSwiperModelBySetInfo(setInfo))

  return contentList
}

/**
 * 스와이퍼 콘텐츠 반환
 * @param setInfo
 * @return SwiperModel
 * */
export const getSwiperModelBySetInfo = (setInfo: SetInfo) => {
  const swipeContent: SwiperModel = {
    swipeTyp: setInfo.swipeTyp || ''
  }

  setInfo.contentInfoList?.forEach(({ imageList, textList }) => {
    const images = imageList?.filter(
      (content: any) => !IsEmpty(content.contFileNm)
    )

    const texts = textList?.filter(
      (content: any) => !IsEmpty(content.contTitleNm)
    )

    if (!IsEmptyArrayCheck(images)) {
      swipeContent.image = images
    } else if (!IsEmptyArrayCheck(texts)) {
      swipeContent.text = texts
    }
  })
  return swipeContent
}

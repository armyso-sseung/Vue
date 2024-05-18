import s3Image from '~/utils/s3-image'
import { NO_IMAGE_PATH } from '~/constants/x2bee-constants'
import { breakPoints } from '~/lib/common/ui/variables'
import { useImage } from '#imports'
import type { NuxtImageProps } from '~/types/common/component-type'

const getImageSize = (moSize: number, pcSize: number) => {
  return `(max-width: ${breakPoints.mo.max}) ${moSize}vw, ${pcSize}vw`
}

const getNuxtImage = ({
  src = '',
  alt = '',
  width = 512,
  priority
}: NuxtImageProps) => {
  if (!src) {
    return NO_IMAGE_PATH
  }

  if (/^(http)|(\/images)/i.test(src)) {
    return src
  }

  const image = useImage()
  const imgSrc = image(s3Image({ src }), {
    alt,
    width: width / 2,
    innerHeight: 0,
    quality: 100,
    priority
  })

  return imgSrc
}

export { getImageSize, getNuxtImage }

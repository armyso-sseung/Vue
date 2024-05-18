import { NO_IMAGE_PATH, S3_IMAGE_URL } from '~/constants/x2bee-constants'

export default function s3Image({ src }: { src: string }) {
  if (!src) {
    return NO_IMAGE_PATH
  }

  return /^(http|blob:)|(\/images)/i.test(src)
    ? src
    : `${S3_IMAGE_URL}${prependSlash(src)}`
}

function prependSlash(src: string) {
  return src.startsWith('/') ? src : `/${src}`
}

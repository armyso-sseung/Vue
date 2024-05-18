import { useMediaQuery } from '@vueuse/core'
import { useRequestHeaders } from '#imports'

const isMobile = () => {
  return useMediaQuery('(max-width: 1024px)').value
}

const getUserAgent = () => {
  return (
    process.server
      ? useRequestHeaders()['user-agent'] ?? ''
      : window.navigator.userAgent
  ).toLowerCase()
}
const isApp = () => {
  const ua = getUserAgent()
  return Boolean(ua.match(/x2beeapp/))
}

const isIOS = () => {
  const ua = getUserAgent()
  return Boolean(ua.match(/ipad|iphone/))
}

const isAOS = () => {
  const ua = getUserAgent()
  return Boolean(ua.match(/android/))
}

export { isMobile, getUserAgent, isApp, isIOS, isAOS }

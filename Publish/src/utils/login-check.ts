import { useCookie } from '#imports'

export const isAuthenticated = () => {
  const accessToken = useCookie('accessToken', {
    readonly: true
  })

  return !!accessToken.value
}

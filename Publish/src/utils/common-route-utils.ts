import { useRouter } from '#imports'

const goHome = () => {
  const router = useRouter()
  router.push('/')
}

const goLoginPage = () => {
  const router = useRouter()
  router.push('/login')
}

const goMyPage = () => {
  const router = useRouter()
  router.push('/member/mypage')
}

const goCart = () => {
  const router = useRouter()
  router.push('/order/cart')
}

export { goHome, goLoginPage, goMyPage, goCart }

<template>
  <CommonButton
    type="button"
    :class-name="className"
    title="찜하기"
    :aria-pressed="wish"
    @click="handleLikeClick"
  >
    <CommonImgMedia
      v-if="wish"
      src="/images/icons/like_active.svg"
      alt="찜해제"
      :width="width"
    />
    <CommonImgMedia
      v-else-if="goodsDetail"
      src="/images/icons/ico_like_black.svg"
      alt="찜하기"
      :width="width"
    />
    <CommonImage
      v-else
      src="/images/icons/like.svg"
      alt="찜하기"
      :width="width"
    />
  </CommonButton>
</template>

<script setup lang="ts">
  import { useRouter } from '#app'
  import { useRoute } from 'vue-router'
  import type { LikeButtonProps } from '~/types/common/component-type'
  import { isAuthenticated, ref } from '#imports'
  import CommonImage from '#components/ui/common-image.vue'
  import { WishDeleteApi, WishRegisterApi } from '~/api/member/wish-list'
  import type { WishListInfo } from '~/types/member/wish-list'
  import { RESPONSE_CODE } from '~/constants/common-constants'
  import type { ErrorType } from '~/types/common/error'
  import { useGoodsLikeStore } from '~/stores/common/use-goods-like-store'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import { useBrandsLikeStore } from '~/stores/common/use-brands-like-store'

  const LikeData = {
    product: '10',
    brand: '20',
    plan: '30'
  }

  const { wishYn, wishNo, type, callback } = withDefaults(
    defineProps<LikeButtonProps>(),
    {
      wishYn: 'N',
      className: ''
    }
  )
  const wish = ref<boolean>(wishYn === 'Y')
  const width = 20
  const likeType = LikeData[type]
  const { setGoodsLikes } = useGoodsLikeStore()
  const { setBrandLikes } = useBrandsLikeStore()
  const router = useRouter()
  const route = useRoute()

  const handleLikeClick = async (event: Event) => {
    event.preventDefault()
    event.stopPropagation()

    if (!isAuthenticated()) {
      router.push('/login?moveURL=' + route.fullPath)
    }

    const wishListInfo: WishListInfo = {
      wishListGbCd: likeType,
      wishListNo: wishNo
    }

    let result: ErrorType
    if (wish.value) {
      result = await WishDeleteApi(wishListInfo)
    } else {
      result = await WishRegisterApi(wishListInfo)
    }

    if (result.code !== RESPONSE_CODE.SUCCESS.code) {
      return
    }

    if (likeType === LikeData.product) {
      setGoodsLikes(wishNo, !wish.value)
    } else if (likeType === LikeData.brand) {
      setBrandLikes(wishNo, !wish.value)
    }

    if (callback) {
      callback()
    } else {
      wish.value = !wish.value
    }
  }
</script>

<style scoped></style>

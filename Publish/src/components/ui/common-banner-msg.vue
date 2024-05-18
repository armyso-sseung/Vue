<template>
  <div
    :class="
      cn(
        `${showCloseBtn && 'relative !pr-16'}`,
        BannerMsgVariants({
          variant
        }),
        className
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
    <CommonButton
      v-if="showCloseBtn"
      class-name="top-4.5 absolute right-5 size-5 opacity-70"
    >
      <CommonImgMedia src="/images/icons/ico_close20.svg" alt="닫기" fill />
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
  import CommonButton from '#components/ui/common-button.vue'
  import { BannerMsgVariants } from '~/lib/common/ui/components/banner-variables'
  import { cn } from '~/utils/common-utils'
  import type { BannerMsgProps } from '~/types/common/component-type'
  import CommonImgMedia from '#components/ui/common-img-media.vue'

  defineProps<BannerMsgProps>()
</script>

<style scoped></style>

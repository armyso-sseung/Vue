<template>
  <div
    :class="`tab type03 mo:-mx-5 ${type === 'popup' ? 'pc:-mx-5' : ''} ${className ? '' + className : ''}`"
  >
    <Swiper
      slides-per-view="auto"
      :space-between="`${type === 'popup' ? '24px' : slideBetween}`"
      :class="`tab-menu mo:!px-5 ${type === 'popup' ? 'pc:px-5' : ''}`"
    >
      <slot></slot>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { Swiper } from 'swiper/vue'
  import type { SwiperProps } from '~/types/common/component-type'
  import { ref } from '#imports'

  withDefaults(defineProps<SwiperProps>(), {
    type: 'page'
  })

  const isMobile = ref(false)
  const slideBetween = isMobile.value ? '32px' : '40px'
</script>

<style scoped></style>

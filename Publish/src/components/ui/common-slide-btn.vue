<template>
  <SwiperSlide :style="{ width: 'auto' }">
    <button
      type="button"
      :data-state="`${active ? 'active' : 'inactive'}`"
      @click="(event) => $emit('click', event)"
    >
      <span>{{ data.label }}</span>
    </button>
  </SwiperSlide>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import type { CommonEmits } from '~/types/common/common-props'
  import type { SwiperSlideProps } from '~/types/common/component-type'

  type SwiperEmits = Pick<CommonEmits, 'click'>
  defineEmits<SwiperEmits>()
  withDefaults(defineProps<SwiperSlideProps>(), {
    active: false
  })
</script>
<script lang="ts">
  export default {
    name: 'SwiperSlide'
  }
</script>

<style scoped></style>

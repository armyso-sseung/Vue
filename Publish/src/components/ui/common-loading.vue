<script setup lang="ts">
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import { cn } from '#imports'
  import type { LoadingProps } from '~/types/common/common-props'

  const { width, height } = withDefaults(defineProps<LoadingProps>(), {
    width: '100%',
    height: '300px'
  })
  const fullHeightClassName = height === '100%' ? 'fixed inset-0' : ''
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full items-center justify-center',
        `w-[${width}]`,
        fullHeightClassName
      )
    "
    :style="{ height }"
  >
    <PulseLoader color="#CCC" />
  </div>
</template>

<style scoped></style>

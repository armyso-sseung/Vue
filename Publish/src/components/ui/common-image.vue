<template>
  <NuxtImg
    :src="srcPath"
    :class="cn(className, `object-${props.objectFit}`)"
    :alt="props.alt"
    :fit="`${props.fit ? props.fit : props.fill ? 'fill' : 'cover'}`"
    :priority="props.priority || isStaticImage"
    :width="props.width"
    :height="props.height"
    :sizes="props.sizes"
    :quality="100"
    :unoptimized="isStaticImage"
    :on-error="
      () => {
        error = true
      }
    "
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { cn } from '~/utils/common-utils'
  import s3Image from '~/utils/s3-image'
  import { ADULT_IMAGE_PATH, NO_IMAGE_PATH } from '~/constants/x2bee-constants'
  import { computed } from '#imports'
  import type { CommonImageProps } from '~/types/common/component-type'

  const props = withDefaults(defineProps<CommonImageProps>(), {
    src: '',
    alt: '',
    width: 0,
    height: 0,
    className: '',
    fill: false,
    priority: false,
    objectFit: 'contain'
  })

  const error = ref<boolean>(Boolean(!props.src))
  const srcPath = computed(() => {
    return !error.value ? s3Image({ src: props.src }) : NO_IMAGE_PATH
  })

  const isStaticImage =
    Boolean(srcPath.value === NO_IMAGE_PATH) ||
    Boolean(srcPath.value === ADULT_IMAGE_PATH)
</script>

<style scoped></style>

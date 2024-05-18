<template>
  <NuxtImg
    :src="srcPath"
    :class="cn(className, `object-${objectFit}`)"
    :alt="alt"
    :fill="fill"
    :priority="priority || isStaticImage"
    :width="width"
    :height="height"
    :sizes="sizes"
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

  interface ImageProps {
    src?: string
    alt?: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
    priority?: boolean
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    sizes?: string
  }

  const {
    src,
    alt,
    width,
    height,
    fill,
    className,
    priority,
    objectFit,
    sizes
  } = withDefaults(defineProps<ImageProps>(), {
    src: '',
    alt: '',
    width: 0,
    height: 0,
    className: '',
    fill: false,
    priority: false,
    objectFit: 'contain'
  })

  const error = ref<boolean>(Boolean(!src))
  const srcPath = !error.value ? s3Image({ src }) : NO_IMAGE_PATH
  const isStaticImage =
    Boolean(srcPath === NO_IMAGE_PATH) || Boolean(srcPath === ADULT_IMAGE_PATH)
</script>

<style scoped></style>

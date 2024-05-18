<template>
  <picture>
    <source
      v-if="pcSrc"
      :srcSet="
        getNuxtImage({
          src: pcSrc,
          alt: pcAlt,
          width: pcWidth,
          priority
        })
      "
      :class="pcClassName"
      :media="`(min-width: ${breakPoints.pc})`"
    />
    <img
      :src="
        getNuxtImage({
          src,
          alt,
          width,
          priority
        })
      "
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :class="className"
      @error="handleError"
      @click="(event) => $emit('click', event)"
    />
  </picture>
</template>

<script setup lang="ts">
  import type {
    ImgMediaEmits,
    ImgMediaProps
  } from '~/types/common/component-type'
  import { computed, isMobile } from '#imports'
  import { breakPoints } from '~/lib/common/ui/variables'
  import { getNuxtImage } from '~/lib/common/ui/image/image-utils'
  import { NO_IMAGE_PATH } from '~/constants/x2bee-constants'

  defineEmits<ImgMediaEmits>()
  const { pcSrc } = withDefaults(defineProps<ImgMediaProps>(), {
    src: '',
    alt: '',
    width: 512,
    className: '',
    pcClassName: '',
    pcSrc: '',
    pcAlt: '',
    pcWidth: 1024,
    priority: false
  })

  const isNotMobile = computed(() => {
    return !isMobile()
  })

  const handleError = (event: Event) => {
    const target = event.currentTarget as any
    if (isNotMobile.value && pcSrc) {
      target.parentElement.childNodes[0].srcset = NO_IMAGE_PATH
    } else {
      target.src = NO_IMAGE_PATH
    }
  }
</script>

<style scoped></style>

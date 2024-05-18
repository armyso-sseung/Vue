<template>
  <div
    :class="
      cn('logo relative h-[28px] w-[81px] pc:h-[40px] pc:w-[115px]', className)
    "
  >
    <NuxtLink to="/">
      <CommonImgMedia
        src="/images/common/logo.png"
        alt="로고"
        class-name="object-fill"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import CommonImgMedia from '#components/ui/common-img-media.vue'

  defineProps<{ className?: string }>()
</script>

<style scoped></style>

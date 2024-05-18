<template>
  <div class="mb-2.5 pc:mb-[64px]">
    <h1
      :class="`subtitle1 pc:display1 font-bold ${textCenter ? 'pc:text-center' : ''}`"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'

  interface TitleProps extends CommonProps {
    title: string
    textCenter?: boolean
  }

  defineProps<TitleProps>()
</script>

<style scoped></style>

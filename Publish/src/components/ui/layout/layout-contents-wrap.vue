<template>
  <div
    :class="`${cn(
      'contents-wrap',
      ContentsWrapVariants({
        size,
        bg,
        spacing,
        className
      })
    )}${className ? ' ' + className : ''}${sidebar ? ' has-sidebar' : ''}`"
    v-bind="$attrs"
  >
    <div class="body-wrap w-full"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
  import type { ContentsProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { ContentsWrapVariants } from '~/lib/common/ui/components/layout-variables'

  defineProps<ContentsProps>()
</script>

<style scoped></style>

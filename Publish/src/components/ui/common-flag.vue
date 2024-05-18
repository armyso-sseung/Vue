<template>
  <span
    :class="
      cn(
        FlagVariants({
          bgcolor,
          border,
          className
        })
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
  import type { FlagProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { FlagVariants } from '~/lib/common/ui/components/flag-variables'

  defineProps<FlagProps>()
</script>

<style scoped></style>

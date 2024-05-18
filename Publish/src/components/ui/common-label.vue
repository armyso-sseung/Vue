<template>
  <label
    :for="htmlFor"
    :class="
      cn(
        LabelVariants({
          className,
          variant,
          type
        })
      )
    "
  >
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
  import type { LabelProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { LabelVariants } from '~/lib/common/ui/components/label-variables'

  defineProps<LabelProps>()
</script>

<style scoped></style>

<template>
  <div
    :class="
      cn(
        'btn-area shrink-0',
        ButtonAreaVariants({
          className,
          type,
          size
        })
      )
    "
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type {
    ButtonAreaEmits,
    ButtonAreaProps
  } from '~/types/common/component-type'
  import { ButtonAreaVariants } from '~/lib/common/ui/components/button-variables'
  import { cn } from '~/utils/common-utils'

  defineProps<ButtonAreaProps>()
  defineEmits<ButtonAreaEmits>()
</script>

<style scoped></style>

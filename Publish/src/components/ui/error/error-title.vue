<template>
  <p
    :class="
      cn(
        ErrorTitleVariants({
          type,
          className
        })
      )
    "
    v-bind="$attrs"
  ></p>
  <p
    :class="`subtitle1 text-cente whitespace-pre text-center font-bold ${type === 'adult' ? 'mt-10' : 'mt-4'}`"
  >
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import { ErrorTitleVariants } from '~/lib/common/ui/components/error-variables'
  import type { ErrorTitleProps } from '~/types/common/component-type'

  defineProps<ErrorTitleProps>()
</script>

<style scoped></style>

<template>
  <button
    type="button"
    :class="
      cn(
        ButtonVariants({
          className,
          variant,
          size,
          rounded
        })
      )
    "
    @click="(event) => $emit('click', event)"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonEmits, ButtonProps } from '~/types/common/component-type'
  import { ButtonVariants } from '~/lib/common/ui/components/button-variables'
  import { cn } from '~/utils/common-utils'

  defineEmits<ButtonEmits>()
  defineProps<ButtonProps>()
</script>

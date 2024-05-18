<script setup lang="ts">
  import { type VariantProps } from 'class-variance-authority'
  import { cn } from '@/utils/common-utils'
  import type { CommonProps } from '~/types/common/common-props'
  import { CautionContVariants } from '~/lib/common/ui/components/caution-variables'

  type CautionContVariantsType = VariantProps<typeof CautionContVariants>
  type CautionContProps = CommonProps & {
    type?: CautionContVariantsType['type']
    size?: CautionContVariantsType['size']
  }

  const { type, size, className } = withDefaults(
    defineProps<CautionContProps>(),
    {
      className: '',
      type: 'default',
      size: 'default'
    }
  )
</script>

<template>
  <p
    :class="
      cn(
        CautionContVariants({
          type,
          size,
          className
        })
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </p>
</template>

<style scoped></style>
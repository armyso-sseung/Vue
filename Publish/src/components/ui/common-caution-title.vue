<script setup lang="ts">
  import type { VariantProps } from 'class-variance-authority'
  import { cn } from '#imports'
  import type { CommonProps } from '~/types/common/common-props'
  import { CautionTitleVariants } from '~/lib/common/ui/components/caution-variables'

  type CautionTitleVariantsType = VariantProps<typeof CautionTitleVariants>
  type CautionTitleProps = CommonProps & {
    size?: CautionTitleVariantsType['size']
  }
  const { className, size } = withDefaults(defineProps<CautionTitleProps>(), {
    className: '',
    size: 'default'
  })
</script>

<template>
  <div
    :class="
      cn(
        CautionTitleVariants({
          size
        }),
        className
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

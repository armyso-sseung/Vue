<script setup lang="ts">
  import { type VariantProps } from 'class-variance-authority'
  import { computed, type ComputedRef } from 'vue'
  import { cn } from '@/utils/common-utils'
  import type { CommonProps } from '~/types/common/common-props'
  import { DividerVariants } from '~/lib/common/ui/components/divider-variables'

  type DividerVariantsType = VariantProps<typeof DividerVariants>

  interface DividerProps extends CommonProps {
    lineBold?: DividerVariantsType['lineBold']
    lineThin?: DividerVariantsType['lineThin']
  }

  const props = defineProps<DividerProps>()

  const className: ComputedRef<string> = computed(() =>
    cn(
      DividerVariants({
        lineBold: props.lineBold,
        lineThin: props.lineThin,
        className: props.className
      }),
      className
    )
  )
</script>

<template>
  <hr aria-hidden="true" :class="className" />
</template>

<style scoped></style>

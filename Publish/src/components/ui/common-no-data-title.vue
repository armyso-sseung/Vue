<script setup lang="ts">
  import { computed } from 'vue'
  import type { VariantProps } from 'class-variance-authority'
  import type { CommonProps } from '~/types/common/common-props'
  import { cn } from '~/utils/common-utils'
  import { NodataTitleVariants } from '~/lib/common/ui/components/no-data-variables'

  type NodataTitleVariantsType = VariantProps<typeof NodataTitleVariants>
  interface Props extends CommonProps {
    type?: NodataTitleVariantsType['type']
  }

  const props = defineProps<Props>()

  const className = computed(() =>
    cn(
      'no-tit',
      NodataTitleVariants({
        type: props.type,
        className: props.className
      })
    )
  )
</script>

<template>
  <p :class="className">
    <span class="pc:mt-3 pc:block"><slot></slot></span>
  </p>
</template>

<style scoped></style>

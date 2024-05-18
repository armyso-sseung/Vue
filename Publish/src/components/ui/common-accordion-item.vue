<template>
  <div :class="cn('', className)" :data-state="isSelected ? 'open' : 'closed'">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { AccordionItemProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { computed, inject, provide, ref } from '#imports'

  const { value } = defineProps<AccordionItemProps>()

  const { selectedValues } = inject('common-accordion', {
    selectedValues: ref<string[]>([])
  })

  const isSelected = computed(() => selectedValues.value.includes(value))
  provide('common-accordion-item', { isSelected, value })
</script>

<style scoped></style>

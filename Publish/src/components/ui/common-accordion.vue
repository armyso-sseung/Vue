<template>
  <div :class="cn('cont-accordion', className)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { AccordionProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { provide, ref } from '#imports'

  const { defaultValue, type } = defineProps<AccordionProps>()

  const selectedValues = ref<string[]>(defaultValue || [])
  const setValue = (itemValue: string) => {
    const isIncluded = selectedValues.value.includes(itemValue)
    type === 'single'
      ? handleTypeSingle(itemValue, isIncluded)
      : handleTypeMultiple(itemValue, isIncluded)
  }

  const handleTypeSingle = (itemValue: string, isIncluded: boolean) => {
    if (isIncluded) return
    selectedValues.value = [itemValue]
  }

  const handleTypeMultiple = (itemValue: string, isIncluded: boolean) => {
    if (!isIncluded) {
      selectedValues.value.push(itemValue)
    } else {
      selectedValues.value = selectedValues.value.filter(
        (item) => item !== itemValue
      )
    }
  }

  provide('common-accordion', {
    selectedValues,
    setValue
  })
</script>

<style scoped></style>

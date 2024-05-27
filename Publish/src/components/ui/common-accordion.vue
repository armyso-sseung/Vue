<template>
  <div :class="cn('', className)">
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

  // Single Type : 하나만 열 수 있음.
  const handleTypeSingle = (itemValue: string, isIncluded: boolean) => {
    if (isIncluded) return
    selectedValues.value = [itemValue]
  }

  // Multiple Type : 여러개 열 수 있음.
  const handleTypeMultiple = (itemValue: string, isIncluded: boolean) => {
    if (!isIncluded) {
      selectedValues.value.push(itemValue)
    } else {
      selectedValues.value = selectedValues.value.filter(
        (item) => item !== itemValue
      )
    }
  }

  // Accordion Reset
  const handleResetAccordion = () => {
    selectedValues.value = []
  }

  provide('common-accordion', {
    selectedValues,
    setValue
  })

  defineExpose({
    handleResetAccordion,
    selectedValues,
    setValue
  })
</script>

<style scoped></style>

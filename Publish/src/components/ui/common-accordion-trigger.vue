<template>
  <h3 class="flex" :data-state="isSelected ? 'open' : 'closed'">
    <button
      :class="
        cn('subtitle2 flex flex-1 items-center p-5 pc:px-0 pc:py-6', className)
      "
      :data-state="isSelected ? 'open' : 'closed'"
      @click="handleClickAccordion"
    >
      <slot></slot>
    </button>
  </h3>
</template>

<script setup lang="ts">
  import type {
    AccordionTriggerEmits,
    AccordionTriggerProps
  } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { inject, ref } from '#imports'

  const emits = defineEmits<AccordionTriggerEmits>()
  defineProps<AccordionTriggerProps>()

  const { setValue } = inject('common-accordion', {
    setValue: (value: string) => value
  })
  const { isSelected, value } = inject('common-accordion-item', {
    isSelected: ref<boolean>(false),
    value: ''
  })

  const handleClickAccordion = (event: Event) => {
    if (value) setValue(value)
    emits('click', event)
  }
</script>

<style scoped></style>

<template>
  <Transition name="accordion">
    <div
      v-if="isSelected"
      class="body1 common-accordion-content overflow-hidden bg-gray2 transition-all"
      :data-state="isSelected ? 'open' : 'closed'"
    >
      <div :class="cn('p-5 pc:p-6', className)">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import type { AccordionContentProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { inject, ref } from '#imports'

  defineProps<AccordionContentProps>()

  const { isSelected } = inject('common-accordion-item', {
    isSelected: ref<boolean>(false)
  })
</script>

<style scoped>
  .accordion-enter-active {
    max-height: 1024px;
    transition: max-height 1.6s ease;
  }
  .accordion-enter-from {
    max-height: 0px;
  }

  .accordion-leave-active {
    max-height: 1024px;
    transition: max-height 0.5s ease;
  }
  .accordion-leave-to {
    max-height: 0px;
  }
</style>

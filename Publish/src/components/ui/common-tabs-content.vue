<template>
  <div
    v-if="isSelected"
    role="tabpanel"
    :data-state="isSelected ? 'active' : 'inactive'"
    :class="cn('tab-cont', className)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { TabsContentProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { computed, inject, ref } from '#imports'

  const { value } = defineProps<TabsContentProps>()
  const { selectedValue } = inject('common-tabs', {
    selectedValue: ref('')
  })

  const isSelected = computed(() => selectedValue.value === value)
</script>

<style scoped></style>

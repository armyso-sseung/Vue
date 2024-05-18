<template>
  <button
    role="tab"
    :aria-selected="isSelected"
    :data-state="isSelected ? 'active' : 'inactive'"
    :class="cn('flex-1', className)"
    @click="handleClickTab"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type {
    TabsTriggerEmits,
    TabsTriggerProps
  } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { computed, inject, ref } from '#imports'

  const emits = defineEmits<TabsTriggerEmits>()
  const { value } = defineProps<TabsTriggerProps>()

  // Provider 활용
  const { selectedValue, setValue, onValueChange } = inject('common-tabs', {
    selectedValue: ref(''),
    setValue: (value: string) => value,
    onValueChange: (value: string) => value
  })

  // 선택 여부
  const isSelected = computed(() => selectedValue.value === value)

  // 버튼 클릭 이벤트
  const handleClickTab = (event: Event) => {
    if (isSelected.value) return

    setValue(value)
    onValueChange(value)
    emits('click', event)
  }
</script>

<style scoped></style>

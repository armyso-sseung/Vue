<template>
  <div :class="cn('tab', className)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import type { TabsEmits, TabsProps } from '~/types/common/component-type'
  import { provide, ref } from '#imports'

  const emits = defineEmits<TabsEmits>()
  const { defaultValue } = withDefaults(defineProps<TabsProps>(), {
    defaultValue: ''
  })
  const selectedValue = ref(defaultValue)
  const setValue = (itemValue: string) => {
    selectedValue.value = itemValue
  }

  provide('common-tabs', {
    onValueChange: (value: string) => emits('onValueChange', value),
    selectedValue,
    setValue
  })
</script>

<style scoped></style>

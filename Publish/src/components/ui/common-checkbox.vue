<template>
  <input
    name="options"
    :id="id"
    v-model="model"
    :class="
      cn(
        CheckboxVariants({
          className,
          variant,
          box
        })
      )
    "
    :value="value"
    type="checkbox"
  />
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import { CheckboxVariants } from '~/lib/common/ui/components/checkbox-variables'
  import type { CheckboxProps } from '~/types/common/component-type'
  import { onMounted } from '#imports'

  const model = defineModel<string[]>('model', { required: true })
  const { value, checked } = withDefaults(defineProps<CheckboxProps>(), {
    id: 'common-checkbox',
    checked: false
  })

  onMounted(() => {
    if (checked) {
      model.value.push(value)
    }
  })
</script>

<style scoped></style>

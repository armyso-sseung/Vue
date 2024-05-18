<template>
  <div :class="cn('select-custom', className)">
    <a-select
      :id="`${id}-${optionLabelProp}`"
      v-model:value="model"
      :class="cn('w-full', SelectTriggerVariants({ type, line }))"
      :virtual="false"
      :placeholder="placeholder"
      :option-label-prop="optionLabelProp"
      :options="options"
      v-bind="$attrs"
      @change="(value) => $emit('onChange', value)"
    >
      <template v-if="optionLabelProp === 'children'">
        <slot></slot>
      </template>

      <template v-if="optionLabelProp === 'label'" #option="option">
        {{ option.label }}
      </template>
    </a-select>
  </div>
</template>

<script setup lang="ts">
  import type { SelectEmits, SelectProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { SelectTriggerVariants } from '~/lib/common/ui/components/select-variables'

  defineEmits<SelectEmits>()
  const model = defineModel<any>('model', { required: true, default: '' })
  withDefaults(defineProps<SelectProps>(), {
    id: 'common-select',
    optionLabelProp: 'label'
  })
</script>

<style scoped></style>

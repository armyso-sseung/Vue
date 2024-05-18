<script setup lang="ts">
  import { computed } from 'vue'
  import type { ProgressProps } from 'ant-design-vue'
  import { type VariantProps } from 'class-variance-authority'
  import { cn } from '~/utils/common-utils'
  import type { CommonProps } from '~/types/common/common-props'
  import { ProgressVariants } from '~/lib/common/ui/components/progress-variables'

  type ProgressVariantsType = VariantProps<typeof ProgressVariants>
  interface Props extends ProgressProps, CommonProps {
    renderType?: ProgressVariantsType['renderType']
    // type = percent
    showLabel?: boolean
    title?: string
    result?: string
    // type = price
    totalPrice?: number
    currentPrice?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    renderType: 'percent',
    showLabel: true,
    result: '결과',
    strokeColor: '#F9482D',
    totalPrice: undefined,
    currentPrice: undefined,
    title: '',
    className: undefined
  })

  const className = computed(() =>
    cn(ProgressVariants({ renderType: props.renderType }), props.className)
  )
</script>

<template>
  <div :class="className">
    <template v-if="props.renderType === 'percent'">
      <div v-if="props.showLabel" class="label-txt-group">
        <span class="title">{{ props.title }}</span>
        <span class="result">{{ props.result }}</span>
      </div>
      <a-progress
        :percent="props.percent"
        :stroke-color="props.strokeColor"
        :format="() => `${props.percent}%`"
      />
    </template>
  </div>
</template>

<style scoped></style>

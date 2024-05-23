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

    <template v-if="props.renderType === 'price'">
      <div v-if="showLabel" class="price-txt-group">
        <span class="current">
          <b>{{ props.currentPrice?.toLocaleString() }}</b
          >원 /{{ ' ' }}
        </span>
        <span className="total">
          <b>{{ props.totalPrice?.toLocaleString() }}</b
          >원
        </span>
      </div>

      <a-progress
        :percent="calcPercent"
        :stroke-color="strokeColor"
        :size="[100, 24]"
        trail-color="#f0f0f0"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { cn } from '~/utils/common-utils'
  import { ProgressVariants } from '~/lib/common/ui/components/progress-variables'
  import type { CommonProgressProps } from '~/types/common/component-type'

  const props = withDefaults(defineProps<CommonProgressProps>(), {
    renderType: 'percent',
    showLabel: true,
    result: '결과',
    strokeColor: '#F9482D',
    title: '',
    currentPrice: 0,
    totalPrice: 0,
    className: undefined
  })
  const calcPercent = (props.currentPrice / props.totalPrice) * 100

  const className = computed(() =>
    cn(ProgressVariants({ renderType: props.renderType }), props.className)
  )
</script>

<style scoped></style>

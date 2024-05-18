<script setup lang="ts">
  import { cva } from 'class-variance-authority'
  import type { VNode } from 'vue'
  import { isVNode } from 'vue'
  import { cn } from '#imports'
  import type { CommonProps } from '~/types/common/common-props'

  const TitleAreaVariants = cva(`contents-title-area`, {
    variants: {
      depth: {
        1: 'depth-1 mb-5',
        2: 'depth-2 mb-3',
        3: 'depth-3 mb-2'
      },
      textCenter: {
        true: 'text-center'
      }
    },
    defaultVariants: {
      textCenter: false,
      depth: 1
    }
  })

  type Props = CommonProps & {
    title: string | VNode
    textCenter?: boolean
    description?: string | VNode
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    depth?: 1 | 2 | 3
  }
  const props = withDefaults(defineProps<Props>(), {
    title: '',
    textCenter: false,
    description: '',
    tag: 'h2',
    depth: 1,
    className: ''
  })

  const { title, description, textCenter, tag, className, depth } = props
</script>
<template>
  <div :class="cn(TitleAreaVariants({ textCenter, depth }), className)">
    <div class="title-area">
      <component :is="tag" class="title">
        <component :is="title" v-if="isVNode(title)" />
        <template v-else>{{ title }}</template>
      </component>
      <slot name="extra" class="extra"></slot>
    </div>

    <div v-if="description" class="title-description">
      {{ description }}
      <component :is="description" v-if="isVNode(description)" />
      <template v-else>{{ description }}</template>
    </div>
  </div>
</template>

<style scoped>
  @import '@/assets/styles/common/contents-title.css';
</style>

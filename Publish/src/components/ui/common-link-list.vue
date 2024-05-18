<template>
  <ul :class="`link-list${className ? ' ' + className : ''}`">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <template v-if="!!item.modal">
          <Button @click="item.click"> {{ item.title }}</Button>
          <slot :name="['modal', index].join('-')"></slot>
        </template>

        <NuxtLink v-else-if="!!item.url" :href="item.url">
          <Button>{{ item.title }}</Button>
        </NuxtLink>
        <Button v-else @click="item.click">{{ item.title }}</Button>
      </li>
    </ul>
  </ul>
</template>

<script setup lang="ts">
  import { type VNode } from 'vue'
  import type { CommonProps } from '~/types/common/common-props'
  import Button from '#components/ui/common-button.vue'

  interface dataType {
    title: string
    open: boolean
    url?: string
    modal?: () => VNode
    click?: () => void
  }

  interface LinkListProps extends CommonProps {
    data: Array<dataType>
  }

  defineProps<LinkListProps>()
</script>

<style scoped>
  @import '@/assets/styles/common/link-list.css';
</style>

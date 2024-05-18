<template>
  <ADirectoryTree
    :class="cn('', className)"
    multiple
    default-expand-all
    :tree-data="item"
    v-bind="$attrs"
    @on-select="onSelect"
    @on-expand="onExpand"
  />
</template>

<script setup lang="ts">
  import type { GetComponentProps } from 'ant-design-vue/es/vc-table/interface'
  import { Tree } from 'ant-design-vue'
  import type { FileDirectory } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'

  type DirectoryTreeProps = GetComponentProps<typeof Tree.DirectoryTree>

  defineProps<FileDirectory>()

  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }
</script>

<style scoped></style>

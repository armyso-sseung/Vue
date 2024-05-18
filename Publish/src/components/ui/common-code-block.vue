<template>
  <div :class="cn('code-block relative w-fit max-w-full', className)">
    <CodeHighlight :language="language" class="m-0 w-full overflow-auto p-3">
      {{ value }}
    </CodeHighlight>
  </div>
</template>

<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'
  import { cn } from '~/utils/common-utils'
  import 'vue-highlight-code/dist/style.css';

  interface CodeBlockProps extends CommonProps {
    language: string
    value: string
  }

  defineProps<CodeBlockProps>()
</script>

<style scoped></style>

<template>
  <div :class="cn('code-block relative w-fit max-w-full', className)">
    <VCodeBlock
      class="m-0 w-full overflow-auto !p-[1.25em]"
      :code="value"
      :lang="language"
      highlightjs
    />
  </div>
</template>

<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'
  import { cn } from '~/utils/common-utils'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

  interface CodeBlockProps extends CommonProps {
    language: string
    value: string
  }

  defineProps<CodeBlockProps>()
</script>

<style scoped></style>

<template>
  <CommonTitle title="OrderRoutine" />
  <section>
    <h2 class="mb-4 text-xl font-bold">&lt;OrderRoutine /&gt;</h2>
    <p class="mb-4">정기주문 요일 선택</p>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonOrderRoutine />
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonOrderRoutine from '#components/ui/common-order-routine.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonOrderRoutine from '#components/ui/common-order-routine.vue'

<CommonOrderRoutine />`
</script>

<style scoped></style>

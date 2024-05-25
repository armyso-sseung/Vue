<template>
  <CommonTitle title="Loading" />
  <section>
    <h2 class="guide-sub-title">Spinner</h2>
    <div class="component-container">
      <CommonLoading v-if="isLoading" />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonLoading from '#components/ui/common-loading.vue'
  import { ref } from '#imports'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const isLoading = ref<boolean>(true)

  const language = 'javascript'
  const section1 = `
import CommonLoading from '#components/ui/common-loading.vue'

<CommonLoading v-if="isLoading" />`
</script>

<style scoped></style>

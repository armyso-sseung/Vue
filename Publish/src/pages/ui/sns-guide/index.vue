<template>
  <CommonTitle title="Coupon Guide" />
  <section>
    <div class="w-96 rounded-lg border border-gray-300 bg-white px-8 py-4">
      <CommonSnsList :sns-data="snsData" />
    </div>
    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonSnsList from '#components/ui/common-sns-list.vue'
  import { snsData } from '~/datas/etc-data'

  const language = 'javascript'
  const section1 = `
import CommonSnsList from '#components/ui/common-sns-list.vue'


<CommonSnsList :sns-data="snsData" />`
</script>

<style scoped></style>

<template>
  <CommonTitle title="Flag Guide" />
  <section>
    <h2 class="guide-sub-title">bgcolor, border</h2>
    <div class="component-container flex w-fit gap-1">
      <CommonFlag bgcolor="type1">Best</CommonFlag>
      <CommonFlag bgcolor="type2">Best</CommonFlag>
      <CommonFlag bgcolor="type3">Best</CommonFlag>
      <CommonFlag bgcolor="type4">Best</CommonFlag>
      <CommonFlag border="type1">Best</CommonFlag>
      <CommonFlag border="type2">Best</CommonFlag>
      <CommonFlag border="type3">Best</CommonFlag>
      <CommonFlag border="type4">Best</CommonFlag>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonFlag from '#components/ui/common-flag.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonFlag from '#components/ui/common-flag.vue'

<CommonFlag bgcolor="type1">Best</CommonFlag>
<CommonFlag bgcolor="type2">Best</CommonFlag>
<CommonFlag bgcolor="type3">Best</CommonFlag>
<CommonFlag bgcolor="type4">Best</CommonFlag>
<CommonFlag border="type1">Best</CommonFlag>
<CommonFlag border="type2">Best</CommonFlag>
<CommonFlag border="type3">Best</CommonFlag>
<CommonFlag border="type4">Best</CommonFlag>`
</script>

<style scoped></style>

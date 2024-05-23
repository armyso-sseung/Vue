<template>
  <CommonTitle title="Text Guide" />
  <section>
    <h2 class="guide-sub-title">반응형 font-size</h2>
    <div class="component-container flex w-[800px] flex-col gap-3">
      <p class="display1">display1 (mo: 36px , pc: 48px)</p>
      <p class="heading1">heading1 (mo: 30px , pc: 36px)</p>
      <p class="heading2">heading2 (mo: 24px , pc: 30px)</p>
      <p class="subtitle1">subtitle1 (mo: 20px , pc: 24px)</p>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">고정 font-size</h2>
    <div class="component-container flex w-[800px] flex-col gap-3">
      <p class="subtitle2">subtitle2 (16px)</p>
      <p class="body1">body1 (14px)</p>
      <p class="body2">body2 (12px)</p>
      <p class="caption1">caption1 (12px)</p>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>

  <section>
    <h2 class="guide-sub-title">color</h2>
    <div class="component-container flex w-[800px] flex-col gap-3">
      <p class="text-default">text-default (#000000)</p>
      <p class="text-primary">text-primary (#F9482D)</p>
      <p class="text-secondary1">text-secondary1 (#DB3939)</p>
      <p class="text-secondary2">text-secondary2 (#5A82D2)</p>
      <p class="text-error">text-error (#DF2101)</p>
      <p class="text-gray7">text-gray7 (#767676)</p>
    </div>
    <CommonCodeBlock :language="language" :value="section3" />
  </section>

  <section>
    <h2 class="guide-sub-title">font-family (기본 적용됨)</h2>
    <div class="component-container flex w-[800px] flex-col gap-3">
      <p class="font-default">font-family: Pretendard</p>
    </div>
    <CommonCodeBlock :language="language" :value="section4" />
  </section>

  <section>
    <h2 class="guide-sub-title">font-weight</h2>
    <div class="component-container flex w-[800px] flex-col gap-3">
      <p class="font-default">font-weight: 400 (기본값)</p>
      <p class="font-medium">font-weight: 500</p>
      <p class="font-bold">font-weight: 700</p>
    </div>
    <CommonCodeBlock :language="language" :value="section4" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
<p class="display1">display1 (mo: 36px , pc: 48px)</p>
<p class="heading1">heading1 (mo: 30px , pc: 36px)</p>
<p class="heading2">heading2 (mo: 24px , pc: 30px)</p>
<p class="subtitle1">subtitle1 (mo: 20px , pc: 24px)</p>`

  const section2 = `
<p class="subtitle2">subtitle2 (16px)</p>
<p class="body1">body1 (14px)</p>
<p class="body2">body2 (12px)</p>
<p class="caption1">caption1 (12px)</p>`

  const section3 = `<p class="font-default">font-family: Pretendard</p>`

  const section4 = `
<p class="font-default">font-weight: 400 (기본값)</p>
<p class="font-medium">font-weight: 500</p>
<p class="font-bold">font-weight: 700</p>`
</script>

<style scoped></style>

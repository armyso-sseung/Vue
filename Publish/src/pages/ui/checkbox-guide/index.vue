<template>
  <CommonTitle title="Checkbox" />
  <section>
    <h2 class="guide-sub-title">mode="single"</h2>
    <div class="component-container flex w-[500px] flex-col gap-3">
      <div>
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue"
          type="checkbox"
          value="option-one"
        />
        <CommonLabel html-for="option-one">Option One</CommonLabel>
      </div>
      <div>
        <CommonCheckbox
          id="option-two"
          v-model:model="checkValue"
          type="checkbox"
          value="option-two"
          variant="disabled"
          disabled
          checked
        />
        <CommonLabel html-for="option-two">Option Two</CommonLabel>
      </div>
      <div>
        <CommonCheckbox
          id="option-three"
          v-model:model="checkValue"
          type="checkbox"
          value="option-three"
          variant="error"
        />
        <CommonLabel html-for="option-three" variant="error">
          Option Three
        </CommonLabel>
      </div>

      <div>
        <CommonCheckbox
          id="option-four"
          v-model:model="checkValue"
          type="checkbox"
          value="option-four"
          box="nobox"
        />
        <CommonLabel html-for="option-four">Checkbox type02</CommonLabel>
      </div>

      <div>
        <CommonLabel html-for="option-five" type="right" variant="chkbold">
          판매순
        </CommonLabel>
        <CommonCheckbox
          id="option-five"
          v-model:model="checkValue"
          type="checkbox"
          value="option-five"
          box="select"
          checked
        />
      </div>

      <div class="mt-5">
        <span class="font-bold">value ==> {{ checkValue }}</span>
      </div>
    </div>
    <CommonCodeBlock :language="language" :value="checkboxCode" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCheckbox from '#components/ui/common-checkbox.vue'
  import CommonLabel from '#components/ui/common-label.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import { ref } from '#imports'

  const checkValue = ref<string[]>([])

  const language = 'javascript'
  const checkboxCode = `
import Checkbox from '@/components/ui/checkbox';
import Label from '@/components/ui/label';

<CommonCheckbox id="option-one" v-model:model="checkValue" type="checkbox" value="option-one" />
<CommonLabel html-for="option-one">Option One</CommonLabel>

<CommonCheckbox id="option-two" v-model:model="checkValue" type="checkbox" value="option-two" variant="disabled" disabled checked />
<CommonLabel html-for="option-two">Option Two</CommonLabel>

<CommonCheckbox id="option-three" v-model:model="checkValue" type="checkbox" value="option-three" variant="error" />
<CommonLabel html-for="option-three" variant="error">Option Three</CommonLabel>

<CommonCheckbox id="option-four" v-model:model="checkValue" type="checkbox" value="option-four" box="nobox" />
<CommonLabel html-for="option-four">Checkbox type02</CommonLabel>

<CommonLabel html-for="option-five" type="right" variant="chkbold">판매순</CommonLabel>
<CommonCheckbox id="option-five" v-model:model="checkValue" type="checkbox" value="option-five" box="select" checked />`
</script>

<style scoped></style>

<template>
  <CommonTitle title="Textarea Guide" />
  <section>
    <h2 class="guide-sub-title">유형</h2>
    <div class="component-container w-[800px]">
      <CommonLabel type="title" html-for="textarea-one">
        Title<span class="required">*</span>
      </CommonLabel>
      <CommonTextarea
        id="textarea-one"
        v-model:model="textareaValue1"
        placeholder="placeholder"
        :max-length="1000"
      />
      <span class="font-bold">value ==> {{ textareaValue1 }}</span>
      <br />
      <br />
      <br />
      <br />
      <br />

      <CommonTextarea
        v-model:model="textareaValue2"
        placeholder="placeholder"
        variant="disabled"
        :max-length="1000"
        disabled
      />
      <span class="font-bold">value ==> {{ textareaValue2 }}</span>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="input-item">
        <CommonTextarea
          v-model:model="textareaValue3"
          placeholder="placeholder"
          variant="success"
          :max-length="1000"
        />
        <span class="invalid-success absolute bottom-0 left-0">
          성공메세지
        </span>
      </div>
      <span class="font-bold">value ==> {{ textareaValue3 }}</span>
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonLabel from '#components/ui/common-label.vue'
  import CommonTextarea from '#components/ui/common-textarea.vue'
  import { ref } from '#imports'
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const textareaValue1 = ref<string>('')
  const textareaValue2 = ref<string>('')
  const textareaValue3 = ref<string>('')

  const language = 'javascript'
  const section1 = `
import CommonTextarea from '#components/ui/common-textarea.vue'
import CommonLabel from '#components/ui/common-label.vue'

<CommonLabel type="title" html-for="textarea-one">
  Title<span className="required">*</span>
</CommonLabel>
<CommonTextarea
  id="textarea-one"
  v-model:model="textareaValue1"
  placeholder="placeholder"
  :max-length="1000"
/>
<br />

<CommonTextarea
  v-model:model="textareaValue2"
  placeholder="placeholder"
  variant="disabled"
  :max-length="1000"
  disabled
/>
<br />
<div class="input-item">
  <CommonTextarea
    v-model:model="textareaValue3"
    placeholder="placeholder"
    variant="success"
    :max-length="1000"
  />
  <span class="invalid-success absolute bottom-0 left-0">
    성공메세지
  </span>
</div>`
</script>

<style scoped></style>

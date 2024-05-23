<template>
  <CommonTitle title="TextInput Guide" />
  <section>
    <h2 class="guide-sub-title">유형</h2>
    <p class="guide-description">
      Label 및 간격 등 배치 관련 요소는{' '}
      <NuxtLink to="/ui/form-guide">Form Guide</NuxtLink> 참고
    </p>
    <div class="component-container w-[500px]">
      <CommonForm>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value1"
            type="text"
            placeholder="입력해주세요"
          />
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value2"
            type="text"
            placeholder="입력해주세요"
            shape="line"
          />
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value3"
            type="text"
            variant="readonly"
            readonly
          />
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value4"
            type="text"
            variant="disabled"
            disabled
          />
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value5"
            type="text"
            variant="error"
            disabled
          />
          <p class="invalid-error">에러메세지</p>
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value6"
            type="text"
            variant="success"
            disabled
          />
          <p class="invalid-success">성공메세지</p>
        </CommonFormRow>
        <CommonFormRow>
          <CommonTextInput
            v-model:model="value7"
            type="text"
            textRight
            placeholder="입력해주세요"
          />
        </CommonFormRow>
      </CommonForm>
    </div>
    <CommonCodeBlock :language="language" :value="inputCode" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonForm from '#components/ui/common-form.vue'
  import CommonFormRow from '#components/ui/common-form-row.vue'
  import CommonTextInput from '#components/ui/common-text-input.vue'
  import { ref } from '#imports'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const value1 = ref<string>()
  const value2 = ref<string>()
  const value3 = ref<string>('readonly')
  const value4 = ref<string>('disabled')
  const value5 = ref<string>('error')
  const value6 = ref<string>('success')
  const value7 = ref<string>()

  const language = 'javascript'
  const inputCode = `
import CommonTextInput from '#components/ui/common-text-input.vue'
import CommonForm from '#components/ui/common-form.vue'
import CommonFormRow from '#components/ui/common-form-row.vue'

const value1 = ref<string>()
const value2 = ref<string>()
const value3 = ref<string>('readonly')
const value4 = ref<string>('disabled')
const value5 = ref<string>('error')
const value6 = ref<string>('success')
const value7 = ref<string>()

<CommonForm>
  <CommonFormRow>
    <CommonTextInput
      v-model="value1"
      type="text"
      placeholder="입력해주세요"
    />
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value2"
      type="text"
      placeholder="입력해주세요"
      shape="line"
    />
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value3"
      type="text"
      variant="readonly"
      readOnly
    />
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value4"
      type="text"
      variant="disabled"
      disabled
    />
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value5"
      type="text"
      variant="error"
      disabled
    />
    <p class="invalid-error">에러메세지</p>
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value6"
      type="text"
      variant="success"
      disabled
    />
    <p class="invalid-success">성공메세지</p>
  </CommonFormRow>
  <CommonFormRow>
    <CommonTextInput
      v-model="value7"
      type="text"
      textRight
      placeholder="입력해주세요"
    />
  </CommonFormRow>
</CommonForm>`
</script>

<style scoped></style>

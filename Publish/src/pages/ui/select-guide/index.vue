<template>
  <CommonTitle title="Select Guide" />
  <section>
    <h2 class="guide-sub-title">유형</h2>
    <div class="component-container flex w-[220px] flex-col gap-3">
      <CommonSelect
        v-model:model="selectValue1"
        :options="[
          { value: 'Option1', label: 'Option 1' },
          { value: 'Option2', label: 'Option 2' },
          { value: 'Option3', label: 'Option 3' },
          { value: 'Option4', label: 'Option 4', disabled: true }
        ]"
        class-name="w-32"
        placeholder="선택"
      />
      <span class="font-bold">value ==> {{ selectValue1 }}</span>
      <br />

      <CommonSelect
        v-model:model="selectValue2"
        :options="[
          { value: 'Option 1', label: 'Option 1' },
          { value: 'Option 2', label: 'Option 2' },
          { value: 'Option 3', label: 'Option 3' },
          { value: 'Option 4', label: 'Option 4', disabled: true }
        ]"
        class-name="w-32"
        placeholder="선택"
        :line="true"
      />
      <span class="font-bold">value ==> {{ selectValue2 }}</span>
      <br />

      <CommonSelect
        v-model:model="selectValue3"
        :options="[
          { value: 'Option 1', label: 'Option 1' },
          { value: 'Option 2', label: 'Option 2' },
          { value: 'Option 3', label: 'Option 3' },
          { value: 'Option 4', label: 'Option 4', disabled: true }
        ]"
        class-name="w-32"
        placeholder="선택"
        type="error"
      />
      <span class="font-bold">value ==> {{ selectValue3 }}</span>
      <br />

      <CommonSelect
        v-model:model="selectValue4"
        :options="[
          { value: 'Option 1', label: 'Option 1' },
          { value: 'Option 2', label: 'Option 2' },
          { value: 'Option 3', label: 'Option 3' },
          { value: 'Option 4', label: 'Option 4', disabled: true }
        ]"
        class-name="w-32"
        placeholder="선택"
        type="error"
        :line="true"
      />
      <span class="font-bold">value ==> {{ selectValue4 }}</span>
      <br />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">SortArea</h2>
    <div class="component-container flex w-fit flex-col gap-3">
      <CommonSortArea>
        <CommonSelect
          v-model:model="selectValue5"
          :options="[
            { value: 'option1', label: '최신순' },
            { value: 'option2', label: '마감순' }
          ]"
          class-name="w-32"
        />
      </CommonSortArea>
      <span class="font-bold">value ==> {{ selectValue5 }}</span>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonSelect from '#components/ui/common-select.vue'
  import { ref } from '#imports'
  import CommonSortArea from '#components/ui/common-sort-area.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const selectValue1 = ref<string | null>(null)
  const selectValue2 = ref<string>('Option3')
  const selectValue3 = ref<string>('Option3')
  const selectValue4 = ref<string>('Option3')
  const selectValue5 = ref<string>('option1')

  const language = 'javascript'
  const section1 = `
import CommonSelect from '#components/ui/common-select.vue'

const selectValue1 = ref<string | null>(null)
const selectValue2 = ref<string>('Option3')
const selectValue3 = ref<string>('Option3')
const selectValue4 = ref<string>('Option3')

<CommonSelect
  v-model:model="selectValue1"
  :options="[
    { value: 'Option1', label: 'Option 1' },
    { value: 'Option2', label: 'Option 2' },
    { value: 'Option3', label: 'Option 3' },
    { value: 'Option4', label: 'Option 4', disabled: true }
  ]"
  class-name="w-32"
  placeholder="선택"
/>

<CommonSelect
  v-model:model="selectValue2"
  :options="[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4', disabled: true }
  ]"
  class-name="w-32"
  placeholder="선택"
  :line="true"
/>

<CommonSelect
  v-model:model="selectValue3"
  :options="[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4', disabled: true }
  ]"
  class-name="w-32"
  placeholder="선택"
  type="error"
/>

<CommonSelect
  v-model:model="selectValue4"
  :options="[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4', disabled: true }
  ]"
  class-name="w-32"
  placeholder="선택"
  type="error"
  :line="true"
/>`

  const section2 = `
import CommonSelect from '#components/ui/common-select.vue'
import CommonSortArea from '#components/ui/common-sort-area.vue'

const selectValue5 = ref<string>('option1')

<CommonSortArea>
  <CommonSelect
    v-model:model="selectValue5"
    :options="[
      { value: 'option1', label: '최신순' },
      { value: 'option2', label: '마감순' }
    ]"
    class-name="w-32"
  />
</CommonSortArea>`
</script>

<style scoped></style>

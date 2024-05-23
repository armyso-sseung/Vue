<template>
  <CommonTitle title="Radio, RadioButton Guide" />
  <section>
    <h2 class="guide-sub-title">RadioGroup, RadioGroupItem</h2>
    <div class="component-container w-[500px]">
      <CommonRadioGroup v-model:model="radioValue1">
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem
            id="option-one"
            value="option-one"
            class-name="radio"
          />
          <CommonLabel html-for="option-one">Option One</CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem
            id="option-two"
            value="option-two"
            class-name="radio"
          />
          <CommonLabel html-for="option-two">Option Two</CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem
            id="option-three"
            value="option-three"
            class-name="radio"
            disabled
          />
          <CommonLabel html-for="option-three" variant="disabled">
            Option Three
          </CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem
            id="option-four"
            value="option-four"
            class-name="radio error"
          />
          <CommonLabel html-for="option-four" variant="error">
            Option Three
          </CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem
            id="option-five"
            value="option-five"
            class-name="radio"
          />
          <CommonLabel html-for="option-five" variant="chkbold">
            Option Three
          </CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonLabel html-for="option-six" variant="chkbold" type="right">
            Option Three
          </CommonLabel>
          <CommonRadioGroupItem
            id="option-six"
            value="option-six"
            class-name="radio"
          />
        </div>
      </CommonRadioGroup>

      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue1 }}</span>
      </div>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">좌우 배치</h2>
    <div class="component-container w-[500px]">
      <CommonRadioGroup v-model:model="radioValue2" class-name="flex gap-10">
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem id="option-one" value="option-one" />
          <CommonLabel html-for="option-one">남자</CommonLabel>
        </div>
        <div class="flex items-center space-x-2">
          <CommonRadioGroupItem id="option-two" value="option-two" />
          <CommonLabel html-for="option-two">여자</CommonLabel>
        </div>
      </CommonRadioGroup>

      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue2 }}</span>
      </div>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>

  <section>
    <h2 class="guide-sub-title">RadioButton</h2>
    <div class="component-container w-[500px]">
      <p class="mb-2">기본</p>
      <CommonRadioButton
        v-model:model="radioValue3"
        name="select1"
        :options="itemList"
      />
      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue3 }}</span>
      </div>
      <br />

      <p class="mb-2">defaultValue 지정</p>
      <CommonRadioButton
        v-model:model="radioValue4"
        name="select2"
        :options="itemList"
      />
      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue4 }}</span>
      </div>
      <br />

      <p class="mb-2">disabled (전체)</p>
      <CommonRadioButton v-model:model="radioValue5" name="select3" :options="itemList" disabled />
      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue5 }}</span>
      </div>
      <br />

      <p class="mb-2">disabled (개별적용)</p>
      <CommonRadioButton
        v-model:model="radioValue6"
        name="select4"
        :options="[
          {
            label: 'normal',
            value: '1'
          },
          {
            label: 'disabled',
            value: '2',
            disabled: true
          }
        ]"
      />
      <div class="mt-5">
        <span class="font-bold">value ==> {{ radioValue6 }}</span>
      </div>
    </div>

    <CommonCaution class-name="mb-5">
      <CommonCautionTitle>옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>name</b>: 필수 항목으로 유니크한 값으로 입력 합니다. [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>options</b>: 버튼 생성 데이터 [Array[ {`{label: string, value:
        string, disabled: boolean}`}]]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>defaultValue</b>: 기본으로 checked 할 아이템의 value - 기본값 null
        [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>disabled</b>: 라디오버튼 전체 disable 처리 - 기본값 false [boolean]
      </CommonCautionContent>
    </CommonCaution>

    <CommonCodeBlock :language="language" :value="section3" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonRadioGroup from '#components/ui/common-radio-group.vue'
  import CommonRadioGroupItem from '#components/ui/common-radio-groupItem.vue'
  import CommonLabel from '#components/ui/common-label.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonRadioButton from '#components/ui/common-radio-button.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import { ref } from '#imports'

  const radioValue1 = ref<string>('option-one')
  const radioValue2 = ref<string>('option-one')
  const radioValue3 = ref<string>()
  const radioValue4 = ref<string>('1week')
  const radioValue5 = ref<string>()
  const radioValue6 = ref<string>()

  const itemList = [
    {label: '1주', value: '1week'},
    {label: '1개월', value: '1month'},
    {label: '3개월', value: '3months'},
    {label: '상세조회', value: 'Details'}
  ]

  const language = 'javascript'
  const section1 = `
import CommonRadioGroup from '#components/ui/common-radio-group.vue'
import CommonRadioGroupItem from '#components/ui/common-radio-groupItem.vue'
import CommonLabel from '#components/ui/common-label.vue'

const radioValue1 = ref<string>('option-one')

<CommonRadioGroup v-model:model="radioValue1">
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem
      id="option-one"
      value="option-one"
      class-name="radio"
    />
    <CommonLabel html-for="option-one">Option One</CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem
      id="option-two"
      value="option-two"
      class-name="radio"
    />
    <CommonLabel html-for="option-two">Option Two</CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem
      id="option-three"
      value="option-three"
      class-name="radio"
      disabled
    />
    <CommonLabel html-for="option-three" variant="disabled">
      Option Three
    </CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem
      id="option-four"
      value="option-four"
      class-name="radio error"
    />
    <CommonLabel html-for="option-four" variant="error">
      Option Three
    </CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem
      id="option-five"
      value="option-five"
      class-name="radio"
    />
    <CommonLabel html-for="option-five" variant="chkbold">
      Option Three
    </CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonLabel html-for="option-six" variant="chkbold" type="right">
      Option Three
    </CommonLabel>
    <CommonRadioGroupItem
      id="option-six"
      value="option-six"
      class-name="radio"
    />
  </div>
</CommonRadioGroup>`

  const section2 = `
import CommonRadioGroup from '#components/ui/common-radio-group.vue'
import CommonRadioGroupItem from '#components/ui/common-radio-groupItem.vue'
import CommonLabel from '#components/ui/common-label.vue'

const radioValue2 = ref<string>('option-one')

<CommonRadioGroup v-model:model="radioValue2" class-name="flex gap-10">
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem id="option-one" value="option-one" />
    <CommonLabel html-for="option-one">남자</CommonLabel>
  </div>
  <div class="flex items-center space-x-2">
    <CommonRadioGroupItem id="option-two" value="option-two" />
    <CommonLabel html-for="option-two">여자</CommonLabel>
  </div>
</CommonRadioGroup>`

  const section3 = `
import CommonRadioButton from '#components/ui/common-radio-button.vue'

const radioValue3 = ref<string>()
const radioValue4 = ref<string>('1week')
const radioValue5 = ref<string>()
const radioValue6 = ref<string>()

<CommonRadioButton
  v-model:model="radioValue3"
  name="select1"
  :options="itemList"
/>
<br />

<p class="mb-2">defaultValue 지정</p>
<CommonRadioButton
  v-model:model="radioValue4"
  name="select2"
  :options="itemList"
/>

<br />
<p class="mb-2">disabled (전체)</p>

<CommonRadioButton v-model:model="radioValue5" name="select3" :options="itemList" disabled />

<br />
<p class="mb-2">disabled (개별적용)</p>
<CommonRadioButton
  v-model:model="radioValue6"
  name="select4"
  :options="[
    {
      label: 'normal',
      value: '1'
    },
    {
      label: 'disabled',
      value: '2',
      disabled: true
    }
  ]"
/>`
</script>

<style scoped></style>

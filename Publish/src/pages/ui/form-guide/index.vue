<template>
  <CommonTitle title="Form Guide" />
  <section>
    <h2 class="guide-sub-title">Form, FormRow, FormCol</h2>

    <CommonCaution class-name="mb-5">
      <CommonCautionTitle>Form 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>showRequired</b>: 폼의 우측 상단 필수입력 라벨 표시 여부 - 기본값
        false [boolean]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>gap</b>: 폼의 FormRow 간 간걱 16px/24px/32px - 기본값 'medium'
        ['small' | 'medium' | 'large']
      </CommonCautionContent>
      <br />
      <CommonCautionTitle>FormCol 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>showRequired</b>: 폼의 우측 상단 필수입력 라벨 표시 여부 - 기본값
        false [boolean]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>gap</b>: 폼의 FormCol 내부 요소 간 간걱 4px/16px/40px/0px - 기본값
        'small' ['small' | 'medium' | 'large' | '0']
        <br />
        - small: input + input, selectBox, 버튼 사이 간격
        <br />- large: checkbox, radio 등의 가로로 배치될때 아이템간 간격
      </CommonCautionContent>
      <CommonCautionContent>
        <b>wrap</b>: columm의 요소가 많을 경우 개행 여부 지정 - 기본값 false
        [boolean]
      </CommonCautionContent>
    </CommonCaution>
    <div class="component-container w-[600px]">
      <CommonForm>
        <CommonFormRow>
          <CommonLabel html-for="" type="title">
            Label<span class="required">*</span>
          </CommonLabel>
          <div :style="dummyBoxStyles">Row-1</div>
        </CommonFormRow>
        <CommonFormRow>
          <CommonLabel html-for="" type="title">
            Label<span class="required">*</span>
          </CommonLabel>
          <div class="flex flex-col gap-2">
            <div :style="dummyBoxStyles">Row-2-1</div>
            <div :style="dummyBoxStyles">Row-2-2</div>
          </div>
        </CommonFormRow>
        <CommonFormRow>
          <CommonLabel html-for="" type="title">
            Label<span class="required">*</span>
          </CommonLabel>
          <CommonFormCol>
            <div :style="dummyBoxStyles">Col-1</div>
            <div :style="dummyBoxStyles">Col-2</div>
            <div :style="dummyBoxStyles" class="flex-auto">
              Col-3 class="flex-auto"
            </div>
          </CommonFormCol>
        </CommonFormRow>
      </CommonForm>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">Use Case - TextInput, SelectBox</h2>
    <div class="component-container w-[600px]">
      <CommonForm show-required>
        <CommonFormRow>
          <CommonLabel html-for="input_1" type="title">
            일반 필드<span class="required">*</span>
          </CommonLabel>
          <CommonTextInput
            id="input_1"
            v-model:model="inputValue1"
            type="text"
            placeholder="입력해 주세요."
          />
          <p class="body2 mt-1 text-error">에러메세지</p>
        </CommonFormRow>

        <CommonFormRow>
          <CommonLabel html-for="select_1" type="title">
            행 분할<span class="required">*</span>
          </CommonLabel>
          <CommonFormCol>
            <CommonSelect
              id="select_1"
              v-model:model="selectValue1"
              :options="[
                { value: 'option0', label: '010' },
                { value: 'option1', label: '011' },
                { value: 'option2', label: '016' }
              ]"
              class-name="w-4/12"
              placeholder=""
            />
            <CommonTextInput
              v-model:model="inputValue2"
              type="number"
              :max-length="4"
            />
            <CommonTextInput
              v-model:model="inputValue3"
              type="number"
              :max-length="4"
            />
          </CommonFormCol>
        </CommonFormRow>

        <CommonFormRow>
          <CommonLabel html-for="input_2" type="title">
            열분할<span class="required">*</span>
          </CommonLabel>
          <div class="flex flex-col gap-2">
            <CommonFormCol id="input_2">
              <CommonTextInput
                v-model:model="inputValue4"
                type="number"
                :max-length="6"
                placeholder="우편번호 입력"
                readonly
              />
              <CommonButton variant="third" size="base" class-name="flex-none">
                우편번호 찾기
              </CommonButton>
            </CommonFormCol>
            <CommonTextInput
              v-model:model="inputValue5"
              type="text"
              placeholder="주소를 입력해 주세요."
              readonly
            />
            <CommonTextInput
              v-model:model="inputValue6"
              type="text"
              placeholder="상세 주소를 입력해 주세요."
            />
            <CommonFormCol gap="0">
              <CommonCheckbox
                id="option-one"
                v-model:model="checkValue1"
                type="checkbox"
                value="option-one"
              />
              <CommonLabel html-for="option-one"
                >기본 배송지로 설정</CommonLabel
              >
            </CommonFormCol>
          </div>
        </CommonFormRow>

        <CommonFormRow>
          <CommonLabel html-for="FormCol_1" type="title">이메일</CommonLabel>
          <CommonFormCol id="FormCol_1">
            <CommonTextInput type="text" />
            <span class="w-6 text-center">@</span>
            <CommonSelect
              v-model:model="selectValue2"
              :options="[
                { value: 'option0', label: '직접입력' },
                { value: 'option1', label: 'daum.net' },
                { value: 'option2', label: 'naver.com' }
              ]"
              class-name="w-36"
              placeholder=""
            />
          </CommonFormCol>
        </CommonFormRow>

        <CommonFormRow>
          <CommonLabel html-for="FormCol_2" type="title"
            >마일리지 사용</CommonLabel
          >
          <CommonFormCol id="FormCol_2">
            <p class="body1 pc:w-1/4">한섬마일리지 <span>1,000</span></p>
            <CommonTextInput
              v-model:model="inputValue7"
              type="text"
              class-name="flex-auto"
              placeholder="입력해주세요"
            />
            <span class="unit grow-0">M</span>
            <CommonButton variant="underline" size="fsm">
              적용하기
            </CommonButton>
          </CommonFormCol>
        </CommonFormRow>

        <CommonButtonArea type="column" size="full">
          <CommonButton size="xxl" variant="third"> 취소 </CommonButton>
          <CommonButton size="xxl" variant="bgcolor"> 회원가입 </CommonButton>
        </CommonButtonArea>
      </CommonForm>
    </div>

    <CommonCodeBlock :language="language" :value="section2" />
  </section>

  <section>
    <h2 class="guide-sub-title">Use Case - Checkbox, Radio</h2>
    <div class="component-container w-[600px]">
      <CommonForm>
        <CommonFormRow>
          <CommonLabel html-for="radio_1" type="title"
            >라디오 or 체크박스</CommonLabel
          >
          <CommonRadioGroup
            id="radio_1"
            v-model:model="radioValue1"
            class-name="flex gap-10"
          >
            <div class="flex items-center space-x-2">
              <CommonRadioGroupItem id="option-one" value="option-one" />
              <CommonLabel html-for="option-one">선택1</CommonLabel>
            </div>
            <div class="flex items-center space-x-2">
              <CommonRadioGroupItem id="option-two" value="option-two" />
              <CommonLabel html-for="option-two">선택2</CommonLabel>
            </div>
          </CommonRadioGroup>
        </CommonFormRow>

        <CommonDivider />

        <CommonFormRow>
          <CommonCheckbox
            id="option-one"
            v-model:model="checkValue2"
            type="checkbox"
          />
          <CommonLabel html-for="option-one" class-name="font-bold">
            전체 동의합니다.
          </CommonLabel>
        </CommonFormRow>

        <CommonFormRow>
          <CommonFormCol gap="0">
            <div>
              <CommonCheckbox
                id="option-one"
                v-model:model="checkValue3"
                type="checkbox"
                value="option-one"
              />
              <CommonLabel html-for="option-one">
                상품 및 이벤트 정보 수집에 동의합니다.(선택)
              </CommonLabel>
            </div>
            <CommonButton
              size="fsm"
              class-name="btn-arrow-more ml-auto"
              title="상세보기"
            />
          </CommonFormCol>
        </CommonFormRow>

        <CommonFormRow class-name="pl-7">
          <CommonFormCol gap="large" wrap>
            <div>
              <CommonCheckbox
                id="option-one"
                v-model:model="checkValue4"
                type="checkbox"
                value="option-one"
              />
              <CommonLabel html-for="option-one">이메일</CommonLabel>
            </div>
            <div>
              <CommonCheckbox
                id="option-one"
                v-model:model="checkValue4"
                type="checkbox"
                value="option-two"
              />
              <CommonLabel html-for="option-one">SMS</CommonLabel>
            </div>
            <div>
              <CommonCheckbox
                id="option-one"
                v-model:model="checkValue4"
                type="checkbox"
                value="option-three"
              />
              <CommonLabel html-for="option-one">카카오톡</CommonLabel>
            </div>
          </CommonFormCol>
        </CommonFormRow>
      </CommonForm>
    </div>

    <CommonCodeBlock :language="language" :value="section3" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonForm from '#components/ui/common-form.vue'
  import CommonFormRow from '#components/ui/common-form-row.vue'
  import CommonLabel from '#components/ui/common-label.vue'
  import CommonFormCol from '#components/ui/common-form-col.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonTextInput from '#components/ui/common-text-input.vue'
  import CommonSelect from '#components/ui/common-select.vue'
  import CommonCheckbox from '#components/ui/common-checkbox.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonRadioGroup from '#components/ui/common-radio-group.vue'
  import CommonRadioGroupItem from '#components/ui/common-radio-groupItem.vue'
  import CommonDivider from '#components/ui/common-divider.vue'
  import { ref } from '#imports'

  const inputValue1 = ref<string | null>(null)
  const inputValue2 = ref<string | null>(null)
  const inputValue3 = ref<string | null>(null)
  const inputValue4 = ref<string | null>(null)
  const inputValue5 = ref<string | null>(null)
  const inputValue6 = ref<string | null>(null)
  const inputValue7 = ref<string | null>(null)
  const selectValue1 = ref<string>('option0')
  const selectValue2 = ref<string>('option0')
  const checkValue1 = ref<string[]>([])
  const checkValue2 = ref<string[]>([])
  const checkValue3 = ref<string[]>([])
  const checkValue4 = ref<string[]>([])
  const radioValue1 = ref<string>('option-one')

  const dummyBoxStyles = {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ccc',
    padding: ' 0px 10px'
  }

  const language = 'javascript'
  const section1 = `
import CommonForm from '#components/ui/common-form.vue'
import CommonFormRow from '#components/ui/common-form-row.vue'
import CommonFormCol from '#components/ui/common-form-col.vue'
import CommonSelect from '#components/ui/common-select.vue'
import CommonLabel from '#components/ui/common-label.vue'

<CommonForm>
  <CommonFormRow>
    <CommonLabel html-for="" type="title">
      Label<span class="required">*</span>
    </CommonLabel>
    <div :style="dummyBoxStyles">Row-1</div>
  </CommonFormRow>
  <CommonFormRow>
    <CommonLabel html-for="" type="title">
      Label<span class="required">*</span>
    </CommonLabel>
    <div class="flex flex-col gap-2">
      <div :style="dummyBoxStyles">Row-2-1</div>
      <div :style="dummyBoxStyles">Row-2-2</div>
    </div>
  </CommonFormRow>
  <CommonFormRow>
    <CommonLabel html-for="" type="title">
      Label<span class="required">*</span>
    </CommonLabel>
    <CommonFormCol>
      <div :style="dummyBoxStyles">Col-1</div>
      <div :style="dummyBoxStyles">Col-2</div>
      <div :style="dummyBoxStyles" class="flex-auto">
        Col-3 class="flex-auto"
      </div>
    </CommonFormCol>
  </CommonFormRow>
</CommonForm>`

  const section2 = `
import CommonForm from '#components/ui/common-form.vue'
import CommonFormRow from '#components/ui/common-form-row.vue'
import CommonFormCol from '#components/ui/common-form-col.vue'
import CommonLabel from '#components/ui/common-label.vue'
import CommonButton from '#components/ui/common-button.vue'
import CommonButtonArea from '#components/ui/common-button-area.vue'
import CommonTextInput from '#components/ui/common-text-input.vue'
import CommonCheckbox from '#components/ui/common-checkbox.vue'

<CommonForm show-required>
  <CommonFormRow>
    <CommonLabel html-for="input_1" type="title">
      일반 필드<span class="required">*</span>
    </CommonLabel>
    <CommonTextInput
      id="input_1"
      v-model:model="inputValue1"
      type="text"
      placeholder="입력해 주세요."
    />
    <p class="body2 mt-1 text-error">에러메세지</p>
  </CommonFormRow>

  <CommonFormRow>
    <CommonLabel html-for="select_1" type="title">
      행 분할<span class="required">*</span>
    </CommonLabel>
    <CommonFormCol>
      <CommonSelect
        id="select_1"
        v-model:model="selectValue1"
        :options="[
          { value: 'option0', label: '010' },
          { value: 'option1', label: '011' },
          { value: 'option2', label: '016' }
        ]"
        class-name="w-4/12"
        placeholder=""
      />
      <CommonTextInput
        v-model:model="inputValue2"
        type="number"
        :max-length="4"
      />
      <CommonTextInput
        v-model:model="inputValue3"
        type="number"
        :max-length="4"
      />
    </CommonFormCol>
  </CommonFormRow>

  <CommonFormRow>
    <CommonLabel html-for="input_2" type="title">
      열분할<span class="required">*</span>
    </CommonLabel>
    <div class="flex flex-col gap-2">
      <CommonFormCol id="input_2">
        <CommonTextInput
          v-model:model="inputValue4"
          type="number"
          :max-length="6"
          placeholder="우편번호 입력"
          readonly
        />
        <CommonButton variant="third" size="base" class-name="flex-none">
          우편번호 찾기
        </CommonButton>
      </CommonFormCol>
      <CommonTextInput
        v-model:model="inputValue5"
        type="text"
        placeholder="주소를 입력해 주세요."
        readonly
      />
      <CommonTextInput
        v-model:model="inputValue6"
        type="text"
        placeholder="상세 주소를 입력해 주세요."
      />
      <CommonFormCol gap="0">
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue1"
          type="checkbox"
          value="option-one"
        />
        <CommonLabel html-for="option-one"
          >기본 배송지로 설정</CommonLabel
        >
      </CommonFormCol>
    </div>
  </CommonFormRow>

  <CommonFormRow>
    <CommonLabel html-for="FormCol_1" type="title">이메일</CommonLabel>
    <CommonFormCol id="FormCol_1">
      <CommonTextInput type="text" />
      <span class="w-6 text-center">@</span>
      <CommonSelect
        v-model:model="selectValue2"
        :options="[
          { value: 'option0', label: '직접입력' },
          { value: 'option1', label: 'daum.net' },
          { value: 'option2', label: 'naver.com' }
        ]"
        class-name="w-36"
        placeholder=""
      />
    </CommonFormCol>
  </CommonFormRow>

  <CommonFormRow>
    <CommonLabel html-for="FormCol_2" type="title"
      >마일리지 사용</CommonLabel
    >
    <CommonFormCol id="FormCol_2">
      <p class="body1 pc:w-1/4">한섬마일리지 <span>1,000</span></p>
      <CommonTextInput
        v-model:model="inputValue7"
        type="text"
        class-name="flex-auto"
        placeholder="입력해주세요"
      />
      <span class="unit grow-0">M</span>
      <CommonButton variant="underline" size="fsm">
        적용하기
      </CommonButton>
    </CommonFormCol>
  </CommonFormRow>

  <CommonButtonArea type="column" size="full">
    <CommonButton size="xxl" variant="third"> 취소 </CommonButton>
    <CommonButton size="xxl" variant="bgcolor"> 회원가입 </CommonButton>
  </CommonButtonArea>
</CommonForm>`

  const section3 = `
import CommonForm from '#components/ui/common-form.vue'
import CommonFormRow from '#components/ui/common-form-row.vue'
import CommonFormCol from '#components/ui/common-form-col.vue'
import CommonLabel from '#components/ui/common-label.vue'
import CommonRadioGroup from '#components/ui/common-radio-group.vue'
import CommonRadioGroupItem from '#components/ui/common-radio-groupItem.vue'
import CommonCheckbox from '#components/ui/common-checkbox.vue'
import CommonDivider from '#components/ui/common-divider.vue'

<CommonForm>
  <CommonFormRow>
    <CommonLabel html-for="radio_1" type="title"
      >라디오 or 체크박스</CommonLabel
    >
    <CommonRadioGroup
      id="radio_1"
      v-model:model="radioValue1"
      class-name="flex gap-10"
    >
      <div class="flex items-center space-x-2">
        <CommonRadioGroupItem id="option-one" value="option-one" />
        <CommonLabel html-for="option-one">선택1</CommonLabel>
      </div>
      <div class="flex items-center space-x-2">
        <CommonRadioGroupItem id="option-two" value="option-two" />
        <CommonLabel html-for="option-two">선택2</CommonLabel>
      </div>
    </CommonRadioGroup>
  </CommonFormRow>

  <CommonDivider />

  <CommonFormRow>
    <CommonCheckbox
      id="option-one"
      v-model:model="checkValue2"
      type="checkbox"
    />
    <CommonLabel html-for="option-one" class-name="font-bold">
      전체 동의합니다.
    </CommonLabel>
  </CommonFormRow>

  <CommonFormRow>
    <CommonFormCol gap="0">
      <div>
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue3"
          type="checkbox"
          value="option-one"
        />
        <CommonLabel html-for="option-one">
          상품 및 이벤트 정보 수집에 동의합니다.(선택)
        </CommonLabel>
      </div>
      <CommonButton
        size="fsm"
        class-name="btn-arrow-more ml-auto"
        title="상세보기"
      />
    </CommonFormCol>
  </CommonFormRow>

  <CommonFormRow class-name="pl-7">
    <CommonFormCol gap="large" wrap>
      <div>
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue4"
          type="checkbox"
          value="option-one"
        />
        <CommonLabel html-for="option-one">이메일</CommonLabel>
      </div>
      <div>
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue4"
          type="checkbox"
          value="option-two"
        />
        <CommonLabel html-for="option-one">SMS</CommonLabel>
      </div>
      <div>
        <CommonCheckbox
          id="option-one"
          v-model:model="checkValue4"
          type="checkbox"
          value="option-three"
        />
        <CommonLabel html-for="option-one">카카오톡</CommonLabel>
      </div>
    </CommonFormCol>
  </CommonFormRow>
</CommonForm>`
</script>

<style scoped></style>

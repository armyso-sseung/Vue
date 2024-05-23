<template>
  <div>
    <CommonTitle title="Drawer Guide" />
    <section>
      <h2 class="guide-sub-title">기본 타입</h2>
      <p class="guide-description">
        버텀업 슬라이드 팝업인 Drawer는 antd ui 프레임워크 사용. api는 antd 와
        동일하게 사용됩니다.
        <a href="https://ant.design/components/drawer#api" target="_blank">
          ant design Drawer api
        </a>
      </p>

      <div class="mb-5 flex gap-2">
        <CommonButton
          variant="bgcolor"
          size="base"
          @click="() => $drawer1?.openDrawer()"
        >
          기본유형
        </CommonButton>

        <CommonButton
          variant="bgcolor"
          size="base"
          @click="() => $drawer2?.openDrawer()"
        >
          PC에서 너비 640px 고정 - pcBodyFit
        </CommonButton>
      </div>
      <CommonDrawer ref="$drawer1" title="타이틀">
        <template #footer>
          <CommonButtonArea>
            <CommonButton
              variant="third"
              size="xxl"
              class-name="w-full"
              @click="$drawer1?.closeDrawer"
            >
              장바구니
            </CommonButton>
            <CommonButton
              variant="bgcolor"
              size="xxl"
              class-name="w-full"
              @click="$drawer1?.closeDrawer"
            >
              바로 구매하기
            </CommonButton>
          </CommonButtonArea>
        </template>
        <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
      </CommonDrawer>

      <CommonDrawer ref="$drawer2" title="타이틀" pc-body-fit>
        <template #footer>
          <CommonButtonArea>
            <CommonButton
              variant="third"
              size="xxl"
              class-name="w-full"
              @click="$drawer2?.closeDrawer"
            >
              장바구니
            </CommonButton>
            <CommonButton
              variant="bgcolor"
              size="xxl"
              class-name="w-full"
              @click="$drawer2?.closeDrawer"
            >
              바로 구매하기
            </CommonButton>
          </CommonButtonArea>
        </template>
        <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
      </CommonDrawer>

      <CommonCodeBlock :language="language" :value="modalCode" />
    </section>

    <section>
      <h2 class="guide-sub-title">헤더 없는 유형</h2>
      <div class="mb-5 flex gap-2">
        <CommonButton
          variant="bgcolor"
          size="base"
          @click="() => $drawer3?.openDrawer()"
        >
          헤더 없는 유형
        </CommonButton>
      </div>
      <CommonDrawer ref="$drawer3" :mask="false" :closable="false">
        <template #footer>
          <CommonButtonArea>
            <CommonButton
              variant="third"
              size="xxl"
              class-name="w-full"
              @click="handleCancelNoHeader"
            >
              취소
            </CommonButton>
            <CommonButton
              variant="bgcolor"
              size="xxl"
              class-name="w-full"
              @click="handleCancelNoHeader"
            >
              확인
            </CommonButton>
          </CommonButtonArea>
        </template>
        <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
      </CommonDrawer>

      <CommonCodeBlock :language="language" :value="fullModalCode" />
    </section>
  </div>
</template>

<script setup lang="ts">
  import CommonButton from '#components/ui/common-button.vue'
  import { ref } from '#imports'
  import CommonDrawer from '#components/ui/common-drawer.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const $drawer1 = ref<InstanceType<typeof CommonDrawer> | null>(null)
  const $drawer2 = ref<InstanceType<typeof CommonDrawer> | null>(null)
  const $drawer3 = ref<InstanceType<typeof CommonDrawer> | null>(null)

  const handleCancelNoHeader = () => {
    $drawer3.value?.closeDrawer()
  }

  const language = 'javascript'
  const modalCode = `
import CommonDrawer from '#components/ui/common-drawer.vue'

const $drawer1 = ref<InstanceType<typeof CommonDrawer> | null>(null)
const $drawer2 = ref<InstanceType<typeof CommonDrawer> | null>(null)

<CommonButton
  variant="bgcolor"
  size="base"
  @click="() => $drawer1?.openDrawer()"
>
  기본유형
</CommonButton>

<CommonButton
  variant="bgcolor"
  size="base"
  @click="() => $drawer2?.openDrawer()"
>
  PC에서 너비 640px 고정 - pcBodyFit
</CommonButton>

<CommonDrawer ref="$drawer1" title="타이틀">
  <template #footer>
    <CommonButtonArea>
      <CommonButton
        variant="third"
        size="xxl"
        class-name="w-full"
        @click="$drawer1?.closeDrawer"
      >
        장바구니
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="xxl"
        class-name="w-full"
        @click="$drawer1?.closeDrawer"
      >
        바로 구매하기
      </CommonButton>
    </CommonButtonArea>
  </template>
  <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
</CommonDrawer>

<CommonDrawer ref="$drawer2" title="타이틀" pc-body-fit>
  <template #footer>
    <CommonButtonArea>
      <CommonButton
        variant="third"
        size="xxl"
        class-name="w-full"
        @click="$drawer2?.closeDrawer"
      >
        장바구니
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="xxl"
        class-name="w-full"
        @click="$drawer2?.closeDrawer"
      >
        바로 구매하기
      </CommonButton>
    </CommonButtonArea>
  </template>
  <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
</CommonDrawer>`

  const fullModalCode = `
import CommonDrawer from '#components/ui/common-drawer.vue'

const $drawer3 = ref<InstanceType<typeof CommonDrawer> | null>(null)

const handleCancelNoHeader = () => {
  $drawer3.value?.closeDrawer()
}

<CommonButton
  variant="bgcolor"
  size="base"
  @click="() => $drawer3?.openDrawer()"
>
  헤더 없는 유형
</CommonButton>

<CommonDrawer ref="$drawer3" :mask="false" :closable="false">
  <template #footer>
    <CommonButtonArea>
      <CommonButton
        variant="third"
        size="xxl"
        class-name="w-full"
        @click="handleCancelNoHeader"
      >
        취소
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="xxl"
        class-name="w-full"
        @click="handleCancelNoHeader"
      >
        확인
      </CommonButton>
    </CommonButtonArea>
  </template>
  <div class="h-[500px] bg-[#ddd]">Drawer 컨텐츠</div>
</CommonDrawer>`
</script>

<style scoped></style>

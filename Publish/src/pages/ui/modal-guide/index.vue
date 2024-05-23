<template>
  <CommonTitle title="Modal Guide" />
  <section>
    <h2 class="guide-sub-title">Modal - 기본 타입</h2>
    <p class="guide-description">
      모달은 antd ui 프레임워크 사용. api는 antd 와 동일하게 사용됩니다.{' '}
      <a href="https://ant.design/components/modal#api" target="_blank">
        Ant design Modal Api
      </a>
    </p>
    <div class="mb-5 flex gap-2">
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$modal1?.openDialog()"
      >
        기본유형
      </CommonButton>

      <CommonButton
        variant="bgcolor"
        size="base"
        @click="
          () => {
            $modal2?.openDialog()
            timeout(() => {
              isLoading = false
            }, 5000)
          }
        "
      >
        컨텐츠 Loading (body에 height 지정)
      </CommonButton>
    </div>

    <CommonModal ref="$modal1" title="타이틀">
      <div class="h-[2000px] bg-[#ddd]">모달 컨텐츠</div>
    </CommonModal>

    <CommonModal
      ref="$modal2"
      title="타이틀"
      full
      @on-ok="() => (isLoading = true)"
      @on-cancel="() => (isLoading = true)"
    >
      <div class="h-[500px]">
        <div v-if="isLoading" class="flex h-full items-center justify-center">
          <CommonImgMedia
            src="/images/icons/loading.gif"
            alt=""
            class-name="size-[50px]"
          />
        </div>
        <div v-else :style="{ background: '#dddddd', height: '2000px' }">
          모달 컨텐츠
        </div>
      </div>
    </CommonModal>

    <CommonCodeBlock :language="language" :value="modalCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">Modal - full 타입</h2>
    <p class="guide-description">full 타입 디자인은 모바일에서만 적용됩니다.</p>
    <div class="mb-5 flex gap-1">
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$modal3?.openDialog()"
      >
        풀팝업(모바일전용)
      </CommonButton>

      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$modal4?.openDialog()"
      >
        풀팝업(팝업 body 좌우 여백 없는 것)
      </CommonButton>
    </div>
    <CommonModal ref="$modal3" title="풀 팝업" ok-text="적용" full>
      <div :style="{ background: '#dddddd', height: '500px' }">모달 컨텐츠</div>
    </CommonModal>

    <CommonModal
      ref="$modal4"
      title="풀 팝업(좌우 여백 없는 것)"
      ok-text="적용"
      mobile-bodyull
      full
    >
      <div :style="{ background: '#dddddd', height: '500px' }">모달 컨텐츠</div>
    </CommonModal>

    <CommonCodeBlock :language="language" :value="fullModalCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">Modal - 버튼 커스텀</h2>
    <p class="guide-description">
      커스텀 버튼(모달 기본 제공 버튼 사용하지 않고, 별도 처리)의 디자인은
      유형이 확정되지 않아, 임의로 넣어 둔 디자인 입니다.
    </p>
    <div class="mb-5 flex gap-1">
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="
          () => {
            isCustomFooter = false
            $modal5?.openDialog()
          }
        "
      >
        커스텀푸터(footer hidden)
      </CommonButton>

      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$modal6?.openDialog()"
      >
        커스텀푸터(특정버튼 hidden)
      </CommonButton>

      <CommonButton
        variant="bgcolor"
        size="base"
        @click="
          () => {
            isCustomFooter = true
            $modal5?.openDialog()
          }
        "
      >
        커스텀푸터(모달 기본 제공 버튼 사용하지 않고, 별도 처리)
      </CommonButton>
    </div>

    <CommonModal
      ref="$modal5"
      title="커스텀 푸터"
      :ok-button-props="{ style: { display: 'none' } }"
      :cancel-button-props="{ style: { display: 'none' } }"
      :footer-type="isCustomFooter ? 'custom' : undefined"
    >
      <template #footer>
        <div class="w-full">
          <CommonButton
            variant="bgcolor"
            size="xxl"
            class-name="w-full mb-[8px]"
          >
            로그인
          </CommonButton>
          <CommonButtonArea type="column" size="full">
            <CommonButton size="xxl" variant="border"> button </CommonButton>
            <CommonButton
              size="xxl"
              variant="bgcolor"
              @click="$modal5?.closeDialog()"
            >
              확인
            </CommonButton>
          </CommonButtonArea>
        </div>
      </template>

      <div :style="{ background: '#dddddd', height: '2000px' }">
        모달 컨텐츠
      </div>
    </CommonModal>

    <CommonModal
      ref="$modal6"
      title="커스텀 푸터(특정버튼 hidden)"
      :cancel-button-props="{ style: { display: 'none' } }"
    >
      <div :style="{ background: '#dddddd', height: '2000px' }">
        모달 컨텐츠
      </div>
    </CommonModal>

    <CommonCodeBlock :language="language" :value="customFooterCode" />
  </section>
</template>

<script setup lang="ts">
  import { timeout } from 'ioredis/built/utils'
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonModal from '#components/ui/common-modal.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import { ref } from '#imports'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const $modal1 = ref<InstanceType<typeof CommonModal> | null>(null)
  const $modal2 = ref<InstanceType<typeof CommonModal> | null>(null)
  const $modal3 = ref<InstanceType<typeof CommonModal> | null>(null)
  const $modal4 = ref<InstanceType<typeof CommonModal> | null>(null)
  const $modal5 = ref<InstanceType<typeof CommonModal> | null>(null)
  const $modal6 = ref<InstanceType<typeof CommonModal> | null>(null)

  const isCustomFooter = ref<boolean>(false)
  const isLoading = ref(true)

  const language = 'javascript'
  const modalCode = `
import CommonModal from '#components/ui/common-modal.vue'

const $modal1 = ref<InstanceType<typeof CommonModal> | null>(null)
const $modal2 = ref<InstanceType<typeof CommonModal> | null>(null)


<CommonButton variant="bgcolor" size="base" @click="$modal1?.openDialog()">기본유형</CommonButton>
<CommonButton variant="bgcolor" size="base" @click="() => {
      $modal2?.openDialog()
      timeout(() => {
        isLoading = false
      }, 5000)
    }
  "
>
  컨텐츠 Loading (body에 height 지정)
</CommonButton>

<CommonModal ref="$modal1" title="타이틀">
  <div class="bg-[#ddd] h-[2000px]"> 모달 컨텐츠 </div>
</CommonModal>

<CommonModal ref="$modal2" title="타이틀" full @on-ok="() => (isLoading = true)" @on-cancel="() => (isLoading = true)" >
  <div class="h-[500px]">
    <div v-if="isLoading" class="flex h-full items-center justify-center">
      <CommonImgMedia src="/images/icons/loading.gif" a class-name="size-[50px]" />
    </div>
    <div v-else :style="{ background: '#dddddd', height: '2000px' }"> 모달 컨텐츠 </div>
  </div>
</CommonModal>`

  const fullModalCode = `
import CommonModal from '#components/ui/common-modal.vue'

const $modal3 = ref<InstanceType<typeof CommonModal> | null>(null)
const $modal4 = ref<InstanceType<typeof CommonModal> | null>(null)

<CommonButton variant="bgcolor" size="base" @click="$modal3?.openDialog()">풀팝업(모바일전용)</CommonButton>
<CommonButton variant="bgcolor" size="base" @click="$modal4?.openDialog()">풀팝업(팝업 body 좌우 여백 없는 것)</CommonButton>

<CommonModal ref="$modal3" title="풀 팝업" ok-text="적용" full>
  <div :style="{ background: '#dddddd', height: '500px' }">모달 컨텐츠</div>
</CommonModal>

<CommonModal ref="$modal4" title="풀 팝업(좌우 여백 없는 것)" ok-text="적용" mobile-bodyull full>
      <div :style="{ background: '#dddddd', height: '500px' }">모달 컨텐츠</div>
</CommonModal>`

  const customFooterCode = `/* 커스텀푸터(footer hidden) */
import CommonModal from '#components/ui/common-modal.vue'

const $modal5 = ref<InstanceType<typeof CommonModal> | null>(null)
const $modal6 = ref<InstanceType<typeof CommonModal> | null>(null)

<CommonButton variant="bgcolor" size="base"@click="() => {
      isCustomFooter = false
      $modal5?.openDialog()
    }
  "
>
  커스텀푸터(footer hidden)
</CommonButton>
<CommonButton variant="bgcolor" size="base" @click="$modal6?.openDialog()">커스텀푸터(특정버튼 hidden)</CommonButton>

<CommonButton variant="bgcolor" size="base" @click="() => {
      isCustomFooter = true
      $modal5?.openDialog()
    }
  "
>
  커스텀푸터(모달 기본 제공 버튼 사용하지 않고, 별도 처리)
</CommonButton>

    <CommonModal ref="$modal5" title="커스텀 푸터" :ok-button-props="{ style: { display: 'none' } }" :cancel-button-props="{ style: { display: 'none' } }" :footer-type="isCustomFooter ? 'custom' : undefined">
      <template #footer>
        <div class="w-full">
          <CommonButton variant="bgcolor" size="xxl" class-name="w-full mb-[8px]">로그인</CommonButton>
          <CommonButtonArea type="column" size="full">
            <CommonButton size="xxl" variant="border"> button </CommonButton>
            <CommonButton size="xxl" variant="bgcolor" @click="$modal5?.closeDialog()">확인</CommonButton>
          </CommonButtonArea>
        </div>
      </template>

      <div :style="{ background: '#dddddd', height: '2000px' }">모달 컨텐츠</div>
    </CommonModal>

    <CommonModal ref="$modal6" title="커스텀 푸터(특정버튼 hidden)" :cancel-button-props="{ style: { display: 'none' } }">
      <div :style="{ background: '#dddddd', height: '2000px' }">모달 컨텐츠</div>
    </CommonModal>`
</script>

<style scoped></style>

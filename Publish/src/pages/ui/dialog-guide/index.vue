<template>
  <CommonTitle title="Dialog Guide" />
  <section>
    <h2 class="guide-sub-title">Dialog</h2>
    <div class="mb-5 flex gap-1">
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$dialog1?.openDialog()"
      >
        Alert Type1
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$dialog2?.openDialog()"
      >
        Alert Type2
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="$dialog3?.openDialog()"
      >
        Layer Type
      </CommonButton>
    </div>

    <CommonDialog ref="$dialog1" class-name="pop-alert" :mask-closable="false">
      <p class="body1 text-center">
        아이디 또는 비밀번호가 일치하지 않습니다.
        <br />
        확인 후 입력해 주세요.
      </p>
      <CommonButtonArea class-name="mt-7" type="column" size="full">
        <CommonButton
          variant="bgcolor"
          size="xl"
          @click="$dialog1?.closeDialog()"
        >
          확인
        </CommonButton>
      </CommonButtonArea>
    </CommonDialog>

    <CommonDialog ref="$dialog2" class-name="pop-alert">
      <p class="body1 text-center">
        로그인 5회 오류로 로그인이 제한되었습니다.
        <br />
        비밀번호 찾기 후 재로그인이 가능합니다.
      </p>
      <CommonButtonArea class-name="mt-7" type="column" size="full">
        <CommonButton
          variant="border"
          size="xl"
          @click="$dialog2?.closeDialog()"
        >
          취소
        </CommonButton>
        <CommonButton
          variant="bgcolor"
          size="xl"
          @click="$dialog2?.closeDialog()"
        >
          비밀번호 찾기
        </CommonButton>
      </CommonButtonArea>
    </CommonDialog>

    <CommonDialog
      ref="$dialog3"
      class-name="pop-layer"
      title="타이틀입니다."
      footer-type="custom"
    >
      <p class="body1 text-center">
        아이디 또는 비밀번호가 일치하지 않습니다.
        <br />
        확인 후 입력해 주세요.
      </p>
    </CommonDialog>

    <CommonCodeBlock :language="language" :value="dialogCode" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonDialog from '#components/ui/common-dialog.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import { ref } from '#imports'

  const $dialog1 = ref<InstanceType<typeof CommonDialog> | null>(null)
  const $dialog2 = ref<InstanceType<typeof CommonDialog> | null>(null)
  const $dialog3 = ref<InstanceType<typeof CommonDialog> | null>(null)

  const language = 'javascript'
  const dialogCode = `
import CommonDialog from '#components/ui/common-dialog.vue'

const $dialog1 = ref<InstanceType<typeof CommonDialog> | null>(null)
const $dialog2 = ref<InstanceType<typeof CommonDialog> | null>(null)
const $dialog3 = ref<InstanceType<typeof CommonDialog> | null>(null)

<CommonButton
  variant="bgcolor"
  size="base"
  @click="$dialog1?.openDialog()"
>
  Alert Type1
</CommonButton>
<CommonButton
  variant="bgcolor"
  size="base"
  @click="$dialog2?.openDialog()"
>
  Alert Type2
</CommonButton>
<CommonButton
  variant="bgcolor"
  size="base"
  @click="$dialog3?.openDialog()"
>
  Layer Type
</CommonButton>

<CommonDialog ref="$dialog1">
  <p class="body1 text-center">
    아이디 또는 비밀번호가 일치하지 않습니다.
    <br />
    확인 후 입력해 주세요.
  </p>
  <CommonButtonArea class-name="mt-7" type="column" size="full">
    <CommonButton
      variant="bgcolor"
      size="xl"
      @click="$dialog1?.closeDialog()"
    >
      확인
    </CommonButton>
  </CommonButtonArea>
</CommonDialog>

<CommonDialog ref="$dialog2">
  <p class="body1 text-center">
    로그인 5회 오류로 로그인이 제한되었습니다.
    <br />
    비밀번호 찾기 후 재로그인이 가능합니다.
  </p>
  <CommonButtonArea class-name="mt-7" type="column" size="full">
    <CommonButton
      variant="border"
      size="xl"
      @click="$dialog2?.closeDialog()"
    >
      취소
    </CommonButton>
    <CommonButton
      variant="bgcolor"
      size="xl"
      @click="$dialog2?.closeDialog()"
    >
      비밀번호 찾기
    </CommonButton>
  </CommonButtonArea>
</CommonDialog>

<CommonDialog ref="$dialog3">
  <p class="body1 text-center">
    아이디 또는 비밀번호가 일치하지 않습니다.
    <br />
    확인 후 입력해 주세요.
  </p>
</CommonDialog>`
</script>

<style scoped></style>

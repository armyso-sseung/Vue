<template>
  <a-modal
    transition-name=""
    :open="open"
    :class="className"
    :mask-closable="maskClosable"
    :width="width"
    centered
    :content-style="{
      position: 'relative',
      borderRadius: '0',
      boxShadow: 'none'
    }"
    wrap-class-name="custom-modal"
    @on-ok="handleClickOk"
    @on-cancel="handleClickCancel"
    v-bind="$attrs"
  >
    <template #closeIcon>
      <CommonImgMedia
        src="/images/icons/ico_close18.svg"
        alt="닫기"
        class-name="btn-close size-[18px]"
        @click="closeDialog"
      />
    </template>

    <template #title>
      {{ title }}
    </template>

    <template #footer>
      <CommonButtonArea
        v-if="footerType === 'custom'"
        class-name="mt-7"
        type="column"
        size="full"
      >
        <CommonButton variant="border" size="xl" @click="handleClickCancel"
          >취소</CommonButton
        >
        <CommonButton variant="bgcolor" size="xl" @click="handleClickOk"
          >확인</CommonButton
        >
      </CommonButtonArea>

      <slot v-else name="footer"></slot>
    </template>

    <slot></slot>
  </a-modal>
</template>

<script setup lang="ts">
  import type { DialogEmits, DialogProps } from '~/types/common/component-type'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import { ref } from '#imports'

  const emits = defineEmits<DialogEmits>()
  const open = ref<boolean>(false)
  withDefaults(defineProps<DialogProps>(), {
    title: '',
    className: '',
    footerType: 'default',
    maskClosable: true
  })

  const openDialog = () => {
    open.value = true
    emits('afterOpen')
  }

  const closeDialog = () => {
    open.value = false
    emits('afterClose')
  }

  const handleClickOk = (event: MouseEvent | Event) => {
    closeDialog()
    emits('onOk', event)
  }

  const handleClickCancel = (event: MouseEvent | Event) => {
    closeDialog()
    emits('onCancel', event)
  }

  defineExpose({
    openDialog: () => openDialog(),
    closeDialog: () => closeDialog(),
    open
  })
</script>

<style>
  .custom-modal .ant-modal-content {
    position: relative;
    border-radius: 0;
    box-shadow: none;
  }

  .custom-modal .ant-modal-header {
    text-align: center;
    margin-bottom: 10px;
  }

  .custom-modal .ant-modal-footer {
    margin: 0;
  }
</style>

<template>
  <a-modal
    transition-name=""
    :class="`modal-custom${full ? ' full' : ''}${mobileBodyull ? ' m-body-full' : ''}${mobileBodyull ? ' pc-body-full' : ''}${className ? ' ' + className : ''}`"
    :cancel-text="cancelText"
    :ok-text="okText"
    :open="open"
    centered
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
      <slot name="footer"></slot>
    </template>

    <slot></slot>
  </a-modal>
</template>

<script setup lang="ts">
  import type {
    CommonModalProps,
    CommonModalEmits
  } from '~/types/common/component-type'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import { ref } from '#imports'

  const open = ref(false)
  const emits = defineEmits<CommonModalEmits>()
  withDefaults(defineProps<CommonModalProps>(), {
    title: '',
    cancelText: '취소',
    okText: '확인'
  })

  const openDialog = () => {
    open.value = true
    handleModalEvent()
    emits('afterOpen')
  }

  const closeDialog = () => {
    open.value = false
    handleModalEvent()
    emits('afterClose')
  }

  const handleClickOk = (event: MouseEvent) => {
    closeDialog()
    emits('onOk', event)
  }

  const handleClickCancel = (event: MouseEvent) => {
    closeDialog()
    emits('onCancel', event)
  }
  const scrollPosition = ref<number>(0)
  const handleModalEvent = () => {
    let openModalCount = 0
    // 열리는 시점에 현재 열린 모달갯수 확인
    document.querySelectorAll<HTMLElement>('.ant-modal-wrap').forEach((el) => {
      if (el.style.display !== 'none') {
        openModalCount++
      }
    })

    if (openModalCount < 2) {
      const body = document.body
      if (open.value) {
        scrollPosition.value = window.scrollY
        body.style.overflow = 'hidden'
        body.style.top = `-${scrollPosition.value}px`
      } else {
        const body = document.body
        body.style.removeProperty('overflow')
        body.style.removeProperty('top')
        window.scrollTo(0, scrollPosition.value)
      }
    }
  }

  defineExpose({
    openDialog: () => openDialog(),
    closeDialog: () => closeDialog(),
    open
  })
</script>

<style scoped></style>

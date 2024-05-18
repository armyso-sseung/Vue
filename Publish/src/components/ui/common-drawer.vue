<template>
  <a-drawer
    :open="open"
    :mask="mask"
    :mask-closable="maskClosable"
    :closable="closable"
    :class="cn(DrawerVariants({ mobileBodyull, pcBodyFit }))"
    :placement="placement"
    :width="width"
    height="auto"
    @close="closeDrawer"
    v-bind="$attrs"
  >
    <template #closeIcon>
      <CommonImgMedia
        src="/images/icons/ico_close18.svg"
        alt="닫기"
        class-name="btn-close size-[18px]"
      />
    </template>

    <template #title>
      {{ title }}
    </template>

    <template #footer>
      <slot name="footer"></slot>
    </template>

    <slot></slot>
  </a-drawer>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import { DrawerVariants } from '~/lib/common/ui/components/drawer-variables'
  import type {
    CommonDrawerEmits,
    CommonDrawerProps
  } from '~/types/common/component-type'
  import { ref } from '#imports'
  import CommonImgMedia from '#components/ui/common-img-media.vue'

  const emits = defineEmits<CommonDrawerEmits>()
  withDefaults(defineProps<CommonDrawerProps>(), {
    placement: 'bottom',
    closable: true,
    mask: true,
    maskClosable: true
  })

  const open = ref<boolean>(false)
  const scrollPosition = ref<number>(0)

  const openDrawer = () => {
    open.value = true
    handleDrawerEvent()
  }

  const closeDrawer = (event?: MouseEvent) => {
    open.value = false
    handleDrawerEvent()
    emits('close', event)
  }

  const handleDrawerEvent = () => {
    const body = document.body

    if (open.value) {
      scrollPosition.value = window.scrollY
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${scrollPosition.value}px`
      body.style.left = `0px`
      body.style.right = `0px`
    } else {
      body.style.removeProperty('overflow')
      body.style.removeProperty('position')
      body.style.removeProperty('top')
      body.style.removeProperty('left')
      body.style.removeProperty('right')
      window.scrollTo(0, scrollPosition.value)
    }
  }

  defineExpose({
    openDrawer: () => openDrawer(),
    closeDrawer: () => closeDrawer(),
    open
  })
</script>

<style scoped></style>

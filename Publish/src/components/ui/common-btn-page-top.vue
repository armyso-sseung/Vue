<template>
  <div v-if="showButton" class="btn-page-top fixed bottom-16 right-6">
    <CommonButton
      class-name="text-center size-10 bg-white rounded-full"
      @click="scrollToTop"
    >
      <CommonImgMedia
        src="/images/icons/ico_arrow_top20.svg"
        alt="상단으로 이동"
        class-name="mx-auto size-5"
      />
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
  import CommonButton from '#components/ui/common-button.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import {onMounted, onUnmounted, ref} from '#imports'

  const showButton = ref<boolean>(false)

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleShowButton = () => {
    showButton.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleShowButton)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleShowButton)
  })
</script>

<style scoped></style>

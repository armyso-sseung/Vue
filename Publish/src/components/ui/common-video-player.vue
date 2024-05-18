<template>
  <div
    class="video-container absolute top-0 size-full"
    :style="{ background: 'rgba(0, 0, 0, 0.05)' }"
  >
    <video ref="myVideo" :controls="controls" :class="videoClassName">
      <source :src="source" type="video/mp4" />
    </video>

    <!-- controls 여부로 dim 출력여부 제어 필요 -->
    <div
      class="dim"
      :style="{ top: '50%', transform: 'translateY(-50%)', background: 'none' }"
    >
      <button
        class="play-control"
        @click="() => isPlayable && handleVideoClick()"
      >
        <CommonImgMedia
          :src="`/images/icons/${isVideoStop ? 'play_line.svg' : 'stop_line.svg'}`"
          :alt="isVideoStop ? 'play' : 'stop'"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from '#imports'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import type { VideoPlayerProps } from '~/types/common/component-type'

  withDefaults(defineProps<VideoPlayerProps>(), {
    videoClassName: 'thumb-item',
    controls: true,
    isPlayable: true
  })

  const isVideoStop = ref(true)
  const myVideo = ref<HTMLVideoElement | null>(null)

  onMounted(() => {
    if (myVideo.value) {
      myVideo.value.addEventListener('play', () => {
        isVideoStop.value = false
      })
      myVideo.value.addEventListener('pause', () => {
        isVideoStop.value = true
      })
    }
  })

  const handleVideoClick = () => {
    if (myVideo.value) {
      if (isVideoStop.value) {
        myVideo.value.play()
      } else {
        myVideo.value.pause()
      }
    }
  }
</script>

<style scoped></style>

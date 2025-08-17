<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  loopDuration: {
    default: 1
  },
  loop: {
    type: Boolean,
    default: false
  },
  delay: {
    default: 0
  }
})

const videoRef = ref<HTMLVideoElement | null>(null)
let interval: ReturnType<typeof setInterval> | null = null
let hasPlayedOnce = false

onMounted(() => {
  if (props.loop) {
    const video = videoRef.value
    if (!video) return

    video.addEventListener('ended', () => {
      if (!hasPlayedOnce) {
        hasPlayedOnce = true

        // Запускаем ручное зацикливание последних 5 секунд
        const loopStart = Math.max(0, video.duration - props.loopDuration)
        video.currentTime = loopStart
        video.play()

        interval = setInterval(() => {
          if (video.currentTime >= video.duration - 0.05) {
            video.currentTime = loopStart
            video.play()
          }
        }, 100)
      }
    })
  }
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <video
    ref="videoRef"
    class="background-video"
    autoplay
    muted
    playsinline
  >
    <source :src="src" type="video/mp4" />
    Ваш браузер не поддерживает фоновое видео.
  </video>
</template>

<style scoped>
.background-video {
  position: absolute;
  bottom: 50px;
  top: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

</style>
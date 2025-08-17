<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundVideo from '~/components/ui/BackgroundVideo.vue'

gsap.registerPlugin(ScrollTrigger)

</script>


<template>
  <section class="welcome" ref="container">
      <BackgroundVideo src="/assets/videos/backgrounds/waterfall_v2.mp4" :loop="true" :loop-duration="3" :delay="1"/>
  </section>
</template>


<style scoped>
.welcome {
  min-height: 100vh;
}
</style>
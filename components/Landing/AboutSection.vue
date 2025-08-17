<script setup lang="ts">

import BackgroundVideo from "~/components/ui/BackgroundVideo.vue";
</script>

<template>
  <section class="greentrio fade-up about">

    <div class="container">
      <div class="perspective-container">
        <div class="liquid-wrap">
          <div class="liquid-another">
            GREENTRIO — ЭТО
          </div>
        </div>
      </div>
    </div>

    <BackgroundVideo src="/assets/videos/backgrounds/hands.MOV"/>
  </section>
</template>

<style lang="scss" scoped>
.greentrio {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: -10;

  .container {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
  }
}

.perspective-container {
  perspective: 1000px;
}

.liquid-wrap {
  position: relative;
  background: rgba(246, 245, 245, 0.33);
  backdrop-filter: blur(8px);
  width: 850px;
  max-height: 550px;
  border-radius: 80px;
  overflow: hidden;
  color: #066E31;
  font-size: 48px;
  font-family: Gilroy, sans-serif;
  font-weight: 500;
}

.liquid-another {
  padding: 48px;
  width: 600px;
  height: 500px;
}
</style>
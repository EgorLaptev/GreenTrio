<script setup lang="ts">

import BackgroundVideo from "~/components/ui/BackgroundVideo.vue";
</script>

<template>
  <section class="rock">
    <div class="container">

      <div class="perspective-container">
        <div class="liquid-wrap">
          <div class="liquid-another">

          </div>
        </div>
      </div>

    </div>

    <BackgroundVideo src="/assets/videos/backgrounds/rock.mp4"/>
  </section>
</template>

<style lang="scss" scoped>

.rock {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: -10;

  .container {
    display: flex;
    justify-content: end;
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

  width: 850px;
  height: 650px;
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
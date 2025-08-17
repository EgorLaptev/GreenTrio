<script setup lang="ts">

</script>

<template>
  <section class="man">

    <div class="container">
      <div class="perspective-container">
        <div class="liquid-wrap">
          <div class="liquid-another">
            <img src="/assets/images/lords-care-cream.svg" alt="" class="man__svg-text">
            <img src="/assets/images/man-molec.svg" alt="" class="man__molec">
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.man {
  background: url("/assets/images/backgrounds/man.png") 50% 50% no-repeat;
  background-size: cover;
  z-index: -1;

  &__svg-text {
    max-width: 50%;
  }

  &__molec {
    position: absolute;
    right: -10%;
    top: -10%;
    width: 50%;
  }

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
  background: rgba(65, 52, 32, 0.71);
  backdrop-filter: blur(8px);
  max-width: 650px;
  max-height: 450px;
  border-radius: 32px;
  overflow: hidden;
}

.liquid-another {
  padding: 32px;
  width: 600px;
  height: 500px;
}

</style>
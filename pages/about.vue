<script setup lang="ts">

import LogoProgress from "~/components/ui/LogoProgress.vue";
import Formulas from "~/components/Landing/Formulas.vue";
</script>

<template>

  <section class="hero">
    <img src="/assets/images/about.png" alt="" class="hero__image">
    <div class="hero__content">
      <p class="hero__text">
        Каждый продукт
        <span class="hero__greentrio">
          GREENTRIO
        </span>
        создаётся с одной целью — достичь результата. Мы не даем громких обещаний, мы сосредоточены на том, чтобы с
        первых дней пользования вы могли увидеть ощутимую разницу.
      </p>
    </div>
  </section>

  <section class="philosophy">
    <div class="philosophy__container">
      <div class="philosophy__content">
        В основе нашей философии — честность, скромность и эффективность. Мы уверены, что именно эти ценности позволяют
        нам создавать косметику, которая приносит реальный результат и удовлетворяет даже самых требовательных клиентов.
      </div>
      <div class="philosophy__image-box">
        <img src="/assets/images/about.png" alt="" class="philosophy__image">
      </div>
    </div>
  </section>

  <section class="about">
    <div class="about__container">
      <div class="about__image">
        <span class="about__text">Наш внешний вид — это отражение мыслей, привычек и состояний.</span>
        <img src="/assets/images/about.png" alt="">
      </div>
      <div class="about__content">То, как мы ухаживаем за собой, — не просто уход, это проявление уважения к себе и к окружающему миру. Мы создаём продукты, которые поддерживают это естественное стремление к гармонии.</div>
    </div>
  </section>

  <formulas/>

</template>

<style lang="scss" scoped>

.hero,
.philosophy,
.about {
  height: 100vh;
}

.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  &__image {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    border-radius: 32px;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    font-family: Gilroy, sans-serif;
    font-size: 24px;
    padding: 46px;
    font-weight: 300;
  }

  &__greentrio {
    font-family: DrukWideBold, sans-serif;
    font-size: 28px;
    color: #066E31;
    padding: 0 8px;
  }
}

.philosophy {

  &__container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 150px;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: Gilroy, sans-serif;
    font-weight: 300;
  }

  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 32px;
  }

  &__image-box {
    padding: 40px;
  }
}

.about {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    justify-content: center;
    align-items: stretch;
    gap: 100px;
    height: 100%;
    width: 100%;
  }

  &__image {
    position: relative;
    align-self: stretch;
    height: 100%;
    grid-column: 1/3;

    padding: 100px 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: 32px;
      object-position: 50% 100%;
    }
  }

  &__content {
    grid-column: 3/-1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 32px;
    line-height: 1.5em ;
    padding-right: 120px;
  }

  &__text {
    position: absolute;
    left: 48%;
    top: 48%;
    transform: translate(-50%, -50%);
    font-weight: 300;
    font-size: 26px;
    color: white;
    max-width: 320px;
  }
}

</style>
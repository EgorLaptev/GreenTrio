<script setup lang="ts">
import LogoProgress from "~/components/ui/LogoProgress.vue";
import FormulasSection from "~/components/Landing/Formulas.vue";
</script>

<template>
  <main class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="/assets/images/about.png" alt="О компании GreenTrio" class="hero-section__image">
      <div class="hero-section__content">
        <p class="hero-section__text">
          Каждый продукт
          <span class="hero-section__brand">GREENTRIO</span>
          создаётся с одной целью — достичь результата. Мы не даем громких обещаний, мы сосредоточены на том, чтобы с
          первых дней пользования вы могли увидеть ощутимую разницу.
        </p>
      </div>
    </section>

    <!-- Company Philosophy -->
    <section class="philosophy-section">
      <div class="philosophy-section__container">
        <div class="philosophy-section__content">
          В основе нашей философии — честность, скромность и эффективность. Мы уверены, что именно эти ценности позволяют
          нам создавать косметику, которая приносит реальный результат и удовлетворяет даже самых требовательных клиентов.
        </div>
        <div class="philosophy-section__image-box">
          <img src="/assets/images/about.png" alt="Философия компании" class="philosophy-section__image">
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="values-section">
      <div class="values-section__container">
        <div class="values-section__image">
          <span class="values-section__text">Наш внешний вид — это отражение мыслей, привычек и состояний.</span>
          <img src="/assets/images/about.png" alt="Ценности компании">
        </div>
        <div class="values-section__content">
          То, как мы ухаживаем за собой, — не просто уход, это проявление уважения к себе и к окружающему миру. 
          Мы создаём продукты, которые поддерживают это естественное стремление к гармонии.
        </div>
      </div>
    </section>

    <!-- Product Formulas -->
    <FormulasSection />
  </main>
</template>

<style lang="scss" scoped>
.about-page {
  background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%);
}

.hero-section,
.philosophy-section,
.values-section {
  height: 100vh;
}

.hero-section {
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
    line-height: 1.6;
  }

  &__brand {
    font-family: DrukWideBold, sans-serif;
    font-size: 28px;
    color: #066E31;
    padding: 0 8px;
  }
}

.philosophy-section {
  &__container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 60px;
  }

  &__content {
    font-family: Gilroy, sans-serif;
    font-size: 24px;
    line-height: 1.6;
    font-weight: 300;
    display: flex;
    align-items: center;
  }

  &__image-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    height: 80%;
    width: 80%;
    object-fit: cover;
    border-radius: 32px;
  }
}

.values-section {
  &__container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 60px;
  }

  &__image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Gilroy, sans-serif;
    font-size: 24px;
    line-height: 1.6;
    font-weight: 300;
    text-align: center;
    color: white;
    z-index: 2;
    max-width: 80%;
  }

  &__image img {
    height: 80%;
    width: 80%;
    object-fit: cover;
    border-radius: 32px;
    filter: brightness(0.7);
  }

  &__content {
    font-family: Gilroy, sans-serif;
    font-size: 24px;
    line-height: 1.6;
    font-weight: 300;
    display: flex;
    align-items: center;
  }
}
</style>
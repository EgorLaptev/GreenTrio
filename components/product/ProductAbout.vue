<script setup lang="ts">

</script>

<template>
  <section class="evening-glow">
    <div class="evening-glow__image">
      <img src="/assets/images/evening-glow-products.png" alt="Evening Glow набор" />
    </div>
    <div class="evening-glow__content">
      <h2 class="evening-glow__title">EVENING GLOW</h2>
      <p class="evening-glow__text">
        это ночной уход с максимальной концентрацией активных компонентов для восстановления и омоложения кожи.
      </p>
      <p class="evening-glow__text">
        Каждый шаг усиливает предыдущий, а вместе они создают ритуал, который работает в синергии с естественными ночными процессами кожи.
      </p>
      <p class="evening-glow__text">
        Включает пенку, сыворотку, крем и тонер, которые работают синергично: очищение, питание, восстановление и защита кожи в ночное время.
      </p>
      <button class="evening-glow__button">подробнее</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.evening-glow {
  display: flex;
  align-items: start;
  gap: 80px;
  padding: 80px;
  border-radius: 20px;

  &__image {
    flex: 1;
    img {
      width: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  &__content {
    flex: 1;
    color: #3e2b20;
  }

  &__title {
    font-size: 48px;
    font-weight: 600;
    color: #8a6aa9;
    margin: 0;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 24px;
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 16px;
  }

  &__button {
    background: #fff6e5;
    padding: 30px 120px;
    margin-top: 40px;
    border-radius: 400px;
    border: none;
    font-family: Gilroy, sans-serif;
    font-size: 32px;
    font-weight: 200;
    cursor: pointer;
    transition: background 0.3s;


    &:hover {
      background: #ffefc9;
    }
  }
}
</style>

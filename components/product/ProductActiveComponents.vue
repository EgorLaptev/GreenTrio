<script setup lang="ts">
import IngridientsCarousel from "~/components/product/IngridientsCarousel.vue";
</script>

<template>
  <section class="ingredients">


    <div class="ingredients__left">
      <h3 class="ingredients__subtitle">Активные компоненты</h3>
      <IngridientsCarousel/>
    </div>

    <div class="ingredients__right">
      <h3 class="ingredients__subtitle">Принцип действия</h3>
      <div class="ingredients__action">
        <p class="ingredients__question">Почему сыворотка умная?</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ingredients {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 150px 80px;
  border-radius: 20px;
  height: 100vh;

  &__left, &__right {
    flex: 1;
  }

  &__subtitle {
    font-size: 48px;
    font-weight: 300;
    color: #1d6b2b;
    margin-bottom: 60px;
  }

  &__action {
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__question {
    font-size: 100px;
    font-weight: 600;
    color: #1d6b2b;
    line-height: 1;
  }
}
</style>

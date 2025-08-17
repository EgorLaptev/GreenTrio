<script setup lang="ts">


import HeaderProductCard from "~/components/ui/HeaderProductCard.vue";
import ProductCard from "~/components/ui/ProductCard.vue";

const products = ref([
  {
    image: '/assets/images/goods/calming-care.png',
    name: 'night-time care serum',
    description: 'Лифтинг-средство для ночного омоложения',
    price: '1600'
  },
  {
    image: '/assets/images/goods/calming-care.png',
    name: 'the foam',
    description: 'Пенка для умывания и бритья',
    price: '1600'
  },
  {
    image: '/assets/images/goods/calming-care.png',
    name: 'anti-acne serum',
    description: 'Сыворотка точечного действия против воспалений и акне',
    price: '1600'
  },
  {
    image: '/assets/images/goods/calming-care.png',
    name: 'calming care serum',
    description: 'Сыворотка для чувствительной кожи: мягкость и комфорт',
    price: '1600'
  },
])

</script>

<template>
  <section class="product-suggests">
    <div class="container">
      <h3 class="product-suggests__title">Дополни свой уход</h3>
      <div class="product-suggests__grid">
        <ProductCard v-for="product in products" :product="product" :color="'#807668'"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-suggests {

  &__title {
    font-weight: 300;
    color: #066E31;
    font-size: 38px;
    margin-bottom: 60px;
  }

  &__grid {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
    gap: 32px;
  }
}
</style>
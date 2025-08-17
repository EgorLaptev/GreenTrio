<script setup lang="ts">

import ProductCard from "~/components/ui/ProductCard.vue";

const products = ref([
  { image: '/assets/images/goods/calming-care.png', name: 'night-time care serum', description: 'Лифтинг-средство для ночного омоложения', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'the foam', description: 'Пенка для умывания и бритья', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'anti-acne serum', description: 'Сыворотка точечного действия против воспалений и акне', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'calming care serum', description: 'Сыворотка для чувствительной кожи: мягкость и комфорт', price: '1600' },
])


</script>

<template>
<div class="products-grid">
    <ProductCard v-for="product in products" :product="product"/>
</div>
</template>

<style lang="scss" scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
</style>
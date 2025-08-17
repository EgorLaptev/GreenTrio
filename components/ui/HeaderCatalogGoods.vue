<script setup lang="ts">


import HeaderProductCard from "~/components/ui/HeaderProductCard.vue";

const products = ref([
  { image: '/assets/images/goods/calming-care.png', name: 'night-time care serum', description: 'Лифтинг-средство для ночного омоложения', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'the foam', description: 'Пенка для умывания и бритья', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'anti-acne serum', description: 'Сыворотка точечного действия против воспалений и акне', price: '1600' },
  { image: '/assets/images/goods/calming-care.png', name: 'calming care serum', description: 'Сыворотка для чувствительной кожи: мягкость и комфорт', price: '1600' },
])

</script>

<template>
  <div class="header-catalog-goods">
    <HeaderProductCard v-for="product in products" :product="product"/>
  </div>
</template>

<style lang="scss" scoped>
.header-catalog-goods {
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  padding: 12px 56px 32px 56px;
  gap: 32px;
}
</style>
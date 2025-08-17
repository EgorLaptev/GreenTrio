<script setup lang="ts">
import FilterBar from "~/components/ui/FilterBar.vue";
import ProductsGrid from "~/components/ui/ProductsGrid.vue";
</script>

<template>
  <main class="catalog-page">
    <div class="container">
      <FilterBar />
      <ProductsGrid />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.catalog-page {
  background: url("/assets/images/backgrounds/catalog.png") no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding-top: 130px;

  .container {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
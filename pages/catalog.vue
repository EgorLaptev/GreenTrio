<script setup lang="ts">

import FilterBar from "~/components/ui/FilterBar.vue";
import ProductsGrid from "~/components/ui/ProductsGrid.vue";
</script>

<template>
<section class="catalog">
  <div class="container">
    <FilterBar/>
    <ProductsGrid/>
  </div>
</section>
</template>

<style lang="scss" scoped>
.catalog {
  background: url("/assets/images/backgrounds/catalog.png") no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 102vh;
  padding-top: 130px;

  .container {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

</style>
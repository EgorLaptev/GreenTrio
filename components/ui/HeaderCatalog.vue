<script setup lang="ts">

import HeaderCatalogFilters from "~/components/ui/HeaderCatalogFilters.vue";
import HeaderCatalogGoods from "~/components/ui/HeaderCatalogGoods.vue";
</script>

<template>
<div class="header-catalog">
  <HeaderCatalogFilters/>
  <HeaderCatalogGoods/>
</div>
</template>

<style scoped>
.header-catalog {
  padding-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
}
</style>
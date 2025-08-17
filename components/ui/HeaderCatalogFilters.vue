<script setup lang="ts">

</script>

<template>
<div class="header-catalog-filters">
  <button class="header-catalog-filters__button">
    Лицо
  </button>
  <button class="header-catalog-filters__button">
    Тело
  </button>
  <button class="header-catalog-filters__button">
    Волосы
  </button>
  <button class="header-catalog-filters__button">
    Наборы
  </button>
  <button class="header-catalog-filters__button">
    Все продукты
  </button>
</div>
</template>

<style lang="scss" scoped>
.header-catalog-filters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 200px));
  gap: 12px;
  padding: 0 56px;

  &__button {
    padding: 12px;
    max-width: 200px;

    text-align: center;
    font-size: 20px;
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;

    border-radius: 50px;
    border: none;


    background: #7F7667;
    color: #EDDDC6;

    transition: color, background-color .3s;
    
    &_active,
    &:hover {
      color: #7F7667;
      background: #EDDDC6;
    }
  }
}
</style>
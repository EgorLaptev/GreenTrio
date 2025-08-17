<script setup lang="ts">
defineProps({
  product: {
    type: Object
  },
  color: {
    type: String,
    default: '#F4E3B3'
  }
})
</script>

<template>
  <div class="product-card">
    <div class="product-card__inner">
      <!-- Front Side -->
      <div class="product-card__side product-card__front">
        <img :src="product?.image" alt="" class="product-card__img">
        <div class="product-card__info">
          <h3 class="product-card__name">{{ product?.name }}</h3>
          <p class="product-card__desc">{{ product?.description }}</p>
        </div>
      </div>
      <!-- Back Side -->
      <div class="product-card__side product-card__back">
        <div class="product-card__info">
          <h3 class="product-card__name">{{ product?.name }}</h3>

          <p class="product-card__desc">{{ product?.longDescription || 'Умная безводная сыворотка с максимальной концентрацией Бетулинсодержащего экстракта бересты 5% для ежедневного лучшего результата омоложения - свежий цвет лица, выравнивание рельефа кожи, лифтинг эффект.  Сыворотка питает и увлажняет кожу, восстанавливает липидный барьер, повышает регенерацию, стимулирует рост молодых клеток эпидермиса.  Аромат: Цветочные ноты Гардении, Жасмина, Лаванды, травяные ноты. Аромат расслабляет, настраивает на отдых и спокойный сон.' }}</p>
        </div>
        <div class="product-card__bottom">
          <span class="product-card__price">{{ product?.price }}</span>
          <button class="product-card__cart">
            <img src="/assets/icons/shop.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  max-width: 320px;
  height: 520px; // задаём фиксированную высоту
  perspective: 1000px;

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover &__inner {
    transform: rotateY(180deg);
  }

  &__side {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, .2);
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
  }

  &__front {
    background-color: rgba(244, 227, 179, 0.23);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0;
  }

  &__back {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

    backdrop-filter: blur(10px);
    background-color: rgba(244, 227, 179, 0.23);
    transform: rotateY(180deg);
    padding: 24px 0;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
  }

  &__price {
    color: #807668;
    font-weight: 300;
    font-size: 18px;
    &::after {
      content: '₽';
    }
  }

  &__cart {
    height: 30px;
    background: transparent;
    border: none;
    img {
      height: 100%;
    }
  }

  &__info {
    padding: 12px 24px;
    color: #807668;
  }

  &__img {
    padding: 42px;
    height: 300px;
    object-fit: contain;
  }


  &__name {
    font-size: 20px;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &__desc {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
  }
}
</style>

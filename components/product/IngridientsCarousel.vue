<script setup lang="ts">
const ingredients = [
  {
    id: 1,
    name: 'БЕТУЛИН',
    image: '/assets/images/chemical/maslo.png',
    alt: 'Бетулин',
    description: 'природный компонент из берёсты, который восстанавливает, защищает и омолаживает кожу.'
  },
  {
    id: 2,
    name: 'МАСЛО МИНДАЛЯ',
    image: '/assets/images/chemical/betulin.png',
    alt: 'Масло миндаля',
    description: 'богатый источник нутриентов для здоровья кожи'
  },
  {
    id: 3,
    name: 'ЭКСТРАКТ ЯГОД',
    image: '/assets/images/chemical/yagoda.png',
    alt: 'Экстракт ягод',
    description: 'натуральный антиоксидант для сияния и молодости кожи'
  },
  {
    id: 4,
    name: 'ЭКСТРАКТ ЯГОД',
    image: '/assets/images/chemical/yagoda.png',
    alt: 'Экстракт ягод',
    description: 'натуральный антиоксидант для сияния и молодости кожи'
  }
];

// Группируем ингредиенты по 2 для показа в слайдере
const groupedIngredients: typeof ingredients[] = [];
for (let i = 0; i < ingredients.length; i += 2) {
  groupedIngredients.push(ingredients.slice(i, i + 2));
}
</script>

<template>
  <UCarousel 
    :items="groupedIngredients" 
    dots 
    arrows 
    class="w-full"
  >
    <template #default="{ item: ingredientPair }">
      <div class="ingredients-carousel__slide">
        <div 
          v-for="ingredient in ingredientPair" 
          :key="ingredient.id"
          class="ingredients-carousel__ingredient"
        >
          <img :src="ingredient.image" :alt="ingredient.alt" />
          <h4 class="ingredients-carousel__ingredient-title">{{ ingredient.name }}</h4>
          <p class="ingredients-carousel__ingredient-text">
            {{ ingredient.description }}
          </p>
        </div>
      </div>
    </template>
  </UCarousel>
</template>

<style lang="scss" scoped>
.ingredients-carousel {
  &__slide {
    display: flex;
    gap: 20px;
    height: 100%;
  }

  &__ingredient {
    flex: 1;
    text-align: center;

    img {
      width: 100%;
      height: 400px;
      border-radius: 32px;
      object-fit: cover;
      border: 8px solid white;
    }
  }

  &__ingredient-title {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin: 20px 0 10px 0;
    color: #807668;
  }

  &__ingredient-text {
    font-size: 18px;
    text-align: left;
    padding: 0 16px;
    color: #807668;
    line-height: 1.4;
    font-weight: 300;
  }
}

// Кастомные стили для UCarousel
:deep(.u-carousel) {
  .u-carousel__container {
    border-radius: 16px;
  }
  
  .u-carousel__wrapper {
    border-radius: 16px;
  }
  
  .u-carousel__item {
    border-radius: 16px;
  }
}

:deep(.u-carousel__prev),
:deep(.u-carousel__next) {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #1d6b2b;
  color: #1d6b2b;
  
  &:hover {
    background: #1d6b2b;
    color: white;
  }
}

// Альтернативный способ стилизации точек
:deep(.u-carousel__indicators) {
  .u-carousel__indicator {
    background: #1d6b2b !important;
    
    &--active {
      background: #1d6b2b !important;
      transform: scale(1.2);
    }
  }
}

// Глобальные стили для точек
:global(.u-carousel__indicators .u-carousel__indicator) {
  background: #1d6b2b !important;
}

:global(.u-carousel__indicators .u-carousel__indicator--active) {
  background: #1d6b2b !important;
  transform: scale(1.2);
}
</style>



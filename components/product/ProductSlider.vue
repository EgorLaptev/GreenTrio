<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

// Стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];

const ingredients = [
  {
    img: '/assets/images/chemical/maslo.png',
    title: 'БЕТУЛИН',
    text: 'природный компонент из берёсты, который восстанавливает, защищает и омолаживает кожу.',
  },
  {
    img: '/assets/images/chemical/betulin.png',
    title: 'МАСЛО МИНДАЛЯ',
    text: 'богатый источник нутриентов для здоровья кожи',
  },
  {
    img: '/assets/images/chemical/maslo.png',
    title: 'ВИТАМИН E',
    text: 'мощный антиоксидант для защиты клеток кожи',
  },
];
</script>

<template>
  <div class="smart-serum__left">
    <h3 class="smart-serum__subtitle">Активные компоненты</h3>
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        768: { slidesPerView: 2 }
      }"
      class="smart-serum__slider"
    >
      <SwiperSlide
        v-for="(item, index) in ingredients"
        :key="index"
        class="smart-serum__ingredient"
      >
        <img :src="item.img" :alt="item.title" />
        <h4 class="smart-serum__ingredient-title">{{ item.title }}</h4>
        <p class="smart-serum__ingredient-text">{{ item.text }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.smart-serum {
  &__left {
    max-width: 600px;
    margin: auto;
  }

  &__subtitle {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  &__slider {
    .swiper-button-next,
    .swiper-button-prev {
      color: #8a6aa9;
      transition: 0.3s;
      &:hover {
        color: #5d4b77;
      }
    }
    .swiper-pagination-bullet {
      background: #d2b8f0;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #8a6aa9;
    }
  }

  &__ingredient {
    background: #f9f5f0;
    border-radius: 12px;
    padding: 20px;
    text-align: center;

    img {
      max-width: 80px;
      margin-bottom: 15px;
    }
  }

  &__ingredient-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #8a6aa9;
  }

  &__ingredient-text {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>

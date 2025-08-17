<script setup lang="ts">

import {onMounted} from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const grid = document.querySelector('.formulas__grid') as HTMLElement
  const wrap = document.querySelector('.formulas__wrap') as HTMLElement
  const container = document.querySelector('.formulas__content') as HTMLElement
  const wrapper = document.querySelector('.formulas') as HTMLElement

  if (!grid || !container || !wrapper) return

  const scrollDistance = wrap.scrollWidth

  if (scrollDistance <= 0) return

  gsap.to(grid, {
    x: -(300-32)*3,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      end: `+=1000`, // длина скролла = длина анимации
      scrub: true,
      pin: true,
    },
  })
})


</script>

<template>
  <div class="formulas">
    <div class="container">
      <h3 class="formulas__title">Внутри каждой формулы</h3>
      <div class="formulas__content">
        <p class="formulas__subtitle">Каждый <span class="formulas_bold">GREENTRIO</span> продукт создан на основе
          активов
          с доказанной эффективностью и выверенной концентрацией</p>
        <div class="formulas__wrap">


          <div class="formulas__grid">
            <div class="chemical">
              <img src="/assets/images/chemical/betulin.png" alt="" class="chemical__image">
              <div class="chemical__bottom">
                <div class="chemical__decor"></div>
                <p class="chemical__name">Бетулин</p>
                <div class="chemical__decor"></div>
              </div>
            </div>
            <div class="chemical">
              <img src="/assets/images/chemical/maslo.png" alt="" class="chemical__image">
              <div class="chemical__bottom">
                <div class="chemical__decor"></div>
                <p class="chemical__name">Масло</p>
                <div class="chemical__decor"></div>
              </div>
            </div>
            <div class="chemical">
              <img src="/assets/images/chemical/yagoda.png" alt="" class="chemical__image">
              <div class="chemical__bottom">
                <div class="chemical__decor"></div>
                <p class="chemical__name">Ягоды</p>
                <div class="chemical__decor"></div>
              </div>
            </div>
            <div class="chemical">
              <img src="/assets/images/chemical/zaza.png" alt="" class="chemical__image">
              <div class="chemical__bottom">
                <div class="chemical__decor"></div>
                <p class="chemical__name">Заза</p>
                <div class="chemical__decor"></div>
              </div>
            </div>
            <div class="chemical">
              <img src="/assets/images/chemical/semki.png" alt="" class="chemical__image">
              <div class="chemical__bottom">
                <div class="chemical__decor"></div>
                <p class="chemical__name">Семки</p>
                <div class="chemical__decor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img src="/assets/images/trash/chemical-1.png" alt="" class="formulas__bg_1">
    <img src="/assets/images/trash/chemical-2.png" alt="" class="formulas__bg_2">

  </div>
</template>

<style lang="scss" scoped>

.formulas {
  position: relative;
  padding: 80px 0 240px 0;
  background: transparent;
  color: #807668;

  &__title {
    font-size: 32px;
    font-weight: 500;
  }

  &__subtitle {
    font-size: 28px;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }

  &_bold {
    font-weight: 700;
    font-size: 26px;
  }

  &__content {
    padding-top: 48px;
    display: grid;
    gap: 80px;
    grid-template-columns: minmax(400px, 1fr) 1fr;
    overflow: hidden;
  }

  &__wrap {
    padding: 0 2px;
    overflow-x: scroll;
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE/Edge
  }

  &__wrap::-webkit-scrollbar {
    display: none;                // Chrome/Safari
  }

  &__grid {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    will-change: transform;
    width: max-content;
    overflow: hidden;
  }

  .chemical {
    width: 100% ;

    &__image {
      height: 300px;
      width: 100%;
      border: 6px solid white;
      border-radius: 32px;
    }

    &__bottom {
      padding-top: 24px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
    
    &__decor {
      width: 100%;
      height: 1px;
      background: #807668;
    }

    &__name {
      font-size: 24px;
      text-align: center;
      font-weight: 500;
      color: #807668;
    }
  }

  &__bg {
    &_1 {
      position: absolute;
      width: 180px;
      left: 10%;
      bottom: 0;
    }

    &_2 {
      width: 150px;
      position: absolute;
      left: 60%;
      bottom: 0;
    }
  }
}

</style>
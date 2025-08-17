<script setup lang="ts">
import {ref, onMounted} from 'vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const trackedSection = ref<HTMLElement | null>(null)
const about = ref<HTMLElement | null>(null)
const tabs = ref<HTMLElement | null>(null)
const tabsContent = ref<HTMLElement | null>(null)

const activeTab = ref('desc')
const showTabsContent = ref(true)

function openTab(tab: string) {
  activeTab.value = tab
}


onMounted(() => {
  if (!trackedSection.value || !about.value || !tabs.value || !tabsContent.value) return

  // Стартовое состояние
  // gsap.set([about.value, tabs.value, tabsContent.value], { y: 50, opacity: 0 })

  // Цвет иконки (как у тебя было)
  const target = trackedSection.value
  if (target) {
    const observer = new IntersectionObserver(([entry]) => {
      trackingState.iconColor = entry.isIntersecting ? '#FDF5CE' : '#066E31'
    }, {threshold: 0.1})
    observer.observe(target)
  }


  // Основная timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trackedSection.value,
      start: 'top top',
      end: '+=200%', // длина секции (2 слайда)
      scrub: true,
      pin: true
    }
  })

  // Слайд 1 — появление about и кнопок вкладок
  tl.to(about.value, {y: 100, opacity: 0, duration: 0.5, ease: 'power2.out'})
})

</script>

<template>
  <button class="product__shop">
    <img src="/assets/images/shop-cart.png" alt="">
  </button>
  <section class="product" ref="trackedSection">


    <div class="container">
      <div class="product__badges">
        <img src="/assets/images/goods/bages/anti-age.png" alt="" class="product__badge">
        <img src="/assets/images/goods/bages/collagen-boost.png" alt="" class="product__badge">
        <img src="/assets/images/goods/bages/natural.png" alt="" class="product__badge">
        <img src="/assets/images/goods/bages/water.png" alt="" class="product__badge">
      </div>

      <div class="product__content" ref="content">


        <!-- ABOUT -->
        <div class="product__about" ref="about">
          <h3 class="product__title">NIGHT-TIME CARE SERUM</h3>
          <p class="product__desc">
            Безводная сыворотка с 5% бетулина. Лифтинг-средство для ночного омоложения, питания,
            увлажнения, восстановления барьера, цветочный аромат
          </p>
          <div class="product__actions">
            <button class="product__add">добавить в корзину</button>
            <button class="product__like">
              <img src="/assets/icons/heart.png">
            </button>
          </div>
        </div>

        <!-- TABS -->
        <div class="product__tabs" ref="tabs">
          <div class="product__tabs-buttons">
            <button class="product__tab" @click="openTab('desc')">Описание</button>
            <button class="product__tab" @click="openTab('ingredients')">Состав</button>
            <button class="product__tab" @click="openTab('usage')">Применение</button>
          </div>

          <div class="product__tabs-content" ref="tabsContent" v-if="showTabsContent">
            <template v-if="activeTab === 'desc'">
              Умная безводная сыворотка с максимальной концентрацией Бетулинсодержащего экстракта бересты 5% для
              ежедневного лучшего результата омоложения — свежий цвет лица, выравнивание рельефа кожи, лифтинг эффект.
              <br/>
              Сыворотка питает и увлажняет кожу, восстанавливает липидный барьер, повышает регенерацию, стимулирует рост
              молодых клеток эпидермиса.
              <br/>
              Этот товар также можно купить в наборе «Вечерний уход»
            </template>
            <template v-else-if="activeTab === 'ingredients'">
              Вода, глицерин, экстракт бересты, бетулин, масло ши, витамин Е, экстракт ромашки и другие компоненты.
            </template>
            <template v-else-if="activeTab === 'usage'">
              Наносите на чистую кожу лица вечером перед сном. Избегайте попадания в глаза. Подходит для ежедневного
              использования.
            </template>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.product {
  height: 100vh;
  background: url("/assets/images/backgrounds/product.png") 50% 50% no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  overflow-y: hidden;

  .container {
    padding: 0;
    padding-top: 200px;
    max-width: 1580px;
    width: 95%;
    overflow-y: hidden;
  }

  &__shop {
    position: fixed !important;
    bottom: 10%;
    right: 80px;
    z-index: 9999;
  }

  &__badges {
  position: fixed;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 32px;
  }

  &__badge {
    height: 100px;
    object-fit: contain;
  }

  &__content {
    overflow-y: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    padding: 160px 60px 80px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  &__about {
    color: #FFFFF0;
    font-family: Gilroy, sans-serif;
    max-width: 50%;
    padding: 50px 40px;
    border-radius: 48px;
    background: rgba(246, 245, 245, 0.18);
    box-shadow: -3px 3px 2px 0 rgba(253, 245, 206, 0.3);
    backdrop-filter: blur(4px);
  }

  &__title {
    font-size: 40px;
    margin: 0;
  }

  &__desc {
    font-size: 32px;
    line-height: 1.7em;
    font-weight: 300;
    padding-bottom: 32px;
  }

  &__actions {
    display: flex;
    gap: 28px;
  }

  &__add,
  &__like {
    font-size: 28px;
    font-family: Gilroy, sans-serif;
    font-weight: 300;
    color: #FFFFF0;
    border-radius: 100px;
    border: 2px solid #FFFFF0;
    background: transparent;
    height: 70px;
    padding: 16px 40px;
    transition: 0.4s;
  }

  &__add:hover {
    background: #FFFFF0;
    color: black;
  }

  &__like {
    padding: 0;
    border: none;

    img {
      height: 100%;
    }
  }

  &__tabs {
    margin-top: 120px;
  }

  &__tabs-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    gap: 18px;

  }

  &__tab {
    font-family: Gilroy, sans-serif;
    font-weight: 200;
    color: white;
    font-size: 28px;
    padding: 20px 50px;
    border-radius: 100px;
    border: none;
    background: rgba(246, 245, 245, 0.18);
    box-shadow: -3px 3px 2px 0 rgba(253, 245, 206, 0.3);
    backdrop-filter: blur(4px);
    cursor: pointer;
    transition: background-color .3s;

    &:hover {
      background: rgba(253, 245, 206, 0.5);
    }
  }

  &__tabs-content {
    margin-top: 32px;
    color: #FFFFF0;
    font-family: Gilroy, sans-serif;
    max-width: 40%;
    padding: 50px 40px;
    border-radius: 48px;
    font-size: 22px;
    line-height: 1.7em;
    font-weight: 300;
    background: rgba(246, 245, 245, 0.18);
    box-shadow: -3px 3px 2px 0 rgba(253, 245, 206, 0.3);
    backdrop-filter: blur(8px);
  }
}
</style>
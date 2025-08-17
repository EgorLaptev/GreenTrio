<script setup lang="ts">
import {onMounted} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {trackingState} from '@/composables/useTrackingState'

gsap.registerPlugin(ScrollTrigger)

const trackedSection = ref<HTMLElement | null>(null)

onMounted(() => {
  // Цвет иконки (как у тебя было)
  const target = trackedSection.value
  if (target) {
    const observer = new IntersectionObserver(([entry]) => {
      trackingState.iconColor = entry.isIntersecting ? '#FDF5CE' : '#066E31'
    }, {threshold: 0.1})
    observer.observe(target)
  }

  // Анимация фона
  const bg = document.querySelector('.showcase__bg') as HTMLElement
  if (!bg) return

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.showcase',
      pin: true,
      scrub: 1,
      start: 'top top',
      end: '+=2500',
      toggleActions: 'play none none reverse',
    }
  });

  tl.to(bg, {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    xPercent: 0,
    yPercent: 0,
    borderRadius: 0,
    duration: 2,
    ease: 'power2.out',
  });

// добавим поочерёдное появление .good
  gsap.utils.toArray('.goods .good').forEach((el, i) => {
    tl.from(el, {
      y: 50,
      opacity: 0,
      duration: 2  ,
      ease: 'power2.out',
    }, 2 + i * .3); // смещаем начало каждой анимации
  });


})
</script>


<template>
  <section class="showcase">

    <div class="showcase__bg">
      <div class="container">


        <div class="goods">
          <div class="good">
            <h3 class="good__title">THE<br>FOAM</h3>
            <p class="good__desc">Мягкая и нежная пенка для деликатного очищения чувствительной кожи лица и бритья</p>
          </div>
          <div class="good">
            <h3 class="good__title">SUNSCREEN CREAM</h3>
            <p class="good__desc">Защита кожи лица в условиях городской среды. Поддерживает водный баланс, повышает
              устойчивость кожи к негативным воздействиям</p>
          </div>
          <div class="good">
            <h3 class="good__title">LIP<br>BALM</h3>
            <p class="good__desc">Натуральный бальзам на основе пчелиного воска и масел холодного отжима. Для
              ежедневного ухода за губами</p>
          </div>
          <div class="good">
            <h3 class="good__title">HAIR<br>OIL</h3>
            <p class="good__desc">Эффективное средство против перхоти. Способствует восстановлению роста волос, не
              связанного с гормональными нарушениями</p>
          </div>

        </div>
      </div>
    </div>

    <div class="showcase__anchor" ref="trackedSection"></div>
  </section>
</template>

<style lang="scss" scoped>

.showcase {
  position: relative;
  overflow: hidden;
  background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%);

  display: flex;
  justify-content: center;
  align-items: center;

  &__bg {
    margin: 0 auto;
    width: 25vw;
    aspect-ratio: 1;
    border-radius: 32px;

    background: url("/assets/images/backgrounds/showcase.png") 50% 67%;
    background-size: cover;

  }

  &__anchor {
    position: absolute;
    bottom: 100px;
  }
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
}

.goods {
  padding-top: 160px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: space-between;
}

.good {
  padding: 30px;

  border-radius: 40px;
  background: rgba(65, 52, 32, 0.71);
  backdrop-filter: blur(10px);

  color: #FDF5CE;

  &__title {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 200;
    padding: 0;
    margin: 0;
  }

  &__desc {
    font-size: 18px;
    font-weight: 200;
  }
}


</style>
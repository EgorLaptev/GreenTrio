<script setup lang="ts">
import HeaderLogo from "~/components/ui/HeaderLogo.vue";
import {trackingState} from '@/composables/useTrackingState'
import SearchDrawer from "~/components/ui/SearchDrawer.vue";
import CartDrawer from "~/components/ui/CartDrawer.vue";
import HeaderCatalog from "~/components/ui/HeaderCatalog.vue";

const isCatalogOpen = ref(false)
const isSearchOpen = ref(false)
const isCartOpen = ref(false)

let oldColor = '#066E31'

watch(isCatalogOpen, () => {
  if (isCatalogOpen.value) {
    oldColor = trackingState.iconColor
    trackingState.iconColor = '#066E31';
  } else {
    trackingState.iconColor = oldColor;
  }
})

</script>


<template>

  <div
      class="wrapper"
      :class="{ 'wrapper_open': isCatalogOpen }"
  >

    <div class="liquidGlass-wrapper button">
      <div class="liquidGlass-effect"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>

      <div class="liquidGlass-text">
        <header class="header">
          <nav class="header__list">
            <NuxtLink
                to="/catalog"
                class="header__link"
                @mouseenter="isCatalogOpen = true"
                @mouseleave="isCatalogOpen = false"
            >
              Каталог
            </NuxtLink>
            <NuxtLink to="/about" class="header__link">О нас</NuxtLink>
          </nav>

          <HeaderLogo/>

          <div class="header__actions">
            <button class="header__action" @click="isSearchOpen = !isSearchOpen">
              <svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M38 0C58.9868 0 76 17.0132 76 38C76 47.7301 72.3407 56.6039 66.3262 63.3262L88.8789 85.8789C90.0502 87.0504 90.0502 88.9496 88.8789 90.1211C87.7073 91.2927 85.8073 91.2927 84.6357 90.1211L61.9863 67.4717C55.4447 72.8022 47.0963 76 38 76C17.0132 76 0 58.9868 0 38C0 17.0132 17.0132 0 38 0ZM38 6C20.3269 6 6 20.3269 6 38C6 55.6731 20.3269 70 38 70C55.6731 70 70 55.6731 70 38C70 20.3269 55.6731 6 38 6Z"
                    :fill="isCatalogOpen ? '#222' : '#FFF'"/>
              </svg>

            </button>
            <button class="header__action" @click="isCartOpen = !isCartOpen">
              <svg width="109" height="92" viewBox="0 0 109 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M47.002 76.001C51.4202 76.001 55.002 79.5827 55.002 84.001C55.002 88.4193 51.4202 92.001 47.002 92.001C42.5837 92.001 39.002 88.4193 39.002 84.001C39.002 79.5827 42.5837 76.001 47.002 76.001ZM84.002 76.001C88.4202 76.001 92.002 79.5827 92.002 84.001C92.002 88.4193 88.4202 92.001 84.002 92.001C79.5837 92.001 76.002 88.4193 76.002 84.001C76.002 79.5827 79.5837 76.001 84.002 76.001ZM47.002 81.001C45.3451 81.001 44.002 82.3441 44.002 84.001C44.002 85.6578 45.3451 87.001 47.002 87.001C48.6588 87.001 50.002 85.6578 50.002 84.001C50.002 82.3441 48.6588 81.001 47.002 81.001ZM84.002 81.001C82.3451 81.001 81.002 82.3441 81.002 84.001C81.002 85.6578 82.3451 87.001 84.002 87.001C85.6588 87.001 87.002 85.6578 87.002 84.001C87.002 82.3441 85.6588 81.001 84.002 81.001ZM14.7002 0.523438C18.5195 0.523458 21.8696 3.07166 22.8906 6.75195L36.9521 57.4463C37.3727 58.9615 38.7526 60.0107 40.3252 60.0107L90.3477 60.0098C91.9969 60.0096 93.4217 58.8585 93.7686 57.2461L101.279 22.3193C101.48 21.3854 100.768 20.5039 99.8125 20.5039H42.002C40.0692 20.5037 38.502 18.9367 38.502 17.0039C38.5022 15.0711 40.0701 13.5049 42.0029 13.5049L99.8125 13.5039C105.226 13.504 109.26 18.4981 108.122 23.791L100.613 58.7178C99.573 63.5553 95.2957 67.0105 90.3477 67.0107H40.3252C35.6073 67.0107 31.4683 63.8635 30.207 59.3174L16.1455 8.62207C15.9651 7.97327 15.3746 7.52376 14.7012 7.52344H4.00781C2.07492 7.52331 0.507813 5.95636 0.507812 4.02344C0.508018 2.09075 2.07513 0.524631 4.00781 0.524414L14.7002 0.523438Z"
                    :fill="isCatalogOpen ? '#222' : '#FFF'"/>
              </svg>

            </button>
          </div>
        </header>

        <div
            class="catalog"
            :class="{ 'catalog--open': isCatalogOpen }"
            @mouseenter="isCatalogOpen = true"
            @mouseleave="isCatalogOpen = false"
        >
          <HeaderCatalog/>
        </div>

      </div>
    </div>

  </div>

  <svg style="display: none">
    <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
    >
      <!--      <feTurbulence-->
      <!--          type="fractalNoise"-->
      <!--          baseFrequency="0.01 0.01"-->
      <!--          numOctaves="1"-->
      <!--          seed="5"-->
      <!--          result="turbulence"-->
      <!--      />-->
      <!-- Seeds: 14, 17,  -->

      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5"/>
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0"/>
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5"/>
      </feComponentTransfer>

      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap"/>

      <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lighting-color="white"
          result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300"/>
      </feSpecularLighting>

      <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
      />

      <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
      />
    </filter>
  </svg>


  <SearchDrawer :isOpen="isSearchOpen" @close="isSearchOpen = false"/>
  <CartDrawer :isOpen="isCartOpen" @close="isCartOpen = false"/>

</template>

<style scoped>

.catalog {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.catalog--open {
  max-height: 800px;
}

.header {
  font-size: 20px;

  font-weight: 300;
  color: white;
  padding: 10px 60px;

  width: 100%;


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

}

.header > * {
  flex: 1;
}

.header__list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 24px;
}

.header__link {
  padding: 12px;
  transition: color .3s;
  cursor: none;
}

.header__actions {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 40px;
  gap: 12px;
}

.header__action {
  background: none;
  border: none;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;

}

.header__action > svg {
  height: 100%;
}

.header__action path {
  transition: fill .3s;
}

.header__action:nth-child(1) > svg {
  height: 65%;
}


/* LIQUID GLASS STYLES */
.liquidGlass-wrapper {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;


  margin: 0 auto;

  display: flex;
  font-weight: 600;


  color: black;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);

  //transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
}

.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;

  backdrop-filter: blur(10px);
  filter: url(#glass-distortion);
  overflow: hidden;
  isolation: isolate;
  width: 100%;
}

.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
}

.liquidGlass-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;

  overflow: hidden;

  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5),
  inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
}

.liquidGlass-text {
  z-index: 3;
  width: 100%;
}

.wrapper {
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;


}

.wrapper_open .button {
  //background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%);
  background: #F8EAD6;
}

.wrapper_open .header__link {
  color: #222;
}

.button {
  padding: 0 1.5rem;
  transition: 1s;
  box-sizing: content-box;
  max-width: 1440px !important;
  z-index: 9997;
}

.button,
.button > div {
  border-radius: 2rem;
}


.button:hover > div {
  border-radius: 2.1rem;
}

@keyframes changeBackground {
  from {
    background: transparent;
  }
  90% {
    background: #EDDDC6;
  }
  to {
    background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%);
  }
}

</style>
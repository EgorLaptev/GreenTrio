<template>
  <div class="logo-wrap">
    <div class="logo-bg"></div>

    <NuxtLink to="/" class="header__logo logo">
      <LogoProgress/>
    </NuxtLink>

  </div>

</template>

<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {SplitText} from "gsap/SplitText";
import LogoProgress from "~/components/ui/LogoProgress.vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

onMounted(() => {
  /* Logo to header animation */
  let logoTl = gsap.timeline({ delay: 2 });

  logoTl.fromTo('.logo', {
    yPercent: window.innerHeight / 2 + 200,
    scale: 3,
    ease: 'power1.inOut',
  }, {
    yPercent: 0,
    xPercent: 0,
    scale: 1,
    textShadow: '0 0 2px rgba(0,0,0,0)',
    duration: 0.5,
    ease: 'power1.inOut'
  });

  logoTl.fromTo('.logo-bg', {
    opacity: 1
  }, {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.inOut'
  }, 0);
});


</script>

<style>
.header__logo * {
  transition: fill, color 0.3s ease;
}

.header__logo {
  padding: 6px 0;
  height: 60px;
  object-fit: contain;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 8px;
}

.header__logo svg {
  height: 50px;
  width: min-content;
}

.logo-bg {
  position: fixed;
  inset: 0;
  background: url("/assets/images/backgrounds/loader.png") no-repeat;
  background-size: cover;
  pointer-events: none;
}

</style>

<script setup>

import CustomCursor from "~/components/common/CustomCursor.vue";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import AppFooter from "~/components/common/AppFooter.vue";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


onMounted(() => {
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  document.querySelectorAll('.fade-up').forEach((el) => {
    gsap.from(el, {
      y: 50,                // сдвиг по Y (вниз)
      opacity: 0,           // из прозрачности
      duration: 1,          // длительность
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',   // когда элемент входит в зону видимости
        toggleActions: 'play none none reverse',
      }
    })
  })

  document.querySelectorAll('.swipe-up').forEach((el) => {
    gsap.from(el, {
      y: 550,                // сдвиг по Y (вниз)
      duration: .5,          // длительность
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 100%',   // когда элемент входит в зону видимости
        toggleActions: 'play none none reverse',
      }
    })
  })

})

</script>

<template>
  <UApp class="main" id="smooth-wrapper">
    <NuxtLayout>
      <CustomCursor/>
      <div id="smooth-content">
        <NuxtPage/>
        <AppFooter/>
      </div>
    </NuxtLayout>
  </UApp>
</template>

<style>

html {
  scroll-behavior: auto;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Gilroy", "Sans Serif Collection", sans-serif;
  font-weight: normal;
  background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%) no-repeat;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1440px;
  padding: 16px;
  margin: 0 auto;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Regular.eot');
  src: local('Gilroy Regular'), local('Gilroy-Regular'),
  url('/assets/fonts/Gilroy/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Regular.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Regular.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'DrukWideBold';
  src: url('/assets/fonts/DrukWide/Druk-Wide-Bold.ttf');
  src: local('Druk Wide Bold'), local('Druk-Wide-Bold'),
  url('/assets/fonts/DrukWide/Druk-Wide-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.eot');
  src: local('Gilroy Extrabold Italic'), local('Gilroy-ExtraboldItalic'),
  url('/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Bold.eot');
  src: local('Gilroy Bold'), local('Gilroy-Bold'),
  url('/assets/fonts/Gilroy/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Bold.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Bold.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Black.eot');
  src: local('Gilroy Black'), local('Gilroy-Black'),
  url('/assets/fonts/Gilroy/Gilroy-Black.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Black.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Black.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Light.eot');
  src: local('Gilroy Light'), local('Gilroy-Light'),
  url('/assets/fonts/Gilroy/Gilroy-Light.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Light.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Light.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Semibold.eot');
  src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
  url('/assets/fonts/Gilroy/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Semibold.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Semibold.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Semibold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Medium.eot');
  src: local('Gilroy Medium'), local('Gilroy-Medium'),
  url('/assets/fonts/Gilroy/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Medium.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Medium.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-MediumItalic.eot');
  src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),
  url('/assets/fonts/Gilroy/Gilroy-MediumItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-MediumItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-MediumItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-BlackItalic.eot');
  src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),
  url('/assets/fonts/Gilroy/Gilroy-BlackItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-BlackItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-BlackItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-UltraLight.eot');
  src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLight.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLight.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLight.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-RegularItalic.eot');
  src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),
  url('/assets/fonts/Gilroy/Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-RegularItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-RegularItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-RegularItalic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-SemiboldItalic.eot');
  src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),
  url('/assets/fonts/Gilroy/Gilroy-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-SemiboldItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-SemiboldItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-SemiboldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-HeavyItalic.eot');
  src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),
  url('/assets/fonts/Gilroy/Gilroy-HeavyItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-HeavyItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-HeavyItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-HeavyItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Extrabold.eot');
  src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
  url('/assets/fonts/Gilroy/Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Extrabold.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Extrabold.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Extrabold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-BoldItalic.eot');
  src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
  url('/assets/fonts/Gilroy/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-BoldItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-BoldItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-UltraLightItalic.eot');
  src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLightItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLightItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLightItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-UltraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-LightItalic.eot');
  src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),
  url('/assets/fonts/Gilroy/Gilroy-LightItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-LightItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-LightItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Heavy.eot');
  src: local('Gilroy Heavy'), local('Gilroy-Heavy'),
  url('/assets/fonts/Gilroy/Gilroy-Heavy.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Heavy.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Heavy.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Heavy.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-Thin.eot');
  src: local('Gilroy Thin'), local('Gilroy-Thin'),
  url('/assets/fonts/Gilroy/Gilroy-Thin.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-Thin.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-Thin.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy/Gilroy-ThinItalic.eot');
  src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),
  url('/assets/fonts/Gilroy/Gilroy-ThinItalic.eot?#iefix') format('embedded-opentype'),
  url('/assets/fonts/Gilroy/Gilroy-ThinItalic.woff2') format('woff2'),
  url('/assets/fonts/Gilroy/Gilroy-ThinItalic.woff') format('woff'),
  url('/assets/fonts/Gilroy/Gilroy-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
}


/*!
 * fullPage 4.0.37
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
html.fp-enabled,
.fp-enabled body {
  margin: 0;
  padding: 0;
  overflow: hidden;

  /*Avoid flicker on slides transitions for mobile phones #336 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.fp-section {
  position: relative;
  -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box; /* <=28 */
  box-sizing: border-box;
  height: 100%;
  display: block;
}

.fp-slide {
  float: left;
}

.fp-slide, .fp-slidesContainer {
  height: 100%;
  display: block;
}

.fp-slides {
  z-index: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */
  transition: all 0.3s ease-out;
}

.fp-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.fp-slidesContainer {
  float: left;
  position: relative;
}

.fp-controlArrow {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  position: absolute;
  z-index: 4;
  top: 50%;
  cursor: pointer;
  margin-top: -38px;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.fp-prev {
  left: 15px;
}

.fp-next {
  right: 15px;
}

.fp-arrow {
  width: 0;
  height: 0;
  border-style: solid;
}

.fp-arrow.fp-prev {
  border-width: 38.5px 34px 38.5px 0;
  border-color: transparent #fff transparent transparent;
}

.fp-arrow.fp-next {
  border-width: 38.5px 0 38.5px 34px;
  border-color: transparent transparent transparent #fff;
}

.fp-notransition {
  -webkit-transition: none !important;
  transition: none !important;
}

#fp-nav {
  position: fixed;
  z-index: 100;
  top: 50%;
  opacity: 1;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translate3d(0, -50%, 0);
  pointer-events: none;
}

#fp-nav.fp-right {
  right: 17px;
}

#fp-nav.fp-left {
  left: 17px;
}

.fp-slidesNav {
  position: absolute;
  z-index: 4;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  left: 0 !important;
  right: 0;
  margin: 0 auto !important;
  pointer-events: none;
}

.fp-slidesNav.fp-bottom {
  bottom: 17px;
}

.fp-slidesNav.fp-top {
  top: 17px;
}

#fp-nav ul,
.fp-slidesNav ul {
  margin: 0;
  padding: 0;
}

#fp-nav ul li,
.fp-slidesNav ul li {
  display: block;
  width: 14px;
  height: 13px;
  margin: 7px;
  position: relative;
}

.fp-slidesNav ul li {
  display: inline-block;
}

#fp-nav ul li a,
.fp-slidesNav ul li a {
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  pointer-events: all;
}

#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 4px;
  width: 4px;
  border: 0;
  background: #333;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -2px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span {
  width: 10px;
  height: 10px;
  margin: -5px 0px 0px -5px;
}

#fp-nav ul li .fp-tooltip {
  position: absolute;
  top: -2px;
  color: #fff;
  font-size: 14px;
  font-family: arial, helvetica, sans-serif;
  white-space: nowrap;
  max-width: 220px;
  overflow: hidden;
  display: block;
  opacity: 0;
  width: 0;
  cursor: pointer;
}

#fp-nav ul li:hover .fp-tooltip,
#fp-nav.fp-show-active a.active + .fp-tooltip {
  -webkit-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
  width: auto;
  opacity: 1;
}

#fp-nav ul li .fp-tooltip.fp-right {
  right: 20px;
}

#fp-nav ul li .fp-tooltip.fp-left {
  left: 20px;
}

.fp-auto-height.fp-section,
.fp-auto-height .fp-slide {
  height: auto !important;
}

.fp-responsive .fp-is-overflow.fp-section {
  height: auto !important;
}

/* Tries to prevent overwrites #4657 */
.fp-enabled .fp-scrollable {
  overflow: visible;
  height: initial;
}

/* Used with autoScrolling: false */
.fp-scrollable.fp-responsive .fp-is-overflow.fp-section,
.fp-scrollable .fp-section,
.fp-scrollable .fp-slide {
  /* Fallback for browsers that do not support Custom Properties */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]),
.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),
.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]) {
  /* Fallback for browsers that do not support Custom Properties */
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}

/* Disabling vertical centering on scrollable elements */
.fp-overflow {
  justify-content: flex-start;
}

body:not(.fp-responsive) .fp-overflow {
  max-height: 100vh;
  max-height: 100dvh; /* fix for new browsers */
}

/* No scrollable when using auto-height */
.fp-scrollable .fp-auto-height .fp-overflow {
  max-height: none;
}

.fp-is-overflow .fp-overflow.fp-auto-height-responsive,
.fp-is-overflow .fp-overflow.fp-auto-height,
.fp-is-overflow .fp-overflow {
  overflow-y: auto;
}

.fp-overflow {
  outline: none;
}

.fp-overflow.fp-table {
  display: block;
}

.fp-responsive .fp-auto-height-responsive.fp-section,
.fp-responsive .fp-auto-height-responsive .fp-slide,
.fp-responsive .fp-auto-height-responsive .fp-overflow {
  height: auto !important;
  min-height: auto !important;
}

/*Only display content to screen readers*/
.fp-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */
.fp-scroll-mac .fp-overflow::-webkit-scrollbar {
  background-color: transparent;
  width: 9px;
}

.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track {
  background-color: transparent;
}

.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, .4);
  border-radius: 16px;
  border: 4px solid transparent;
}

.fp-warning,
.fp-watermark {
  z-index: 9999999;
  position: absolute;
  bottom: 0;
}

.fp-warning,
.fp-watermark a {
  text-decoration: none;
  color: #000;
  background: rgba(255, 255, 255, 0.6);
  padding: 5px 8px;
  font-size: 14px;
  font-family: arial;
  color: black;
  display: inline-block;
  border-radius: 3px;
  margin: 12px;
}

.fp-noscroll .fp-overflow {
  overflow: hidden;
}

</style>
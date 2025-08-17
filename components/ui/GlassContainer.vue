<script setup lang="ts">

</script>

<template>
  <div class="wrapper">

    <div class="liquidGlass-wrapper button">
      <div class="liquidGlass-effect"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>

      <div class="liquidGlass-text">
        <slot/>
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
</template>

<style scoped>


/* LIQUID GLASS STYLES */
.liquidGlass-wrapper {
  display: flex;
  overflow: hidden;
  position: relative;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
}

.liquidGlass-effect {
  position: absolute;
  z-index: 0;
  inset: 0;

  backdrop-filter: blur(10px);
  filter: url(#glass-distortion);
  overflow: hidden;
  isolation: isolate;
}

.liquidGlass-tint {
  z-index: 1;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.25);
}

.liquidGlass-shine {
  position: absolute;
  inset: 0;
  z-index: 2;

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
  width: min-content;
  z-index: 10;
}

.button {
  padding: 0 1.5rem;
  transition: 1s;
  box-sizing: content-box;
  max-width: 1920px !important;
  z-index: 10000;
}

.button,
.button > div {
  border-radius: 2rem;
}

.button:hover {
  padding: 0.1rem 1.8rem;
}

.button:hover > div {
  border-radius: 2.1rem;
}

.button svg {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
}

.button:hover svg {
  transform: scale(0.95);
}
</style>
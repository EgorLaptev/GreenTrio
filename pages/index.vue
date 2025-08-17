<script setup>

import Welcome from "~/components/Landing/WelcomeSection.vue";
import Showcase from "~/components/Landing/ShowcaseSection.vue";
import Formulas from "~/components/Landing/Formulas.vue";
import BackgroundVideo from "~/components/ui/BackgroundVideo.vue";
import LiqiuedGlass from "~/components/ui/LiqiuedGlass.vue";
import ManSection from "~/components/Landing/ManSection.vue";
import GreentrioSection from "~/components/Landing/GreentrioSection.vue";
import AboutSection from "~/components/Landing/AboutSection.vue";
import RockSection from "~/components/Landing/RockSection.vue";

</script>

<template>

  <!-- Welcome -->
  <Welcome/>


  <!-- About section -->
  <AboutSection/>

  <!-- Showcase section -->
  <Showcase/>

  <!-- Greentrio hands -->
  <GreentrioSection/>

  <!-- Man slide -->
  <ManSection/>

  <!-- Rock section -->
  <RockSection/>


  <section class="section">
    <div class="container">
      <div class="perspective-container">
        <div class="liquid-wrap">
          <!--          <LiqiuedGlass>-->
          <div class="liquid-another">
            234
          </div>
          <!--          </LiqiuedGlass>-->
        </div>
      </div>
    </div>

    <BackgroundVideo src="/assets/videos/backgrounds/another.mp4" :loop="true" :loop-duration="5"/>
  </section>

  <Formulas/>

  <section class="section fade-up">
    <BackgroundVideo src="/assets/videos/backgrounds/search.mp4"/>
  </section>

</template>

<style scoped>


body {
  background: linear-gradient(245.06deg, #EDDDC6 49.57%, #F8EAD6 87.14%);
}

.welcome,
.welcome_2,
.about,
.rock,
.section,
.man,
.showcase {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: -10;
}

.man {
  background: url("/assets/images/backgrounds/man.png") 50% 50% no-repeat;
  background-size: cover;
  z-index: -1;
}


.perspective-container {
  perspective: 1000px;
}

.liquid-wrap {
  //transform: rotateX(10deg) rotateY(10deg);
  position: absolute;
  top: 300px;
  //background: rgba(255, 210, 82, 0.1);
  //background: rgba(255, 210, 82, 0.1);
  //background: rgba(255, 255, 255, 0.1);
  //background: rgba(255, 255, 255, 0.0);
  background: rgba(253, 245, 206, 0.22);
  box-shadow: -3px 3px 2px 0 rgba(253, 245, 206, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 32px;
  //background: rgba(255, 210, 82, 0.1);
}

.liquid-another {
  padding: 32px;
  width: 600px;
  height: 500px;
}


</style>

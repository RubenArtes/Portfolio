<template>
  <div id="inicio" class="app bg-white font-['SFUIDisplay-Light']">
    <Cursor />
    <div
      class="header bg-white p-10 border-t-0 px-24 text-black grid grid-cols-1 sticky top-0 z-10 max-lg:p-6 max-lg:sticky max-sm:grid max-sm:justify-between">
      <div class="image place-self-center self-center">
        <NuxtLink to="/Home">
          <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg" />
        </NuxtLink>
      </div>
    </div>

    <div
      class="header bg-white p-2 px-12 text-black flex justify-center items-center sticky top-[109px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2">
      <div
        class="titular_small uppercase pr-2 pl-2 text-zinc-500 font-['Neue'] animate-pulse text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
        Ultima actualización Agosto 2024
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
    </div>

    <VueScrollProgressBar background-color="#000000" />

    <!-- Botón flotante -->

    <div
      class="trabajos hidden px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-[720px]:px-4 max-sm:px-2 max-sm:pb-8 max-sm:pt-12 max-sm:hidden">
      <div class="titular_flex pt-12 flex flex-col max-lg:items-center max-lg:flex max-[2000px]:px-0 max-sm:pt-2">
        <div
          class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[50px] max-sm:leading-[3rem] max-sm:font-['SFUIDisplay-Bold']">
          RUBÉN MALDONADO
        </div>
      </div>
    </div>


    <!--<div
      class="trabajos hidden max-sm:grid px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-sm:px-2 max-sm:text-center max-sm:pb-72">
      <div class="titular_flex pt-12 grid grid-flow-row grid-rows-2 gao-2 max-lg:items-center max-[2000px]:px-0 max-sm:pt-2">
        <div
          class="titular2 gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[120px] max-sm:leading-[4.75rem] max-sm:font-['SFUIDisplay-Regular'] max-sm:text-[120px]">
          RUBÉN
        </div>
        <div
          class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[60px] max-sm:font-['SFUIDisplay-Regular'] max-sm:gap-2 max-sm:leading-[0.25rem]">
          MALDONADO
        </div>
      </div>
    </div>-->

    <div
      class="banner flex pt-12 pb-48 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1920px]:pb-16 max-sm:hidden">
      <img class="banner_image w-1/2 h-full" src="/img/nombreruben_00000.png">


    </div>

    <div
      class="banner hidden max-sm:px-8 max-sm:flex max-sm:pt-12 max-sm:pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <img class="banner_image w-full h-full" src="/img/nombreruben_00000.png">


    </div>

    <div class="grid grid-cols-3 px-32 max-sm:px-8 pt-2 pb-20 max-[1920px]:pt-0 max-sm:grid-cols-1 opacity-20">

      <div class="texto1 flex flex-col place-self-start">

        <div
          class="text flex text-[40px] leading-[4rem] font-['PPE-UltralightItalic'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
          Portfolio
          <img class="w-[12px] h-[12px]" src="/img/Copyright.svg">
        </div>

        <div
          class="text text-[16px] leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[14px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-start max-[1920px]:text-[14px] max-[1920px]:leading-[16px]">
          RUBÉN MALDONADO GONZÁLEZ
          <br>
          AGOSTO 2024
        </div>


      </div>


      <div class="texto2 hidden max-sm:flex gap-6 justify-between max-sm:pt-4">

        <div
          class="text place-self-start text-[14px] text-left max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-start justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-[1920px]:leading-[14px]">
          <br>
          <br>
          PACKAGING
          <br>
          EDITORIAL
          <br>
          MARCA
          <br>
          ILUSTRACIÓN
          <br>
          RENDER
          <br>
          AUDIOVISUALES
        </div>

        <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:pt-0">

          <a href="#trabajos"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
            Trabajos.
          </a>


          <a href="#servicios"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
            Servicios.
          </a>
          <a href="#sobremi"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
            Sobre mi.
          </a>


        </div>


      </div>

      <div class="texto2 flex max-sm:hidden gap-6 place-self-center">

        <div
          class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[14px]">
          <br>
          <br>
          PACKAGING
          <br>
          EDITORIAL
          <br>
          MARCA
        </div>

        <div
          class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[14px]">
          <br>
          <br>
          ILUSTRACIÓN
          <br>
          RENDER
          <br>
          AUDIOVISUALES
        </div>


      </div>

      <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:hidden">

        <a href="#trabajos"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
          Trabajos.
        </a>


        <a href="#servicios"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
          Servicios.
        </a>
        <a href="#sobremi"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          Sobre mi.
        </a>


      </div>
    </div>


  </div>

</template>

<script scoped>

import text from "~/components/text.vue";

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar';

import { MotionPlugin } from '@vueuse/motion';

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

export default {
  mounted() {
    setTimeout(() => {
      this.animateOutAndRedirect();
    }, 1500); // Redirigir después de 5 segundos
  },
  methods: {
    animateOutAndRedirect() {
      const el = document.querySelector('.app');
      el.classList.add('fade-out');

      setTimeout(() => {
        this.redirectToHome();
      }, 500); // Esperar 500ms (0.5s) antes de redirigir
    },
    redirectToHome() {
      this.$router.push('/Home'); // Redirigir a la ruta raíz
    }
  }
};



</script>
<style lang="sass" scoped>


.email
  &:hover
    @apply text-zinc-300

.image
  @apply transition ease-in-out delay-150
  &:hover
    @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm

.image_logo
  @apply opacity-100
  &:hover
    @apply opacity-60

.red
  &:hover
      @apply text-zinc-300
.app
  transition: opacity 0.5s // Transición de opacidad de 0.5 segundos
  &.fade-out
    opacity: 0// Cambiar la opacidad a 0 para la transición

</style>
<template>
  <div class="app bg-white font-['SFUIDisplay-Light']">
    <Cursor />
    <div
      class="header bg-white p-10 border-r-0 border-l-0 px-24 text-black grid grid-cols-1">
      <div class="image justify-items-center grid">
        <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg" />
      </div>
      <div class="mode items-center justify-center content-center hidden">
        <NuxtLink to="/HomeDark">
          <img class="image w-[30px]" src="/img/darkmode.png" alt="" />
        </NuxtLink>
      </div>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
        target="_blank" class="email text-right text-lg gap-2 max-lg:text-xs hidden">
        ruben.maldonado.graphic@gmail.com
      </a>
    </div>

    <div
      class="header bg-white p-2 px-12 border-0 text-black flex justify-center items-center sticky top-[6.25rem] z-10 max-[1080px]:gap-6 max-[1025px]:top-[4.2rem] max-sm:gap-2 max-sm:border-0">
      <div
        class="titular_small uppercase pr-2 pl-2 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
        RUBÉN MALDONADO ©
      </div>
    </div>

    <VueScrollProgressBar background-color="#000000" />



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
      class="banner flex pt-12 pb-12 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:hidden">
      <img class="banner_image w-1/2 h-full" src="/img/bannerhome4.png">


    </div>

    <div
      class="banner hidden max-sm:flex max-sm:pt-40 max-sm:pb-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <img class="banner_image w-full h-full" src="/img/bannerhome4.png">


    </div>




    <div class="accede invisible text-black grid grid-cols-6 pb-16 gap-20 px-64 min-[2000px]:grid max-sm:hidden">
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        PACKAGING
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        EDITORIAL
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        MARCA
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        ILUSTRACIÓN
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs">
        RENDER
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        AUDIOVISUALES
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

    </div>

    <div class="parte 2 hidden">
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        PACKAGING
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        EDITORIAL
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        MARCA
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        ILUSTRACIÓN
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs">
        RENDER
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        AUDIOVISUALES
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

    </div>

    <div
      class="accede2 hidden px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:hidden">
      «Pasa el ratón por encima para descubrir el trabajo y clickea en uno para
      saber más de el»
    </div>

    <div
      class="accede2 flex px-64 font-bold text-center font-['Domaine-Display'] justify-center text-zinc-800 text-[40px] max-[720px]:px-4 max-sm:px-20 max-sm:pt-16 max-sm:hidden">
      PORTFOLIO
    </div>
    <div
      class="accede2 flex px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:hidden">
      Actualización Agosto 2024
    </div>


    <div
      class="hidden grid-flow-cols grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px]">PÁGINAS NUEVAS - PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center text-[12px] max-sm:hidden">PÁGINAS
        NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS -
        PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS - PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
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
  @apply opacity-60
  &:hover
    @apply opacity-100

.red
  &:hover
      @apply text-zinc-300
.app
  transition: opacity 0.5s // Transición de opacidad de 0.5 segundos
  &.fade-out
    opacity: 0// Cambiar la opacidad a 0 para la transición

</style>
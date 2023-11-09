<template>
  <div class="app bg-zinc-100 font-['SFUIDisplay-Light'] h-screen">
      <Cursor />
      <div
          class="header bg-zinc-100 p-10 flex border-r-0 border-l-0 px-32 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
          <div class="image flex flex-start justify-items-start">
              <img class="max-lg:max-w-[15px]" src="/img/vector_zinc.svg">
          </div>
          <div class="mode flex gap-10 items-center justify-center content-center">
              <NuxtLink to="/indexlight">
                  <img class="image w-[30px]" src="" alt="">
              </NuxtLink>

          </div>
          <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">
              <img class="vector max-lg:max-w-[8px]" src="">
          </div>

      </div>

      <div
          class="header bg-zinc-100 p-2 px-12 border-r-0 border-l-0 text-white flex justify-between items-center sticky top-[6.5rem] z-10 max-[1080px]:gap-6 max-[1025px]:top-[4.2rem] max-[510px]:gap-2 max-[510px]:flex-col">
          <div
              class="titular_small pr-6 pl-6 text-zinc-400 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[510px]:px-2 max-[510px]:text-[11px] max-[510px]:hidden">
              El trabajo de un diseñador apasionado
          </div>
          <div
              class="titular_small pr-6 pl-6 text-zinc-400 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[510px]:px-2 max-[510px]:text-[11px] max-[510px]:hidden">
              Abrir para ver los proyectos
          </div>
          <div
              class="titular_small pr-6 pl-6 text-zinc-400 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[510px]:px-2 max-[510px]:text-[11px]">
              Portfolio v.3 - Noviembre 2023
          </div>
      </div>

      <VueScrollProgressBar background-color="#000000" />

      <div
          class="trabajos px-64 flex pt-16 pb-32 text-zinc-800 flex-col items-left gap-4 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1080px]:px-20 max-[1080px]:pb-32 max-[720px]:px-4 max-[510px]:px-2 max-[510px]:pt-8 max-[510px]:pb-16">

          <div
              class="titular_flex pt-20 flex flex-col max-lg:items-center max-lg:flex max-[2000px]:px-0 max-[510px]:pt-4">
              <div
                  class="titular leading-[9rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center justify-center max-[2000px]:text-[160px] max-[1080px]:text-[120px] max-[720px]:text-[60px] max-[510px]:text-[60px] max-[760px]:text-[60px] max-[760px]:leading-[4rem] max-[760px]:font-['SFUIDisplay-Bold']">
                  PORTFOLIO
                  <br>
              </div>
          </div>
          <div class="subtitular place-items-start gap-2 leading-[5rem] text-[50px] font-['SFUIDisplay-Regular'] font-light tracking-tight flex flex-row items-center justify-center max-[510px]:font-normal max-[2000px]:text-[40px] max-[1080px]:text-[120px] max-[720px]:text-[30px] max-[510px]:text-[20px] max-[510px]:leading-[1rem] max-[760px]:text-[60px] max-[760px]:leading-[4rem] max-[760px]:font-['SFUIDisplay-Bold']">
              Ruben Maldonado 
              <div class="copyright text-[20px]">©</div>
          
          </div>

      </div>

      <div
        class="animate-text flex uppercase items-center text-center flex justify-center text-zinc-500 text-base max-lg:justify-center max-[2000px]:text-[12px] max-[2000px]:px-28 max-[510px]:px-16">
        DISEÑAR ES PENSAR EN HACERLO VISUAL <br> SAUL BASS


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
    this.$router.push('/primera'); // Redirigir a la ruta raíz
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
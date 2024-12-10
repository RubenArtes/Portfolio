<template>
  <div class="app bg-[url('/img/index.gif')] bg-cover relative w-full min-h-full max-sm:hidden">
    <div class="overlay fade-overlay"></div>
    <div class="hola min-h-screen"></div>
  </div>

  <div class="app bg-[url('/img/introruben3.gif')] bg-cover h-screen hidden max-sm:flex">
    <div class="overlay fade-overlay"></div>
    <div class="hola h-screen"></div>
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
    }, 3000);
  },
  methods: {
    animateOutAndRedirect() {
      const overlay = document.querySelector('.overlay'); 
      overlay.classList.add('fade-overlay-active'); // Activa el fade-out
      setTimeout(() => {
        this.redirectToHome();
      }, 500); // Tiempo para completar el fade-out antes de redirigir
    },
    redirectToHome() {
      this.$router.push('/IntroDark');
    }
  }
};
</script>

<style lang="sass" scoped>
.app
  position: relative
  transition: opacity 0.5s ease 

.overlay
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: black
  opacity: 0
  transition: opacity 0.5s ease
  pointer-events: none // Evita interferir con la interacción del usuario

.fade-overlay-active
  opacity: 1 // La opacidad del fondo negro pasa a 1 para el fade-out
</style>

<template>
    <div class="app bg-[#252422] font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
        <VueScrollProgressBar background-color="#ffffff" />


        <NuxtImg class="w-full" src="/img/manualdemarca.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca2.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca3.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca4.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca4.2.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca4.3.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca5.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca6.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca7.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca8.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca9.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca10.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca11.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca11.2.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca11.3.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca12.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca13.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca14.png"></NuxtImg>
        <NuxtImg class="w-full" src="/img/manualdemarca15.png"></NuxtImg>







        <a
            class="fixed max-sm:hidden mix-blend-exclusion bottom-24 right-24 text-[70px] z-50 uppercase font-bold text-white">
            ↓
        </a>



        <div
            class="links_rrss  font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11white.svg">
            </a>
            <div class="links flex flex-col gap-2 text-white">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">Behance
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-[#252422] p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/star.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbol.svg">
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'


export default {
    mounted() {
        this.$nextTick(() => {
            const newVideo = document.getElementById('videoElementId');
            newVideo.addEventListener('ended', () => {
                newVideo.currentTime = 0;
                newVideo.play();
            });
            newVideo.play();
        });
    },
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>

<style lang="sass" scoped>

  .email
    &:hover
      @apply text-zinc-300
  
  .red
    &:hover
        @apply text-zinc-300
  
  </style>
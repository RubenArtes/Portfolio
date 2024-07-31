<template>
    <div class="app bg-white">
        <Cursor />
        <div class="header bg-white p-10 flex text-black justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>

            <div class="email text-lg flex gap-2 items-center max-xl:text-xs">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[8px]" src="/img/Vector-11black.svg">
                </NuxtLink>
            </div>
        </div>
        <VueScrollProgressBar background-color="white" />

        <div
            class="carousel flex gap-14 justify-center mt-24 mb-10 px-20 items-center max-xl:flex-col max-xl:mt-4 max-xl:mb-4 max-xl:text-center max-xl:justify-center max-xl:px-12">
            <div class="text text-left">
                <div
                    class="trabajos text-left px-14 pt-20 pb-4 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:text-center">
                    <div
                        class="titular text-[100px] text-left font-bold leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#a9baf0] via-[#4467db] to-[#0c2882] max-xl:text-[60px] max-xl:justify-center max-xl:text-center">
                        Oporto</div>

                </div>
                <div
                    class="images px-14 pb-10 text-black text-right items-left justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-xl:text-center">
                    <div
                        class="text max-w-[60ch] text-[14px] text-left text-zinc-400 font-regular pb-12 max-xl:text-xs max-xl:text-center max-xl:justify-center max-xl:max-w-[100ch]">
                        Fotografías
                        realizadas
                        con temática de la ciudad portugesa Oporto. Fotografías de paisajes, lugares, rincones y detalles
                        durante el viaje. Visitando partes como "El Ponte Luis I", "Distrito de Ribeira", "La torre de los
                        Clérigos",
                        "La Igreja do Carmo y La Igrejia dos Carmelitas", "Mercado do Bolhao" y la "Estación de tren de Sao
                        Bento" entre otros sitios.
                        <br>
                        <br>
                        <div class="fecha pb-10 text-xs max-xl:pt-10">30 enero 2023</div>
                    </div>
                </div>
            </div>

            <Carousel class="carousel max-w-[1200px] max-xl:hidden">
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_3.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_4.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_6.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_7.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_8.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_10.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_12.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_13.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_15.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_17.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_18.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_39.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_26.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_25.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_30.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_27.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_29.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_33.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_35.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_37.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_39.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_40.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_45.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_47.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_48.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_49.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_57.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_58.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_59.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_61.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_63.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_64.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_65.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_66.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_68.jpg" alt="">
                </Slide>

                <template #addons>
                    <Navigation class="" />
                    <Pagination />
                </template>
            </Carousel>
            <Carousel class="carousel max-w-[1200px] max-xl:hidden">
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_1.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_5.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_9.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_20.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_21.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_23.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_24.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_36.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_41.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_42.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_55.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_56.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_60.jpg" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full mb-2" src="/img/oporto_67.jpg" alt="">
                </Slide>


                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>

        <div class="max-xl:grid max-xl:gap-4 max-xl:grid-cols-1 max-xl:px-4 hidden">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_2.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_3.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_4.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_6.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_7.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_8.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_10.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_12.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_13.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_15.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_17.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_18.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_20.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_21.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_24.jpg" alt="">


            <img class="image_grid w-full h-full mb-2" src="/img/oporto_23.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_39.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_26.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_25.jpg" alt="">


            <img class="image_grid w-full h-full mb-2" src="/img/oporto_30.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_27.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_29.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_33.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_31.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_32.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_34.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_37.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_40.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_9.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_36.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_41.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_56.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_45.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_47.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_49.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_48.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_55.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_60.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_44.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_57.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_59.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_58.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_61.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_63.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_64.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_66.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_46.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_65.jpg" alt="">

            <img class="image_grid w-full h-full mb-2" src="/img/oporto_22.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_43.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_19.jpg" alt="">
            <img class="image_grid w-full h-full mb-2" src="/img/oporto_50.jpg" alt="">



        </div>



        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Lightroom.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-black justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11black.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11black.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-white p-10 flex text-black justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/starblack.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbolblack.svg">
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
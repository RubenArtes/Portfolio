<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
        <Cursor />
        <div
            class="header bg-white p-10 flex px-24 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
            <div class="image flex flex-start justify-items-start">
                <NuxtLink to="/">
                    <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>

            <div class="email text-xm justify-items-end flex gap-2 max-lg:text-xs ">Viaje Porto 2023
            </div>

        </div>
        <VueScrollProgressBar background-color="#52525B" />
        <div
            class="titular2 flex px-64 gap-48 items-center content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['Domaine-Display'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-[#537286] via-[#536686] to-[#537686] animate-text max-[600px]:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                PORTO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:pt-6 max-[600px]:pb-16 max-[600px]:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-8">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch]">
                    Videos de abordo de todos los lugares importantes y perspectivas interesantes personales sobre el viaje,
                    para ampliar material e información de los demás apartados, dandole
                    un valor más, contando cosas en movimiento y no en una sola imagen estática.
                </div>

            </div>
        </div>

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular uppercase text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                        Texto sobre los videos</div>
                    <div
                        class="text text-[16px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu rhoncus ex, quis elementum neque.
                        Praesent interdum ut diam id facilisis. Nullam metus nisl, tristique vel varius id, congue sed elit.
                        Suspendisse consequat, libero euismod condimentum ullamcorper, nunc arcu condimentum sapien, vel
                        ornare nulla mauris sed nibh. Morbi ornare iaculis lacus, efficitur convallis neque pharetra eu.
                        Etiam interdum velit vel nulla ultrices semper. Fusce tempor nisi in felis fermentum, et cursus orci
                        aliquet. Maecenas condimentum massa suscipit, viverra nulla in, elementum nisl. Phasellus pharetra
                        vestibulum urna, sed volutpat metus interdum quis. Sed vel ipsum nisi. Duis ac purus lobortis,
                        finibus augue in, efficitur quam. Sed dictum pulvinar ante, quis finibus lacus molestie vitae.
                        Mauris eget vehicula justo.
                        <br> <br>
                        Quisque vehicula mauris nunc, non rhoncus nibh iaculis dapibus. Donec purus nisl, elementum eu dui
                        nec, posuere dapibus urna. Mauris euismod, quam sit amet lobortis mattis, ante leo dapibus augue, ac
                        ornare arcu dolor vel velit. Aenean libero nisl, placerat at orci et, molestie mollis neque. Cras
                        tristique eros sed metus cursus porta. Donec commodo a tellus nec mollis. Mauris porta pellentesque
                        rhoncus. Sed ex mi, tempus ut egestas ut, lobortis non arcu. Proin blandit magna ex, egestas
                        elementum elit lacinia nec. Nulla facilisi.

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min max-[1300px]:px-64 max-[1300px]:pt-12 max-[1000px]:px-0">

                <Carousel class="carousel max-w-[1200px]">

                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto2.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto3.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto5.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto8.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>


                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>

            </div>
        </div>

    </div>
</template>
  
<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'

import ExpandableImageVue from "./ExpandableImage.vue";

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
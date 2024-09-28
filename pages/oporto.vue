<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor class="max-sm:hidden" />
        <div
            class="header bg-black p-10 border-t-0 px-32 text-white grid grid-cols-2 sticky top-0 z-50 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between max-sm:px-8">
            <div class="image place-self-start self-center">
                <NuxtLink to="/Home">
                    <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logogif2.gif" />
                </NuxtLink>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email self-center text-lg  place-self-end flex gap-2 max-lg:text-xs">
                ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg" />
            </a>
        </div>

        <VueScrollProgressBar background-color="#ffffff" />
        <div
            class="colum max-sm:hidden divide-x-1 grid grid-cols-2 pb-10 text-white justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="div1 pt-2 border border-zinc-200 border-t-0 border-l-0 border-r-0 border-b-0">
                <div
                    class="info_secondary max-[1500px]:px-24 max-[1500px]:pt-12 max-[1500px]:pb-32 z-20 bg-black border border-t-0 border-r-0 border-l-0 max-[1920px]:px-[12rem] px-[22rem] pb-52 place-items-start pt-32 flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular max-[1500px]:text-[50px] text-[50px] font-['PPE-Ultralight'] leading-12 font-normal text-[#405ab0] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                        OPORTO</div>
                    <div
                    class="text max-[1500px]:text-[12px] max-w-[60ch] text-[16px] text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                        FOTOGRAFÍAS - FEBRERO 2023 - OPORTO - PORTUGAL</div>
                    <div
                    class="text text-[17px] font-['SFUIDisplay-Light'] text-white max-xl:text-sm max-[1500px]:text-[14px] max-[1500px]:max-w-[100ch]">
                        Fotografías realizadas en un viaje personal a Portugal, Oporto. Fotografías
                        realizadas con temática de la ciudad portugesa Oporto. Fotografías de paisajes, lugares,
                        rincones y
                        detalles durante el viaje. Visitando partes como "El Ponte Luis I", "Distrito de Ribeira", "La
                        torre
                        de los Clérigos", "La Igreja do Carmo y La Igrejia dos Carmelitas", "Mercado do Bolhao" y la
                        "Estación de tren de
                        Sao Bento" entre otros sitios. Fotografías postproducidas con Lightroom y Photoshop.

                    </div>


                </div>
                <div
                    class="info_secondary z-10 px-52 pb-44 place-items-start pt-32 flex flex-col gap-6 sticky top-[48rem] max-[1500px]:top-[44rem] max-[1500px]:pt-2">

                    <a href="#inicio"
                        class="sticky flex place-self-center max-[1500px]:pt-0 pt-24 text-[70px] uppercase font-bold text-white">
                        ↑
                    </a>

                </div>

            </div>

            <div class="div1 pl-4 grid grid-cols-1 gap-4 border border-t-0">

                <img class="image_grid " src="/img/oporto_4.jpg" alt="">
                <img class="image_grid " src="/img/oporto_6.jpg" alt="">
                <img class="image_grid " src="/img/oporto_8.jpg" alt="">
                <img class="image_grid " src="/img/oporto_10.jpg" alt="">
                <img class="image_grid " src="/img/oporto_12.jpg" alt="">
                <img class="image_grid " src="/img/oporto_13.jpg" alt="">
                <img class="image_grid " src="/img/oporto_15.jpg" alt="">
                <img class="image_grid " src="/img/oporto_17.jpg" alt="">
                <img class="image_grid " src="/img/oporto_18.jpg" alt="">
                <img class="image_grid " src="/img/oporto_39.jpg" alt="">
                <img class="image_grid " src="/img/oporto_26.jpg" alt="">
                <img class="image_grid " src="/img/oporto_27.jpg" alt="">
                <img class="image_grid " src="/img/oporto_29.jpg" alt="">
                <img class="image_grid " src="/img/oporto_33.jpg" alt="">
                <img class="image_grid " src="/img/oporto_35.jpg" alt="">
                <img class="image_grid " src="/img/oporto_37.jpg" alt="">
                <img class="image_grid " src="/img/oporto_40.jpg" alt="">
                <img class="image_grid " src="/img/oporto_45.jpg" alt="">
                <img class="image_grid " src="/img/oporto_47.jpg" alt="">
                <img class="image_grid " src="/img/oporto_48.jpg" alt="">
                <img class="image_grid " src="/img/oporto_57.jpg" alt="">
                <img class="image_grid " src="/img/oporto_58.jpg" alt="">
                <img class="image_grid " src="/img/oporto_59.jpg" alt="">
                <img class="image_grid " src="/img/oporto_61.jpg" alt="">
                <img class="image_grid " src="/img/oporto_63.jpg" alt="">
                <img class="image_grid " src="/img/oporto_65.jpg" alt="">
                <img class="image_grid " src="/img/oporto_66.jpg" alt="">
                <img class="image_grid " src="/img/oporto_68.jpg" alt="">
                <div class="grid grid-cols-2 gap-4">
                    <img class="image_grid " src="/img/oporto_5.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_9.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_20.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_23.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_24.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_36.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_41.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_42.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_55.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_56.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_60.jpg" alt="">
                    <img class="image_grid " src="/img/oporto_67.jpg" alt="">
                </div>

            </div>
        </div>

        <div
            class="titular2 max-sm:border-0 hidden max-sm:flex max-sm:pt-14 px-64 gap-64 content-start space-between justify-center pt-20 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
            class="titular text-[60px] font-['PPE-Ultralight'] leading-12 font-bold text-[#405ab0] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                OPORTO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    FOTOGRAFÍAS - FEBRERO 2023 - OPORTO - PORTUGAL</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Fotografías realizadas en un viaje personal a Portugal, Oporto. Fotografías
                        realizadas con temática de la ciudad portugesa Oporto. Fotografías de paisajes, lugares,
                        rincones y
                        detalles durante el viaje. Visitando partes como "El Ponte Luis I", "Distrito de Ribeira", "La
                        torre
                        de los Clérigos", "La Igreja do Carmo y La Igrejia dos Carmelitas", "Mercado do Bolhao" y la
                        "Estación de tren de
                        Sao Bento" entre otros sitios. Fotografías postproducidas con Lightroom y Photoshop.
                </div>

            </div>
        </div>



        <div class="max-sm:grid max-sm:gap-4 max-sm:grid-cols-1 max-sm:pb-12 max-sm:px-4 hidden">

            <img class="image_grid " src="/img/oporto_2.jpg" alt="">
            <img class="image_grid " src="/img/oporto_3.jpg" alt="">
            <img class="image_grid " src="/img/oporto_4.jpg" alt="">

            <img class="image_grid " src="/img/oporto_6.jpg" alt="">
            <img class="image_grid " src="/img/oporto_7.jpg" alt="">
            <img class="image_grid " src="/img/oporto_8.jpg" alt="">

            <img class="image_grid " src="/img/oporto_10.jpg" alt="">
            <img class="image_grid " src="/img/oporto_12.jpg" alt="">
            <img class="image_grid " src="/img/oporto_13.jpg" alt="">

            <img class="image_grid " src="/img/oporto_15.jpg" alt="">
            <img class="image_grid " src="/img/oporto_17.jpg" alt="">
            <img class="image_grid " src="/img/oporto_18.jpg" alt="">

            <img class="image_grid " src="/img/oporto_20.jpg" alt="">
            <img class="image_grid " src="/img/oporto_21.jpg" alt="">
            <img class="image_grid " src="/img/oporto_24.jpg" alt="">


            <img class="image_grid " src="/img/oporto_23.jpg" alt="">
            <img class="image_grid " src="/img/oporto_39.jpg" alt="">

            <img class="image_grid " src="/img/oporto_26.jpg" alt="">
            <img class="image_grid " src="/img/oporto_25.jpg" alt="">


            <img class="image_grid " src="/img/oporto_30.jpg" alt="">
            <img class="image_grid " src="/img/oporto_27.jpg" alt="">
            <img class="image_grid " src="/img/oporto_29.jpg" alt="">

            <img class="image_grid " src="/img/oporto_33.jpg" alt="">
            <img class="image_grid " src="/img/oporto_31.jpg" alt="">
            <img class="image_grid " src="/img/oporto_32.jpg" alt="">

            <img class="image_grid " src="/img/oporto_34.jpg" alt="">
            <img class="image_grid " src="/img/oporto_37.jpg" alt="">
            <img class="image_grid " src="/img/oporto_40.jpg" alt="">

            <img class="image_grid " src="/img/oporto_9.jpg" alt="">
            <img class="image_grid " src="/img/oporto_36.jpg" alt="">
            <img class="image_grid " src="/img/oporto_41.jpg" alt="">

            <img class="image_grid " src="/img/oporto_56.jpg" alt="">
            <img class="image_grid " src="/img/oporto_45.jpg" alt="">

            <img class="image_grid " src="/img/oporto_47.jpg" alt="">
            <img class="image_grid " src="/img/oporto_49.jpg" alt="">
            <img class="image_grid " src="/img/oporto_48.jpg" alt="">

            <img class="image_grid " src="/img/oporto_55.jpg" alt="">
            <img class="image_grid " src="/img/oporto_60.jpg" alt="">
            <img class="image_grid " src="/img/oporto_44.jpg" alt="">

            <img class="image_grid " src="/img/oporto_57.jpg" alt="">
            <img class="image_grid " src="/img/oporto_59.jpg" alt="">
            <img class="image_grid " src="/img/oporto_58.jpg" alt="">

            <img class="image_grid " src="/img/oporto_61.jpg" alt="">
            <img class="image_grid " src="/img/oporto_63.jpg" alt="">
            <img class="image_grid " src="/img/oporto_64.jpg" alt="">

            <img class="image_grid " src="/img/oporto_66.jpg" alt="">
            <img class="image_grid " src="/img/oporto_46.jpg" alt="">
            <img class="image_grid " src="/img/oporto_65.jpg" alt="">

            <img class="image_grid " src="/img/oporto_22.jpg" alt="">
            <img class="image_grid " src="/img/oporto_43.jpg" alt="">
            <img class="image_grid " src="/img/oporto_19.jpg" alt="">
            <img class="image_grid " src="/img/oporto_50.jpg" alt="">



        </div>



        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Lightroom.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
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
                        href="https://www.behance.net/rubenartes">Behance
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

        <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
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
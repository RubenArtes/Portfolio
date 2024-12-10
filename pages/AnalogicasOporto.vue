<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between bg-black w-full fixed top-0 left-0 right-0 z-50">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logoblancoroto.svg" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email max-sm:text-[30px] max-sm:no-underline relative mix-blend-exclusion justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                    Menu
                </button>

                <!-- Navegación centrada -->
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-20 text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email mix-blend-exclusion relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
                        Menú
                    </h2>
                    <button @click="toggleSidebar"
                        class="email text-white mix-blend-exclusion relative text-[26px] max-sm:text-[20px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        &times;
                    </button>
                </div>

                <!-- Contenido de la slidebar -->
                <ul class="pt-12 flex flex-col justify-between h-full">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#contacto"
                                class="email max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Trabajos
                            </a>
                        </li>
                        <li>
                            <a href="/Servicios"
                            class="email max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            Servicios
                            </a>
                        </li>
                        <li>
                            <a href="/Sobremi"
                            class="email max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            Sobre mi
                            </a>
                        </li>
                        <li>
                            <a href="/Tienda"
                            class="email max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            Tienda
                            </a>
                        </li>
                        <li>
                            <a href="#contacto"
                            class="email max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            Contacto
                            </a>
                        </li>
                    </div>
                    <div class="columna mt-auto pb-6 flex justify-between">
                        <p>
                            Copyright 2024
                        </p>
                        <p>
                            *
                        </p>
                        <p>
                            Rubén Maldonado
                        </p>
                        <p>
                            *
                        </p>
                        <p>
                            Portfolio
                        </p>
                    </div>
                </ul>
            </div>
        </div>


        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
        class="titular2 flex px-64 gap-64 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
        <div
                class="titular text-[90px] font-['PPE-Ultralight'] font-bold leading-[120px] animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[45px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[4rem] max-sm:font-normal">
                ANALÓGICAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    FOTOGRAFÍA - ANALÓGICO - EDICIÓN -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Fotografías del viaje de Oporto realizadas con una cámara desechable de Kodak, para su posterior
                    revelado e impresión en papel mate para el proyecto de la Caja de Oporto.
                </div>

            </div>
        </div>
        <div class="fotos flex pt-32 pb-2 px-72 justify-center place-self-center max-sm:hidden">

            <Carousel class="max-w-[1000px] max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica1.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica2.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica3.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica4.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica5.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica6.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica7.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica8.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica9.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica10.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica11.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica13.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica14.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica15.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica16.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica17.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica18.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica19.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica20.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica21.png" alt="">
                </Slide>

                <template #addons>
                </template>
            </Carousel>

        </div>

        <div
            class="colum hidden max-sm:flex px-64 max-sm:pt-6 pb-2 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

            <div class="fotografias px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/fotoanalogica1.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica2.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica3.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica4.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica5.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica6.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica7.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica8.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica9.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica10.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica11.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica12.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica13.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica14.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica15.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica16.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica17.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica18.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica19.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica20.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica21.png" alt="">


            </div>

        </div>

        <div id="contacto" class="informacion max-sm:pt-24 pt-[200px] pb-64 bg-black max-sm:pb-32">
            <div class="about bg-black">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-white">
                    <div
                        class="caja2 text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-2 pb-12 leading-[10rem] cursor-pointer text-white transition-colors duration-300 hover:text-white">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] cursor-pointer text-white">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] text-lg flex gap-2 items-center max-sm:items-left max-sm:justify-start max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about bg-black pt-2">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 max-sm:grid-cols-1 text-white group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-white text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-700 transition-colors duration-300 hover:text-white">
                        Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] grid grid-cols-2 font-['Neue'] hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[14px]" src="/img/Behance2.png" />
                            Behance
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[14px]" src="/img/LinkedIn2.png" />
                            LinkedIn
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:grid-cols-1 text-white group">
                    <!-- Caja 3 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-white text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-700 transition-colors duration-300 hover:text-white">
                        Información
                    </div>
                    <!-- Información oculta por defecto y visible al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] max-sm:block hidden group-hover:block">
                        <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                            class="email text-lg flex gap-2 items-center max-lg:text-[14px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado Diciembre 2024
                        </a>
                    </div>
                </div>
            </div>


        </div>


        <div class="foter bg-black p-12 border-0 flex justify-center max-sm:grid-cols-2 text-white max-lg:p-6">
            <div class="foter_image flex flex-start max-sm:gap-2">
                <img class="vector max-lg:max-w-[15px]" src="/img/star.svg" />
            </div>
            <div class="email flex pr-12 pl-12 gap-2 justify-end items-center text-sm max-lg:text-xs">
                2024
            </div>
            <img class="vector max-lg:max-w-[15px]" src="/img/star.svg" />

        </div>

    </div>
</template>

<script>

import text from "/components/text.vue";

import VueScrollProgressBar from "/components/VueScrollProgressBar";

import { MotionPlugin } from "@vueuse/motion";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Cursor2 from "~/components/Cursor2.vue";

export default {
    data() {
        return {
            hovered: [false, false], // Se puede expandir según el número de trabajos
            imageUrlMatutano: '/img/fotorealpackaging4.png', // Imagen específica para el primer trabajo
            imageUrlOporto: '/img/oporto_31.jpg',
            imageUrlMember: '/img/member40.gif',
            imageUrlMetro: '/img/Fotolibro_RubénMaldonadoGonzález388.jpg',
            imageUrlMovistar: '/img/movistardark.gif',
            imageUrlTypenotes: '/img/caratulatypenotes.gif',
            imageUrlPrau: '/img/vinodark.gif',
            imageUrlAudiovisuales: '/img/variacionesfinal.gif',
            imageUrlYelmo: '/img/videoyelmo.gif',
            imageUrlWebESD: '/img/gifordenador3.gif',
            imageUrlFotografias: '/img/tenerife1.png',
            imageUrlGarridoGallery: '/img/fotoprincipal_1.jpg',
            imageUrlIlustraciones: '/img/animacionilustraciones2.gif',
            visible: false,
            isOpen: false, // Controla si la barra está abierta
            isHeaderFixed: false, // Nuevo estado para verificar si el header es fijo

        };

    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.handleScroll); // Añade evento de scroll
        });
    },

    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
    },
};

</script>


<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
<template class="bg-zinc-800">
    <CursorBlack class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion" />

    <div id="header" class="font-['SFUIDisplay-Light']" :class="['header', isHeaderFixed ? 'fixed-header' : '']">

        <!-- Header (header ya es sticky) -->

        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-0 bg-white backdrop-filter">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" 
                            :class="{ hidden: isOpen }"
                            src="/img/darklogo.png" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>

                <!-- Navegación centrada -->
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
                        Menú
                    </h2>
                    <button @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-sm:text-[20px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        &times;
                    </button>
                </div>

                <!-- Contenido de la slidebar -->
                <ul class="pt-12 flex flex-col justify-between h-full text-black">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#trabajos2"
                                class="email  max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
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
                        <p>Copyright 2024</p>
                        <p>*</p>
                        <p>Rubén Maldonado</p>
                        <p>*</p>
                        <p>Portfolio</p>
                    </div>
                </ul>
            </div>
        </div>

        <div
            class="caja1 text-black bg-white text-left px-20 max-sm:px-8 max-sm:text-[90px] max-sm:pt-32 pt-44 text-[170px] pb-12 font-['Neue'] cursor-pointer duration-300"
            :class="{ hidden: isOpen }">
            Tienda
        </div>





        <div class="artic grid grid-cols-2 px-[100px] gap-12 max-sm:px-6 max-sm:grid-cols-1">


            <div
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto...">
                <div class="trabajos bg-white divide-y divide-black shadow-lg">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div
                            class="caja2 text-left flex justify-between font-['Neue'] px-12 max-sm:px-6 max-sm:text-[14px] pb-6 cursor-pointer text-black">
                            <p>ARTÍCULO 1</p>
                            <p class="text-zinc-500">PRECIO: CONSULTAR</p>
                        </div>

                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] max-sm:px-6 max-sm:text-[14px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            COLECCIÓN<br>
                            <p class="text-[80px] leading-8 pb-8 pt-4 max-sm:pb-4 max-sm:text-[70px]">OPORTO</p>

                        </div>

                        <div
                            class="caja2 items-left flex flex-col text-left font-['Neue'] max-sm:px-6 max-sm:text-[14px] py-6 text-[16px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            <p>Contiene:</p>
                            <p class="text-zinc-400">Mapa de la ciudad</p>
                            <p class="text-zinc-400">Folleto con imprescindibles</p>
                            <p class="text-zinc-400">Fotolibro de alta calidad</p>
                            <p class="text-zinc-400">Azulejo con serigrafía</p>
                            <p class="text-zinc-400">Sellos</p>

                        </div>

                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-white text-black divide-x divide-zinc-200 divide-x-1">
                            <img src="/img/tienda3.png">

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                                target="_blank"
                                class="caja2 bg-white py-12 text-right items-end h-full max-sm:px-6 max-sm:py-6 max-sm:text-[26px] place-content-end flex hover:text-zinc-400 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                                Solicitar<br>
                                Compra ⤤
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto...">
                <div class="trabajos bg-white divide-y divide-black shadow-lg">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div
                            class="caja2 text-left flex justify-between font-['Neue'] px-12 max-sm:px-6 max-sm:text-[14px] pb-6 cursor-pointer text-black">
                            <p>ARTÍCULO 2</p>
                            <p class="text-zinc-500">PRECIO: 1€ / und</p>
                        </div>

                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] max-sm:px-6 max-sm:text-[14px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            COLECCIÓN<br>
                            <p class="text-[80px] leading-8 pb-8 pt-4 max-sm:pb-4 max-sm:text-[60px]">PEGATINAS</p>

                        </div>

                        <div
                            class="caja2 items-left flex flex-col text-left font-['Neue'] max-sm:px-6 max-sm:text-[14px] py-6 text-[16px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            <p>Contiene:</p>
                            <p class="text-zinc-400">Pegatinas de cars</p>
                            <p class="text-zinc-400">Pegatinas de dinosaurios</p>
                            <p class="text-zinc-400 invisible">Fotolibro de alta calidad</p>
                            <p class="text-zinc-400 invisible">Azulejo con serigrafía</p>
                            <p class="text-zinc-400 invisible">Sellos</p>

                        </div>

                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-white text-black divide-x divide-zinc-200 divide-x-1">
                            <img src="/img/tienda4.png">

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por las pegatinas..."
                                target="_blank"
                                class="caja2 bg-white py-12 text-right items-end h-full max-sm:px-6 max-sm:py-6 max-sm:text-[26px] place-content-end flex hover:text-zinc-400 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                                Solicitar<br>
                                Compra ⤤
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>





        <div id="contacto" class="informacion max-sm:pt-24 pt-[300px] pb-64 bg-white max-sm:pb-32">
            <div class="about bg-white">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
                    <div
                        class="caja2 z-0 text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] cursor-pointer text-black">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] text-lg flex gap-2 items-center max-sm:items-left max-sm:justify-start max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about bg-white pt-2">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 max-sm:grid-cols-1 text-black group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-black text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-black">
                        Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] grid grid-cols-2 font-['Neue'] hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[14px]" src="/img/Behance.png" />
                            Behance
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[14px]" src="/img/LinkedIn.png" />
                            LinkedIn
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:grid-cols-1 text-black group">
                    <!-- Caja 3 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-black text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-black">
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



        <div class="foter bg-zinc-80white0 p-12 border-0 flex justify-center max-sm:grid-cols-2 text-black max-lg:p-6">
            <div class="foter_image flex flex-start max-sm:gap-2">
                <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />
            </div>
            <div class="email flex pr-12 pl-12 gap-2 justify-end items-center text-sm max-lg:text-xs">
                2024
            </div>
            <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />

        </div>
    </div>



</template>

<script scoped>
import text from "/components/text.vue";

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from "/components/VueScrollProgressBar";

import { MotionPlugin } from "@vueuse/motion";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Cursor2 from "~/components/Cursor2.vue";
import CursorBlack from "~/components/CursorBlack.vue";


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
      @apply text-zinc-500
  
  .image
    @apply transition ease-in-out delay-150
    &:hover
      @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm
  .animate-text
    opacity: 1
    transition: opacity 2s
  .image_logo
    @apply opacity-100
    &:hover
      @apply opacity-60
  
  .red
    &:hover
        @apply text-zinc-300
  
  .app.animate-enter
    opacity: 1

.fixed-header 
    @apply fixed top-0 w-full z-50

</style>
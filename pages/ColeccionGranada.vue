<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[100000] bg-black backdrop-filter">
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
                            <a href="/IntroDark#trabajos2"
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


        <VueScrollProgressBar background-color="#ffffff" />
        <div
            class="colum max-sm:hidden divide-x-1 grid grid-cols-2 pb-10 text-white justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="div1 pt-2 border border-zinc-200 border-t-0 border-l-0 border-r-0 border-b-0">
                <div
                    class="info_secondary max-[1500px]:px-24 max-[1500px]:pt-12 max-[1500px]:pb-32 z-20 bg-black border border-t-0 border-r-0 border-l-0 max-[1920px]:px-[12rem] px-[17rem] pb-44 place-items-start pt-32 flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular max-[1500px]:text-[50px] text-[30px] font-['PPE-UltralightItalic'] leading-3 font-normal text-[#f1f1f1] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                        Colección</div>
                    <div
                        class="titular max-[1500px]:text-[50px] text-[50px] font-['PPE-Ultralight'] leading-8 font-normal text-[#ee8349] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                        GRANADA</div>
                    <div
                        class="text max-[1500px]:text-[12px] max-w-[60ch] text-[16px] text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                        FOTOGRAFÍAS - AGOSTO 2024 - LIBRE - VIAJE - PAISAJES</div>
                    <div
                        class="text text-[16px] font-['SFUIDisplay-Light'] text-white max-xl:text-sm max-[1500px]:text-[14px] max-[1500px]:max-w-[100ch]">
                        Fotografías realizadas de paisaje libre por las zonas de Granada, desde la ciudad y el centro
                        como las zonas, de la
                        Alhambra, los Palacios Nazaries y el Generalife.


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

                <NuxtImg class="fotografia" src="/img/granada17.png" />
                <NuxtImg class="fotografia" src="/img/granada.png" />
                <NuxtImg class="fotografia" src="/img/granada3.png" />
                <NuxtImg class="fotografia" src="/img/granada5.png" />
                <NuxtImg class="fotografia" src="/img/granada6.png" />
                <NuxtImg class="fotografia" src="/img/granada7.png" />
                <NuxtImg class="fotografia" src="/img/granada8.png" />
                <NuxtImg class="fotografia" src="/img/granada9.png" />
                <NuxtImg class="fotografia" src="/img/granada10.png" />
                <NuxtImg class="fotografia" src="/img/granada11.png" />
                <NuxtImg class="fotografia" src="/img/granada12.png" />
                <NuxtImg class="fotografia" src="/img/granada13.png" />
                <NuxtImg class="fotografia" src="/img/granada14.png" />
                <NuxtImg class="fotografia" src="/img/granada15.png" />
                <NuxtImg class="fotografia" src="/img/granada16.png" />
                <NuxtImg class="fotografia" src="/img/granada18.png" />
                <NuxtImg class="fotografia" src="/img/granada19.png" />
                <NuxtImg class="fotografia" src="/img/granada20.png" />
                <NuxtImg class="fotografia" src="/img/granada21.png" />
                <NuxtImg class="fotografia" src="/img/granada22.png" />
                <NuxtImg class="fotografia" src="/img/granada23.png" />
                <NuxtImg class="fotografia" src="/img/granada24.png" />
                <NuxtImg class="fotografia" src="/img/granada25.png" />
                <NuxtImg class="fotografia" src="/img/granada26.png" />
                <NuxtImg class="fotografia" src="/img/granada27.png" />
                <NuxtImg class="fotografia" src="/img/granada28.png" />
                <NuxtImg class="fotografia" src="/img/granada29.png" />
                <NuxtImg class="fotografia" src="/img/granada30.png" />
                <NuxtImg class="fotografia" src="/img/granada31.png" />
                <NuxtImg class="fotografia" src="/img/granada32.png" />
                <NuxtImg class="fotografia" src="/img/granada33.png" />
                <NuxtImg class="fotografia" src="/img/granada34.png" />
                <NuxtImg class="fotografia" src="/img/granada35.png" />
                <NuxtImg class="fotografia" src="/img/granada36.png" />
                <NuxtImg class="fotografia" src="/img/granada37.png" />
                <NuxtImg class="fotografia" src="/img/granada38.png" />
                <NuxtImg class="fotografia" src="/img/granada39.png" />
                <NuxtImg class="fotografia" src="/img/granada40.png" />
                <NuxtImg class="fotografia" src="/img/granada41.png" />
                <NuxtImg class="fotografia" src="/img/granada42.png" />



            </div>
        </div>

        <div
            class="titular2 max-sm:border-0 hidden max-sm:flex max-sm:pt-32 px-64 gap-64 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[60px] font-['PPE-Ultralight'] leading-12 font-bold text-[#f1f1f1] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                GRANADA</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    FOTOGRAFÍAS - AGOSTO 2024 - LIBRE - VIAJE - PAISAJES</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Fotografías realizadas de paisaje libre por las zonas de Granada, desde la ciudad y el centro como
                    las zonas, de la
                    Alhambra, los Palacios Nazaries y el Generalife.
                </div>

            </div>
        </div>



        <div class="max-sm:grid max-sm:gap-4 max-sm:grid-cols-1 max-sm:pb-12 max-sm:px-4 hidden">

            <NuxtImg class="fotografia" src="/img/granada17.png" />
            <NuxtImg class="fotografia" src="/img/granada.png" />
            <NuxtImg class="fotografia" src="/img/granada3.png" />
            <NuxtImg class="fotografia" src="/img/granada5.png" />
            <NuxtImg class="fotografia" src="/img/granada6.png" />
            <NuxtImg class="fotografia" src="/img/granada7.png" />
            <NuxtImg class="fotografia" src="/img/granada8.png" />
            <NuxtImg class="fotografia" src="/img/granada9.png" />
            <NuxtImg class="fotografia" src="/img/granada10.png" />
            <NuxtImg class="fotografia" src="/img/granada11.png" />
            <NuxtImg class="fotografia" src="/img/granada12.png" />
            <NuxtImg class="fotografia" src="/img/granada13.png" />
            <NuxtImg class="fotografia" src="/img/granada14.png" />
            <NuxtImg class="fotografia" src="/img/granada15.png" />
            <NuxtImg class="fotografia" src="/img/granada16.png" />
            <NuxtImg class="fotografia" src="/img/granada18.png" />
            <NuxtImg class="fotografia" src="/img/granada19.png" />
            <NuxtImg class="fotografia" src="/img/granada20.png" />
            <NuxtImg class="fotografia" src="/img/granada21.png" />
            <NuxtImg class="fotografia" src="/img/granada22.png" />
            <NuxtImg class="fotografia" src="/img/granada23.png" />
            <NuxtImg class="fotografia" src="/img/granada24.png" />
            <NuxtImg class="fotografia" src="/img/granada25.png" />
            <NuxtImg class="fotografia" src="/img/granada26.png" />
            <NuxtImg class="fotografia" src="/img/granada27.png" />
            <NuxtImg class="fotografia" src="/img/granada28.png" />
            <NuxtImg class="fotografia" src="/img/granada29.png" />
            <NuxtImg class="fotografia" src="/img/granada30.png" />
            <NuxtImg class="fotografia" src="/img/granada31.png" />
            <NuxtImg class="fotografia" src="/img/granada32.png" />
            <NuxtImg class="fotografia" src="/img/granada33.png" />
            <NuxtImg class="fotografia" src="/img/granada34.png" />
            <NuxtImg class="fotografia" src="/img/granada35.png" />
            <NuxtImg class="fotografia" src="/img/granada36.png" />
            <NuxtImg class="fotografia" src="/img/granada37.png" />
            <NuxtImg class="fotografia" src="/img/granada38.png" />
            <NuxtImg class="fotografia" src="/img/granada39.png" />
            <NuxtImg class="fotografia" src="/img/granada40.png" />
            <NuxtImg class="fotografia" src="/img/granada41.png" />
            <NuxtImg class="fotografia" src="/img/granada42.png" />



        </div>


        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <NuxtImg class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Lightroom.svg" alt="" />
                    <NuxtImg class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="" />
                </div>
            </div>
        </div>

        <div
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <NuxtImg class="vector" src="/img/Vector-11white.svg" />
            </a>
            <div class="links flex flex-col gap-2 text-white">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <NuxtImg class="vector" src="/img/Vector-11white.svg" />
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">Behance
                        <NuxtImg class="vector" src="/img/Vector-11white.svg" />
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <NuxtImg class="vector" src="/img/Vector-11white.svg" />

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <NuxtImg class="vector" src="/img/Vector-11white.svg" />
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <NuxtImg class="vector max-xl:max-w-[15px]" src="/img/star.svg" />
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <NuxtImg class="vector max-xl:max-w-[15px]" src="/img/futbol.svg" />
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
        this.initLazyLoad();
    },
    methods: {
        initLazyLoad() {
            let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

            // Verifica si el navegador soporta IntersectionObserver
            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                }, {
                    rootMargin: '50px 0px', // Cargar imágenes un poco antes de que entren en el viewport
                    threshold: 0.01 // Cargar cuando el 1% de la imagen es visible
                });

                lazyImages.forEach(function (lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            } else {
                // Fallback para navegadores sin IntersectionObserver
                lazyImages.forEach(function (lazyImage) {
                    lazyImage.src = lazyImage.dataset.src;
                });
            }
        },
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
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
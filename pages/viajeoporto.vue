<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor class="mix-blend-exclusion" />
        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[100000] bg-white backdrop-filter">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-[99999] max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" src="/img/darklogo.png" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-[99999] p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-white"
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
                <ul class="pt-12 flex flex-col justify-between h-full relative z-[99999] text-black">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#contacto"
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

        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 max-sm:pb-4 max-[1500px]:pt-12 max-[1500px]:content-center flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pb-32 pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568]  ">
                PORTO</div>
            <div
                class="trabajos gap-6 flex flex-col max-sm:gap-2 max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:justify-center items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:max-w-[70ch] font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Videos de abordo de todos los lugares importantes y perspectivas interesantes personales sobre
                    el viaje,
                    para ampliar material e información de los demás apartados, dandole
                    un valor más, contando cosas en movimiento y no en una sola imagen estática.
                </div>

            </div>
        </div>

        <div
            class="colum max-sm:pb-32 max-sm:pt-4 max-[1500px]:pt-12 max-[1500px]:px-32 flex pt-20 px-24 pb-44 text-white gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-16 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#b9c9ff] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">3 días por</p> OPORTO
                    </div>
                    <div
                        class="text text-[20px] font-['Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Estos videos son una recopilación más extensa de lo que estuve viendo durante estos tres
                        días,
                        los lugares emblemáticos de la ciudad, los monumentos, las calles y su gente, los
                        detalles.
                        Estos videos
                        sirven para ampliar el contenido de la caja y del material visual en imágenes. Estos
                        vidoes
                        muestran la visión entera
                        del lugar al que iba y se puede ver con todo detalle como son cada lugar y que es lo que
                        yo
                        veía en cada sitio bajo mi
                        punto de vista personal.
                        <br> <br>
                        Este material es exclusivo accesible a partir del QR de la caja ya que contiene
                        elementos de
                        apoyo al trabajo para hacerlo
                        más dinámico y enriquecedor.
                        Aqui se muestran lugares como:

                        <div class="pt-12 grid grid-cols-2 max-sm:gap-10 max-sm:pt-6 max-sm:pb-16">
                            <p class="text-[15px] text-zinc-400 max-sm:text-[13px]">
                                <br> <br>
                                * São Bento
                                <br>* Catedral do Porto
                                <br>* Puente de Don Luis I
                                <br>* Livraria Lello
                                <br>* Parque Das Virtudes
                                <br>* Torre dos Clérigos
                                <br>* Igreja de Santo Ildefonso
                                <br>* Capela das Almas
                                <br>* Mercado do Bolhão
                                <br>* McDonalds Imperial
                                <br>* Prometeu Artesanato
                                <br>* Igreja da Misericórdia
                                <br>* Cementério de Agramonte
                                <br>* Jardim da Rounda da Boavista
                            </p>
                            <p class="text-[15px] text-zinc-400 max-sm:text-[13px]">
                                <br>
                                <br>* Residencia LIS B&B
                                <br>* Praça Marqués de Pombal
                                <br>* Estación de Camphanã
                                <br>* Santa Franceshina
                                <br>* Cementério do Prado do Repouso
                                <br>* Church of Santa Clara
                                <br>* Puente do Infante
                                <br>* Jardim do Morro
                                <br>* Monastery of Serra do Pilar
                                <br>* Capela de Atkinson
                                <br>* Igreja Paroquial de Santa Marinha
                                <br>* Jardim do Palacio de Cristal
                                <br>* Museo | Casa de Serralvés
                                <br>* Igreja Paroquial do Nosso Senhor do Bonfim

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fotografias">

                <Carousel class="carousel max-w-[600px]">

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
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto9.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto10.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto11.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto13.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto14.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto15.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto16.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto17.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto20.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>


                    <template #addons>
                        <Navigation />
                        <Pagination class="bg-[#ffffff]" />
                    </template>
                </Carousel>

            </div>
        </div>


        <div id="contacto" class="informacion max-sm:pt-0 pt-[300px] pb-24 bg-black max-sm:pb-0">

            <div class="about bg-black">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
                    <div
                        class="caja2 text-white max-sm:text-zinc-500 max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-zinc-400">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-4 px-20 leading-[10rem] font-['Neue'] cursor-pointer text-white">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] max-sm:text-zinc-500 max-sm:text-[18px] max-sm:leading-10 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about bg-black pt-2">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 items-center max-sm:grid-cols-1 text-white group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                        class="caja2 max-sm:text-zinc-500 text-white max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-white transition-colors duration-300 hover:text-zinc-400">
                        Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-4 px-20 text-[20px] grid grid-cols-2 font-['Neue']  hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red text-white flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Behance2.png" />
                            Behance
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/LinkedIn2.png" />
                            LinkedIn
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/redbubblewhite.svg" />
                            Redbubble
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://es.pinterest.com/maldonadoruben_" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/pinterestwhite.svg" />
                            Pinterest
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45"
                                src="/img/Vector-11white.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:pb-12 max-sm:grid-cols-1 text-white group">
                    <!-- Caja 3 -->
                    <div
                        class="caja2 max-sm:text-zinc-500 text-white max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-zinc-400">
                        Información
                    </div>
                    <!-- Información oculta por defecto y visible al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-4 px-20 text-[20px] leading-[10rem] font-['Neue'] max-sm:block hidden group-hover:block">
                        <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                            class="email text-[50px] max-sm:text-zinc-500 leading-[60px] max-[1920px]:text-[45px] max-sm:text-[18px] max-sm:leading-7 flex gap-2 items-center max-lg:text-[14px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado
                            Diciembre 2024
                        </a>
                    </div>
                </div>
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
<template class="bg-zinc-800">
    <Cursor class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion" />

    <div id="header" class="font-['SFUIDisplay-Light'] bg-zinc-800"
        :class="['header', isHeaderFixed ? 'fixed-header' : '']">

        <!-- Header Sticky con efecto de transparencia y z-index superior -->
        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-50">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/Intro">
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
                            <a href="/Intro#trabajos2"
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


        <div
            class="caja1 bg-zinc-800 text-left px-20 max-sm:px-8 max-sm:text-[90px] max-sm:pt-32 pt-44 text-[170px] pb-12 font-['Neue'] cursor-pointer text-white duration-300 ">
            Servicios
        </div>

        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[0px]">
                Fotografía
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna max-[1920px]:hidden">
                    </div>
                    <div class="columna w-[620px] max-sm:w-200px">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Sesiones fotográficas interior
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Sesiones fotográficas exterior
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Fotografía naturaleza / urbana
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Fotografía de producto
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Control de equipo profesional
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Edición de fotografía
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Photoshop & Lightroom
                        </p>
                    </div>

                </div>

            </div>
        </div>


        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[0px]">
                Ilustración
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna">
                    </div>
                    <div class="columna w-[620px]">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Ilustración digital
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Ilustración tradicional
                        </p>

                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Iconos, pictogramas y microilustraciones
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Procreate, Photoshop & Illustrator
                        </p>
                    </div>

                </div>

            </div>
        </div>


        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[300px] max-sm:leading-[2rem]">
                Web / Programación
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna">
                    </div>
                    <div class="columna w-[620px]">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            HTML & CSS (sass / tailwind)
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Creaciòn de webs con Nuxt y Vue
                        </p>

                    </div>

                </div>

            </div>
        </div>


        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[300px] max-sm:leading-[2rem]">
                Creación de marca
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna">
                    </div>
                    <div class="columna w-[620px]">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Narrativa de marca
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Branding
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Creación de marca y aplicaciones
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Logotipo / Identidad visual
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Manual de marca
                        </p>
                    </div>

                </div>

            </div>
        </div>



        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                    class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[0px]">
                    Audiovisuales
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna">
                    </div>
                    <div class="columna w-[620px]">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Motion Graphics
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Contenido audiovisual
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Contenido para redes sociales
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Rotoscopia
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Animación
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Chroma
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Edición de video
                        </p>
                    </div>

                </div>

            </div>
        </div>

        <div class="trabajos bg-zinc-800">
            <div
                class="categoria1 mx-20 max-[1920px]:mx-20 max-sm:mx-8 pt-20 pb-20 bg-zinc-800 flex self-start border border-l-0 border-r-0 max-sm:flex-col max-sm:pb-8 max-sm:pt-8">
                <p
                class="titulo bg-zinc-800 w-[1220px] self-start text-white leading-none text-[40px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-6 max-sm:pb-6 max-sm:w-[0px]">
                Maquetación
                </p>
                <div class="trabajosgrid flex justify-self-start justify-start justify-items-start text-left">
                    <div class="columna">
                    </div>
                    <div class="columna">
                    </div>
                    <div class="columna w-[620px]">
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Cartelería
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Revistas, libros & fanzines
                        </p>
                        <p
                            class="titulo bg-zinc-800 text-white text-[30px] max-sm:text-[14px] max-sm:pb-1 gap-2 max-lg:text-xs cursor-pointer hover:text-zinc-500">
                            Folletos & anuncios
                        </p>
                    </div>

                </div>

            </div>
        </div>

        <div class="about bg-zinc-800 pt-2">


            <div id="contacto" class="informacion max-sm:pt-24 pt-[300px] pb-64 bg-zinc-800 max-sm:pb-32">
                <div class="about bg-zinc-800">
                    <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-white">
                        <div
                            class="caja2 text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-white transition-colors duration-300 hover:text-white">
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
                <div class="about bg-zinc-800 pt-2">


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
                                Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado Diciembre
                                2024
                            </a>
                        </div>
                    </div>
                </div>


            </div>


            <div class="foter bg-zinc-800 p-12 border-0 flex justify-center max-sm:grid-cols-2 text-white max-lg:p-6">
                <div class="foter_image flex flex-start max-sm:gap-2">
                    <img class="vector max-lg:max-w-[15px]" src="/img/star.svg" />
                </div>
                <div class="email flex pr-12 pl-12 gap-2 justify-end items-center text-sm max-lg:text-xs">
                    2024
                </div>
                <img class="vector max-lg:max-w-[15px]" src="/img/star.svg" />

            </div>
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
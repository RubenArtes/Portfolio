<template>
    <div class="app bg-black font-['Migra-Regular']">
        <Cursor />
        <div
            class="header bg-black border-0 p-10 flex px-24 text-white justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border-b-0">
            <div class="image flex flex-start justify-items-start">
                <NuxtLink to="/">
                    <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
                </NuxtLink>
            </div>

            <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11white.svg">
            </div>

        </div>
        <VueScrollProgressBar background-color="white" />
        <div
            class="titular2 flex px-64 gap-52 content-start space-between justify-center pt-20 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['Domaine-Display'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#EB595A] via-[#bc3f3f] to-[#f77b7b] ">
                MOVISTAR +</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Audiovisuales - Movistar - Identidad - After Effects
                </div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Este trabajo consiste en crear 3 videos diferentes de transiciones y efectos para el diseño de
                    animación de las cortinillas de Movistar. Una cortinilla básica para el cambio entre programa y
                    anuncio, una cortinilla que avise en que categoría estás y otra para avisarte de los estrenos.
                    Realizado todo con After Effects.

                </div>

            </div>
        </div>


        <div
            class="trabajos flex pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] text-center font-['Domaine-Display'] uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Iniciación al diseño Audiovisual, 2º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Cortinillas informativas para programa de televisión o canal audiovisual.
                </div>
            </div>
        </div>

        <div
            class="video flex pt-20 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video drop-shadow-lg" width="1240" height="788" loop autoplay>
                <source src="/img/Cortinilla_5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect">
                <div class="info_secondary flex flex-col gap-8 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular uppercase text-[20px] font-['Domaine-Display'] text-left leading-10 font-normal text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        Idents Movistar - Cortinillas</div>

                    <div class="grid grid-cols-3 gap-24 max-sm:grid-cols-1 max-sm:gap-6">
                        <div
                            class="text text-left grid-cols-3 text-[18px] font-['SFUIDisplay-Light'] text-white max-w-[120ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                            > Para este proyecto he elegido Movistar Plus, en general la identidad que trae consigo los
                            canales de movistar, ya sea estrenos, series o las entradillas de continuidad que te indican
                            que estas en un canal de esta marca. Me gusta la estética que utilizan tan minimalista y con
                            figuras geométricas y pensé que sería interesante para hacer mi propia versión y propuesta
                            para alguna de las soluciones mencionadas antes.
                            Por ello lo que yo he hecho ha sido conservar sus colores, la tipografía, el logo y los
                            elementos y detalles que suelen incluir (lineas, simbolos de más y multiplicación) y los
                            sonidos.
                        </div>
                        <div
                            class="text text-left grid-cols-3 text-[18px] font-['SFUIDisplay-Light'] text-white max-w-[120ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">

                            > Mi propuesta viene en implementar un elemento 3D como un cubo (manteniendo la estética
                            de figuras geométricas) ya que suelen utilizar elementos planos y sin relieve o
                            profundidad, por eso yo quería darle ese juego personal que le pegaría a la estética que
                            persiguen. Además el uso del sonido y de los elementos comunes los he ido adapantado al
                            resultado de una forma personal aunque queríendo llegar a un resultado que perfectamente
                            Movistar puediera utilizar en sus canales y se asemejase a los que tienen.
                        </div>
                        <div
                            class="text text-left grid-cols-3 text-[18px] font-['SFUIDisplay-Light'] text-white max-w-[120ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                            > He creado una serie de plantillas con las composiciones y pre
                            composiciones las cuales van evolucionando. Todas parten de una inicial que mantiene
                            elementos y movimientos para mantener la uniformidad pero a partir de la mitad del
                            tiempo hasta el final varían dependiendo del contenido que tienen que anunciar. Se han
                            establecido elementos comunes y luego se han ido creando variantes y distintas
                            soluciones.
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div id="sellos"
            class="titular2 flex px-64 pb-24 gap-64 pt-24 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
        </div>


        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-12 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-12">
            <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-4">
                <div class="color w-[150px] h-[150px]  bg-[#E88AB4]">
                </div>
                <div class="color w-[150px] h-[150px]  bg-[#0C4C5A]">
                </div>
                <div class="color w-[150px] h-[150px]  bg-[#53B687]">
                </div>
                <div class="color w-[150px] h-[150px]  bg-[#EB595A]">
                </div>
            </div>
            <div class="columna2 grid gap-16">
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-white font-bold">HEX : #E88AB4
                        <br><br>
                        R - 232 <br>
                        G - 138<br>
                        B - 180
                    </a>

                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-white font-bold">HEX : #0C4C5A
                        <br><br>
                        R - 12<br>
                        G - 76<br>
                        B - 90
                    </a>
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-white font-bold">HEX : #53B687
                        <br><br>
                        R - 83<br>
                        G - 182<br>
                        B - 135
                    </a>

                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-white font-bold">HEX : #EB595A
                        <br><br>
                        R - 235<br>
                        G - 89<br>
                        B - 90
                    </a>
                </div>
            </div>


        </div>

        <div
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-12 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:hidden">
            <div class="color w-[200px] h-[200px]  bg-[#E88AB4]">
            </div>
            <div class="color w-[200px] h-[200px]  bg-[#0C4C5A]">
            </div>
            <div class="color w-[200px] h-[200px]  bg-[#53B687]">
            </div>
            <div class="color w-[200px] h-[200px]  bg-[#EB595A]">
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-white font-bold">HEX : #E88AB4
                    <br><br>
                    R - 232 <br>
                    G - 138<br>
                    B - 180
                </a>
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-white font-bold">HEX : #0C4C5A
                    <br><br>
                    R - 12<br>
                    G - 76<br>
                    B - 90
                </a>
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-white font-bold">HEX : #53B687
                    <br><br>
                    R - 83<br>
                    G - 182<br>
                    B - 135
                </a>
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-white font-bold">HEX : #EB595A
                    <br><br>
                    R - 235<br>
                    G - 89<br>
                    B - 90
                </a>
            </div>

        </div>

        <div id="sellos"
            class="titular2 flex px-64 pb-24 gap-64 pt-6 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                TIPOGRAFÍA</div>
        </div>

        <div
            class="grid grid-rows-1 gap-12 items-center justify-items-center pt-12 px-32 pb-32 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:gap-8 max-sm:pt-0">

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Light'] text-[240px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Light
            </div>


            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Regular'] text-[240px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Regular
            </div>

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Medium'] text-[240px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Medium
            </div>

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Bold'] text-[240px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Bold
            </div>

        </div>

        <div id="sellos"
            class="titular2 flex px-64 pb-20 gap-64 pt-24 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                ELEMENTOS GRÁFICOS</div>
        </div>

        <div
            class="grid grid-cols-3 grid-rows-1 gap-24 items-center justify-items-center pt-12 px-32 pb-2 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:pt-0 max-sm:gap-24">
            <img class="image_grid w-full h-full" src="/img/movistarplus1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/movistarplus3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/movistarplus2.png" alt="">

        </div>

        
        <div
            class="grid grid-cols-3 grid-rows-1 gap-24 items-center justify-items-center pt-12 px-32 pb-64 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:gap-8 max-sm:hidden">
            <a class="color text-white font-regular">Elemento principal de las composiciones</a>
            <a class="color text-white font-regular">Cruces - elementos secundarios</a>
            <a class="color text-white font-regular">Logotipo de Movistar + utilizado</a>

        </div>

        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-white flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-60">
            <div
                class="titular text-[16px] font-['SFUIDisplay-Light'] leading-6 font-normal flex flex-start items-center max-xl:text-xs">
                Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-100 hover:opacity-60 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Cinema4d.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-60">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11white.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
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
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
};


import PlvPointer from "/components/Cursor.vue";

</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-50">
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


        <VueScrollProgressBar background-color="white" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[60px]">
                EDITORIAL</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Rediseño Editorial - Maquetación - Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Este trabajo consiste en el rediseño de un libro, en este caso se rediseña el ejemplar de Edward de
                    Bono - El pensamiento Lateral. Con la misión de crear una solución más visual, simplificada y
                    atractiva para el espectador alejandose de su diseño anterior.
                </div>
            </div>
        </div>

        <div
            class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Regular'] text-center max-sm:text-left max-sm:max-w-[26ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Diseño editorial, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Regular']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    1 - 2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Regular'] max-sm:text-left text-[16px] leading-6 text-white max-xl:text-sm max-[1440px]:max-w-[60ch]">
                    Rediseño de maquetación de libro.
                </div>
            </div>
        </div>

        <div
            class="video flex max-sm:px-0 pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/Comp_1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>



        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Colección</p>DE LIBROS
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Mi idea de maquetación
                        final ha sido crear un
                        libro que pueda basarse en una maquetación formal
                        de una sola columna, fácil de leer y con una
                        maquetación limpia y con espacio en blanco, ayudada
                        de elementos como pie de página, nombre
                        del libro etc, tanto para dar información como
                        para componer. A raíz de esta maquetación habrá
                        frases y textos que cambiarán su forma, tipografía
                        y color y romperán con la retícula base para
                        atribuirle un efecto de diseño diferente, pero
                        partiendo del formalismo de la retícula y que no
                        se haga tan monótona la lectura seguida de texto.
                        <br>
                        <br>
                        Con esta maquetación he buscado un rediseño
                        sencillo para la lectura, el lector y la fácil comprensión
                        del contenido sin encontrarse con una
                        maquetación ambigua. He creado una maquetación
                        fácil de usar en los diferentes modelos de libro,
                        fácil de adaptar y modificar por la estructura
                        y como pueden implementarse los cambios tanto
                        en portadas como en la estructura interior,
                        creando así un sistema completo de libros sobre
                        diseño. <br>
                        <br>
                        Todo se mantendrá bajo fondo blanco pero habrá
                        páginas importantes y puntuales que serán de
                        fondo negro y con diferente papel para atribuirle
                        distinción y funcionen mejor con la maquetación.
                        Para la maquetación final realicé los diferentes
                        apartados: cubiertas, portadas interiores en
                        el reverso de la cubierta como portadilla, página
                        de copyright y agradecimientos, página de contenidos
                        (indice) y el prologo, además de la maquetación
                        de la introducción y el resumen y un capítulo
                        entero.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect" src="/img/Rectangle_5.png" alt="">
                <img class="image_rect" src="/img/Rectangle_6.png" alt="">
                <img class="image_rect" src="/img/Rectangle_7.png" alt="">
            </div>
        </div>

        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Tipografías</p>DEL SISTEMA
            </div>
            <div
                class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Muestra de la
                tipografía general utilizada y
                la jerarquía
                para componer los textos a lo largo del libro. Utilización de varias tipografías: Futura Std, Trola y
                Gravity.
            </div>

            <div class="grid grid-cols-1 max-sm:pt-12">
                <img class="image_grid w-full h-full pb-6 max-xl:pb-8" src="/img/tipo.png" alt="">
            </div>
        </div>

        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Selección</p>DE PÁGINAS
            </div>
            <div
                class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Muestra de la
                maquetación de algunas páginas.
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1 max-sm:pt-12 max-sm:px-4">
            <img class="image_grid w-full h-full" src="/img/paginalibro2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/paginalibro3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/paginalibro4.png" alt="">
            <img class="image_grid w-full h-full" src="/img/paginalibro5.png" alt="">
            <img class="image_grid w-full h-full" src="/img/paginalibro6.png" alt="">
            <img class="image_grid w-full h-full" src="/img/imgpaginas10.png" alt="">
        </div>
        <div
            class="images pt-20 max-sm:pt-24 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Mockups</p>DE LAS CUBIERTAS
            </div>
            <div
                class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Mockups de las cubiertas y de algunas páginas individuales 
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1 max-sm:pt-12 max-sm:px-4">
            <img class="image_grid w-full h-full" src="/img/Mockupportadas2.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Mockupportadas.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Mockupportadas3.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas1.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas2.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas3.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas4.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas5.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/mockuppaginas6.jpg" alt="">
        </div>


        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank"
                class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <img class="vector" src="/img/Vector-11.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">Behance
                        <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <img class="vector" src="/img/Vector-11.svg">
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

<script setup>


</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
.image_logo
  @apply opacity-100
  &:hover
    @apply opacity-60


  </style>
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

        <VueScrollProgressBar background-color="white" />
        <div id="navegacion"
            class="titular2 max-[1500px]:pt-12 flex px-64 gap-64 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#EB595A] via-[#bc3f3f] to-[#f77b7b] max-sm:text-center max-sm:leading-[60px]">
                MOVISTAR +</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Audiovisuales - Movistar - Identidad - After Effects
                </div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Este trabajo consiste en crear 3 videos diferentes de transiciones y efectos para el diseño de
                    animación de las cortinillas de Movistar. Una cortinilla básica para el cambio entre programa y
                    anuncio, una cortinilla que avise en que categoría estás y otra para avisarte de los estrenos.
                    Realizado todo con After Effects.

                </div>

            </div>
        </div>

        <div
        class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
        <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                    <div
                    class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Iniciación al diseño Audiovisual, 2º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
              <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                2 meses
                </div>
            </div>
            <div class="info flex flex-col">
              <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                Cortinillas informativas para programa de televisión o canal audiovisual.
                </div>
            </div>
        </div>

        <div
            class="video flex max-sm:hidden pt-20 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video drop-shadow-lg" width="1240" height="788" loop autoplay controls>
                <source src="/img/Cortinilla_5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="video hidden max-sm:flex pt-20 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video drop-shadow-lg" width="1240" height="788" loop controls>
                <source src="/img/Cortinilla_5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>


        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1440px]:px-32">
            <div class="info_proyect">
                <div class="info_secondary flex flex-col gap-8 sticky top-32 max-[1500px]:gap-12">
                    <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Idents/Cortinilla</p>MOVISTAR PLUS</div>

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
            class="titular2 flex px-64 pb-24 gap-64 pt-24 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Paleta</p>DE COLOR</div>
        </div>


        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-12 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-12">
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
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-12 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
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
            class="titular2 flex px-64 pb-24 gap-64 pt-6 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] max-sm:pt-16 font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                TIPOGRAFÍAS</div>
        </div>

        <div
            class="grid max-[1440px]:px-12 max-[1440px]:gap-4 grid-rows-1 gap-12 items-center justify-items-center pt-12 px-32 pb-32 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:gap-8 max-sm:pt-0">

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Light'] text-[240px] max-[1440px]:text-[150px] max-[1920px]:text-[130px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Light
            </div>


            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Regular'] text-[240px] max-[1920px]:text-[170px] max-[1440px]:text-[130px]  max-[1920px]:max-w-[140ch] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Regular
            </div>

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Medium'] text-[240px] max-[1920px]:text-[180px] max-[1440px]:text-[130px]  max-[1920px]:max-w-[140ch] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Medium
            </div>

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Apercu-Bold'] text-[240px] max-[1920px]:text-[200px] max-[1440px]:text-[130px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[40px]">
                Apercu Pro Bold
            </div>

        </div>

        <div id="sellos"
            class="titular2 flex px-64 pb-20 gap-64 pt-24 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] max-sm:pt-16 font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Elementos</p>GRAFICOS</div>
        </div>

        <div
            class="grid max-[1440px]:px-12 grid-cols-3 grid-rows-1 gap-24 items-center justify-items-center pt-12 px-32 pb-2 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:pt-0 max-sm:gap-24">
            <img class="image_grid w-full h-full" src="/img/movistarplus1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/movistarplus3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/movistarplus2.png" alt="">

        </div>


        <div
            class="grid grid-cols-3 grid-rows-1 gap-24 items-center justify-items-center pt-12 px-32 pb-64 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:gap-8 max-sm:hidden">
            <a class="color text-white font-regular">Elemento principal de las composiciones</a>
            <a class="color text-white font-regular">Cruces - elementos secundarios</a>
            <a class="color text-white font-regular">Logotipo de Movistar + utilizado</a>

        </div>

        <div id="contacto" class="informacion max-sm:pt-24 pt-[300px] pb-64 bg-black max-sm:pb-32">
            <div class="about bg-black">
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
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
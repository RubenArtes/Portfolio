<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between w-full bg-black fixed top-0 left-0 right-0 z-50">
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


        <VueScrollProgressBar background-color="#ffffff" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[60px]">
                VISUALES</div>
            <div
                class="trabajos flex max-sm:gap-2 flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-2 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-sm:pt-4 max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Modelado 3d - Cinema 4d - After Effects - Animación - Blender
                </div>
                <div
                    class="text max-sm:pt-4 max-w-[80ch] max-[1500px]:pt-12 pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Creación de diferentes trabajos para distintas asignaturas, creando piezas audiovisuales que mezclan
                    las destrezas del 3D, la animación frame a frema con dibujos, animaciones creadas mediante After
                    Effects y diferentes recursos gráficos para crear composiciones audiovisuales.

                </div>

            </div>
        </div>

        <div
            class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-zinc-200 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] max-[1500px]:max-w-[30ch] text-center max-sm:text-left max-sm:max-w-[16ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Animación, Modelado 3D y Audiovisuales, Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-200 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 text-zinc-200 max-xl:text-sm max-xl:max-w-[40ch]">
                    Indefinido
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-100 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-100 max-xl:text-sm max-xl:max-w-[40ch]">
                    Creación de piezas y proyectos visuales.
                </div>
            </div>
        </div>

        <div
            class="video flex max-sm:hidden pt-20 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video shadow-zinc-600 shadow-sm" width="1240" height="788" loop autoplay>
                <source src="/img/animacionpc.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <img class="hidden max-sm:flex pb-24 pt-6" src="/img/animacionpc.gif">

        <div id="tipografias"
            class="titular2 text-white pt-32 flex px-64 pb-4 pt-12 gap-64 content-center space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-32  max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralightitalic'] text-center leading-10 text-wite max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-center max-sm:pt-12">
                Haz click
                <br>
                <p class="font-['PPE-Ultralight']">SOBRE UN TRABAJO</p>
            </div>


        </div>

        <div
            class="accede2 flex px-64 text-center justify-center text-zinc-100 pb-32 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:hidden">
            «Pasa el ratón por encima para descubrir el trabajo y clickea en uno para
            saber más de el»
        </div>

        <div
            class="accede2 hidden max-sm:flex px-64 text-center justify-center text-zinc-100 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:pt-2">
            «Baja para ver los trabajos y clickea sobre uno para saber más sobre el»
        </div>


        <div
            class="flex max-[1500px]:px-0 flex-col max-sm:hidden grid-cols-1 grid-rows-3 items-stretch pb-32 max-[1280px]:p-10 max-sm:px-0 max-[800px]:grid-cols-1">

            <NuxtLink to="/Audiovisual2" target="_blank">
                <div
                    class="trabajo1 text-zinc-100 border-zinc-100 border border-solid border-r-0 flex flex-col border-l-0 border-b-0 hover:bg-[url('/img/puff2.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-0 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-12 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
                    <div
                        class="text max-[1500px]:text-[60px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Render 3D
                    </div>
                    <div
                        class="text max-[1500px]:text-[120px] text-center text-[120px] leading-[3rem] font-['PPE-Ultralight'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        LETTERING 3D
                    </div>
                    <div
                        class="text text-[12px] text-center leading-[5rem] pb-32 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
                        CREACIÓN DE TIPOGRAFÍA MEDIANTE CINEMA 4D
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Audiovisual1" target="_blank">
                <div
                    class="trabajo1 text-zinc-100 border-zinc-100 border border-solid border-r-0 flex flex-col border-l-0 border-t-1 hover:bg-[url('/img/variacionesfinal.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
                    <div
                        class="text max-[1500px]:text-[60px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Motion Graphic
                    </div>
                    <div
                        class="text max-[1500px]:text-[120px] text-center text-[120px] leading-[3rem] font-['PPE-Ultralight'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        MONSTRUOS INC
                    </div>
                    <div
                        class="text text-[12px] text-center leading-[5rem] pb-32 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
                        CREACIÓN DE VIDEO INTRODUCCIÓN UTILIZANDO SINCRONIZACIÓN CON SONIDO
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/Audiovisual3" target="_blank">
                <div
                    class="trabajo1 text-zinc-100 border-zinc-100 border border-solid border-r-0 flex flex-col border-l-0 border-t-0 hover:bg-[url('/img/animacion2.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
                    <div
                        class="text max-[1500px]:text-[60px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Animación
                    </div>
                    <div
                        class="text max-[1500px]:text-[120px] text-center text-[120px] leading-[3rem] font-['PPE-Ultralight'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        ROBOT
                    </div>
                    <div
                        class="text text-[12px] text-center leading-[5rem] pb-32 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
                        CREACIÓN DE PERSONAJE Y MOVIMIENTO FRAME BY FRAME
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Audiovisual4" target="_blank">
                <div
                    class="trabajo1 text-zinc-100 border-zinc-100 border border-solid border-r-0 flex flex-col border-l-0 border-t-0 hover:bg-[url('/img/videoruben.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
                    <div
                        class="text max-[1500px]:text-[60px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Ilustración
                    </div>
                    <div
                        class="text max-[1500px]:text-[120px] text-center text-[120px] leading-[3rem] font-['PPE-Ultralight'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        ROTOSCOPIA
                    </div>
                    <div
                    class="text text-[12px] text-center leading-[5rem] pb-32 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
                    ROTOSCOPIA FUTURO DISTOPICO Y PERDIDA DE MEMORIA
                    </div>
                </div>
            </NuxtLink>



        </div>

        <div class="hidden max-sm:grid max-sm:grid-cols-1 grid-rows-1 items-stretch pb-32">

            <NuxtLink to="/Audiovisual2" target="_blank">

                <div
                    class="trabajo1 border border-solid border-r-0 border-l-0 border-b-0 px-20 py-20 flex flex-col justify-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-12 max-sm:max-h-[800px] max-sm:pt-16 max-sm:bg-black max-sm:border-solid max-sm:border-1 max-sm:text-white">
                    <div
                        class="text max-[1500px]:text-[120px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[30px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Render 3D
                    </div>
                    <div
                        class="text text-center text-[60px] leading-[1rem] pt-24 font-['PPE-Ultralight'] tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-0 max-sm:text-[45px] max-sm:pb-4 max-sm:text-center">
                        LETTERING 3D
                    </div>
                    <div
                        class="text text-[16px] text-center leading-[4rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[10px] max-sm:pb-2 max-sm:text-center max-sm:leading-[1rem]">
                        CREACIÓN DE TIPODGRAFÍA MEDIANTE CINEMA 4D
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Audiovisual1" target="_blank">

                <div
                class="trabajo1 border border-solid border-r-0 border-l-0 border-b-0 px-20 py-20 flex flex-col justify-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-12 max-sm:max-h-[800px] max-sm:pt-16 max-sm:bg-black max-sm:border-solid max-sm:border-1 max-sm:text-white">
                <div
                        class="text max-[1500px]:text-[120px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[30px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Motion Graphic
                    </div>
                    <div
                    class="text text-center text-[60px] leading-[1rem] pt-24 font-['PPE-Ultralight'] tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-0 max-sm:text-[45px] max-sm:pb-4 max-sm:text-center">
                    MONSTRUOS SA
                    </div>
                    <div
                    class="text text-[16px] text-center leading-[4rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[10px] max-sm:pb-2 max-sm:text-center max-sm:leading-[1rem]">
                    CREACIÓN DE VIDEO CORTINILLA UTILIZANDO SINCRONIZACIÓN CON SONIDO
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Audiovisual3" target="_blank">

                <div
                class="trabajo1 border border-solid border-r-0 border-l-0 border-b-0 px-20 py-20 flex flex-col justify-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-12 max-sm:max-h-[800px] max-sm:pt-16 max-sm:bg-black max-sm:border-solid max-sm:border-1 max-sm:text-white">
                <div
                        class="text max-[1500px]:text-[120px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[30px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Animación
                    </div>
                    <div
                    class="text text-center text-[60px] leading-[1rem] pt-24 font-['PPE-Ultralight'] tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-0 max-sm:text-[45px] max-sm:pb-4 max-sm:text-center">
                        ROBOT 2D
                    </div>
                    <div
                    class="text text-[16px] text-center leading-[4rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[10px] max-sm:pb-2 max-sm:text-center max-sm:leading-[1rem]">
                        CREACIÓN DE PERSONAJE Y MOVIMIENTO FRAME BY FRAME
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/Audiovisual4" target="_blank">

                <div
                class="trabajo1 border border-solid border-r-0 border-l-0 border-b-1 px-20 py-20 flex flex-col justify-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-12 max-sm:max-h-[800px] max-sm:pt-16 max-sm:bg-black max-sm:border-solid max-sm:border-1 max-sm:text-white">
                <div
                        class="text max-[1440px]:text-[120px] text-center text-[50px] leading-[9rem] pt-32 font-['PPE-UltralightItalic'] justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[30px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
                        Ilustración
                    </div>
                    <div
                    class="text text-center text-[60px] leading-[1rem] pt-24 font-['PPE-Ultralight'] tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-0 max-sm:text-[45px] max-sm:pb-4 max-sm:text-center">
                        ROTOSCOPIA
                    </div>
                    <div
                    class="text text-[16px] text-center leading-[4rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[10px] max-sm:pb-2 max-sm:text-center max-sm:leading-[1rem]">
                        ROTOSCOPIA FUTURO DISTOPICO Y PERDIDA DE MEMORIA
                    </div>
                </div>
            </NuxtLink>



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
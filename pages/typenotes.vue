<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] bg-black">
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
        class="titular2 flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pt-64 max-sm:pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-12 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[60px]">
                TYPENOTES</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    ARTE FINAL - MAQUETACIÓN - REVISTA -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] max-sm:text-left pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Creación de una publicación
                    bimensual de contenidos
                    y enfoques de la revista TypeNotes, crear un sistema
                    mucho más económico y abordable diseñando
                    un modelo hibrido entre periódico y revista, crear
                    una publicación basada en la principal anual.
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
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[16ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Diseño editorial, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    1 -2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left max-sm:max-w-[30ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Maquetación de revista periódica en base a una revista extensa.
                </div>
            </div>
        </div>

        <div
        class="video max-sm:hidden max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
        <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
                <source src="/img/Comp_2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <img class="image hidden max-sm:flex w-full h-full pb-24" src="/img/Comp_2.gif" alt="">


        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Revista</p>TYPENOTES
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        El trabajo de Diseño Editorial consiste en la adaptación propia de la revista de TypeNotes a un
                        formato más continuo y de poco tiempo que cuente algunos de los contenidos de la edición más
                        grande, creando un soporte rápido y menos caro para que la gente pueda consumir este contenido
                        acerca de tipografía. El tamaño tiene que ser lo más próximo al A3 pero siendo un formato más
                        pequeño en extensión al original, incluyendo el contenido y los elementos de la edición original
                        pero dándole un pequeño lavado de cara para ser algo más rápido y adaptado. Crear algo de
                        extensión corta siendo un hermano pequeño de la revista, que mantenga la visión de la principal
                        y se note que es una edición que va construyendo mensualmente a la principal. Crear
                        composiciones y diseños basados en el diseño original no se trata de sustituir o rediseñar como
                        tal, tiene que mantener visualmente la estética.
                        <br><br>

                        <div class="text indent-12"> Decisiones: Utilizar la foliación y la categoría para componer en
                            la página y ayudar a los demás elementos. Añadirle a las imágenes cuadrados blancos que la
                            recorten en alguna esquina y en ocasiones añadirle pies de foto. Linea roja en la parte
                            inferior de la página derecha para abrir el artículo y otro para cerrarlo. Caja de texto de
                            dos columnas en retícula y 3 columnas de texto componiendo la página. Mucho espacio en
                            blanco para componer las dobles páginas y que se formen estructuras a raíz de este. Cambio
                            de la FS Bravo a la FS Neruda para el texto corrido ya que el primero da mucha mancha de
                            texto. Jugar con la combinación del rojo y del negro en los diferentes textos y apartados.
                            Retícula con muchas filas para poder componer las imágenes con más libertad y las cajas de
                            texto (19 filas). Construcción a partir de 6 columnas. Utilizar los pies de ilustración,
                            foto y créditos para componer.</div>
                        <br>

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col h-min">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado.jpg" alt="">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado9.jpg" alt="">
            </div>
        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Elementos</p>MAQUETACIÓN
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">PROCESO DE CREACIÓN</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Elementos para la maquetación de la revista, desde
                    la paleta de color y la tipografía hasta la retícula y la jerarquía.
                </div>

            </div>

        </div>

        <div class="grid grid-cols-1 max-sm:px-4 text-center">

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-12 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
            </div>
            <div
                class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
                <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-3">
                    <div class="color w-[150px] h-[150px] border border-zinc-500 bg-[#000000]">
                    </div>
                    <div class="color w-[150px] h-[150px] bg-[#ffffff]">
                    </div>
                    <div class="color w-[150px] h-[150px] bg-[#cd1719]">
                    </div>
                </div>
                <div class="columna2 grid gap-6">
                    <div
                        class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                        <a class="color text-[#ffffff] font-bold">HEX : #000000</a> <br>
                        C - 75 <br>
                        M - 68 <br>
                        Y - 68 <br>
                        K - 90
                    </div>
                    <div
                        class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                        <a class="color text-[#ffffff] font-bold">HEX : #ffffff</a> <br>
                        C - 0 <br>
                        M - 0 <br>
                        Y - 0 <br>
                        K - 0
                    </div>
                    <div
                        class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                        <a class="color text-[#ffffff] font-bold">HEX : #cd1719</a> <br>
                        C - 15 <br>
                        M - 100 <br>
                        Y - 100 <br>
                        K - 0
                    </div>
                </div>


            </div>

            <div
                class="grid grid-cols-3 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
                <div class="color w-[200px] h-[200px] border border-zinc-500 bg-[#000000]">
                </div>
                <div class="color w-[200px] h-[200px] bg-[#ffffff]">
                </div>
                <div class="color w-[200px] h-[200px]  bg-[#cd1719]">
                </div>

                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #000000</a> <br>
                    C - 75 <br>
                    M - 68 <br>
                    Y - 68 <br>
                    K - 90
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #ffffff</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #cd1719</a> <br>
                    C - 15 <br>
                    M - 100 <br>
                    Y - 100 <br>
                    K - 0
                </div>

            </div>

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-12 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    LOGOTIPO</div>
            </div>

            <img class="image_grid px-[50rem] max-[1920px]:px-[30rem] max-sm:px-12 w-full h-full pt-32 max-sm:pt-12"
                src="/img/LogoTypenotes2.svg" alt="">
            <p
                class="text-[70px] z-50 uppercase font-bold text-white pt-24 pb-40 max-sm:pt-6 max-sm:pb-12 max-sm:text-[40px]">
                ↓
            </p>
            <img class="image_grid px-[50rem] max-[1920px]:px-[30rem] max-sm:px-12 w-full h-full pb-12"
                src="/img/LogoTypenotes1.svg" alt="">


            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 max-sm:pb-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    TIPOGRAFÍA</div>
            </div>

            <div
                class="titular2 max-[1500px]:gap-24 grid grid-cols-3 max-[1500px]:grid-cols-1 max-sm:grid-cols-1 max-sm:px-0 max-sm:gap-16 px-64 pt-4 max-sm:pt-0 content-start justify-center text-center max-sm:flex-col max-sm:pb-16 max-[1500px]:px-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div class="segundogrid flex flex-col gap-2 max-sm:gap-0">

                    <div
                        class="titular2 max-[1500px]:px-[25rem] content-start pb-12 justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-0 max-[1500px]:gap-2 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                        <div
                            class="titular max-[1500px]:text-center max-[1500px]:place-self-center max-[1500px]:items-center max-sm:leading-[60px] max-sm:text-[50px] max-[1920px]:text-[70px] max-[1440px]:text-left text-[90px] font-['FSBrabo'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-2">
                            FS Brabo Font</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Light'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Light</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-LightItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Light Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Regular</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-MediumItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Medium Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Medium'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Medium</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-BoldItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Bold Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Bold</div>
                    </div>
                </div>
                <div class="primergrid max-[1500px]:hidden flex flex-col gap-2 max-sm:hidden">
                </div>

                <div class="primergrid flex flex-col gap-2">

                    <div
                    class="titular2 max-[1500px]:px-[25rem] content-start pb-12 justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-0 max-[1500px]:gap-2 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                    <div
                    class="titular max-[1500px]:text-center max-[1500px]:place-self-center max-[1500px]:items-center max-sm:leading-[60px] max-sm:text-[50px] max-[1920px]:text-[70px] max-[1440px]:text-left text-[90px] font-['FSKim-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-2">
                    FS Kim Font</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                        <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] text-[30px] font-['FSKim-Italic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Regular</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-BoldItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Bold Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Bold</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-HeavyItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Heavy Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-Heavy'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Heavy </div>
                    </div>

                </div>
            </div>

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-40 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    JERARQUÍAS TIPOGRÁFICAS</div>
            </div>

            <img class="image_grid max-[1500px]:px-24 px-72 max-sm:px-0 pt-12 w-full h-full pb-12" src="/img/elementos8.png" alt="">

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    RETÍCULA</div>
            </div>
            <img class="image_grid max-[1500px]:px-24  px-72 max-sm:px-0  w-full h-full pb-12" src="/img/elementos6.png" alt="">
            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    DISPOSICIÓN DE PÁGINAS</div>
            </div>
            <img class="image_grid max-[1500px]:px-24 px-72 max-sm:px-0 w-full h-full pb-12" src="/img/elementos7.png" alt="">


        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 max-[1500px]:flex-col flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-2 max-[1500px]:items-center max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Páginas</p>COMPLETAS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>

        <div id="primercompartimento"
            class="titular2 hidden max-sm:grid grid-cols-1 px-64 pb-32 gap-4 place-items-left max-sm:text-left max-sm:items-center max-sm:flex-start items-center pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Páginas</p>COMPLETAS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>


        <div class="grid grid-cols-1 max-[1500px]:px-24 px-72 max-sm:grid-cols-1 gap-4 max-xl:grid-cols-1 max-sm:px-6 max-sm:pb-24">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado2.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado3.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado4.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado5.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado6.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado7.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado8.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/typenotes.png" alt="">

        </div>



        <div id="contacto" class="informacion max-sm:pt-24 pt-[40px] pb-64 bg-black max-sm:pb-32">
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
  
.image_logo
  @apply opacity-100
  &:hover
    @apply opacity-60


  </style>
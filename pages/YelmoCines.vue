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
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pt-64 max-sm:pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-12 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular max-[1920px]:text-[100px] max-[1920px]:leading-[100px] text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] max-sm:text-center max-sm:leading-[60px] from-[#593cff] via-[#fff202] to-[#7d86ed]">
                CINE YELMO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Rediseño de la Identidad
                    visual de Yelmo Cines, contando con el cambio de conceptos, valores, logo, aplicaciones visuales y
                    demás
                    elementos gráficos de su estética
                    para darle coherencia el sistema general de esta marca.
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
                    Proyectos interdisciplinares de Diseño Gráfico, LAB, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Rediseño de la identidad completa de Yelmo Cines.
                </div>
            </div>
        </div>

        <div
            class="video max-sm:hidden max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/CineYelmo_MarcaDinámicaFinal.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <img class="image hidden max-sm:flex w-full h-full pb-24" src="/img/CineYelmo_MarcaDinmicaFinal.gif" alt="">

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Rediseño</p>CINES YELMO
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Este rediseño para Cines Yelmo cuenta con los siguientes objetivos:
                        <br>
                        <br>
                        - Crear un rebranding eliminando la coexistencia entre la anterior marca Yelmo Cines y el diseño
                        de
                        Cine Yelmo que genera confusión entre los espectadores. Permitir la interacción y hacer que el
                        diseño impacte con el usuario y crear una relación de unión entre marca y cliente. Para ello es
                        necesario una nueva identidad bien consolidada y adaptativa a todas las aplicaciones que
                        necesita la
                        marca, para que el espectador pueda identificarla y generar así la conexión que se busca
                        conseguir.
                        <br>
                        <br>
                        - Crear una estrategia de arquitectura de marca de las submarcas de la compañía.
                        <br>
                        <br>
                        - Transmitir la idea de que estamos reinventando la experiencia de cine tradicional a través de
                        una
                        innovación constante, que va desde la introducción en España de nuevos conceptos de salas con
                        foco
                        en la calidad y el confort (Junior, Premium o Luxury), la oferta de nuevos servicios adaptados a
                        las
                        demandas de los clientes o la programación de contenidos alternativos.
                        <br>
                        <br>
                        - Unificar la imagen gráfica de las diferentes redes sociales.
                        <br>
                        <br>
                        - Modificar el tono de la identidad visual generando entretenimiento, diversión y un
                        acercamiento
                        juvenil.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min max-sm:pt-24">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines3.png" alt="">
            </div>
        </div>
        <div id="primercompartimento"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Marca</p>DINÁMICA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#312783]">Juniors</a> - <a class="type text-[#eec331]">Yelmo Cines</a> -
                    <a class="type text-zinc-100">Luxury</a> - <a class="text text-[#593cff] to-[#fff202]">+ Que
                        Yelmo</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    El motivo añadido de
                    este rediseño es
                    crear
                    una marca que pueda ser dinámica y variable, que a raiz de su logo principal puedas conocer también
                    los
                    demás apartados
                    con los que cuenta Cine Yelmo.
                </div>

            </div>
        </div>

        <img class="image_grid flex max-sm:hidden pt-12 w-full h-full max-sm:pb-0 max-sm:pt-0"
            src="/img/logosyelmo.svg">
        <img class="image_grid hidden max-sm:flex w-full h-full max-sm:pb-12 max-sm:pt-12"
            src="/img/logoyelmomovil.svg">


        <div id="primercompartimento"
            class="titular2 flex px-64 pb-12 gap-64 pt-40 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular max-[1500px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
        </div>
        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
            <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-3">

                <div class="color w-[150px] h-[150px] bg-[#161616]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#FFDE00]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#312783]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#FFFFFF]">
                </div>
            </div>
            <div class="columna2 grid gap-6">
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #161616</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 91
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #FFDE00</a> <br>
                    C - 0 <br>
                    M - 13 <br>
                    Y - 100 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #312783</a> <br>
                    C - 63 <br>
                    M - 70 <br>
                    Y - 0 <br>
                    K - 49
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #FFFFFF</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 0
                </div>
            </div>


        </div>

        <div
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
            <div class="color w-[200px] h-[200px] bg-[#161616]">
            </div>
            <div class="color w-[200px] h-[200px] bg-[#FFDE00]">
            </div>
            <div class="color w-[200px] h-[200px]  bg-[#312783]">

            </div>
            <div class="color w-[200px] h-[200px]  bg-[#FFFFFF]">

            </div>

            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #161616</a> <br>
                C - 0 <br>
                M - 0 <br>
                Y - 0 <br>
                K - 91
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #FFDE00</a> <br>
                C - 0 <br>
                M - 13 <br>
                Y - 100 <br>
                K - 0
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #312783</a> <br>
                C - 63 <br>
                M - 70 <br>
                Y - 0 <br>
                K - 49
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #FFFFFF</a> <br>
                C - 0 <br>
                M - 0 <br>
                Y - 0 <br>
                K - 0
            </div>

        </div>

        <div
            class="images max-sm:px-6 max-sm:pt-24 items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Tipografías</p>DEL SISTEMA
            </div>


            <div
                class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 gap-64 px-64 max-sm:gap-6 max-sm:pb-24 max-sm:pt-12 max-[1920px]:px-8">

                <div
                    class="images items-center max-sm:px-0 text-center pt-20 pb-20 text-white justify-center flex flex-col max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
                    <div
                        class="titular max-sm:text-center text-[100px] max-sm:text-[80px] max-sm:leading-[70px] font-['PPE-Ultralight'] text-left leading-[100px] text-white max-xl:justify-center max-xl:text-[60px]">
                        <p class="font-['ProximaNova']">Proxima Nova</p>
                    </div>
                </div>
                <div
                    class="images items-end max-sm:items-center text-left pt-20 max-sm:px-0 pb-20 px-64 max-[1920px]:px-12 text-white max-sm:justify-center justify-end flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-left max-xl:gap-4">
                    <div
                        class="titular max-sm:grid max-sm:grid-cols-2 text-[40px] font-['PPE-Ultralight'] text-left leading-[50px] text-white max-sm:text-30px max-sm:leading-8 max-xl:text-[60px] max-xl:justify-center max-sm:text-[20px]">
                        <p class="font-['ProximaNova-Thin']">Thin</p>
                        <p class="font-['ProximaNova']">Regular</p>
                        <p class="font-['ProximaNova-Bold']">Bold</p>
                        <p class="font-['ProximaNova-ExtraBold']">ExtraBold</p>
                        <p class="font-['ProximaNova-Black'] max-sm:hidden">Black</p>

                    </div>
                </div>

            </div>

        </div>

        <div
            class="images items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Pictogramas</p>DEL SISTEMA
            </div>
        </div>

        <div
            class="grid place-items-center max-[1500px]:px-12 px-64 max-sm:px-12 grid-cols-1 max-sm:pt-12 max-sm:hidden">
            <img class="image_grid max-[1920px]:pb-40 px-32 pt-32 pb-64 w-full h-full" src="/img/pictogramasyelmo.svg"
                alt="">
            <img class="image_grid max-[1920px]:pb-40 px-12 pt-4 pb-52 w-1/2 h-full" src="/img/pictogramasyelmo.svg"
                alt="">

        </div>

        <div class="grid grid-cols-1 px-20">
            <img class="image_grid pt-32 pb-32 hidden max-sm:flex" src="/img/pictogramasyelmomovil3.svg" alt="">

        </div>


        <div
            class="images items-center text-center pb-20 pt-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Elementos</p>DEL SISTEMA
            </div>
        </div>

        <div
            class="grid px-64 grid-cols-1 max-[1500px]:px-12 gap-24 pt-24 max-sm:pt-12 max-sm:px-8 max-sm:gap-8 max-sm:pb-12 max-sm:hidden">
            <div class="grid grid-cols-3 px-32 gap-32">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula1.svg" alt="">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula3.svg" alt="">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula2.svg" alt="">

            </div>
            <img class="image_grid pt-24 w-full h-full pb-6 max-sm:pb-0" src="/img/caratulasinstagram.png" alt="">
            <img class="image_grid px-64 w-full h-full pb-6 max-sm:pb-0" src="/img/caratulas3.png" alt="">
            <img class="image_grid px-[500px] max-[1920px]:px-[22rem] w-full h-full pb-6 max-sm:pb-0"
                src="/img/caratulas4.png" alt="">
        </div>

        <div class="max-sm:grid-cols-1 hidden pt-32 px-16 gap-12 max-sm:grid">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula1.svg" alt="">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula3.svg" alt="">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula2.svg" alt="">

        </div>

        <img class="image_grid pt-32 pb-32 px-16 hidden max-sm:flex w-full h-full"
            src="/img/caratulasinstagrammovil.png" alt="">


        <div
            class="images items-center text-center pt-40 pb-32 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Prototipo</p>APLICACIÓN
            </div>
        </div>

        <div class="grid grid-cols-1 max-sm:pt-12 px-6 max-sm:hidden">
            <img class="image_grid w-full h-full pb-6" src="/img/aplicacion.png" alt="">
            <img class="image_grid w-full h-full pb-6" src="/img/aplicacion2.png" alt="">

        </div>

        <img class="image_grid px-16 pt-32 pb-32 hidden max-sm:flex w-full h-full" src="/img/movilyelmo.png" alt="">


        <div
            class="images items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Entradas</p>CINE FÍSICAS
            </div>

        </div>

        <div
            class="grid grid-cols-1 max-[1920px]:px-64 max-[1920px]:pb-56 max-[1920px]:gap-6 px-[32rem] gap-12 pt-24 pb-32 max-sm:gap-6 max-sm:pt-12 max-sm:pb-24 max-sm:px-6">
            <img class="image_grid max-sm:px-0 w-full h-full" src="/img/entrada1.png" alt="">
            <img class="image_grid max-sm:px-0 w-full h-full" src="/img/entrada2.png" alt="">


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
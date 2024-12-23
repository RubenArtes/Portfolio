<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor class="mix-blend-exclusion" />
        <div
            class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] max-sm:bg-black bg-black">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-black items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logoblancoroto.png" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-white justify-end underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-6 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-black dark:text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-white dark:text-white relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] max-sm:leading-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
                        Menú
                    </h2>
                    <button @click="toggleSidebar"
                        class="email text-black dark:text-white relative text-[26px] max-sm:text-[20px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        &times;
                    </button>
                </div>

                <!-- Contenido de la slidebar -->
                <ul class="pt-12 flex flex-col justify-between h-full">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#trabajos2"
                            class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            Trabajos
                            </a>
                            <!-- <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [1] Matutano Saludable
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [2] Caja Oporto
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [3] Asistente Member
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [4] Vinos Prau
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [5] Metro Madrid
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [6] Animación Movistar
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [7] Colección Visuales
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [8] Yelmo Cines
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [9] Revista Typenotes
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [10] Web ESD
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [11] Colección Fotografías
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [12] Garrido Gallery
                            </a>
                            <a href="/IntroDark#trabajos2"
                            class="seccion max-sm:text-[18px] indent-6 max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                            [13] Colección Ilustraciones
                            </a> -->

                        </li>
                        <li>
                            <a href="/Servicios"
                                class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="/Sobremi"
                                class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Sobre mi
                            </a>
                        </li>
                        <li>
                            <a href="/Tienda"
                                class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Tienda
                            </a>
                        </li>
                        <li>
                            <a href="/AnalogicasOporto#contacto"
                                class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Contacto
                            </a>
                        </li>
                    </div>
                    <div class="columna mt-auto pb-6 max-sm:pb-8 flex justify-between">
                        <p class="text-black dark:text-white">Copyright 2025</p>
                        <p class="text-black dark:text-white">*</p>
                        <p class="text-black dark:text-white">Rubén Maldonado</p>
                        <p class="text-black dark:text-white">*</p>
                        <p class="text-black dark:text-white">Portfolio</p>
                    </div>
                </ul>
            </div>
        </div>


        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[90px] font-['PPE-Ultralight'] font-bold leading-[120px] animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[45px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[4rem] max-sm:font-normal">
                ANALÓGICAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    FOTOGRAFÍA - ANALÓGICO - EDICIÓN -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Fotografías del viaje de Oporto realizadas con una cámara desechable de Kodak, para su posterior
                    revelado e impresión en papel mate para el proyecto de la Caja de Oporto.
                </div>

            </div>
        </div>
        <div class="fotos flex pt-32 pb-2 px-72 justify-center place-self-center max-sm:hidden">

            <Carousel class="max-w-[1000px] max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica1.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica2.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica3.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica4.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica5.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica6.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica7.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica8.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica9.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica10.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica11.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica13.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica14.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica15.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica16.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica17.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica18.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica19.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica20.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/fotoanalogica21.png" alt="">
                </Slide>

                <template #addons>
                </template>
            </Carousel>

        </div>

        <div
            class="colum hidden max-sm:flex px-64 max-sm:pt-6 pb-2 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

            <div class="fotografias px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/fotoanalogica1.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica2.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica3.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica4.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica5.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica6.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica7.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica8.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica9.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica10.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica11.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica12.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica13.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica14.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica15.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica16.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica17.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica18.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica19.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica20.png" alt="">
                <img class="image w-full h-full" src="/img/fotoanalogica21.png" alt="">


            </div>

        </div>



        <div id="contacto" class="bg-lime-400 py-4 px-6 text-lime-800 font-['Neue'] max-sm:text-lime-800 text-center justify-center max-sm:text-[30px] max-sm:leading-4 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-lg:justify-center">¡Contactame!</div>


        <div id="informacion"class="informacion max-sm:pt-6 pt-[100px] pb-24 bg-zinc-900 max-sm:bg-zinc-900 max-sm:pb-0">

            <div class="about max-sm:bg-zinc-900 bg-zinc-900">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 bg-zinc-900">
                    <div
                        class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-200 transition-colors duration-300 hover:text-zinc-600">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-6 px-20 leading-[10rem] font-['Neue'] cursor-pointer text-zinc-200">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] max-sm:text-zinc-200 max-sm:text-[16px] max-sm:leading-4 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 bg-zinc-900 items-center max-sm:grid-cols-1 text-black group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                    class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:pt-12 max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-200 transition-colors duration-300 hover:text-zinc-600">
                    Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] grid grid-cols-2 font-['Neue'] text-zinc-200 hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                            src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/Behance2.png" />
                            Behance
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/LinkedIn2.png" />
                            LinkedIn
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/redbubblewhite.svg" />
                            Redbubble
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-200 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://es.pinterest.com/maldonadoruben_" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-80" src="/img/pinterestwhite.svg" />
                            Pinterest
                            <img class="vector w-[28px] max-sm:w-[12px] max-sm:opacity-80"
                                src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion bg-zinc-900 grid grid-cols-2 max-sm:pb-12 max-sm:grid-cols-1 text-black group">
                    <!-- Caja 3 -->
                    <div
                    class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:pt-12 max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-200 transition-colors duration-300 hover:text-zinc-600">
                    Información
                    </div>
                    <!-- Información oculta por defecto y visible al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] max-sm:block hidden group-hover:block">
                        <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                            class="email text-[50px] text-zinc-200 leading-[60px] max-[1920px]:text-[45px] max-sm:text-[16px] max-sm:leading-6 flex gap-2 items-center max-lg:text-[14px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado
                            2025
                        </a>
                    </div>
                </div>
            </div>
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
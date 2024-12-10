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

        <VueScrollProgressBar background-color="#ffffff" />
        <div class="div1 max-sm:hidden pt-2 border pt-24 border-zinc-200 border-t-0 border-l-0 border-r-0 border-b-0">
            <div
                class="info_secondary max-[1500px]:px-24 max-[1500px]:pt-24 max-[1500px]:pb-32 z-20 bg-black max-[1920px]:px-[12rem] px-32 pb-44 place-items-start pt-32 flex flex-col gap-6 max-sm:px-12 top-32 max-[1500px]:gap-8">
                <div
                    class="titular max-[1500px]:text-[35px] text-[30px] font-['PPE-UltralightItalic'] leading-3 font-normal text-[#f1f1f1] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                    Colección</div>
                <div
                    class="titular max-[1500px]:text-[50px] text-[50px] font-['PPE-Ultralight'] leading-8 font-normal text-[#f1f1f1] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                    RETRATOS</div>
                <div
                    class="text max-w-[60ch] text-[14px] text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    FOTOGRAFÍAS - 2022 / 2023 - ASIGNATURA FOTOGRAFÍA - MODELOS</div>
                <div
                    class="text text-[16px] max-w-[60ch] font-['SFUIDisplay-Light'] text-white max-xl:text-sm max-[1500px]:text-[14px] max-[1500px]:max-w-[60ch]">
                    Fotografías realizadas en la Escuela Superior de Diseño en interior y exterior, controlando las
                    luces naturales y en el estudio, control
                    de iluminación, focos y diferentes elementos profesionales. Fotografías a Lisa Barbieri, Carlos
                    Martinez, Sergio Martín, Laura Morales y Barbara Ibáñez.


                </div>


            </div>


        </div>

        <div
        class="titular2 max-sm:border-0 hidden max-sm:flex max-sm:pt-32 px-64 gap-64 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
        <div
                class="titular text-[60px] font-['PPE-Ultralight'] leading-12 font-bold text-[#b3b3b3] max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                RETRATOS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-8 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-start max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] max-sm:text-start text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-start max-[1280px]:justify-start">
                    FOTOGRAFÍAS - 2022 / 2023 - ASIGNATURA FOTOGRAFÍA - MODELOS</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-0 max-sm:text-start max-sm:justify-start text-start font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-start max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Fotografías realizadas en la Escuela Superior de Diseño en interior y exterior, controlando las
                    luces naturales y en el estudio, control
                    de iluminación, focos y diferentes elementos profesionales. Fotografías a Lisa Barbieri, Carlos
                    Martinez, Sergio Martín, Laura Morales y Barbara Ibáñez.

                </div>

            </div>
        </div>

        <div class="div1 max-sm:hidden pt-32 px-12 grid grid-cols-3 gap-[11px]">

            <div
                class="text text-[14px] text-end uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 01 ]</div>
            <div
                class="text max-w-[60ch] text-[14px] text-start invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                FOTOGRAFÍAS - FEBRERO 2023 - ASIGNATURA FOTOGRAFÍA - ABSTRACCIÓN</div>
            <div
                class="text text-[14px] text-end uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 02 ]</div>

            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/estudio5.jpg"
                alt="" />
            <NuxtImg class="image_grid invisible" src="/img/provoke.jpg" alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/estudio3.jpg"
                alt="" />

            <div
                class="text max-w-[60ch] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ CARLOS MARTINEZ / ESTUDIO ]</div>
            <div
                class="text max-w-[60ch] text-[14px] text-start invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                FOTOGRAFÍAS - FEBRERO 2023 - ASIGNATURA FOTOGRAFÍA - ABSTRACCIÓN</div>
            <div
                class="text max-w-[60ch] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LISA BARBIERI / ESTUDIO ]</div>

            <div
                class="text text-[14px] pt-32 text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 01 ]</div>
            <div
                class="text text-[14px] pt-32 text-end  text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 03 ]</div>
            <div
                class="text text-[14px] pt-32 text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 02 ]</div>

            <NuxtImg class="image_grid rotate-90 invisible" src="/img/provoke.jpg" alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/modelo2.jpg"
                alt="" />
            <NuxtImg class="image_grid rotate-90 invisible" src="/img/provoke.jpg" alt="" />

            <div
                class="text max-w-[60ch] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>
            <div
                class="text max-w-[60ch] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ BARBARA IBAÑEZ / EXTERIOR ]</div>
            <div
                class="text max-w-[60ch] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>

            <div
                class="text text-[14px] pt-32 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 04 ]</div>
            <div
                class="text text-[14px] pt-32 text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 04 ]</div>
            <div
                class="text text-[14px] pt-32 text-end  text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 05 ]</div>

            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/modelo6.jpg" alt="" />
            <NuxtImg class="image_grid invisible" src="/img/modelo5.jpg"
                alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/modelo5.jpg"
                alt="" />

            <div
                class="text max-w-[60ch] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LAURA MORALES / EXTERIOR ]</div>
            <div
                class="text max-w-[60ch] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ NOCHE / PROVOKE ]</div>
            <div
                class="text max-w-[60ch] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LAURA MORALES / EXTERIOR ]</div>

            <div
                class="text text-[14px] pt-32 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 06 ]</div>
            <div
                class="text text-[14px] pt-32 text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 04 ]</div>
            <div
                class="text text-[14px] pt-32 text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 05 ]</div>

            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/estudio6.jpg"
                alt="" />
            <NuxtImg class="image_grid invisible" src="/img/provoke7.jpg" alt="" />
            <NuxtImg class="image_grid invisible" src="/img/provoke8.jpg" alt="" />

            <div
                class="text text-[14px] pt-[11px] text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 07 ]</div>
            <div
                class="text text-[14px] pt-[11px] text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 04 ]</div>
            <div
                class="text text-[14px] pt-[11px] invisible text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 08 ]</div>


            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/estudio8.jpg"
                alt="" />
            <NuxtImg class="image_grid invisible" src="/img/provoke8.jpg" alt="" />
            <NuxtImg class="image_grid invisible" src="/img/provoke9.jpg"
                alt="" />

            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ SERGIO MARTÍN / ESTUDIO ]</div>
            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>
            <div
                class="text text-[14px] pt-[11px] text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 08 ]</div>

            <NuxtImg class="image_grid invisible" src="/img/modelo.jpg" alt="" />
            <NuxtImg class="image_grid invisible" src="/img/modelo.jpg" alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300" src="/img/modelo.jpg"
                alt="" />

            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>
            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>
            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LAURA MORALES / EXTERIOR ]</div>

            <div
                class="text  text-[14px] pt-[11px] text-end invisible text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 09 ]</div>
            <div
                class="text pr-12 text-[14px] pt-[11px] text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 09 ]</div>
            <div
                class="text pl-12 text-[14px] pt-[11px] text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ 10 ]</div>

            <NuxtImg class="image_grid pr-12 invisible" src="/img/modelo3.jpg" alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300 pr-12" src="/img/modelo3.jpg"
                alt="" />
            <NuxtImg class="image_grid hover:scale-105 transition-transform duration-300 pl-12" src="/img/modelo4.jpg"
                alt="" />

            <div
                class="text max-w-[60ch] pt-[11px] text-[14px] invisible font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ FOTOGRAFÍA / PROVOKE ]</div>
            <div
                class="text max-w-[60ch] pr-12 pt-[11px] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LAURA MORALES / EXTERIOR ]</div>
            <div
                class="text max-w-[60ch] pl-12 pt-[11px] text-[14px] font-['Neue-Italic'] animate-pulse text-start uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                [ LAURA MORALES / EXTERIOR ]</div>

        </div>




        <div class="max-sm:grid max-sm:gap-4 max-sm:grid-cols-1 max-sm:pb-12 max-sm:px-4 hidden">

            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 01 ]</div>
            <NuxtImg class="image_grid " src="/img/estudio5.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 02 ]</div>
            <NuxtImg class="image_grid " src="/img/estudio3.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 03 ]</div>
            <NuxtImg class="image_grid " src="/img/estudio6.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 04 ]</div>
            <NuxtImg class="image_grid " src="/img/estudio8.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 05 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo6.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 06 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 07 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo2.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 08 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo3.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 09 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo4.jpg" alt="" />
            <div
                class="text text-[14px] pt-2 text-end text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-end max-[1280px]:justify-end">
                [ 10 ]</div>
            <NuxtImg class="image_grid " src="/img/modelo5.jpg" alt="" />





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
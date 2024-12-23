<template>
  <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="max-sm:hidden" />
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
                            <a href="/MetrodeMadrid#contacto"
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
      class="titular2 max-[1500px]:pt-12 flex px-64 gap-32 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
      <div
        class="titular max-[1500px]:leading-[8rem] max-[1920px]:text-[100px] max-[1920px]:leading-[100px] text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]  max-sm:text-center max-sm:leading-[60px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff]">
        METRO MADRID</div>
      <div
        class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
          ARTE FINAL - FOTOGRAFÍAS - MAQUETACIÓN - EDICIÓN -
          Diseño Gráfico</div>
        <div
          class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
          Creación de Arte Final y libro sobre una temática (Metro de Madrid),
          recreando los diferentes efectos de impresión y controlando todos los elementos a la ahora de crear un Arte
          Final para imprenta.
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
          Fundamentos de estampación e impresión, 2º Diseño Gráfico.
        </div>
      </div>
      <div class="info flex flex-col max-sm:text-start">
        <div
          class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
          Tiempo</div>
        <div
          class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
          3 meses
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
          Briefing</div>
        <div
          class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
          Creación de Artes Finales y producción de libro impreso.
        </div>
      </div>
    </div>


    <div
      class="video max-sm:hidden max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
      <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
        <source src="/img/fanzine3.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>

    <img class="image hidden max-sm:flex w-full h-full pb-24" src="/img/fanzine3.gif" alt="">


    <div id="primercompartimento"
      class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
      <div
        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
        <p class="font-['PPE-UltralightItalic']">Imagenes reales</p>LIBRO IMPRESO
      </div>
      <div
        class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
          <a class="type">IMÁGENES DEL PROYECTO COMPLETO</a>
        </div>
        <div
          class="text max-[1500px]:max-w-[40ch] max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
          Fotografías de algunas de las páginas del libro, realizadas sobre el mismo soporte final impreso, a tamaño
          real.
        </div>

      </div>

    </div>

    <div
      class="colum flex max-[1440px]:px-4 px-64 pt-20 pb-24 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

      <div class="fotografias px-64 max-[1440px]:px-12 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
        <img class="image w-full h-full" src="/img/fotolibrometro.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro2.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro15.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro6.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro3.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro4.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro5.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro7.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro8.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro9.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro10.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro11.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro12.png" alt="">
        <img class="image w-full h-full" src="/img/fotolibrometro13.png" alt="">




      </div>

    </div>

    <div id="primercompartimento"
      class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-32 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
      <div
        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
        <p class="font-['PPE-UltralightItalic']">Páginas</p>DESGLOSADAS
      </div>
      <div
        class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
          <a class="type">IMÁGENES DEL PROYECTO COMPLETO</a>
        </div>
        <div
          class="text max-[1500px]:max-w-[40ch] max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
          Doble páginas de todo el libro completo, mostrando la maquetación y la edición
          de las diferentes fotografías.
        </div>

      </div>

    </div>

    <div
      class="px-64 max-sm:px-6 max-sm:gap-4 max-[1440px]:px-12 grid grid-cols-2 gap-2 max-xl:grid-cols-1 max-sm:pb-24 max-[1920px]:px-32">
      <img class="image_grid w-full h-full" src="/img/libroexperimental.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental2.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental3.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental4.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental5.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental6.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental7.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental8.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental9.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental10.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental11.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental12.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental13.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental14.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental15.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental16.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental17.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental18.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental19.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental20.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental21.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental22.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental23.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental24.png" alt="">

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
<template>
  <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="max-sm:hidden" />
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
      <div
        class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-20 text-white"
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
    <div
      class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-48 max-sm:pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
      <div
        class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[52px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#fffafa] via-[#bbbbbb] to-[#c2c2c2] ">
        FOTOGRAFÍAS</div>
      <div
        class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
          Fotografías - Ediciones - Retratos -
          Paisajes - Social -
          Diseño Gráfico</div>
        <div
          class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
          Recopilación de fotografías y
          fanzines realizados durante el curso y
          trabajos personales sobre diferentes temáticas y con diferentes cometidos. Fotografías de retrato,
          bodegones, paisajes y representación de lo social.
          Imágenes postproducidas.
        </div>

      </div>
    </div>


    <div
      class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
      <div class="info flex flex-col">
        <div
          class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 max-xl:text-xs">
          Asignatura</div>
        <div
          class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
          Fotografía y audiovisuales
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 max-xl:text-xs">
          Tiempo</div>
        <div
          class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 max-xl:text-sm max-xl:max-w-[40ch]">
          3 años
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 max-xl:text-xs">
          Briefing</div>
        <div
          class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left text-[16px] leading-6 max-xl:text-sm max-xl:max-w-[40ch]">
          Creación de fotografías con el aspecto técnico requerido.
        </div>
      </div>
    </div>

    <div id="libroimpreso"
      class="titular2 max-sm:pt-8 max-sm:pb-24 flex px-64 pb-24 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-[1500px]:px-12 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
      <div
        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
        CATEGORÍAS FOTOGRÁFICAS</div>
    </div>

    <div
      class="seleccion_trabajos pt-4 px-64 max-sm:px-2 max-sm:pb-2 pb-48 text-white flex flex-col justify-center max-lg:px-6 max-lg:justify-items-center max-lg:justify-center">
      <div
        class="twotrabajos max-sm:px-2 p-0 flex gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo">
          <NuxtLink to="/FotografiasOporto" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula5.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>OPORTO
            </div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/FotografiasProvoke" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula12.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>PROVOKE
            </div>
          </NuxtLink>

        </div>
      </div>

      <div
        class="twotrabajos p-0 flex max-sm:px-2 gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo">
          <NuxtLink to="/FotografiasTenerife" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula2.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>TENERIFE
            </div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/FotografiasGranada" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula3.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>GRANADA
            </div>
          </NuxtLink>

        </div>
      </div>


      <div
        class="twotrabajos p-0 flex max-sm:px-2 gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo">
          <NuxtLink to="/FotografiasMetroMadrid" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula8.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fanzine</p>METRO MADRID
            </div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/FotografiasMadrid" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula9.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>MADRID
            </div>
          </NuxtLink>

        </div>
      </div>

      <div
        class="twotrabajos p-0 max-sm:px-2 flex gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo">
          <NuxtLink to="/FotografiasBodegon" target="_blank">
            <div
              class="flex hover:bg-[url('/img/fotocaratula10.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>BODEGON
            </div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/FotografiasRetratos" target="_blank">

            <div
              class="flex hover:bg-[url('/img/estudio5.jpg')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
              <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>RETRATOS
            </div>
          </NuxtLink>

        </div>
      </div>

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

.image
  @apply transition ease-in-out delay-150
  &:hover
    @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm

.image_logo
  @apply opacity-100
  &:hover
    @apply opacity-60

.red
  &:hover
      @apply text-zinc-300

</style>
<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
        <CursorBlack class="max-sm:hidden" />

    <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] bg-white backdrop-filter">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" 
                            :class="{ hidden: isOpen }"
                            src="/img/darklogo.png" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>

                <!-- Navegación centrada -->
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
                        Menú
                    </h2>
                    <button @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-sm:text-[20px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        &times;
                    </button>
                </div>

                <!-- Contenido de la slidebar -->
                <ul class="pt-12 flex flex-col justify-between h-full text-black">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#trabajos2"
                                class="email  max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
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
                        <p>Copyright 2024</p>
                        <p>*</p>
                        <p>Rubén Maldonado</p>
                        <p>*</p>
                        <p>Portfolio</p>
                    </div>
                </ul>
            </div>
        </div>
        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
        class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-48 max-sm:pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
        <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#202020] via-[#36383b] to-[#4a4a4a] max-sm:text-center max-sm:leading-[60px]">
                GARRIDO</div>
            <div
                class="trabajos flex max-sm:gap-2 flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-sm:pt-4 max-w-[60ch] text-[16px] max-[1440px]:pt-12 uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Fotografías - Impresiones - Ediciones - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-sm:pt-4 max-w-[80ch] max-[1440px]:pt-12 pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Elementos realizados para la empresa de Garrido Gallery, una empresa de muebles de lujo realizados
                    de forma artesanal. Durante 6 meses realicé las practicas de empresa, creando diferentes contenidos
                    para la marca.
                    Creación de folletos, dossiers, tarjetas de visita, realización de fotografías y ediciones. Trabajo
                    completo de marca 360.
                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] max-sm:text-left max-sm:max-w-[22ch] text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Prácticas de Empresa, 4º Diseño Gráfico
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-start text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    6 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-start text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Marca, fotografía y elementos relacionados.
                </div>
            </div>
        </div>

        <div
            class="video flex pt-2 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image_rect" src="/img/fotoprincipal_1.jpg" alt="">
        </div>

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8 px-8 pb-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] font-['Neue'] uppercase">▲ Imagen de la galeria, Rubén Maldonado</a>
        </div>

        <div
            class="colum max-[1500px]:px-32 flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Garrido</p>GALLERY
                    </div>

                    <div
                        class="titular text-[30px] font-['PPE-Ultralight'] text-start leading-10 font-normal text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[20px] max-sm:leading-6 max-sm-pt-2 max-[1500px]:text-left">
                        Dos generaciones de plateros contemporáneos del siglo XX-XXI</div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Durante la realización de las prácticas de empresa en Garrido Gallery tuve que desempeñar
                        diferentes tareas para la marca y todo su conjunto.
                        Comenzando por la modificación de la marca y equilibrio de esta para darle una cohesión a todos
                        los logos utilizados en todos los soportes, agregandole una armonía visual a la marca y un
                        descriptor/tagline que represente a la marca. <br> <br>
                        <div class="text indent-12">Además de esto realicé varios trabajos que voy a mostrar a
                            continuación, como sesiones de fotografía de las piezas terminadas montando un set de
                            iluminación completo agregado de una postproducción posterior precisa para dejar las piezas
                            en
                            el punto más preciso posible para enseñar al cliente.
                            Otros trabajos realizados han sido diferentes folletos para exposiciones importantes en la
                            galería, creación de tarjetas, etiquetado y libros para la galería y para los clientes.
                        </div>
                        <br>
                        <div class="text indent-12">Los trabajos más importantes han sido la creación e impresión del
                            Catalogo de piezas del 2024, realizando una pieza totalmente modernizada del catálogo de
                            2023. También corrección y composición de la página web y publicaciones para instagram.
                        </div>
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect" src="/img/marcagarrido.png" alt="">

            </div>
        </div>

        <div
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Catálogo</p>GARRIDO 2024
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-sm:order-last max-[1280px]:text-left">
                    <a class="type text-[#8c8eff]">MAQUETACIÓN E IMPRESIÓN</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Maquetación, corrección de textos, creación, fotografías, edición e impresión del nuevo catálogo de
                    Garrido Gallery 2024, contenedor de la historia, las técnicas y las piezas Garrido. Creación del Arte Final e impresión final física para clientes en Oman Impresores.
                </div>

            </div>

        </div>

        <div
            class="images max-[1500px]:px-0 pt-20 pb-12 flex flex-col gap-6 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[800px]:px-0 max-[800px]:pt-12">

            <img class="image_grid w-full h-full" src="/img/fotofinalcatalogo2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/fotofinalcatalogo.png" alt="">


        </div>


        <div id="garrido"
            class="div text-[#252525] pt-24 pb-24 text-center text-[50px] m-0 animate-pulse font-['PPE-Ultralight'] uppercase max-sm:text-xs">
            <p class="font-['PPE-UltralightItalic'] text-[30px] capitalize leading-6">Catalogo Oficial</p> GARRIDO GALLERY 2024</div>

        <div
            class="grid grid-cols-1 gap-2 items-center justify-items-center px-64 pb-32 max-[1280px]:p-10 max-[1500px]:px-32  max-sm:grid-cols-1 max-sm:px-2 max-sm:p-6">

            <Carousel :autoplay="2000" :wrap-around="true"
                class="carousel max-w-[1794px] max-h-[975px] max-sm:px-20 max-sm:max-w-[500px] max-sm:hidden">

                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo3.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo4.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo5.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo6.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo7.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo8.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo9.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo10.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo11.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo13.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo14.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo15.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo16.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo17.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo18.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo19.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo20.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo21.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo22.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo23.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo24.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo25.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo27.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo28.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo29.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-300" src="/img/Catalogo30.png" alt="">
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>

        </div>

        <div class="grid grid-cols-1 gap-2 max-sm:px-2 min-[600px]:hidden">

            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo1.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo2.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo3.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo4.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo5.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo6.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo7.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo8.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo9.png"
                alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo10.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo11.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo12.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo13.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo14.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo15.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo16.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo17.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo18.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo19.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo20.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo21.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo22.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo23.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo24.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo25.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo27.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo28.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo29.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]"
                src="/img/Catalogo30.png" alt="">

        </div>

        <div
            class="titular2 max-sm:pt-24 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Material</p>INSTAGRAM
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#311568]">CREACIÓN DE PUBLICACIONES CREANDO MOSAICOS EN FEED</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Creación y composición de las publicaciones de instagram para conseguir más visualizaciones al
                    perfil y la
                    página web para fidelizar con los clientes.
                </div>

            </div>

        </div>


        <div
            class="titular2 max-[1500px]:px-24 grid grid-cols-3 max-sm:grid px-[20rem] gap-1 place-items-center pt-12 pb-24 w-full h-full max-sm:grid-cols-1 max-sm:pt-2 max-sm:px-0">

            <img class="image w-full h-full" src="/img/mockupinstagram1.png" alt="">
            <img class="image w-full h-full" src="/img/Mockupinstagram3.png" alt="">
            <img class="image order-first w-full h-full" src="/img/Mockupinstagram2.png" alt="">

        </div>

        <div
            class="div max-[1500px]:px-24 text-[#474747] px-64 pb-2 pt-12 text-left text-xm m-0 font-['PPE-Ultralight'] uppercase max-sm:text-xs max-sm:px-12 max-sm:text-center max-sm:pt-12">
            > EJEMPLO DE PUBLICACIÓN 1</div>
        <div
            class="titular2 max-[1500px]:px-24 grid grid-cols-3 px-64 gap-1 place-items-center pt-4 w-full h-full max-sm:gap-0 max-sm:pt-2 max-sm:px-0 max-sm:grid-cols-3">

            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram1.png" alt="">
            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram2.png" alt="">
            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram3.png" alt="">
        </div>

        <div
            class="div max-[1500px]:px-24 text-[#474747] px-64 pb-2 pt-12 text-left text-xm m-0 font-['PPE-Ultralight'] uppercase max-sm:text-xs max-sm:px-12 max-sm:text-center max-sm:pt-12">
            > EJEMPLO DE PUBLICACIÓN 2</div>
        <div
            class="titular2 max-[1500px]:px-24 grid grid-cols-3 px-64 gap-1 place-items-center pt-4 w-full h-full max-sm:gap-0 max-sm:pt-2 max-sm:px-0 max-sm:grid-cols-3">

            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram6.png" alt="">
            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram8.png" alt="">
            <img class="image_grid w-full h-full border" src="/img/Publicacioninstagram5.png" alt="">
        </div>

        <div
            class="titular2 max-sm:pt-24 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Fotografías</p>Y EDICIÓN
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#311568]">SESIONES FOTOGRÁFICAS Y POSTPRODUCCIÓN PHOTOSHOP</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Realización de fotografías en estudio, fotografías en galería y renders de piezas con postproducción
                    para
                    envio a cliente o utilización de material en web o instragram.
                </div>

            </div>

        </div>

        <div
            class="titular2 max-[1500px]:px-12 max-[1500px]:pt-4 grid grid-cols-1 place-items-center px-64 max-sm:px-0 pt-6 pb-44 w-full h-full max-sm:grid-cols-1 max-sm:pt-2">

            <img class="image_grid w-full h-full max-[1440px]:px-32 px-64 max-sm:px-0" src="/img/edicionpieza_1.gif"
                alt="">
        </div>

        <div class="  text-white justify-center content-center max-sm:pb-24">
            <NuxtMarquee class="h-[500px] w-[500px] max-sm:w-[300px] max-sm:h-[300px] flex">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida1.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida2.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida3.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida4.jpg"
                    alt="">

                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida5.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida6.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida7.jpg"
                    alt="">
                <img class="h-[500px] w-[500px] pl-4 max-sm:w-[300px] max-sm:h-[300px]" src="/img/Corregida8.jpg"
                    alt="">

            </NuxtMarquee>

        </div>

        <div
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Página web</p> GARRIDO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-sm:order-last max-[1280px]:text-left">
                    <a class="type text">MODIFICACIÓN Y RENOVADO DE PÁGINA WEB EXISTENTE</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Se realiza un diseño diferente y modernizado de la web que ya estaba realizada, usandola como base,
                    pero
                    mejorando la maquetación, tipografías, colocación, espaciado y creación de nuevas fotografías.
                </div>

            </div>

        </div>

        <div class="boton max-[1500px]:pt-2 flex justify-center pt-12 max-sm:pt-6 max-sm:pb-24">

            <a class="bg-gray-300 font-['PPE-Ultralightitalic'] uppercase hover:bg-gray-400 text-gray-800 font-bold py-4 px-6 rounded-xl inline-flex items-center"
                href="https://www.garridogallery.com">
                <span>/Página Web</span>
            </a>

        </div>


        <div class="titular2 flex justify-center w-full h-full">


            <video
                class="pb-2 justify-items-center max-sm:pt-0 max-sm:pb-24 max-sm:px-0 max-[1500px]:px-32 px-64 pt-32 content-center justify-center w-full h-full"
                loop autoplay muted>
                <source src="/img/paginaweb2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Otras creaciones</p>GARRIDO GALLERY
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-sm:order-last max-[1280px]:text-left">
                    <a class="type text">CREACIÓN DE DIFERENTES FORMATOS Y ELEMENTOS</a>
                </div>
                <div
                    class="text max-w-[80ch] max-[1500px]:max-w-[50ch] order-last pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Cartelería para exposiciones concretas, tarjetas de visita para eventos y folletos para momentos
                    concretos
                    en la Galería. Todas creadas e impresas en físico para clientes y el público de la galería.
                </div>

            </div>

        </div>

        <div
            class="div max-[1500px]:px-24 text-[#474747] px-64 pb-2 pt-24 text-left text-lg m-0 font-['PPE-Ultralight'] uppercase max-sm:text-xs max-sm:px-12 max-sm:text-center max-sm:pt-12">
            > TARJETA DE VISITA SALON 2023</div>

        <div
            class="grid max-[1500px]:px-24 grid-cols-2 pt-8 gap-8 items-center justify-items-center px-64 pb-12 max-[1280px]:p-6 max-[1500px]:px-32  max-sm:grid-cols-1 max-sm:px-0">
            <div>
                <img class="image_grid w-full h-full pb-4" src="/img/Mockuptarjeta.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Mockuptarjeta1.png" alt="">


            </div>
            <div class="grid grid-cols-2 gap-4 self-end max-sm:px-12">
                <img class="image_grid w-full h-full border-[0.025rem] border-gray-400" src="/img/TarjetaFinal2.png"
                    alt="">
                <img class="image_grid w-full h-full border-[0.025rem] border-gray-400" src="/img/TarjetaFinal1.png"
                    alt="">

            </div>



        </div>

        <div
            class="div max-[1500px]:px-24 text-[#474747]  pb-2 pt-12 text-left px-64 text-lg m-0 font-['PPE-Ultralight'] uppercase max-sm:text-xs max-sm:px-12 max-sm:text-center">
            > FOLLETO DÍPTICO EXPOSICIÓN LUIS GORDILLO 2024</div>

        <div
            class="grid max-[1500px]:pb-24 max-[1500px]:px-24 grid-cols-2 pt-8 items-end gap-6 justify-items-center px-64 pb-32 max-[1280px]:p-10 max-[1500px]:px-32  max-sm:grid-cols-1 max-sm:px-0">

            <div>
                <img class="image_grid w-full h-full" src="/img/FicticioFolleto.jpg" alt="">

            </div>

            <div class="grid grid-cols-2 gap-2 items-end max-sm:px-6">
                <img class="image_grid w-full h-full border-[0.025rem] border-gray-400"
                    src="/img/FolletoGordilloFinal1.png" alt="">
                <img class="image_grid w-full h-full border-[0.025rem] border-gray-400"
                    src="/img/FolletoGordilloFinal2.png" alt="">
            </div>



        </div>

        <div
            class="div max-[1500px]:pt-2 max-[1500px]:px-24 text-[#474747]  pb-2 pt-12 text-left px-64 text-lg m-0 font-['PPE-Ultralight'] uppercase max-sm:text-xs max-sm:px-12 max-sm:text-center">
            > CARTEL PARA LA EXPOSICIÓN DE GORDILLO 2024</div>
        <div
            class="grid max-[1500px]:px-24 grid-cols-2 pt-8 items-end gap-6 justify-items-center px-64 pb-32 max-[1280px]:p-10 max-[1500px]:px-32  max-sm:grid-cols-1 max-sm:px-0">

            <div>
                <img class="image_grid w-full h-full" src="/img/Mockupcartel.png" alt="">

            </div>

            <div class="grid grid-cols-2 gap-2 items-end max-sm:px-6 max-sm:grid-cols-1">
                <img class="image_grid w-full h-full border-[0.025rem] border-gray-400"
                    src="/img/CartelGordilloFinal.png" alt="">

            </div>



        </div>




        <div id="contacto" class="informacion max-sm:pt-24 pt-[300px] pb-64 bg-white max-sm:pb-32">
            <div class="about bg-white">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
                    <div
                        class="caja2 z-0 text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] cursor-pointer text-black">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] text-lg flex gap-2 items-center max-sm:items-left max-sm:justify-start max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector" src="/img/Vector-11.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about bg-white pt-2">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 max-sm:grid-cols-1 text-black group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-black text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-black">
                        Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] grid grid-cols-2 font-['Neue'] hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[14px]" src="/img/Behance.png" />
                            Behance
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[14px]" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[14px]" src="/img/LinkedIn.png" />
                            LinkedIn
                            <img class="vector" src="/img/Vector-11black.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:grid-cols-1 text-black group">
                    <!-- Caja 3 -->
                    <div
                        class="caja2 max-sm:animate-pulse max-sm:text-black text-left max-sm:text-[60px] max-sm:px-6 max-sm:leading-[50px] px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-black">
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



        <div class="foter bg-zinc-80white0 p-12 border-0 flex justify-center max-sm:grid-cols-2 text-black max-lg:p-6">
            <div class="foter_image flex flex-start max-sm:gap-2">
                <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />
            </div>
            <div class="email flex pr-12 pl-12 gap-2 justify-end items-center text-sm max-lg:text-xs">
                2024
            </div>
            <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />

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
import CursorBlack from "~/components/CursorBlack.vue";


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
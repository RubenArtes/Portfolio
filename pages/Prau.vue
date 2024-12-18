<template>
    <div id="inicio" class="app bg-white font-['SFUIDisplay-Light']">
        <CursorBlack class="max-sm:hidden" />

        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[100000] bg-white backdrop-filter">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-[99999] max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
                <!-- Contenedor alineado a la izquierda -->
                <div class="contenedor flex items-center justify-start text-[25px]">
                    <div class="image">
                        <NuxtLink class="flex" to="/IntroDark">
                            <img class="max-lg:max-w-[15px] w-[20px]" src="/img/darklogo.png" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Botón para abrir la slidebar dentro del navbar -->
                <button @click="toggleSidebar"
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-[99999] p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-white"
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
                <ul class="pt-12 flex flex-col justify-between h-full relative z-[99999] text-black">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#contacto"
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
                class="titular max-[1500px]:hidden flex max-sm:leading-[60px] text-[120px] font-['PPE-Ultralight'] leading-[130px] font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1440px]:leading-[140px] max-[1500px]:text-center max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568]  ">
                MARCA <br> PRAU
            </div>
            <div
                class="titular hidden max-[1500px]:flex max-sm:leading-[60px] text-[120px] font-['PPE-Ultralight'] leading-[130px] font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1440px]:leading-[140px] max-[1500px]:text-center max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568]  ">
                MARCA PRAU</div>

            <div
                class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-sm:pt-4 max-w-[60ch] text-[16px] max-[1440px]:pt-12 uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Diseño Prau - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-sm:pt-4 max-w-[80ch] max-[1440px]:pt-12 pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Este trabajo consiste en
                    realizar una identidad visual de un distribuidor de productos y alimentos de km0, que cumplan
                    ciertas
                    condiciones, como productos de buena calidad y relación calidad precio y que sean productos
                    artesanos y
                    de proximidad. Creación de la marca visual, logo y tres productos, uno siendo el vino el principal
                    productos y otros dos a elección propia, en mi caso el queso de cabra y la mermelada natural
                    (naranja).
                    Hay que crear un nombre y logo de marca (+ descriptor), propuesta de etiquetado para vino y otros
                    dos
                    productos, rotulo de fachada y bolsa de papel.
                    Mi proyecto se llama Prau, una bodega de vinos que crea productos KM0 de La Rioja.
                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-black max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-black max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos del Diseño Gráfico, 2º Diseño Gráfico
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-start text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    2 - 3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-black max-xl:text-sm max-xl:max-w-[40ch]">
                    Productos KM0
                </div>
            </div>
        </div>

        <div
            class="video flex pt-20 pb-4 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/finalprau.jpg" alt="">

        </div>
        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8  px-8 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] pt-4 font-['Neue'] uppercase">▲ Mockup de etiquetado delantero/trasero</a>
        </div>
        <div
            class="colum flex max-[1440px]:px-32 pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32 ">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#243673] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-1">Vinos Prau</p> MARCA KM0
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Esta marca es un gran legado familiar y a lo largo de tres generaciones se ha producido un vino
                        clarete de alta calidad, conservando siempre el gran valor principal de esta marca, la pasión
                        por la
                        tierra y dedicarse con un gran compromiso a esta.
                        Cobra una gran importancia el cuidado del terreno y los suelos que ofrecen luego un gran
                        producto de
                        calidad. <br> <br>
                        <div class="text indent-12">Una vez desarrollado durante años el vino clarete se ha pensado el
                            producir otras elaboraciones
                            asemejando la calidad y el cuidado del vino y con la idea de crear productos gourmets. Estos
                            productos serán el queso de cabra y la mermelada natural, haciendo de estos unos productos
                            con
                            una
                            elaboración muy cuidada y artesanal con cero idea de producción industrial.
                            Esta marca tendrá como nombre Prau, productor y exportador de La Rioja con un concepto de
                            pasión
                            por
                            la tierra y el campo.</div>
                        <br>
                        <div class="text indent-12">El nombre de Prau nace con la idea de utilizar el campo y la tierra
                            y
                            combinarlo con el dialecto
                            riojano, por lo que Prau - Del dialecto de Rioja, riojano, sirve para denominar al prado, al
                            campo
                            la tierra en general. Entra en consonancia con los valores de esta marca, ya que representa
                            esa
                            pasión por la tierra y por
                            los campos de cultivo, esa pasión por el terreno que lleva pasando de familia en familia.
                        </div>
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col max-sm:pt-12 gap-6 h-min">
                <img class="image_rect w-[800px]" src="/img/vinoprau3d.png" alt="">
            </div>
        </div>



        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Mermeladas</p> DE
                NARANJA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#FFB047]">TARROS DE MERMELADA DE NARANJA</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-sm:order-last max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de mermelada,
                    muestra de la etiqueta y como se integra
                    en el packaging de forma embolvente teniendo en cuenta los espaciados, colocación de los textos y
                    maquetación general.
                </div>

            </div>

        </div>

        <div
            class="images max-[1500px]:px-0 pt-20 pb-4 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[800px]:px-0 max-[800px]:pt-12">

            <img class="image_grid w-full h-full" src="/img/mockupmer_3.png" alt="">

        </div>

        <div
            class="grid max-[1500px]:px-24 max-[1500px]:pb-24 grid-cols-3 gap-8 px-8 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-sm:hidden">
            <a class="type text-[14px] pt-4 font-['Neue'] uppercase">▲ Mockup etiquetado de Mermelada</a>
        </div>

        <div class="div max-sm:pt-12 max-sm:pb-8 text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">Etiqueta final
            envolvente con
            información
            <br>
            <div class="div text-[#FFB047] text-center text-lg m-0 animate-pulse font-['Domaine-Display'] uppercase">
                MERMELADA DE NARANJA</div>
        </div>

        <img class="px-[10rem] max-[1500px]:px-12 max-sm:px-0 max-sm:pb-12 pb-24 image_grid w-full h-full"
            src="/img/prau3d2.png" alt="">




        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Etiq. Vino</p>
                CLARETE
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#311568]">LA MARCA DE VINO KM0</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de vino,
                    muestra de la etiqueta y como se integra
                    en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación
                    de
                    los
                    textos y maquetación general.
                </div>

            </div>

        </div>




        <div
            class="images max-[1500px]:px-0 pt-12 pb-4 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[800px]:px-0 max-[800px]:pt-4">

            <img class="image_grid w-full h-full max-sm:hidden" src="/img/vinospng2.png" alt="">
        </div>

        <img class="image_grid w-full max-sm:px-12 h-full pb-12 min-[800px]:hidden max-sm:flex" src="/img/botella1.png"
            alt="">
        <img class="image_grid w-full max-sm:px-12 max-sm:pt-12 max-sm:pb-24 h-full min-[800px]:hidden max-sm:flex"
            src="/img/botella2.png" alt="">

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8  px-8 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] pt-4 font-['Neue'] uppercase">▲ Etiquetado botellas por delante/detras</a>
        </div>

        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Etiq. Queso</p> DE
                CABRA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#a58d66]">QUESOS 100% NATURALES DE CABRA</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de queso de cabra,
                    muestra de la etiqueta y como se integra
                    en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación
                    de
                    los textos y maquetación general.
                </div>

            </div>

        </div>



        <div
            class="images pt-12 max-[1500px]:px-0 pb-4 justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[800px]:px-0 max-[800px]:pt-4">

            <img class="image_grid w-full h-full" src="/img/quesoprau5.png" alt="">
        </div>

        <div
            class="grid grid-cols-3 gap-8  px-8 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] pt-4 font-['Neue'] uppercase">▲ FOTOGRAFÍA ETIQUETA QUESOS</a>
        </div>

        <div
            class="texto px-12 max-[1500px]:px-32 max-[1500px]:gap-80 flex gap-[53rem] justify-center pt-2 max-sm:gap-16 max-sm:hidden">
            <div
                class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[16px] text-zinc-600 max-sm:text-[12px]">
                ETIQUETA TRASERA
            </div>

            <div
                class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[16px] text-zinc-600 max-sm:text-[12px]">
                ETIQUETA DELANTERA
            </div>
        </div>

        <div
            class="images px-24 max-[1500px]:px-24 pt-12 pb-12 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[800px]:px-0 max-[800px]:pt-4">

            <img class="image_grid w-full h-full max-sm:hidden" src="/img/etiquetaqueso.png" alt="">
        </div>

        <img class="image_grid pt-12 hidden w-full h-full max-sm:flex" src="/img/etiqueta2.png" alt="">
        <img class="image_grid hidden w-full h-full max-sm:flex" src="/img/etiqueta1.png" alt="">


        <div
            class="titular2 max-sm:pt-24 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Construcción</p> DE
                MARCA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text">LOGOTIPO PRINCIPAL CON DIFERENTES DESCRIPTORES</a>
                </div>
                <div
                    class="text max-[1500px]:max-w-[40ch] max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-black max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    En esta marca se utiliza el nombre de PRAU como logotipo principal utilizando diferentes opicones
                    que da la tipografía original
                    y se le añade un descriptor debajo para cada uno de los productos.
                </div>

            </div>

        </div>

        <div
            class="grid max-sm:pb-24 max-[1500px]:pb-4 max-[1500px]:px-0 grid-cols-1 pt-0 gap-12 px-0 pb-32 max-xl:grid-cols-1 max-xl:px-0 max-xl:pb-10 max-xl:pt-10 max-sm:gap-2">
            <NuxtMarquee>

                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca2.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca1.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca3.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca4.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca2.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca1.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca3.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca4.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca2.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca1.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca3.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/marca4.png" alt="">
            </NuxtMarquee>

        </div>

        <div
            class="images max-[1500px]:px-0 pt-12 pb-2 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-2 max-[800px]:px-0 max-[800px]:pt-4 max-sm:gap-4">

            <img class="image_grid w-full h-full" src="/img/rotulofachada.jpg" alt="">
        </div>

        <div
            class="titular2 max-sm:pt-24 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-24 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Ilustraciones</p>
                FINALES
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text">ILUSTRACIONES PARA CADA UNA DE LAS ETIQUETAS</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Ilustraciones creadas para cada uno de los
                    packaging
                    mediante ilustración digital. La etiqueta de vino representada con una ilustración de las propias
                    uvas.
                    Para la mermelada se hace una ilustración de la fruta seleccionada. Y en el queso se representa el
                    animal de procedencia
                    en este caso la cabra.
                </div>

            </div>

        </div>

        <div
            class="grid max-sm:hidden max-[1920px]:px-12 max-[1500px]:px-24 grid-cols-1 gap-0 items-center justify-items-center px-64 pb-2 max-sm:px-6 max-sm:pt-2 max-sm:pb-24 max-[1280px]:p-10 max-sm:grid-cols-1">

            <img class="image_grid w-full h-full " src="/img/ilustraciones444.png" alt="">


        </div>

        <div
            class="hidden max-sm:grid max-[1920px]:px-12 max-[1500px]:px-24 grid-cols-1 gap-0 items-center justify-items-center px-64 pb-2 max-sm:px-6 max-sm:pt-2 max-sm:pb-24 max-[1280px]:p-10 max-sm:grid-cols-1">

            <img class="image_grid w-full h-full " src="/img/ilustraciones33.png" alt="">


        </div>
        <div id="contacto" class="informacion max-sm:pt-0 pt-[300px] pb-24 bg-[#fcfcff] max-sm:pb-0">

<div class="about bg-[#fcfcff]">
    <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
        <div
            class="caja2 max-sm:text-zinc-500 max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
            Correo
        </div>
        <div
            class="caja1 text-left self-center max-sm:self-start max-sm:px-4 px-20 leading-[10rem] font-['Neue'] cursor-pointer text-black">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank"
                class="email font-['Neue'] max-sm:text-zinc-500 max-sm:text-[18px] max-sm:leading-10 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                ruben.maldonado.graphic@gmail.com
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
        </div>
    </div>
</div>
<div class="about bg-[#fcfcff] pt-2">


    <!-- Redes Sociales -->
    <div
        class="redes grid grid-cols-2 items-center max-sm:grid-cols-1 text-black group hover:group-[.hover]:cursor-default">
        <!-- Caja 2 -->
        <div
        class="caja2 max-sm:text-zinc-500 max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
        Redes sociales
        </div>
        <!-- Redes ocultas por defecto y visibles al hacer hover -->
        <div
            class="caja1 text-left self-center max-sm:px-4 px-20 text-[20px] grid grid-cols-2 font-['Neue']  hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Instagram.png" />
                Instagram
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://www.behance.net/maldonadoruben" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Behance.png" />
                Behance
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://www.instagram.com/ruben.iso" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Instagram.png" />
                Instagram
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/LinkedIn.png" />
                LinkedIn
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/redbubble.svg" />
                Redbubble
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
            <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-500 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                href="https://es.pinterest.com/maldonadoruben_" target="_blank">
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/pinterest.svg" />
                Pinterest
                <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-45" src="/img/Vector-11black.svg" />
            </a>
        </div>
    </div>

    <!-- Información -->
    <div class="informacion grid grid-cols-2 max-sm:pb-12 max-sm:grid-cols-1 text-black group">
        <!-- Caja 3 -->
        <div
        class="caja2 max-sm:text-zinc-500 max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
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

<script>

import text from "/components/text.vue";

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


import PlvPointer from "/components/Cursor.vue";

</script>
<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
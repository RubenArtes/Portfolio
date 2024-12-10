<template>
    <Cursor class="mix-blend-exclusion" />

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

    <div class="app bg-white font-['SFUIDisplay-Regular'] relative z-[1]">
        <div
            class="header bg-white p-1 flex px-8 gap-12 text-center justify-items-center place-content-center sticky top-[106px] z-[10] max-lg:p-6 max-lg:sticky border border-b-1 max-sm:hidden max-[1920px]:gap-8 max-[1500px]:gap-2 max-[1500px]:px-4 max-[1500px]:justify-between">
            <a href="#navegacion"
                class="email text-black items-center text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-[1500px]:text-[10px] max-[1500px]:max-w-[30ch]">NAVEGACIÓN
            </a>
            <a href="#primercompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                PRIMER
                COMPARTIMENTO
            </a>
            <a href="#segundocompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                SEGUNDO
                COMPARTIMENTO
            </a>
            <a href="#postales"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] text-center justify-center items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                POSTALES
            </a>
            <a href="#sellos"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-center items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                SELLOS
            </a>
            <a href="#cuadernos"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[20ch]">>
                CUADERNILLOS
            </a>
            <a href="#tercercompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[26ch]">>
                TERCER
                COMPARTIMENTO
            </a>
            <a href="#mapa"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                MAPA
            </a>
            <a href="#folleto"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                FOLLETO
            </a>
            <a href="#cuartocompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                CUARTO
                COMPARTIMENTO
            </a>
            <a href="#packanalogicas"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                PACK ANALÓGICAS
            </a>
            <a href="#libroimpreso"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                LIBRO IMPRESO
            </a>
            <a href="#cajafajilla"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                CAJA FAJILLA
            </a>
            <a href="#tipografias"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                TIPOGRAFIAS
            </a>
            <a href="#fotografias"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] items-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                FOTOGRAFÍAS
            </a>
            <a href="#piezas"
                class="email text-zinc-400 text-[12px] justify-center max-[1920px]:text-[10px] items-center place-self-center justify-items-center flex gap-2 max-lg:text-xs max-[1500px]:text-[10px] max-[1500px]:w-[18ch]">>
                PIEZAS
            </a>

        </div>
        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568]  ">
                OPORTO</div>
            <div
                class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    IMPRESIÓN - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    El proyecto consistirá en la creación de una caja contenedora de diferentes elementos impresos sobre
                    un tema concreto, realizando diferentes pruebas físicas como folletos, cuadernillos impresos o
                    carteles. Para este trabajo
                    la temática ha sido Oporto y la cultura portuguesa, creando una caja que sea una experencia y visión
                    personal de un viaje de 3 días.
                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-12 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Producción para artes gráficas, 4º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Oporto y cultura portuguesa
                </div>
            </div>
        </div>

        <div
            class="video flex pt-8 pb-20 max-sm:pb-8 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <NuxtImg class="image image-rendering:pixelated max-sm:hidden w-full h-full" src="/img/oportoazulejo2.png"
                alt="" />
            <NuxtImg class="image image-rendering:pixelated hidden max-sm:flex w-full h-full" src="/img/cajaoporto.png"
                alt="" />



        </div>
        <div data-aos="fade-up" data-aos-duration="2000"
            class="colum max-[1500px]:px-32 flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#243673] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Caja cont.</p> VIAJE OPORTO
                    </div>
                    <div
                        class="text text-[20px] font-['Regular'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        El trabajo de esta asignatura se basa en la creación de una caja
                        contenedora de elementos impresos con una temática detrás.
                        Todos estos elementos deberán de tener coherencia entre sí además del conjunto general de la
                        caja, como la caja en si mismo y
                        los contenedores internos de los elementos.
                        Antes de seleccionar el tema definitivo se pensaron diferentes temáticas para la caja, en mi
                        caso mis dos temáticas a elegir fueron, una caja de supervivencia con todos los elementos
                        necesarios para un superviviente moderno creando elementos
                        innovadores con las impresiones y las tintas. Y el otro proyecto
                        pensado fue crear una caja contenedora de un viaje personal
                        por Oporto, contando mi propio punto de vista, mi experiencia
                        y demás experiencias vividas reflejándolo en diferentes soportes
                        de guías turísticas pero con un diseño más intimo y depurado.
                        <br><br>

                        <div class="text indent-12"> Para comenzar con el proyecto ya contaba con un viaje anterior con
                            amigos y ya tenía algo de
                            material creado, pero necesitaba algo más, necesitaba contar algo más y realizar un viaje
                            más exhaustivo y donde estar yo solo con mis rutas, mis lugares,
                            mis tiempos, mis momentos y estar yo solo durante unos días
                            para desconectar de todo en otro país.
                            Por ello el trabajo desde el primer momento ha tenido como
                            idea principal mostrar todo aquello que yo viví durante un viaje
                            de 3 días intensos por la ciudad y todos sus rincones, haciendo
                            un trabajo poético, visual y de archivo fotográfico, personal y
                            también de guía para otras personas.</div>
                        <br>

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min z-100">
                <NuxtImg class="image_rect rounded-xl" src="/img/bocetosoporto.png" alt="" />

            </div>
        </div>


        <div id="primercompartimento" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Primer</p>COMPARTIMENTO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">CAJA CONTENEDORA DEL PROYECTO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Dentro de este compartimento se puede ver una breve introducción al proyecto y a Oporto o Portugal,
                    con un elemento central que es el azulejo personalizado, estampado mediante serigrafía.
                </div>

            </div>

        </div>

        <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image w-full h-full" src="/img/IMG_2423.jpg"
            alt="" />


        <div data-aos="fade-up" data-aos-duration="2000"
            class="video grid-cols-2 grid max-sm:pt-24 pt-32 px-64 pb-20 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1 max-[1440px]:px-32">
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['PPE-Ultralight'] text-[20px] text-[#243673]">
                    “¡EN PORTUGAL, EL AZULEJO CONTINÚA VIVO!”.
                </a>
                <br><br>
                Dondequiera que esté en Portugal, resulta difícil no encontrárselos.
                Los azulejos recorren estilos y lenguajes de todos los tiempos,
                y llenan de color cualquier paseo o visita. Para Oporto uno de sus
                elementos arquitectónicos más tradicionales son los azulejos azules
                que adornan multitud de fachadas de la localidad.
                En Portugal el azulejo se ha usado sin interrupción desde finales
                del siglo XV en la Arquitectura y en las diferentes manifestaciones
                artísticas.<br><br>
                La multiplicidad de técnicas y el elevado número de azulejos
                que todavía permanecen aplicados in situ, por todo el país, son
                indicios claros de la importancia de este patrimonio en Portugal.
                Patrimonio cerámico común a varias culturas, el azulejo sirve de
                testimonio de influencias recíprocas. Realmente, las representaciones
                de los azulejos portugueses, en sus tres vertientes que
                coexisten o se alternan a lo largo de los años (figurativa, ornamental
                y padrón), manifiestan la influencia de los estilos europeos y
                de otras culturas como la árabe.
            </div>

            <img class="image hidden w-full h-full max-sm:flex" src="/img/gifazulejo2.gif" alt="" />
            <img class="image flex w-full h-full max-sm:hidden" src="/img/azulejo2.webp" alt="" />


        </div>

        <div id="segundocompartimento" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Segundo</p>COMPARTIMENTO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">CAJA CONTENEDORA DEL PROYECTO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    En este segundo compartimento se incluyen tres piezas diferentes. Tres fanzines/fotolibros
                    experimentales cosidos a mano, cada uno contando cada uno de los tres días del viaje a modo de
                    diario. Como segunda pieza unas postales con ilustraciones personales y por ultimo
                    unos sellos personalizados contando con 4 modelos distintos.
                </div>

            </div>

        </div>

        <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image px-24 w-full h-full max-sm:hidden"
            src="/img/piezascompartimento3.png" alt="" />
        <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image hidden px-12 w-full h-full max-sm:block"
            src="/img/piezascompartimento32.png" alt="" />
        <div data-aos="fade-up" data-aos-duration="1000"
            class="grid grid-cols-3 gap-24 justify-items-center max-sm:hidden">

            <div
                class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[18px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                3 unidades / 1 por día</div>
            <div
                class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[18px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                3 unidades / doble cara</div>
            <div
                class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[18px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                4 unidades</div>

        </div>


        <div id="postales"
            class="titular2 max-[1440px]:px-32 max-[1440px]:text-center max-[1440px]:content-center flex px-64 pb-32 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                POSTALES</div>
        </div>

        <div
            class="hidden grid-cols-3 pb-32 px-64 gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-8 max-sm:gap-6 max-sm:pb-24 max-sm:grid">
            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal6.png" alt="" />

            </div>
            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal1.png" alt="" />

            </div>
            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal4.png" alt="" />

            </div>
            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal2.png" alt="" />

            </div>
            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal3.png" alt="" />

            </div>


            <div class="columna1">
                <NuxtImg class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal5.png" alt="" />

            </div>

        </div>

        <div class="marquee max-sm:hidden">

            <NuxtMarquee class="h-[400px] w-[900px] gap-12">

                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal6.png" alt="" />
                </div>
                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal4.png" alt="" />
                </div>
                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal3.png" alt="" />
                </div>
                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal1.png" alt="" />
                </div>
                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal2.png" alt="" />
                </div>
                <div class="columna1 max-sm:hidden">
                    <NuxtImg class="h-[400px] w-[900px] ml-4 border border-zinc-200 max-sm:w-[200px] max-sm:h-[450px]"
                        src="/img/postal5.png" alt="" />

                </div>
            </NuxtMarquee>

        </div>


        <NuxtImg class="image pt-32 w-full h-full pb-32 max-sm:hidden" src="/img/postalespng.png" alt="" />

        <div class="grid grid-cols-2 max-sm:grid-cols-1">
            <NuxtImg class="image w-full h-full pb-32 max-sm:pb-2" src="/img/IMG_2450.jpg" alt="" />
            <NuxtImg class="image w-full h-full pb-32 max-sm:pb-2" src="/img/IMG_2483.jpg" alt="" />
        </div>


        <div id="sellos" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1440px]:px-32 max-[1440px]:text-center max-[1440px]:content-center flex px-64 pb-32 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                SELLOS</div>
        </div>

        <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image w-full h-full pb-32 max-sm:pb-12"
            src="/img/IMG_2444.jpg" alt="" />

        <!--<div
            class="grid grid-cols-4 gap-2 pb-32 px-64 justify-items-center max-[1920px]:px-12 max-sm:grid-cols-1 max-sm:pb-2 max-sm:hidden">

            <div class="bg-[url('/img/IMG_247644.jpg')] hover:bg-[url('/img/sellos2.png')] w-full h-[20rem] bg-cover">
            </div>
            <div class="bg-[url('/img/IMG_24764.jpg')] hover:bg-[url('/img/sellos1.png')] w-full h-[20rem] bg-cover">
            </div>
            <div class="bg-[url('/img/IMG_247642.jpg')] hover:bg-[url('/img/sellos3.png')] w-full h-[20rem] bg-cover">
            </div>
            <div class="bg-[url('/img/IMG_247643.jpg')] hover:bg-[url('/img/sellos4.png')] w-full h-[20rem] bg-cover">
            </div>


        </div> -->

        <div
            class="grid grid-cols-2 gap-32 pb-4 px-64 pt-12 justify-items-center max-[1920px]:px-12 max-sm:grid-cols-1 max-sm:pb-12 max-sm:pt-12 max-sm:px-24 max-sm:gap-12">
            <img class="place-self-end" src="/img/sellos12.webp" alt="" />
            <img class="place-self-start" src="/img/sellos22.webp" alt="" />
            <img class="place-self-end" src="/img/sellos33.webp" alt="" />
            <img class="place-self-start" src="/img/sellos44.webp" alt="" />

        </div>



        <div id="cuadernos"
            class="titular2 max-[1440px]:px-32 max-[1440px]:text-center max-[1440px]:content-center flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-zinc-900 max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6 max-sm:text-[30px] max-sm:pb-0">
                CUADERNOS DE VIAJE EXPERIMENTALES</div>
        </div>

        <div
            class="grid bg-white grid-cols-1 grid-row-2 gap-2 px-64 max-[1440px]:px-12 max-[1440px]:pb-32 pb-64 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <div
                class="grid grid-cols-3 px-12 grid-row-1 gap-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-12 max-sm:px-0 max-sm:pt-0 max-sm:gap-2">

                <div
                    class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                    CUADERNO DE VIAJE 1 - DÍA 1

                </div>

                <div
                    class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                    CUADERNO DE VIAJE 2 - DÍA 2

                </div>

                <div
                    class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                    CUADERNO DE VIAJE 3 - DÍA 3

                </div>

                <Carousel class="max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/portadacuadernillo3.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental1.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental2.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental3.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental4.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental5.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental6.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental7.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental8.png" alt="" />
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>
                <Carousel class="max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/portadacuadernillo.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental11.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental12.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental12.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental13.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental14.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental15.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental16.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental17.png" alt="" />
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>
                <Carousel class="max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                            src="/img/portadacuadernillo2.png" alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo1.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo2.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo3.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo4.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo5.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo6.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo7.png"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo8.png"
                            alt="" />
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>

            </div>

        </div>
        <div
            class="hidden grid-cols-3 px-12 grid-row-1 gap-12 max-xl:grid-cols-1 max-xl:px-10 max-sm:pb-0 max-xl:pt-10 max-[1500px]:px-32  max-sm:pt-0 max-sm:gap-2 max-sm:grid max-sm:px-6">

            <div
                class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                CUADERNO DE VIAJE 1 - DÍA 1

            </div>


            <Carousel class="max-sm:pb-0" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo3.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental1.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental2.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental3.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental4.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental5.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental6.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental7.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/CuadernilloExperimental8.png" alt="" />
                </Slide>

                <template #addons>
                </template>
            </Carousel>

            <div
                class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                CUADERNO DE VIAJE 2 - DÍA 2

            </div>


            <Carousel class="max-sm:pb-0" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental11.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental12.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental12.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental13.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental14.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental15.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental16.png" alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental17.png" alt="" />
                </Slide>

                <template #addons>
                </template>
            </Carousel>

            <div
                class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                CUADERNO DE VIAJE 3 - DÍA 3

            </div>


            <Carousel class="max-sm:pb-0" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo2.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo1.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo2.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo3.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo4.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo5.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo6.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo7.png"
                        alt="" />
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <NuxtImg class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo8.png"
                        alt="" />
                </Slide>

                <template #addons>
                </template>
            </Carousel>


        </div>

        <div
            class="colum flex max-[1500px]:px-12 max-[1440px]:pt-2 max-[1440px]:gap-24 pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-sm:px-4">

            <div class="fotografias flex flex-col gap-6 max-w-[120h] max-sm:gap-4">
                <NuxtImg class="image w-full h-full" src="/img/IMG_2459.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2460.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2461.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2463.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2511.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2496.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2506.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2505.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2503.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2502.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2501.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2499.jpg" alt="" />
                <NuxtImg class="image w-full h-full max-sm:pb-12" src="/img/IMG_2467.jpg" alt="" />
            </div>

            <div class="info_proyect max-w-[80ch] pt-12 max-sm:px-4 max-sm:hidden">
                <div class="info_secondary flex flex-col gap-6 sticky top-52 max-[1500px]:gap-12 opacity-50">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#243673] max-xl:text-[120px] max-xl:justify-center max-sm:text-[30px] max-sm:leading-10 max-[1500px]:text-left">
                        ← CUADERNILLOS</div>
                    <div
                        class="text text-[16px] font-['Regular'] indent-12 text-[#243673] max-xl:text-sm max-[1500px]:text-[16px]">
                        Creación de 3 cuadernillos de maquetación experimental para
                        narrar el viaje de los 3 días. Un cuadernillo por cada uno contando
                        por horas todos los trayectos, lugares, monumentos y momentos
                        importantes de cada día vivido ahí. <br> <br> La maquetación no busca
                        ser un fotolibro como el que ya hay en la caja, si no buscar una
                        narrativa diferente que cuente de otra forma todo, tanto con el
                        tratamiento de las imágenes, como la maquetación general de
                        la información y el estilo de los párrafos de texto.
                        La idea es hacer un recorrido por horas del día combinado con
                        poemas portugueses y creando una narrativa al rededor de los
                        lugares y momentos. <br> <br>
                        Cuadernillos cosidos vistos con encartes, que comparten estructura general los tres.

                    </div>
                </div>
            </div>

        </div>

        <div id="tercercompartimento" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Tercer</p>COMPARTIMENTO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">CAJA CONTENEDORA DEL PROYECTO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    En este segundo compartimento se incluyen tres piezas diferentes. Tres fanzines/fotolibros
                    experimentales cosidos a mano, cada uno contando cada uno de los tres días del viaje a modo de
                    diario. Como segunda pieza unas postales con ilustraciones personales y por ultimo
                    unos sellos personalizados contando con 4 modelos distintos.
                </div>

            </div>

        </div>

        <div id="mapa" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 flex px-64 pb-24 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:pt-12 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20 max-sm:pt-2">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                MAPA</div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="grid grid-cols-1 px-64 max-[1440px]:px-12 max-sm:grid-cols-1 pb-32 max-sm:pb-12 max-sm:px-4">
            <NuxtImg class="image px-64 max-[1440px]:px-12 w-full h-full max-sm:pb-2 max-sm:px-4"
                src="/img/IMG_2522.png" alt="" />
        </div>
        <div
            class="grid grid-cols-1 px-64 pt-4 pb-32 text-center justify-items-center font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:px-12 max-sm:pb-16">
            <div
                class="titular text-[20px] font-['PPE-Ultralight'] text-start leading-10 font-normal pb-2 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px] max-sm:text-center">
                PICTOGRAMAS</div>
            <a class="max-w-[120ch] max-sm:text-center max-sm:hidden">
                Creación de pictogramas personalizados con la estética de la ciudad pero manteniendo el estilo de las
                composiciones de la caja.
            </a>
            <a class="hidden max-sm:text-center max-sm:flex">
                Creación de pictogramas personalizados con la estética de la ciudad pero manteniendo el estilo de las
                composiciones de la caja.
            </a>
        </div>

        <div class="grid grid-cols-1 max-[1500px]:px-2 px-64 gap-20 max-sm:grid-cols-1 pb-32 max-sm:px-4 max-sm:hidden">
            <NuxtImg class="image px-64 w-full h-full max-sm:pb-2 max-sm:px-12" src="/img/pictosoporto.png" alt="" />


        </div>

        <div class="hidden px-64 max-[1440px]:px-12 gap-20 max-sm:grid-cols-1 pb-12 max-sm:px-4 max-sm:flex">
            <NuxtImg class="image px-64 w-full h-full max-sm:pb-2 max-sm:px-12" src="/img/pictosoporto2.png" alt="" />


        </div>

        <div
            class="colum flex max-[1440px]:px-4 px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

            <div class="fotografias px-64 max-[1440px]:px-12 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <NuxtImg class="image w-full h-full" src="/img/IMG_2525.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2524.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2532.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2528.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2535.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2523.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2526.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2536.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2538.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2542.jpg" alt="" />

            </div>

        </div>

        <div id="folleto" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 flex px-64 pb-12 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                FOLLETO</div>
        </div>


        <NuxtImg data-aos="fade-up" data-aos-duration="2000"
            class="pt-32 max-sm:px-4 max-sm:pt-12 max-[1500px]:px-32 max-[1500px]:pt-6 max-[1920px]:pt-16 px-64"
            src="/img/folleto.png" />
        <NuxtImg data-aos="fade-up" data-aos-duration="2000"
            class="px-64 max-sm:px-4 max-sm:pb-4 max-sm:pt-12 max-[1500px]:px-32 max-[1920px]:pb-16"
            src="/img/folleto2.png" />



        <div
            class="colum flex pt-20 pb-10 text-white justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-12 max-sm:px-2">
            <NuxtMarquee>

                <div class="fotografias flex max-sm:h-[250px] h-[500px]">
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2552.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2548.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2554.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2558.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2552.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2548.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2554.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2558.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2552.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2548.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2554.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2558.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2552.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2548.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2554.jpg" alt="" />
                    <NuxtImg class="image h-full max-sm:h-[250px] pl-4" src="/img/IMG_2558.jpg" alt="" />
                </div>
            </NuxtMarquee>

        </div>


        <div id="cuartocompartimento" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Cuarto</p>COMPARTIMENTO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">CAJA CONTENEDORA DEL PROYECTO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Dentro de este compartimento se encuentran los elementos más "premium", como son el pack de
                    analógicas
                    realizadas con una Kodak desechable y el fotolibro con impresión en alta calidad.
                </div>

            </div>

        </div>

        <div id="packanalogicas" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-sm:pb-2 max-[1500px]:pt-2 max-[1500px]:px-32 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PACK ANALÓGICAS</div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
            class="grid grid-cols-2 px-72 items-center pt-12 gap-32 pb-32 max-sm:pb-2 max-sm:grid-cols-1 max-sm:gap-12 max-sm:pt-24 max-sm:px-12">
            <NuxtImg class="image w-full h-full" src="/img/packanalogicas5.png" alt="" />
            <img class="image items-end hidden max-sm:flex w-full h-full" src="/img/cajaanalogicas2.gif" alt="" />
            <img class="image items-end max-sm:hidden flex w-full h-full" src="/img/cajaanalogicas.webp" alt="" />
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="video grid-cols-1 max-sm:pt-24 grid pt-24 px-64 pb-48 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1">
            <div
                class="text max-w-[100ch] text-center font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['PPE-Ultralight'] text-[20px] text-[#243673]">
                    PACK DE ANALÓGICAS CON KODAK DESECHABLE
                </a>
                <br><br>
                Durante el viaje realicé unas fotografías con una camara de las
                desechables de Kodak para hacer de ese momento algo más
                especial, tener solo una oportunidad para inmortalizar ese lugar
                pero también me resultaba interesante tener esa estética analógica en mi trabajo, no todo fotografías
                con la
                camara y el movil
                en alta resolución. Por ello cree un pack de analógicas que las
                contenga como si fueran cartas, con un packaging muy inspirado en los azulejos. Parte frontal con modelo
                en
                golpe en seco
                y estampado de tinta. Dentro de la caja se le añaden dos tarjetas
                con información de lugares y el qr que ya he añadido en otras
                piezas para aumentar el contenido.
                <br><br>
                El formato de las la caja es el mismo que las fotografías analógicas de 10 cm x 15 cm. Papel de la caja
                225 gr
                mate.
                Papel de las fotografías en mate, no en brillo para tener más
                coherencia con la estética de los demás elementos de la caja.
            </div>

        </div>

        <div
            class="colum flex px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-12 max-sm:px-2">

            <div class="fotografias px-64 max-[1500px]:px-12 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <NuxtImg class="image w-full h-full" src="/img/IMG_2568.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2578.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2572.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2570.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2577.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2571.jpg" alt="" />
            </div>

        </div>
        <div class="grid max-sm:items-center">

            <a href="https://rubenmaldonado.es/AnalogicasOporto"
                class="px-64 flex underline decoration-1 hover:font-['Regular-Bold'] underline-offset-8 justify-center text-center pt-12 titulo font-['Regular'] text-[20px] text-[#243673] max-sm:px-4 max-sm:pb-24 max-sm:pt-4 max-sm:text-[12px] max-sm:underline-offset-4">
                CLICK PARA VER LAS 21 FOTOGRAFÍAS EXCLUSIVAS DE LA CAJA
            </a>
        </div>

        <div id="libroimpreso" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-sm:pb-2 max-[1500px]:px-12 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                LIBRO IMPRESO</div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="video max-[1500px]:px-32 max-[1500px]:pb-40 grid-cols-2 grid pt-32 px-64 pb-64 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1 max-sm:pt-12">
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['PPE-Ultralight'] text-[20px] text-[#243673]">
                    FOTOLIBRO IMPRESO PREMIUM
                </a>
                <br><br>
                Este libro contiene el viaje de forma general con estilo de fotolibro recopilatorio de los lugares,
                información
                y fotografías personales de los sitios visitados. En ese libro he dado mucha importancia en la
                maquetación a las
                fotografías con el motivo de crear
                un libro puramente visual que entre por los ojos y que cuente
                todo el viaje de los 3 días a través de los lugares y los monumentos de Oporto. La pieza que visualmente
                en
                físico mejor ha quedado por el acabado realizado en Saal Digital.
            </div>

            <img class="image hidden max-sm:flex w-full h-full" src="/img/libroimpreso2.gif" alt="" />
            <img class="image max-sm:hidden flex w-full h-full" src="/img/libroimpreso.webp" alt="" />


        </div>

        <div
            class="colum flex max-[1500px]:px-12 max-[1500px]:pt-4 px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-sm:px-2">

            <div class="fotografias max-[1500px]:px-12 px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <NuxtImg class="image w-full h-full" src="/img/IMG_2580.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2582.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2583.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2584.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2585.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2594.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2595.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2597.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2603.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2605.jpg" alt="" />
                <NuxtImg class="image w-full h-full" src="/img/IMG_2606.jpg" alt="" />
            </div>

        </div>



        <div id="cajafajilla" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:pb-0 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                Caja &<br>FAJILLA</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">CAJA CONTENEDORA DEL PROYECTO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Dentro de esta caja se encuentran todos los componentes diseñados colocados dentro de diferentes
                    compartimentos. Esta caja cuenta con 4 compartimentos diferentes.
                </div>

            </div>

        </div>



        <div data-aos="fade-up" data-aos-duration="2000"
            class="hidden max-sm:grid max-sm:grid-cols-1 gap-12 max-sm:px-0 pt-6 pb-12">
            <NuxtImg class="image_grid" src="/img/fajillaoporto2.png" alt="" />
            <NuxtImg class="image_grid" src="/img/cajaoporto.png" alt="" />
        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
            class="grid max-[1500px]:pt-32 max-[1500px]:px-12 grid-cols-2 grid-row-2 gap-2 pl-12 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-sm:grid-cols-1 max-sm:px-8 max-sm:hidden">
            <NuxtImg class="image_grid" src="/img/fajillaoporto2.png" alt="" />
            <NuxtImg class="image_grid" src="/img/cajaoporto.png" alt="" />

        </div>

        <div data-aos="fade-up" data-aos-duration="2000" class="grid max-sm:hidden grid-cols-2 gap-6 pt-24">
            <NuxtImg class="image" src="/img/IMG_2409.jpg" alt="" />
            <NuxtImg class="image_grid" src="/img/IMG_2412.jpg" alt="" />
        </div>

        <NuxtImg class="image hidden max-sm:pt-24 max-sm:flex" src="/img/IMG_2409.jpg" alt="" />

        <NuxtImg class="image_grid hidden pb-12 max-sm:pt-2 max-sm:pb-24 pt-6 max-sm:flex" src="/img/IMG_2412.jpg"
            alt="" />




        <div id="tipografias" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Tipografías y</p>PALETA DE COLOR
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-sm:order-last max-[1280px]:text-left">
                    <a class="type text-[#3a68c4]">Regular Font</a> - <a class="type text-[#282078]">Domaine Display
                        Narrow</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    La idea principal de este trabajo parte de utilizar las tipografías que se utilizan en portugal y
                    los colores significativos de los azulejos y de su cultura.
                </div>

            </div>

        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="grid grid-rows-1 gap-2 items-center justify-items-center pt-12 px-32 pb-32 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:gap-16 max-sm:pt-0">

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Regular'] text-[240px] text-[#859ed2] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[180px] max-sm:text-[60px]">
                Regular font
            </div>

            <div
                class="text max-w-[80ch] text-center font-['Regular'] font-bold text-[240px] text-[#243673] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[180px] max-sm:text-[60px]">
                Regular bold
            </div>
            <div
                class="text text-center leading-[200px] pt-12 uppercase font-['PPE-Ultralight'] font-normal text-[240px] text-[#243673] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[180px] max-sm:pt-0 max-sm:leading-[60px] max-sm:text-[60px] max-sm:text-center">
                Domaine Display
            </div>

        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-12">
            <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-4">
                <div class="color w-[150px] h-[150px] border border-zinc-200 bg-[#243673]">
                </div>
                <div class="color w-[150px] h-[150px] border border-zinc-200 bg-[#3a5aa6]">
                </div>
                <div class="color w-[150px] h-[150px] border border-zinc-200 bg-[#859ed2]">
                </div>
                <div class="color w-[150px] h-[150px] border border-zinc-200 bg-[#ced8ed]">
                </div>
            </div>
            <div class="columna2 grid gap-6">
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#243673] font-bold">HEX : #243673</a> <br>
                    C - 100 <br>
                    M - 87,42 <br>
                    Y - 24,64 <br>
                    K - 6,29
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#3a5aa6] font-bold">HEX : #3a5aa6</a> <br>
                    C - 85 <br>
                    M - 65,47 <br>
                    Y - 0 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#859ed2] font-bold">HEX : #859ed2</a> <br>
                    C - 52,83 <br>
                    M - 33,07 <br>
                    Y - 0 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ced8ed] font-bold">HEX : #ced8ed</a> <br>
                    C - 21 <br>
                    M - 13 <br>
                    Y - 0 <br>
                    K - 0
                </div>
            </div>


        </div>

        <div
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
            <div class="color w-[200px] h-[200px] border border-zinc-200 bg-[#243673]">
            </div>
            <div class="color w-[200px] h-[200px] border border-zinc-200 bg-[#3a5aa6]">
            </div>
            <div class="color w-[200px] h-[200px] border border-zinc-200 bg-[#859ed2]">
            </div>
            <div class="color w-[200px] h-[200px] border border-zinc-200 bg-[#ced8ed]">
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#243673] font-bold">HEX : #243673</a> <br>
                C - 100 <br>
                M - 87,42 <br>
                Y - 24,64 <br>
                K - 6,29
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#3a5aa6] font-bold">HEX : #3a5aa6</a> <br>
                C - 85 <br>
                M - 65,47 <br>
                Y - 0 <br>
                K - 0
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#859ed2] font-bold">HEX : #859ed2</a> <br>
                C - 52,83 <br>
                M - 33,07 <br>
                Y - 0 <br>
                K - 0
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ced8ed] font-bold">HEX : #ced8ed</a> <br>
                C - 21 <br>
                M - 13 <br>
                Y - 0 <br>
                K - 0
            </div>

        </div>

        <div id="fotografias" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:pt-2 max-[1500px]:pb-2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Fotografías y</p>MATERIALES
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-zinc-600">MATERIAL FOTOGRÁFICO</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Todas las imágenes tienen la misma edición o con parámetros
                    muy similares para conseguir una unificación del trabajo y que
                    el aspecto general mantenga la misma estética, son pequeños
                    ajustes de luces, algunos colores y demás elementos para corregir el bruto de la fotografía original
                    que realicé con el IPhone.
                </div>

            </div>

        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
            class="video flex pt-32 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:hidden">
            <NuxtImg class="image w-full h-full" src="/img/imagenesoporto.gif" alt="" />


        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="video hidden pt-32 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:flex">
            <NuxtImg class="image w-full h-full" src="/img/imagenesoporto2.gif" alt="" />


        </div>



        <div id="piezas" data-aos="fade-up" data-aos-duration="2000"
            class="titular2 max-[1500px]:pt-24 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Piezas del</p>SISTEMA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-sm:order-last max-[1280px]:text-left">
                    <a class="type text">CAJA Y ELEMENTOS DE SU INTERIOR</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    La caja se compone por diferentes elementos que estan agrupados en 4 compartimentos. El primer
                    compartimento que contiene el azulejo personalizado, el segundo compartimento que contiene 3 modelos
                    de postales, 3 cuadernillos a modo diario del viaje y 4 modelos de sellos. En el
                    tercer compartimento encontramos el mapa de oporto y el folleto envolvente. Finalmente en el ultimo
                    compartimento se encuentra el pack de fotografías analógicas y el fotolibro especial.
                </div>

            </div>

        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
            class="flex pt-32 pb-32 titular2 max-sm:flex justify-center w-full h-full max-sm:pb-12 max-sm:pt-0">

            <NuxtImg class="image_grid w-full h-full" src="/img/compartimentos.png" alt="" />

        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="px-60 max-[1500px]:pt-6 pt-32 grid grid-cols-2 max-sm:hidden">

            <div
                class="text max-sm:hidden place-self-center text-center max-w-[80ch] pt-4 font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Primer Compartimento
                <br>
                <br>
                ↓
            </div>
            <div
                class="text max-sm:hidden place-self-center text-center max-w-[80ch] pt-4 font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Segundo Compartimento
                <br>
                <br>
                ↓
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
            class="grid grid-cols-2 pt-4 gap-12 px-60 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:gap-6">

            <NuxtImg class="image_grid w-full h-full" src="/img/compartimento1.png" alt="" />
            <NuxtImg class="image_grid w-full h-full" src="/img/compartimento2.png" alt="" />

            <div
                class="text max-sm:hidden pt-12 place-self-center text-center max-w-[80ch] font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Tercer Compartimento
                <br>
                <br>
                ↓
            </div>
            <div
                class="text max-sm:hidden pt-12 place-self-center text-center max-w-[80ch] font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                Cuarto Compartimento
                <br>
                <br>
                ↓
            </div>

            <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image_grid w-full h-full"
                src="/img/compartimento3.png" alt="" />
            <NuxtImg data-aos="fade-up" data-aos-duration="2000" class="image_grid w-full h-full"
                src="/img/compartimento4.png" alt="" />
        </div>


        <div
            class="titular2 max-sm:pt-24 max-[1500px]:pt-24 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 gap-64 pt-32 pb-24 content-center space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Contenido</p>AMPLIADO / EXTRA
            </div>
        </div>

        <div class="grid max-sm:items-center">

            <a href="https://rubenmaldonado.es/viajeoporto" target="_blank"
                class="px-64 flex justify-center pt-24 pb-2 text-center titulo font-['Regular'] text-[20px] text-[#243673] max-sm:px-4 max-sm:pb-24 max-sm:pt-4 max-sm:text-[12px] max-sm:underline-offset-4">
                <NuxtImg class="image_grid max-sm:w-[100px] max-sm:h-[100px] w-[200px] h-[200px]" src="/img/qrweb.png"
                    alt="" />
            </a>
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
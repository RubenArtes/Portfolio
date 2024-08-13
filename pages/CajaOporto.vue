<template>
    <div class="app bg-white font-['SFUIDisplay-Regular'] border">
        <Cursor />
        <div
            class="header bg-white p-10 flex px-24 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
            <div class="image flex flex-start justify-items-start">
                <NuxtLink to="/">
                    <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>

            <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11black.svg">
            </div>

        </div>
        <div
            class="header bg-white p-1 flex px-8 gap-12 text-center justify-items-center place-content-center sticky top-[110px] z-10 max-lg:p-6 max-lg:sticky border border-b-1 max-sm:hidden max-[1920px]:gap-8">
            <a
                class="email text-black text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">NAVEGACIÓN
            </a>
            <a href="#primercompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                PRIMER
                COMPARTIMENTO
            </a>
            <a href="#segundocompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                SEGUNDO
                COMPARTIMENTO
            </a>
            <a href="#postales"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                POSTALES
            </a>
            <a href="#sellos"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                SELLOS
            </a>
            <a href="#cuadernos"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                CUADERNILLOS
            </a>
            <a href="#tercercompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                TERCER
                COMPARTIMENTO
            </a>
            <a href="#mapa"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                MAPA
            </a>
            <a href="#folleto"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                FOLLETO
            </a>
            <a href="#cuartocompartimento"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                CUARTO
                COMPARTIMENTO
            </a>
            <a href="#packanalogicas"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                PACK ANALÓGICAS
            </a>
            <a href="#libroimpreso"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                LIBRO IMPRESO
            </a>
            <a href="#cajafajilla"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                CAJA FAJILLA
            </a>
            <a href="#tipografias"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                TIPOGRAFIAS
            </a>
            <a href="#fotografias"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                FOTOGRAFÍAS
            </a>
            <a href="#piezas"
                class="email text-zinc-400 text-[12px] max-[1920px]:text-[10px] justify-items-center flex gap-2 max-lg:text-xs ">>
                PIEZAS
            </a>

        </div>
        <VueScrollProgressBar background-color="#52525B" />
        <div
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['Domaine-Display'] font-bold leading-[120px] animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[70px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568] max-sm:text-center max-sm:leading-[4rem] max-sm:font-normal">
                OPORTO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    IMPRESIÓN - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    El proyecto consistirá en la creación de una caja contenedora de diferentes elementos impresos sobre
                    un tema concreto, realizando diferentes pruebas físicas como folletos, cuadernillos impresos o
                    carteles. Para este trabajo
                    la temática ha sido Oporto y la cultura portuguesa, creando una caja que sea una experencia y visión
                    personal de un viaje de 3 días. Uno de mis mejores trabajos de la carrera por todo el trabajo que
                    han tenido las piezas que lo componen.
                </div>

            </div>
        </div>


        <div
            class="trabajos flex pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] text-center font-['Domaine-Display'] uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['Regular'] text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Producción para artes gráficas, 4º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['Regular']  text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['Regular']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Oporto y cultura portuguesa
                </div>
            </div>
        </div>

        <div
            class="video flex pt-8 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/oportoazulejo2.png" alt="">


        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-[#243673] pb-6 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left max-sm:pb-0">
                        CAJA IMPRESA OPORTO</div>
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
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect rounded-xl" src="/img/bocetosoporto.png" alt="">

            </div>
        </div>


        <div id="primercompartimento"
            class="titular2 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                PRIMER<br>COMPARTIMENTO</div>
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

        <img class="image w-full h-full" src="/img/IMG_2423.jpg" alt="">


        <div
            class="video grid-cols-2 grid pt-32 px-64 pb-20 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1 max-sm:pt-12">
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['Domaine-Display'] text-[20px] text-[#243673]">
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

            <img class="image w-full h-full max-sm:hidden" src="/img/gifazulejo2.gif" alt="">
            <img class="image hidden w-full h-full max-sm:flex" src="/img/azulejo2.webp" alt="">


        </div>

        <div id="segundocompartimento"
            class="titular2 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                SEGUNDO<br>COMPARTIMENTO</div>
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

        <img class="image w-full h-full" src="/img/IMG_2468.jpg" alt="">

        <div id="postales"
            class="titular2 flex px-64 pb-32 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                POSTALES</div>
        </div>

        <div
            class="hidden grid-cols-3 pb-32 px-64 gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-12 max-sm:gap-6 max-sm:pb-24 max-sm:grid">

            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal6.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal1.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal4.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal2.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal3.png" alt="">

            </div>


            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal5.png" alt="">

            </div>

        </div>

        <div
            class="grid grid-cols-3 pb-32 px-64 gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-12 max-sm:gap-6 max-sm:pb-24 max-sm:hidden">

            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal6.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal4.png" alt="">

            </div>

            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal3.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal1.png" alt="">

            </div>

            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal2.png" alt="">

            </div>
            <div class="columna1">
                <img class="image w-full h-full shadow-lg border border-zinc-100" src="/img/postal5.png" alt="">

            </div>
        </div>

        <img class="image w-full h-full pb-32 max-sm:pb-24" src="/img/postalespng.png" alt="">

        <div class="grid grid-cols-2 max-sm:grid-cols-1">
            <img class="image w-full h-full pb-32 max-sm:pb-2" src="/img/IMG_2450.jpg" alt="">
            <img class="image w-full h-full pb-32 max-sm:pb-2" src="/img/IMG_2483.jpg" alt="">
        </div>


        <div id="sellos"
            class="titular2 flex px-64 pb-32 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                SELLOS</div>
        </div>

        <img class="image w-full h-full pb-32 max-sm:pb-12" src="/img/IMG_2444.jpg" alt="">

        <div
            class="text pt-4 pb-12 text-center px-64 justify-items-center font-['Regular'] text-[14px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:hidden">
            «Pasa el ratón por encima para ampliar»

        </div>

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
            class="grid grid-cols-4 gap-2 pb-32 px-64 justify-items-center max-[1920px]:px-12 max-sm:grid-cols-1 max-sm:pb-2 max-sm:px-2">
            <img src="/img/sellos1.webp" alt="">
            <img src="/img/sellos2.webp" alt="">
            <img src="/img/sellos3.webp" alt="">
            <img src="/img/sellos4.webp" alt="">

        </div>



        <div id="cuadernos"
            class="titular2 bg-white flex px-64 pb-32 gap-64 pt-48 text-zinc-900 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-6 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-zinc-900 max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6 max-sm:text-[30px] max-sm:pb-0">
                CUADERNOS DE VIAJE EXPERIMENTALES</div>
        </div>

        <div
            class="grid bg-white grid-cols-1 grid-row-2 gap-2 px-64 pb-64 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:hidden">
            <div
                class="grid grid-cols-3 px-12 grid-row-1 gap-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:px-0 max-sm:pt-0 max-sm:gap-2">

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
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo3.png"
                            alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental1.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental2.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental3.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental4.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental5.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental6.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental7.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/CuadernilloExperimental8.png" alt="">
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>
                <Carousel class="max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo.png"
                            alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental11.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental12.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental12.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental13.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental14.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental15.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental16.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400"
                            src="/img/cuadernilloexperimental17.png" alt="">
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>
                <Carousel class="max-sm:pb-32" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo2.png"
                            alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo1.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo2.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo3.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo4.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo5.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo6.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo7.png" alt="">
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo8.png" alt="">
                    </Slide>

                    <template #addons>
                    </template>
                </Carousel>

            </div>

        </div>
        <div
            class="hidden grid-cols-3 px-12 grid-row-1 gap-12 max-xl:grid-cols-1 max-xl:px-10 max-sm:pb-0 max-xl:pt-10 max-[1500px]:px-60 max-sm:pt-0 max-sm:gap-2 max-sm:grid max-sm:px-6">

            <div
                class="text pt-12 pb-2 text-left justify-items-left font-['Regular'] text-[14px] text-zinc-800 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[12px]">
                CUADERNO DE VIAJE 1 - DÍA 1

            </div>


            <Carousel class="max-sm:pb-0" :autoplay="4000" :wrap-around="true">
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo3.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental1.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental2.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental3.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental4.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental5.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental6.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental7.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/CuadernilloExperimental8.png"
                        alt="">
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
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental11.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental13.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental14.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental15.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental16.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400"
                        src="/img/cuadernilloexperimental17.png" alt="">
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
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/portadacuadernillo2.png"
                        alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo1.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo2.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo3.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo4.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo5.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo6.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo7.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full border border-zinc-400" src="/img/cuadernillo8.png" alt="">
                </Slide>

                <template #addons>
                </template>
            </Carousel>


        </div>

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:px-4">

            <div class="fotografias flex flex-col gap-6 max-w-[120h] max-sm:gap-4">
                <img class="image w-full h-full" src="/img/IMG_2459.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2460.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2461.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2463.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2511.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2496.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2506.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2505.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2503.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2502.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2501.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2499.jpg" alt="">
                <img class="image w-full h-full max-sm:pb-12" src="/img/IMG_2467.jpg" alt="">
            </div>

            <div class="info_proyect max-w-[80ch] pt-12 max-sm:px-4 max-sm:hidden">
                <div class="info_secondary flex flex-col gap-6 sticky top-52 max-[1500px]:gap-12 opacity-50">
                    <div
                        class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-[#243673] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        ← CUADERNILLOS</div>
                    <div
                        class="text text-[16px] font-['Regular'] indent-12 text-[#243673] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
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

        <div id="tercercompartimento"
            class="titular2 flex px-64 pb-12 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                TERCER<br>COMPARTIMENTO</div>
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

        <div id="mapa"
            class="titular2 flex px-64 pb-24 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20 max-sm:pt-2">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-4">
                MAPA</div>
        </div>

        <div class="grid grid-cols-1 px-64 max-sm:grid-cols-1 pb-32 max-sm:pb-12 max-sm:px-4">
            <img class="image px-64 w-full h-full max-sm:pb-2 max-sm:px-4" src="/img/IMG_2522.png" alt="">
        </div>
        <div
            class="grid grid-cols-1 px-64 pt-4 pb-32 text-center justify-items-center font-['Regular'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:px-12 max-sm:pb-16">
            <div
                class="titular text-[20px] font-['Domaine-Display'] text-start leading-10 font-normal pb-2 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px] max-sm:text-center">
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

        <div class="grid grid-cols-1 px-64 gap-20 max-sm:grid-cols-1 pb-32 max-sm:px-4 max-sm:hidden">
            <img class="image px-64 w-full h-full max-sm:pb-2 max-sm:px-12" src="/img/pictosoporto.png" alt="">


        </div>

        <div class="hidden px-64 gap-20 max-sm:grid-cols-1 pb-12 max-sm:px-4 max-sm:flex">
            <img class="image px-64 w-full h-full max-sm:pb-2 max-sm:px-12" src="/img/pictosoporto2.png" alt="">


        </div>

        <div
            class="colum flex px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:px-2">

            <div class="fotografias px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/IMG_2525.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2524.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2532.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2528.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2535.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2523.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2526.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2536.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2538.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2542.jpg" alt="">

            </div>

        </div>

        <div id="folleto"
            class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                FOLLETO</div>
        </div>

        <div class="grid grid-cols-5 px-64 pt-32 pb-6 max-sm:px-4 max-sm:pt-20">
            <img class="image w-full h-full border border-zinc-400 shadow-md" src="/img/folletoen1.png" alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen2.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen3.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen4.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen5.png"
                alt="">

        </div>

        <div class="grid grid-cols-5 px-64 pt-2 pb-32 max-sm:px-4 max-sm:pb-2">
            <img class="image w-full h-full border border-zinc-400 shadow-md" src="/img/folletoen8.png" alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen9.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen10.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen6.png"
                alt="">
            <img class="image w-full h-full border border-zinc-400 border-l-0 shadow-md" src="/img/folletoen7.png"
                alt="">

        </div>

        <div
            class="colum flex px-12 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:px-2">

            <div
                class="fotografias px-12 grid grid-cols-2 grid-rows-2 gap-2 max-sm:gap-4 max-sm:px-2 max-sm:grid-cols-1">
                <img class="image w-full h-full" src="/img/IMG_2552.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2548.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2554.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2558.jpg" alt="">
            </div>

        </div>


        <div id="cuartocompartimento"
            class="titular2 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20 max-sm:pt-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                CUARTO<br>COMPARTIMENTO</div>
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

        <div id="packanalogicas"
            class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-4">
                PACK ANALÓGICAS</div>
        </div>


        <div
            class="grid grid-cols-2 px-72 items-center pt-12 gap-32 pb-32 max-sm:pb-2 max-sm:grid-cols-1 max-sm:gap-12 max-sm:pt-24 max-sm:px-12">
            <img class="image w-full h-full" src="/img/packanalogicas5.png" alt="">
            <img class="image items-end w-full" src="/img/cajaanalogicas.webp" alt="">

        </div>

        <div
            class="video grid-cols-1 grid pt-24 px-64 pb-48 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1 max-sm:pt-12">
            <div
                class="text max-w-[100ch] text-center font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['Domaine-Display'] text-[20px] text-[#243673]">
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
            class="colum flex px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:px-2">

            <div class="fotografias px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/IMG_2568.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2578.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2572.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2570.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2577.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2571.jpg" alt="">
            </div>

        </div>

        <div id="libroimpreso"
            class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-4">
                LIBRO IMPRESO</div>
        </div>

        <div
            class="video grid-cols-2 grid pt-32 px-64 pb-64 text-zinc-600 justify-items-center items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:grid-cols-1 max-sm:pt-12">
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">

                <a class="titulo font-['Domaine-Display'] text-[20px] text-[#243673]">
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

            <img class="image w-full h-full" src="/img/libroimpreso.webp" alt="">

        </div>

        <div
            class="colum flex px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:px-2">

            <div class="fotografias px-64 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/IMG_2580.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2582.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2583.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2584.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2585.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2594.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2595.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2597.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2603.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2605.jpg" alt="">
                <img class="image w-full h-full" src="/img/IMG_2606.jpg" alt="">
            </div>

        </div>



        <div id="cajafajilla"
            class="titular2 flex px-64 pb-2 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20 max-sm:pt-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                CAJA &<br>FAJILLA</div>
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

        <div
            class="image flex pt-32 pb-20 text-zinc-600 flex-nowrap items-center gap-12 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/IMG_2409.jpg" alt="">


        </div>

        <div class="hidden max-sm:grid max-sm:grid-cols-1 max-sm:px-12 pt-12 pb-12 gap-4">
            <img class="image_grid w-full h-full place-self-end shadow-md" src="/img/AAFF_FajillaCaja_2.png" alt="">
            <img class="image_grid w-full h-full shadow-md" src="/img/AAFF_FajillaCaja_1.png" alt="">
        </div>


        <div
            class="grid grid-cols-2 grid-row-2 gap-2 pl-12 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:grid-cols-1 max-sm:px-8 max-sm:hidden">
            <div
                class="grid grid-cols-2 grid-row-2 gap-12 px-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:px-0 max-sm:pt-0">
                <div
                    class="text max-w-[80ch] place-self-end pt-4 text-right font-['Regular'] text-[14px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:hidden">
                    REVERSO
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[14px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:hidden">
                    ANVERSO
                </div>

                <img class="image_grid w-full h-full place-self-end shadow-md" src="/img/AAFF_FajillaCaja_2.png" alt="">
                <img class="image_grid w-full h-full shadow-md" src="/img/AAFF_FajillaCaja_1.png" alt="">


            </div>
            <img class="image_grid self-end w-full h-2/3 max-sm:hidden" src="/img/IMG_2412.jpg" alt="">

        </div>

        <img class="image_grid hidden pb-12 self-end w-full h-2/3 max-sm:flex" src="/img/IMG_2412.jpg" alt="">




        <div id="tipografias"
            class="titular2 flex px-64 pb-24 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                TIPOGRAFÍAS <br> Y PALETA DE COLOR</div>
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

        <div
            class="grid grid-rows-1 gap-2 items-center justify-items-center pt-12 px-32 pb-32 max-sm:px-4 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:gap-8 max-sm:pt-0">

            <div
                class="text max-w-[80ch] leading-[200px] pt-4 text-center font-['Regular'] text-[240px] text-[#859ed2] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[30px]">
                Regular font
            </div>

            <div
                class="text max-w-[80ch] text-center font-['Regular'] font-bold text-[240px] text-[#243673] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:text-[30px]">
                Regular bold
            </div>
            <div
                class="text text-center leading-[200px] pt-12 uppercase font-['Domaine-Display'] font-normal text-[240px] text-[#243673] max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px] max-sm:pt-0 max-sm:text-[30px]">
                Domaine Display
            </div>

        </div>

        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-12">
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
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:hidden">
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

        <div id="fotografias"
            class="titular2 flex px-64 pb-2 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                FOTOGRAFÍAS <br>Y MATERIALES</div>
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


        <div
            class="video flex pt-32 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:hidden">
            <img class="image w-full h-full" src="/img/imagenesoporto.gif" alt="">


        </div>

        <div
            class="video hidden pt-32 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:flex">
            <img class="image w-full h-full" src="/img/imagenesoporto2.gif" alt="">


        </div>



        <div id="piezas"
            class="titular2 flex px-64 pb-2 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                PIEZAS <br> DEL SISTEMA</div>
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


        <div class="flex pt-32 pb-32 titular2 max-sm:flex justify-center w-full h-full max-sm:pb-12 max-sm:pt-0">

            <img class="image_grid w-full h-full" src="/img/compartimentos.png" alt="">

        </div>



        <div
            class="grid grid-cols-2 gap-12 px-60 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:gap-6">

            <img class="image_grid w-full h-full" src="/img/primercompartimento.png" alt="">
            <img class="image_grid w-full h-full" src="/img/segundocompartimento.png" alt="">

            <img class="image_grid w-full h-full" src="/img/tercercompartimento.png" alt="">
            <img class="image_grid w-full h-full" src="/img/cuartocompartimento.png" alt="">
        </div>



        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-60">
            <div
                class="titular text-[16px] font-['Regular'] leading-6 font-normal flex flex-start items-center max-xl:text-xs">
                Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Cinema4d.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss font-['Regular'] leading-6 pt-32 px-64 pb-32 text-zinc-600 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-60">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11zinc.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11zinc.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-white p-10 flex text-zinc-600 justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/starzinc.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbolzinc.svg">
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {

    mounted() {
        this.$nextTick(() => {
            const newVideo = document.getElementById('videoElementId');
            newVideo.addEventListener('ended', () => {
                newVideo.currentTime = 0;
                newVideo.play();
            });
            newVideo.play();
        });
    },
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
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
<template class="bg-black">
    <Cursor class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion" />

    <div id="header" class="bg-black font-['SFUIDisplay-Light']"
        :class="['header', isHeaderFixed ? 'fixed-header' : '']">

        <!-- Header Sticky con efecto de transparencia y z-index superior -->
        <div class="menu flex justify-between w-full bg-black fixed top-0 left-0 right-0 z-[10000]">
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

        <div
            class="caja1 text-left px-20 pt-32 text-[90px] pb-12 font-['Neue'] leading-[6rem] cursor-pointer text-white bg-black duration-300 max-sm:px-8 max-sm:text-[30px] max-sm:leading-9">
            Dibujando desde que tenía 5 años. Con una cámara desde que tenia 10 años. Y constantemente aprendiendo. Me
            llamo <a
                class="text-[#ff2d7e] underline decoration-[6px] underline-offset-[10px] max-sm:decoration-[3px] max-sm:underline-offset-[4px]">Rubén
                Maldonado</a> y soy
            un apasionado del Diseño Gráfico,
            la ilustración, el arte y la fotografía.<br>
        </div>


        <div
            class="caja1 uppercase text-left items-end grid grid-cols-2 place-content-end px-20 text-[170px] pb-6 font-['Neue-Bold'] leading-[10rem] text-white bg-black duration-300 max-sm:grid-cols-1 max-sm:px-8">
            <div class="texto1"></div>
            <div class="texto2">
                <p
                    class="titulo bg-black pt-32 text-white text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                    Tengo 24 años, actualmente estoy terminando un grado Universitario de Diseño Gráfico en la <a
                        href="https://esdmadrid.es/" target="_blank"
                        class="hover:text-zinc-500 underline transition-all duration-500">Escuela Superior De Diseño de
                        Madrid</a>. Cuento con un Grado Superior de Ilustración realizado en la Escuela de Artes de
                    Toledo.
                    Además estoy trabajando en <a href="https://www.prodigiosovolcan.com/" target="_blank"
                        class="hover:text-zinc-500 underline transition-all duration-500">Prodigioso Volcán</a>.

                </p>
            </div>


        </div>


        <div
            class="caja1 uppercase text-left items-end grid grid-cols-2 place-content-end px-20 text-[170px] pb-6 font-['Neue-Bold'] leading-[10rem] text-white bg-black duration-300 max-sm:grid-cols-1 max-sm:px-8">
            <div class="texto1"></div>
            <div class="texto2">
                <p
                    class="titulo bg-black text-white text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12  normal-case font-['Neue']">
                    Soy muy polifacetico, "<a class="animate-pulse">currante</a>" y "<a
                        class="animate-pulse">todoterreno</a>" no me cierro a ninguna vía del diseño, suelo abarcar
                    todos los ambitos, como ya he mostrado en la sección de <NuxtLink to="/Intro#trabajos"
                        class="hover:text-zinc-500 underline transition-all duration-500">trabajos</NuxtLink>.
                    Soy resolutivo y me gusta trabajar bajo presión.


                </p>
            </div>


        </div>


        <div
            class="caja1 uppercase text-left items-end grid grid-cols-2 place-content-end px-20 text-[170px] pb-12 font-['Neue-Bold'] leading-[10rem] text-white bg-black duration-300 max-sm:grid-cols-1 max-sm:px-8 max-sm:pb-2 max-sm:px-8">
            <div class="texto1"></div>
            <div class="texto2">
                <p
                    class="titulo bg-black text-white text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 font-['Neue']">
                    Soy un gran aficionado de las películas (sobretodo de las que te dejan pensando durante un rato),
                    del futbol y el deporte en general. No podría vivir sin mi perro "Trueno". Adoro la música
                    electrónica y el pop inglés (2000s - 2010s).


                </p>
            </div>


        </div>

        <div
            class="caja1 uppercase text-left items-end grid grid-cols-2 place-content-end px-20 text-[170px] pt-32 font-['Neue-Bold'] leading-[10rem] text-white bg-black duration-300 max-sm:pt-2 max-sm:px-8">
            <div class="texto1">
                <a target="_blank" href="/Marca"
                    class="titulo bg-black text-[#ff2d7e] max-sm:text-[20px] max-sm:leading-[24px] text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case font-['Neue'] hover:text-zinc-500 underline transition-all duration-500">
                    [MI MARCA]


                </a>
            </div>
            <div class="texto2 max-sm:place-self-end">
                <a target="_blank" href="https://music.apple.com/es/playlist/playlist-n%C2%BA-1/pl.u-8aAVZyluv8K48qD"
                    class="titulo bg-black text-[#ff2d7e] max-sm:text-[20px] max-sm:leading-[24px] text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case font-['Neue']  hover:text-zinc-500 underline transition-all duration-500">
                    [MI PLAYLIST]


                </a>
            </div>


        </div>

        <img class="bg-black w-full pt-32 px-[400px] max-sm:hidden" src="/img/yocomposicion.png">
        <img class="bg-black w-full pt-32 px-[400px] hidden max-sm:flex max-sm:px-0 max-sm:pt-12 max-sm:pb-8"
            src="/img/yocomposicion2.png">


        <div
            class="titulo bg-black max-sm:text-[30px] max-sm:px-6 max-sm:pt-4 pt-12 w-full text-white px-20 text-[170px] self-center place-self-end flex gap-2 max-lg:text-xs max-sm:leading-8 max-sm:px-8">
            Clientes
        </div>

        <div class="trabajos bg-black grid grid-cols-1 px-20 gap-48 max-sm:grid-cols-1 max-sm:px-8 max-sm:gap-6">
            <div
                class="categoria1 pt-20 pb-20 bg-black flex flex-col gap-12 self-start max-sm:gap-6 max-sm:pt-12 max-sm:pb-2">
                <div class="flex justify-between">
                    <p
                        class="titulo bg-black text-zinc-300 text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 font-['Neue']">
                        Trabajando actualmente en
                    </p>
                </div>


                <a href="https://www.prodigiosovolcan.com/" target="_blank" class="max-sm:place-self-center"><img
                        class="w-[300px] pt-4 justify-center place-self-center items-center hover:w-[290px] transition-all duration-500 max-sm:w-[220px]"
                        src="/img/prodigioso.svg"></a>

            </div>


        </div>

        <div
            class="categoria1 pt-20 pb-20 px-20 bg-black flex flex-col gap-12 self-start max-sm:gap-6 max-sm:pb-2 max-sm:px-8 max-sm:pt-24">
            <div class="flex justify-between">
                <p
                    class="titulo bg-black text-zinc-300 text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 font-['Neue']">
                    Otros clientes
                </p>
            </div>
        </div>

        <div
            class="trabajos bg-black grid grid-cols-3 px-20 pt-32 pb-64 gap-24 max-sm:pb-48 max-sm:pt-24 max-sm:grid-cols-1 max-sm:px-8 max-sm:gap-32">

            <a class="place-self-end w-full h-full flex justify-end items-end max-sm:justify-center">
                <img class="w-full h-full max-w-[250px] max-sm:max-w-[220px] hover:max-w-[240px] transition-all duration-500"
                    src="/img/BSabadell_Logo.svg"></a>

            <a class="place-self-start w-full h-full flex justify-center items-center max-sm:justify-center">
                <img class="w-full h-full max-w-[400px] max-sm:max-w-[300px] hover:max-w-[380px] transition-all duration-500"
                    src="/img/Logotipo_Positivo_Horizontal.svg" alt="Logotipo">
            </a>

            <a href="https://www.garridogallery.com/" target="_blank"
                class="place-self-start w-full h-full flex justify-start items-start max-sm:justify-center">
                <img class="w-full h-full max-w-[240px] max-sm:max-w-[200px] hover:max-w-[220px] transition-all duration-500"
                    src="/img/garrido.svg" alt="Logotipo">
            </a>

        </div>



        <p
            class="titulo px-20 pb-32 bg-black text-zinc-300 text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case max-sm:px-8 max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 font-['Neue']">
            _ Ganador de concurso de carteles para Villaluenga de la Sagra. <br>
            _ Diseñador gráfico para empresa Neumáticos por Poco. (6 meses) <br>
            _ Renovación y creación de marca para la empresa Motor 76. (1 mes) <br>
            _ Creación de ilustraciones para Ecos Castilla La Mancha. (2 meses) <br>
            _ Diseñador Freelance por horas para empresas. (2 meses) <br>
            _ Diseño de portadas para proyecto musical. <br>

        </p>

        <div
            class="titulo bg-black max-sm:text-[30px] max-sm:px-6 max-sm:pt-24 pt-12 w-full text-white px-20 text-[170px] self-center place-self-end flex gap-2 max-lg:text-xs max-sm:leading-8 max-sm:px-8">
            Estudios
        </div>

        <div class="trabajos bg-black px-20 grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-8">
            <div
                class="categoria1 pt-20 pb-20 bg-black flex flex-col gap-12 self-start max-sm:py-4 max-sm:pt-12 max-sm:gap-4">
                <div class="flex justify-between">
                    <p
                        class="titulo bg-black text-left text-zinc-400 leading-none text-[20px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                        Bachillerato Artístico
                    </p>

                </div>


                <p
                    class="titulo bg-black text-left text-zinc-300 leading-none text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                    IES El Greco
                </p>

            </div>
            <div
                class="categoria1 pt-20 pb-20 bg-black flex flex-col gap-12 self-start max-sm:py-4 max-sm:py-12 max-sm:gap-4">
                <div class="flex justify-between">
                    <p
                        class="titulo bg-black text-left text-zinc-400 leading-none text-[20px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                        Grado Superior de Ilustración
                    </p>

                </div>


                <p
                    class="titulo bg-black text-left max-[1920px]:hidden text-zinc-300 leading-none text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                    Escuela de Artes Toledo
                </p>
                <p
                    class="titulo bg-black hidden max-[1920px]:flex text-left text-zinc-300 leading-none text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                    Escuela de Artes
                </p>

            </div>
            <div
                class="categoria1 pt-20 pb-64 bg-black flex flex-col gap-12 self-end max-sm:py-4 max-sm:py-12 max-sm:gap-4">
                <div class="flex justify-between">
                    <p
                        class="titulo bg-black text-left text-zinc-400 leading-none text-[20px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                        Grado Universitario
                    </p>

                </div>


                <p
                    class="titulo bg-black text-left text-zinc-300 leading-none text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px]">
                    ESD Madrid
                </p>

            </div>


        </div>
        <p
            class="titulo px-20 pb-32 bg-black text-zinc-300 text-[30px] gap-2 leading-[40px] max-lg:text-xs normal-case max-sm:px-8 max-sm:pt-24 max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 font-['Neue']">
            _ Curso extracurricular de 2 años de Arte y Pintura en Villaluenga de la Sagra. <br>
            _ Cursos de Domestika: "Ilustración Digital con Procreate", "Ilustración Digital aplicada a productos",
            "Introducción al lettering con Procreate".
        </p>


        <div id="contacto" class="informacion max-sm:pt-0 pt-[300px] pb-24 bg-black max-sm:pb-0">

            <div class="about bg-black">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
                    <div
                        class="caja2 text-white max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-zinc-400">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-4 px-20 leading-[10rem] font-['Neue'] cursor-pointer text-white">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] max-sm:text-zinc-400 max-sm:text-[18px] max-sm:leading-10 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
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
                        class="caja2 text-white max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-white transition-colors duration-300 hover:text-zinc-400">
                        Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-4 px-20 text-[20px] grid grid-cols-2 font-['Neue']  hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red text-white flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60" src="/img/Behance2.png" />
                            Behance
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60" src="/img/Instagram2.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60" src="/img/LinkedIn2.png" />
                            LinkedIn
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/redbubblewhite.svg" />
                            Redbubble
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-400 items-center max-sm:text-[18px] max-sm:leading-10 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://es.pinterest.com/maldonadoruben_" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/pinterestwhite.svg" />
                            Pinterest
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11white.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:pb-12 max-sm:grid-cols-1 text-white group">
                    <!-- Caja 3 -->
                    <div
                        class="caja2 text-white max-sm:animate-none z-0 text-left max-sm:text-[60px] max-sm:py-12 max-sm:px-4 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-zinc-400">
                        Información
                    </div>
                    <!-- Información oculta por defecto y visible al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-4 px-20 text-[20px] leading-[10rem] font-['Neue'] max-sm:block hidden group-hover:block">
                        <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                            class="email text-[50px] max-sm:text-zinc-400 leading-[60px] max-[1920px]:text-[45px] max-sm:text-[18px] max-sm:leading-7 flex gap-2 items-center max-lg:text-[14px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
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
  .animate-text
    opacity: 1
    transition: opacity 2s
  .image_logo
    @apply opacity-100
    &:hover
      @apply opacity-60
  
  .red
    &:hover
        @apply text-zinc-300
  
  .app.animate-enter
    opacity: 1

.fixed-header 
    @apply fixed top-0 w-full z-50

</style>
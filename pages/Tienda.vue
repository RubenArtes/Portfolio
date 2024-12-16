<template class="bg-[#fcfcff]">
    <CursorBlack class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion" />

    <div id="header" class="font-['SFUIDisplay-Light']" :class="['header', isHeaderFixed ? 'fixed-header' : '']">

        <!-- Header (header ya es sticky) -->


        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] bg-[#fcfcff]">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-black items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
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
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-black dark:text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-black dark:text-white relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
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
                            <a href="/IntroDark#trabajos2"
                                class="email max-sm:text-[22px] max-sm:leading-8 text-black dark:text-white underline-offset-1 after:bg-current after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
                                Contacto
                            </a>
                        </li>
                    </div>
                    <div class="columna mt-auto pb-6 flex justify-between">
                        <p class="text-black dark:text-white">Copyright 2024</p>
                        <p class="text-black dark:text-white">*</p>
                        <p class="text-black dark:text-white">Rubén Maldonado</p>
                        <p class="text-black dark:text-white">*</p>
                        <p class="text-black dark:text-white">Portfolio</p>
                    </div>
                </ul>
            </div>
        </div>
        <div
            class="caja1 text-black bg-[#fcfcff] text-left px-20 max-sm:px-8 max-sm:text-[90px] max-sm:pt-32 pt-44 text-[170px] pb-12 font-['Neue'] cursor-pointer duration-300">
            Tienda
        </div>

        <div class="max-sm:hidden">

            <div class="elementos bg-[#fcfcff] flex gap-4 pt-2 px-20 justify-between max-sm:flex-col max-sm:px-8">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 max-sm:gap-4 flex flex-col gap-24 max-sm:flex-col">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] text-black text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            Colección Oporto</p>
                    </div>
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] pt-32 text-black text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-24 normal-case cursor-pointer font-['Neue']">
                            [ * ] Azulejo Serigrafiado | 1 unidad<br>
                            [ * ] Libro Impreso Premium | 1 unidad<br>
                            [ * ] Sellos / Estampas | 4 unidades<br>
                            [ * ] Mapa Oporto | 1 unidad<br>
                            [ * ] Folleto Itinerario | 1 unidad<br>
                            [ * ] Postales ilustradas | 3 unidades<br>
                        </p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end max-sm:flex-col">
                    <!-- 'place-self-end' asegura que el contenido esté alineado al final del contenedor -->
                    <!-- Cada uno de los enlaces con imágenes -->
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img class="" src="/img/azulejogif.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/cajaanalogicas.png" alt="Caja Análogicas">
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/IMG_2522.png" alt="Imagen 2522">
                        </div>
                    </a>
                </div>

            </div>

        </div>

        <div class="max-sm:hidden">

            <div class="elementos bg-[#fcfcff] flex gap-4 pt-6 px-20 justify-between max-sm:flex-col max-sm:px-8">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 flex gap-24 invisible">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] px-60 max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            La colección Oporto es una seleccción de piezas del proyecto de la <a
                                class="text-[30px] animate-pulse text-zinc-400" href="/CajaOporto" target="_blank">Caja
                                de Oporto </a>
                            que han podido ser duplicadas o se ha hecho una segunda tirada y estan a la venta de forma
                            exclusiva, siendo unas maquetas del proyecto 100% cuidadas y de calidad.</p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end">
                    <div class="div2 flex gap-2">
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Azulejo Oporto<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 14 x H 14 cm</p>
                            <p class="">Serigrafía</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Cuaderno de Bitácora<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 21 x H 21 cm</p>
                            <p class="">Diseño impreso / Papel fotográfico premium 300gr</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Mapa Oporto<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 42 x H 29.7 cm</p>
                            <p class="">Diseño impreso</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                    </div>
                </div>

            </div>

        </div>


        <div class="max-sm:hidden">

            <div class="elementos bg-[#fcfcff] flex gap-4 pt-12 px-20 justify-between max-sm:flex-col max-sm:px-8">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 flex gap-24">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] px-60 max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            La colección Oporto es una seleccción de piezas del proyecto de la <a
                                class="text-[30px] animate-pulse text-zinc-400" href="/CajaOporto" target="_blank">Caja
                                de Oporto </a>
                            que han podido ser duplicadas o se ha hecho una segunda tirada y estan a la venta de forma
                            exclusiva, siendo unas maquetas del proyecto 100% cuidadas y de calidad.</p>
                    </div>
                    <div class="invisible">
                        <p>Unidades limitadas</p>
                        <p class="pl-8 ">[ * ] Azulejo Serigrafiado</p>
                        <p class="pl-8">[ * ] Libro Impreso Premium</p>
                        <p class="pl-8">[ * ] Sellos / Estampas</p>
                        <p class="pl-8">[ * ] Mapa Oporto</p>
                        <p class="pl-8">[ * ] Folleto Itinerario</p>
                        <p class="pl-8">[ * ] Postales ilustradas</p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end max-sm:flex-col max-sm:px-8">
                    <!-- 'place-self-end' asegura que el contenido esté alineado al final del contenedor -->
                    <!-- Cada uno de los enlaces con imágenes -->
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/folletotienda.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/postales.png" alt="Caja Análogicas">
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/sellostienda.png" alt="Imagen 2522">
                        </div>
                    </a>
                </div>

            </div>

        </div>

        <div class="max-sm:hidden">

            <div class="elementos bg-[#fcfcff] flex gap-4 pt-6 px-20 justify-between max-sm:flex-col max-sm:px-8">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 flex gap-24 invisible">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <a class="font-bold">Colección Oporto</a>
                    </div>
                    <div>
                        <p>Unidades limitadas</p>
                        <p class="pl-8">[ * ] Azulejo Serigrafiado</p>
                        <p class="pl-8">[ * ] Libro Impreso Premium</p>
                        <p class="pl-8">[ * ] Sellos / Estampas</p>
                        <p class="pl-8">[ * ] Mapa Oporto</p>
                        <p class="pl-8">[ * ] Folleto Itinerario</p>
                        <p class="pl-8">[ * ] Postales ilustradas</p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end">
                    <div class="div2 flex gap-2">
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Folleto Imprescindibles<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 10 x H 20 cm</p>
                            <p class="">Diseño impreso</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Postales ilustradas<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 20 x H 10 cm</p>
                            <p class="">Diseño impreso</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">Sellos<br><br></p>
                            <p class="font-bold">Dimensiones / Técnica<br><br></p>
                            <p class="">W 7 x H 5 cm</p>
                            <p class="">Diseño impreso</p>
                            <p class="">Haz click en la imagen para preguntar presupuesto</p>


                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="hidden max-sm:block">

            <div class="elementos bg-[#fcfcff] flex gap-12 pt-2 px-8 justify-between max-sm:flex-col max-sm:px-4">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 max-sm:gap-4 flex flex-col gap-24 max-sm:flex-col">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] text-black text-[60px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-[24px] max-sm:pb-4 max-sm:pt-4 normal-case font-['Neue']">
                            Colección Oporto</p>
                    </div>
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] pt-32 text-black text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-4 normal-case cursor-pointer font-['Neue']">
                            [ * ] Azulejo Serigrafiado | 1 unidad<br>
                            [ * ] Libro Impreso Premium | 1 unidad<br>
                            [ * ] Sellos / Estampas | 4 unidades<br>
                            [ * ] Mapa Oporto | 1 unidad<br>
                            [ * ] Folleto Itinerario | 1 unidad<br>
                            [ * ] Postales ilustradas | 3 unidades<br>
                        </p>
                    </div>

                    <div>
                        <p
                            class="titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-4 max-sm:pt-4 normal-case font-['Neue']">
                            La colección Oporto es una seleccción de piezas del proyecto de la <a
                                class="text-[30px] animate-pulse text-zinc-400 max-sm:text-[20px]" href="/CajaOporto"
                                target="_blank">Caja
                                de Oporto </a>
                            que han podido ser duplicadas o se ha hecho una segunda tirada y estan a la venta de forma
                            exclusiva, siendo unas maquetas del proyecto 100% cuidadas y de calidad.</p>
                    </div>

                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-6 items-start justify-start place-self-start max-sm:flex-col">
                    <!-- 'place-self-end' asegura que el contenido esté alineado al final del contenedor -->
                    <!-- Cada uno de los enlaces con imágenes -->
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img class="" src="/img/azulejogif.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Azulejo Oporto<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 14 x H 14 cm</p>
                        <p class="text-zinc-400 text-[14px]">Serigrafía</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img src="/img/cajaanalogicas.png" alt="Caja Análogicas">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Cuaderno de Bitácora<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 21 x H 21 cm</p>
                        <p class="text-zinc-400 text-[14px]">Diseño impreso / Papel fotográfico premium 300gr</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img src="/img/IMG_2522.png" alt="Imagen 2522">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Mapa Oporto<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 42 x H 29.7 cm</p>
                        <p class="text-zinc-400 text-[14px]">Diseño impreso</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img src="/img/folletotienda.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Folleto Imprescindibles<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 10 x H 20 cm</p>
                        <p class="text-zinc-400 text-[14px]">Diseño impreso</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img src="/img/postales.png" alt="Caja Análogicas">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Postales ilustradas<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 20 x H 10 cm</p>
                        <p class="text-zinc-400 text-[14px]">Diseño impreso</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-full bg-zinc-200">
                            <img src="/img/sellostienda.png" alt="Caja Análogicas">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">Sellos<br></p>
                        <p class="">Dimensiones / Técnica<br><br></p>
                        <p class="text-zinc-400 text-[14px]">W 7 x H 5 cm</p>
                        <p class="text-zinc-400 text-[14px]">Diseño impreso</p>
                        <p class="text-zinc-400 text-[14px]">Haz click en la imagen para preguntar presupuesto</p>
                    </div>
                </div>


            </div>


        </div>


        <div class="max-sm:hidden bg-[#fcfcff] pt-32">

            <div class="elementos bg-[#fcfcff] flex gap-4 pt-2 px-20 justify-between max-sm:flex-col max-sm:px-8">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 max-sm:gap-4 flex flex-col gap-24 max-sm:flex-col">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] text-black text-[60px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            Merchandising Redbubble</p>
                    </div>
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] pt-32 text-black text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-24 normal-case cursor-pointer font-['Neue']">
                            [ * ] Productos tienda Redbubble
                        </p>
                    </div>
                    <div>
                        <p
                            class="pl-8 titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] px-60 max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            Colección de diferentes ilustraciones adaptadas a formatos, distribuido por la tienda online <a
                                class="text-[30px] animate-pulse text-zinc-400" href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">Redbubble,</a>
                            como camisetas, fundas de telefonos, totebags, pegatinas y demás elementos.</p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end max-sm:flex-col">
                    <!-- 'place-self-end' asegura que el contenido esté alineado al final del contenedor -->
                    <!-- Cada uno de los enlaces con imágenes -->
                    <a href="https://www.redbubble.com/es/people/ruben-maldonado/shop"
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img class="" src="/img/productotienda1.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>
                    <a href="https://www.redbubble.com/es/people/ruben-maldonado/shop"
                        target="_blank">
                        <div class="imagen flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/productotienda2.png" alt="Caja Análogicas">
                        </div>
                    </a>
                    <a href="https://www.redbubble.com/es/people/ruben-maldonado/shop"
                        target="_blank">
                        <div class="imagen border flex items-center h-[550px] w-[400px] bg-zinc-200">
                            <img src="/img/productotienda4.png" alt="Imagen 2522">
                        </div>
                    </a>
                </div>

            </div>

        </div>

        <div class="max-sm:hidden bg-[#fcfcff]">

            <div class="elementos bg-[#fcfcff] flex gap-12 pt-2 px-8 justify-between max-sm:flex-col max-sm:px-4">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 flex gap-24 invisible">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] px-60 max-sm:pb-12 max-sm:pt-24 normal-case font-['Neue']">
                            La colección Oporto es una seleccción de piezas del proyecto de la <a
                                class="text-[30px] animate-pulse text-zinc-400" href="/CajaOporto" target="_blank">Caja
                                de Oporto </a>
                            que han podido ser duplicadas o se ha hecho una segunda tirada y estan a la venta de forma
                            exclusiva, siendo unas maquetas del proyecto 100% cuidadas y de calidad.</p>
                    </div>
                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-2 items-end justify-end place-self-end">
                    <div class="div2 flex gap-2">
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">DISEÑOS ATTACK ON TITAN<br><br></p>
                            <p class="font-bold">Soportes<br><br></p>
                            <p class="">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="">Haz click en la imagen para acceder a la tienda</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">DISEÑOS CARS<br><br></p>
                            <p class="font-bold">Soportes<br><br></p>
                            <p class="">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="">Haz click en la imagen para acceder a la tienda</p>


                        </div>
                        <div class="w-[400px]">
                            <p class="font-bold uppercase">DISEÑOS VARIADOS<br><br></p>
                            <p class="font-bold">Soportes<br><br></p>
                            <p class="">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="">Haz click en la imagen para acceder a la tienda</p>


                        </div>
                    </div>
                </div>

            </div>

        </div>




        <div class="hidden max-sm:block pt-32 pb-24 bg-[#fcfcff]">

            <div class="elementos bg-[#fcfcff] flex gap-12 pt-2 px-8 justify-between max-sm:flex-col max-sm:px-4">
                <!-- Cambié 'justify-items-center' a 'justify-between' -->

                <!-- div1, mantiene el contenido a la izquierda -->
                <div class="div1 max-sm:gap-4 flex flex-col gap-24 max-sm:flex-col">
                    <!-- Añadí 'flex-col' para que los elementos dentro de div1 estén alineados verticalmente -->
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] text-black text-[60px] gap-2 max-lg:text-xs max-sm:text-[30px] max-sm:leading-[24px] max-sm:pb-4 max-sm:pt-4 normal-case font-['Neue']">
                            Merchandising Redbubble</p>
                    </div>
                    <div>
                        <p
                            class="pl-8 max-sm:pl-0 titulo bg-[#fcfcff] pt-32 text-black text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-12 max-sm:pt-4 normal-case cursor-pointer font-['Neue']">
                            [ * ] Productos tienda Redbubble
                        </p>
                    </div>

                    <div>
                        <p
                            class="titulo bg-[#fcfcff] text-black text-[30px] gap-2 max-lg:text-xs max-sm:text-[20px] max-sm:leading-[24px] max-sm:pb-4 max-sm:pt-4 normal-case font-['Neue']">
                            Colección de diferentes ilustraciones adaptadas a formatos, distribuido por la tienda online <a
                                class="text-[30px] animate-pulse text-zinc-400 max-sm:text-[20px]" href="/CajaOporto"
                                target="_blank">Redbubble, </a>
                                como camisetas, fundas de telefonos, totebags, pegatinas y demás elementos.</p>
                    </div>

                </div>

                <!-- div2, ahora se posiciona a la derecha -->
                <div class="div2 flex gap-4 items-start justify-start place-self-start max-sm:flex-col">
                    <!-- 'place-self-end' asegura que el contenido esté alineado al final del contenedor -->
                    <!-- Cada uno de los enlaces con imágenes -->
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center w-full">
                            <img class="" src="/img/productotienda1.png" alt="Azulejo Serigrafiado">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class="uppercase">DISEÑOS ATTACK ON TITAN<br></p>
                            <p class="text-black">Soportes<br><br></p>
                            <p class="text-zinc-400 text-[14px]">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="text-zinc-400 text-[14px]">Haz click en la imagen para acceder a la tienda</p>


                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen flex items-center w-full">
                            <img src="/img/productotienda2.png" alt="Caja Análogicas">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">DISEÑOS CARS<br></p>
                            <p class="">Soportes<br><br></p>
                            <p class="text-zinc-400 text-[14px]">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="text-zinc-400 text-[14px]">Haz click en la imagen para acceder a la tienda</p>

                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank">
                        <div class="imagen border flex items-center w-full">
                            <img src="/img/productotienda4.png" alt="Caja Análogicas">
                        </div>
                    </a>

                    <div class="text flex flex-col items-start pb-12">
                        <p class=" uppercase">DISEÑOS VARIADOS<br></p>
                            <p class="">Soportes<br><br></p>
                            <p class="text-zinc-400 text-[14px]">Gorras, sudaderas, pegatinas, fundas de movil, <br> 
                                calcetines, laminas,poster, cojines...</p>
                            <p class="text-zinc-400 text-[14px]">Haz click en la imagen para acceder a la tienda</p>

                    </div>

                </div>


            </div>


        </div>



        <div class="grid grid-cols-2 pt-24 max-sm:grid-cols-1 max-sm:px-4 bg-[#fcfcff] px-20 gap-12 hidden">
            <div
                class="bg-gray-200 max-sm:bg-white trabajos shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">

                <!-- Header -->
                <div
                    class="flex max-sm:grid max-sm:grid-rows-2 max-sm:items-left max-sm:justify-left max-sm:text-left items-center justify-between bg-gray-200 max-sm:bg-white px-4 pt-6 py-2 rounded-t-lg">
                    <!-- Title -->
                    <div class="flex items-center max-sm:items-left max-sm:text-left space-x-2">
                        <span class="text-sm text-gray-800 font-['Neue'] ml-2">COLECCIÓN OPORTO</span>
                    </div>
                    <!-- Right Buttons -->
                    <a class="text-end mr-2 max-sm:text-start max-sm:ml-2 animate-pulse">PRECIO: CONSULTAR</a>
                </div>
                <!-- Content -->
                <div class="bg-white m-4 rounded-lg">
                    <img class="rounded-lg w-[600px]" src="/img/tienda3.png">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por el pack Oporto..."
                        target="_blank"
                        class="caja2 max-sm:px-4 max-sm:py-4 pb-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                        Solicitar<br>
                        Compra ⤤
                    </a>
                </div>
            </div>
            <div
                class="bg-gray-200 max-sm:bg-white trabajos shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">

                <!-- Header -->
                <div class="flex items-center justify-between bg-gray-200 max-sm:bg-white px-4 pt-6 py-2 rounded-t-lg">
                    <!-- Title -->
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-800 font-['Neue'] ml-2">COLECCIÓN PEGATINAS</span>
                    </div>
                    <!-- Right Buttons -->
                    <a class="text-end mr-2 animate-pulse max-sm:text-start max-sm:ml-2">PRECIO: 1€ / und</a>

                </div>
                <!-- Content -->
                <div class="bg-white m-4 rounded-lg">
                    <img class="rounded-lg w-[600px]" src="/img/tienda4.png">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=COMPRA|PRESUPUESTO&body=Hola Ruben Maldonado.Preguntaba por las pegatinas..."
                        target="_blank"
                        class="caja2 max-sm:px-4 max-sm:py-4 pb-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                        Solicitar<br>
                        Compra ⤤
                    </a>
                </div>
            </div>

        </div>






        <div id="contacto" class="informacion max-sm:pt-24 pt-[300px] pb-64 bg-[#fcfcff] max-sm:pb-32">
            <div class="about bg-[#fcfcff]">
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
            <div class="about bg-[#fcfcff] pt-2">


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
                            Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado
                            Diciembre 2024
                        </a>
                    </div>
                </div>
            </div>


        </div>



        <div
            class="foter bg-zinc-80white0 p-12 border-0 flex justify-center max-sm:grid-cols-2 text-black max-lg:p-6 bg-[#fcfcff]">
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
      @apply text-zinc-500
  
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
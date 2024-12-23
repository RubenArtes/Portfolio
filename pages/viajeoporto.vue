<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
        <Cursor class="mix-blend-exclusion max-sm:hidden" />
        <div
            class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] max-sm:bg-white bg-white">
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
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-6 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-black dark:text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-black dark:text-white relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] max-sm:leading-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
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
                            <a href="/viajeoporto#contacto"
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
        <div
            class="caja1 max-[1500px]:px-4 text-black bg-white text-left px-20 max-sm:px-6 max-sm:text-[90px] max-sm:pt-32 pt-44 text-[170px] pb-12 font-['Neue'] cursor-pointer duration-300">
            Porto
        </div>
        <div id="navegacion"
            class="titular2 max-sm:pb-4 white max-[1500px]:pt-12 max-[1500px]:content-center flex px-20 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pb-32 pt-32 text-center max-sm:px-0 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">

            <div
                class="trabajos gap-6 grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:justify-center items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-0 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="titulo bg-white text-black text-left text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[16px] max-sm:px-6 max-sm:leading-[20px] max-sm:pb-4  max-sm:pt-0 normal-case font-['Neue']">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="titulo invisible max-sm:hidden bg-white text-black text-left max-sm:px-6 text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[16px] max-sm:leading-[20px] max-sm:pb-4  max-sm:pt-0 normal-case font-['Neue']">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="titulo bg-white text-black text-left max-sm:px-6 text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[26px] max-sm:pb-12  normal-case font-['Neue']">
                    Videos de abordo de todos los lugares importantes y perspectivas interesantes personales sobre
                    el viaje,
                    para ampliar material e información de los demás apartados, dandole
                    un valor más, contando cosas en movimiento y no en una sola imagen estática.
                </div>

            </div>
        </div>

        <div id="navegacion"
            class="titular2 max-sm:pb-4 white max-[1500px]:pt-12 max-[1500px]:content-center flex px-20 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pb-32 pt-12 text-center max-sm:px-0 max-sm:flex-col max-sm:gap-2 max-sm:pt-2 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">

            <div
                class="trabajos gap-6 grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:justify-center items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-0 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="titulo invisible max-sm:hidden bg-white text-black text-left max-sm:px-6 text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[16px] max-sm:leading-[20px] max-sm:pb-4  max-sm:pt-0 normal-case font-['Neue']">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="titulo invisible max-sm:hidden bg-white text-black text-left max-sm:px-6 text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[16px] max-sm:leading-[20px] max-sm:pb-4  max-sm:pt-0 normal-case font-['Neue']">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="titulo bg-white text-black text-left max-sm:px-6 text-[30px] gap-2 leading-[40px] max-lg:text-xs max-sm:text-[20px] max-sm:leading-[26px] max-sm:pb-12  normal-case font-['Neue']">
                    Estos videos son una recopilación más extensa de lo que estuve viendo durante estos tres
                    días,
                    los lugares emblemáticos de la ciudad, los monumentos, las calles y su gente, los
                    detalles.
                    Estos videos
                    sirven para ampliar el contenido de la caja y del material visual en imágenes. Estos
                    vidoes
                    muestran la visión entera
                    del lugar al que iba y se puede ver con todo detalle como son cada lugar y que es lo que
                    yo
                    veía en cada sitio bajo mi
                    punto de vista personal.
                    <br> <br>
                    Este material es exclusivo accesible a partir del QR de la caja ya que contiene
                    elementos de
                    apoyo al trabajo para hacerlo
                    más dinámico y enriquecedor.
                    Aqui se muestran lugares como:

                    <br> <br> <br>
                    <br>* Catedral do Porto
                    <br>* Puente de Don Luis I
                    <br>* Livraria Lello
                    <br>* Parque Das Virtudes
                    <br>* Torre dos Clérigos
                    <br>* Igreja de Santo Ildefonso
                    <br>* Capela das Almas
                    <br>* Mercado do Bolhão
                    <br>* McDonalds Imperial
                    <br>* Prometeu Artesanato
                    <br>* Igreja da Misericórdia
                    <br>* Cementério de Agramonte
                    <br>* Jardim da Rounda da Boavista
                </div>
                <div class="fotografias">

                    <Carousel class="carousel max-w-[600px] place-self-center">

                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto2.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto3.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto5.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto7.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto8.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto9.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto10.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto11.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto13.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto14.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto15.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto16.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto17.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>
                        <Slide v-for="slide in 1" :key="slide">
                            <video width="1240" height="788" loop autoplay controls muted>
                                <source src="/img/VideoPorto20.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </Slide>


                        <template #addons>
                            <Navigation />
                            <Pagination class="bg-[#ffffff]" />
                        </template>
                    </Carousel>

                </div>


            </div>
        </div>



        <div id="contacto" class="bg-lime-400 py-4 px-6 text-lime-800 font-['Neue'] max-sm:text-lime-800 text-center justify-center max-sm:text-[30px] max-sm:leading-4 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-lg:justify-center">¡Contactame!</div>


        <div id="contacto"
            class="informacion max-sm:pt-12 pt-[100px] pb-24 bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pb-0">

            <div class="about max-sm:bg-[#fafafa] bg-[#f7faf7]">
                <div class="correo grid grid-cols-2 max-sm:grid-cols-1 text-black">
                    <div
                        class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
                        Correo
                    </div>
                    <div
                        class="caja1 text-left self-center max-sm:self-start max-sm:px-6 px-20 leading-[10rem] font-['Neue'] cursor-pointer text-black">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                            target="_blank"
                            class="email font-['Neue'] max-sm:text-zinc-600 max-sm:text-[16px] max-sm:leading-4 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
                            ruben.maldonado.graphic@gmail.com
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="about bg-[#f7faf7] max-sm:bg-[#fafafa] pt-2">


                <!-- Redes Sociales -->
                <div
                    class="redes grid grid-cols-2 items-center max-sm:grid-cols-1 text-black group hover:group-[.hover]:cursor-default">
                    <!-- Caja 2 -->
                    <div
                    class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:pt-12 max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
                    Redes sociales
                    </div>
                    <!-- Redes ocultas por defecto y visibles al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] grid grid-cols-2 font-['Neue']  hidden max-sm:grid max-sm:grid-cols-2 group-hover:grid">
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/maldonadoruben_/" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[18px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.behance.net/maldonadoruben" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/Behance.png" />
                            Behance
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.instagram.com/ruben.iso" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/Instagram.png" />
                            Instagram
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.linkedin.com/in/rubenmaldonado00" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/LinkedIn.png" />
                            LinkedIn
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://www.redbubble.com/es/people/ruben-maldonado/shop" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/redbubble.svg" />
                            Redbubble
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                        <a class="red flex max-sm:gap-2 gap-4 max-sm:leading-8 max-sm:text-zinc-600 items-center max-sm:text-[16px] max-sm:leading-6 max-[1920px]:text-[45px] text-[50px] leading-[60px] max-lg:text-[14px]"
                            href="https://es.pinterest.com/maldonadoruben_" target="_blank">
                            <img class="vector w-[40px] max-sm:w-[14px] max-sm:opacity-60" src="/img/pinterest.svg" />
                            Pinterest
                            <img class="vector w-[40px] max-sm:w-[16px] max-sm:opacity-60"
                                src="/img/Vector-11black.svg" />
                        </a>
                    </div>
                </div>

                <!-- Información -->
                <div class="informacion grid grid-cols-2 max-sm:pb-12 max-sm:grid-cols-1 text-black group">
                    <!-- Caja 3 -->
                    <div
                    class="caja2 max-sm:animate-none z-0 text-left max-sm:text-[30px] max-sm:py-2 max-sm:pt-12 max-sm:px-6 max-sm:leading-[50px] animate-pulse px-20 font-['Neue'] max-[1920px]:text-[150px] max-[1920px]:leading-[8.5rem] text-[170px] pt-12 pb-12 leading-[10rem] cursor-pointer text-black transition-colors duration-300 hover:text-black">
                        Información
                    </div>
                    <!-- Información oculta por defecto y visible al hacer hover -->
                    <div
                        class="caja1 text-left self-center max-sm:px-6 px-20 text-[20px] leading-[10rem] font-['Neue'] max-sm:block hidden group-hover:block">
                        <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                            class="email text-[50px] max-sm:text-zinc-600 leading-[60px] max-[1920px]:text-[45px] max-sm:text-[16px] max-sm:leading-6 flex gap-2 items-center max-lg:text-[14px] max-sm:justify-start max-lg:justify-center max-sm:pr-0">
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

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'


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
}

</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
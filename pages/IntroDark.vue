<template class="bg-[#fcfcf7] max-sm:bg-[#fafafa]">
    <CursorBlack class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion z-0 relative" />

    <!--   <div>

        <Sidebar 
            v-model:visible="visible" 
            :class="['bg-gradient-to-r from-blue-600/80 to-blue-400/60 backdrop-blur-lg border-r border-white/10 text-white']"
        >
            <template #container="{ closeCallback }">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-between px-4 pt-3 shrink-0">
                        <span class="inline-flex items-center gap-2">
                            <svg width="35" height="40" xmlns="http://www.w3.org/2000/svg">
                                <path d="..." fill="var(--primary-color-color)" />
                                <path d="..." fill="var(--text-color)" />
                            </svg>
                            <span class="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <Button 
                            type="button" 
                            @click="closeCallback" 
                            icon="pi pi-times" 
                            class="h-8 w-8 text-white hover:bg-blue-500 transition-all"
                        />
                    </div>

                    <div class="overflow-y-auto flex-grow px-4">
                        <ul class="list-none p-0">
                            <li>
                                <a 
                                    v-ripple 
                                    class="flex items-center cursor-pointer p-3 rounded-lg text-white hover:bg-blue-500 transition-colors"
                                >
                                    <i class="pi pi-user mr-2"></i>
                                    <span class="font-medium">Sobre mí</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    v-ripple 
                                    class="flex items-center cursor-pointer p-3 rounded-lg text-white hover:bg-blue-500 transition-colors"
                                >
                                    <i class="pi pi-briefcase mr-2"></i>
                                    <span class="font-medium">Trabajos</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    v-ripple 
                                    class="flex items-center cursor-pointer p-3 rounded-lg text-white hover:bg-blue-500 transition-colors"
                                >
                                    <i class="pi pi-envelope mr-2"></i>
                                    <span class="font-medium">Contacto</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-auto px-4">
                        <hr class="mb-3 border-t border-white/20" />
                        <a 
                            v-ripple 
                            class="flex items-center cursor-pointer p-3 gap-2 rounded-lg text-white hover:bg-blue-500 transition-colors"
                        >
                            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </template>


<Button icon="pi pi-bars" @click="toggleSidebar"
    class="bg-white/10 text-white rounded-lg px-4 py-2 hover:bg-white/20 transition-colors">
    <span>Menu</span>
</Button>
</div> -->

    <div id="header" class="bg-[#f7faf7] max-sm:bg-[#fafafa] font-['SFUIDisplay-Light']"
        :class="['header', isHeaderFixed ? 'fixed-header' : '']">


        <div
            class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] max-sm:bg-[#fafafa] bg-[#f7faf7]">
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
                            <a href="/IntroDark#contacto"
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



        <!-- Video al fondo detrás del header -->
        <div class="max-sm:hidden">
            <img class="w-full -z-10" src="/img/portadarubenwhite2.gif" alt="intro" />
        </div>
        <div class="hidden max-sm:block">
            <img class="w-full -z-10" src="/img/portadarubenwhite4.gif" alt="intro" />
        </div>

        <!-- Banner de texto -->
        <div
            class="text bg-[#f7faf7] max-sm:bg-[#fafafa] mix-blend-exclusion relative z-0 top-[-400px] max-[1920px]:top-[-360px] max-sm:top-[-140px]">
            <div class="texto px-20 grid grid-cols-3 bg-black max-sm:px-8 max-sm:grid-cols-1">
                <div
                    class="flex flex-col bg-black items-start content-end place-self-start text-left text-zinc-300 mix-blend-exclusion text-[40px] max-[1920px]:text-[30px] max-sm:hidden">
                    <p
                        class="text text-[90px] flex gap-2 leading-[3rem] font-['PPE-Ultralight'] max-[1920px]:text-[36px]">
                        Portfolio
                        <img class="w-[22px] h-[22px]" src="/img/Copyright.svg" />
                    </p>
                    <div class="text text-[20px]">
                        <p class="pb-2">[ r -- n ]</p>
                        <p class="">2025</p>
                    </div>
                </div>
                <div class="bg-black"></div>
                <div
                    class="flex items-end bg-black text-right text-zinc-300 mix-blend-exclusion text-[40px] leading-[3rem] max-[1920px]:leading-[2.25rem] max-[1920px]:text-[30px] max-sm:text-[20px] max-sm:leading-[1.5rem]">
                    <p>
                        Hola soy Rubén Maldonado, soy diseñador gráfico, fotógrafo e ilustrador. Polifacético,
                        trabajador y apasionado.
                        <NuxtLink to="/Sobremi"
                            class="text-[#ff2d7e] max-[1920px]:hover:text-[32px] hover:text-[41px] transition-all duration-500 underline">
                            Saber más
                        </NuxtLink>
                    </p>
                </div>
            </div>
        </div>




        <div id="trabajos2"
            class="texto flex w-full max-sm:bg-[#fafafa] bg-[#f7faf7] text-black max-sm:px-6 max-sm:pb-2 max-sm:pt-12 px-20 pt-12 justify-between">
            <p
                class="caja2 text-left max-sm:text-[30px] max-sm:leading-[2rem] font-['Neue'] text-[50px] leading-[3rem] pb-12 max-sm:pb-2 cursor-pointer text-zinc-800 ">
                Trabajos
            </p>


        </div>


        <div class="trabajos max-sm:hidden" id="trabajos2">

            <NuxtLink to="/Matutano">
                <div class="pt-20 trabajos  bg-[#f7faf7] max-sm:pt-4">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-1 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[0] = true" @mouseleave="hovered[0] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Matutano
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[0]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[0] }"
                            :style="{ backgroundImage: `url(${imageUrlMatutano})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Saludable
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- Otro ejemplo de trabajo -->
            <NuxtLink to="/CajaOporto">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[1] = true" @mouseleave="hovered[1] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Caja
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[1]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[1] }"
                            :style="{ backgroundImage: `url(${imageUrlOporto})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Oporto
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Member">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[2] = true" @mouseleave="hovered[2] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Asistente
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[2]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[2] }"
                            :style="{ backgroundImage: `url(${imageUrlMember})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Member
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Prau">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[5] = true" @mouseleave="hovered[5] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Vinos
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[5]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[5] }"
                            :style="{ backgroundImage: `url(${imageUrlPrau})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Prau
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/MetrodeMadrid">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[3] = true" @mouseleave="hovered[3] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Metro
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[3]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[3] }"
                            :style="{ backgroundImage: `url(${imageUrlMetro})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Madrid
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Movistar">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[4] = true" @mouseleave="hovered[4] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Animación
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[4]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[4] }"
                            :style="{ backgroundImage: `url(${imageUrlMovistar})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Movistar
                        </div>
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/Audiovisuales">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[6] = true" @mouseleave="hovered[6] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Colección
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[6]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[6] }"
                            :style="{ backgroundImage: `url(${imageUrlAudiovisuales})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Visuales
                        </div>
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/YelmoCines">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[7] = true" @mouseleave="hovered[7] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Yelmo
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[7]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[7] }"
                            :style="{ backgroundImage: `url(${imageUrlYelmo})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Cines
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Typenotes">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[8] = true" @mouseleave="hovered[8] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Revista
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[8]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[8] }"
                            :style="{ backgroundImage: `url(${imageUrlTypenotes})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Typenotes
                        </div>
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/WebESD">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[9] = true" @mouseleave="hovered[9] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Web
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[9]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[9] }"
                            :style="{ backgroundImage: `url(${imageUrlWebESD})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-start leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            ESD
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Fotografias">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[10] = true" @mouseleave="hovered[10] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3.5rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Colección
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[10]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[10] }"
                            :style="{ backgroundImage: `url(${imageUrlFotografias})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] max-[600px]:flex text-start pt-24 pb-24 leading-[4rem] max-sm:py-6 max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Fotografía
                        </div>
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/GarridoGallery">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[11] = true" @mouseleave="hovered[11] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:py-6 max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Garrido
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[11]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[11] }"
                            :style="{ backgroundImage: `url(${imageUrlGarridoGallery})` }">
                        </div>

                        <!-- Segundo bloque de texto -->
                        <div
                            class="text-[170px] text-start pt-24 pb-24 leading-[4rem] max-sm:py-6 max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">

                            Gallery
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Ilustraciones">
                <div class="trabajos bg-[#f7faf7]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-zinc-800 bg-[#f7faf7] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
                        @mouseenter="hovered[12] = true" @mouseleave="hovered[12] = false">

                        <!-- Primer bloque de texto -->
                        <div
                            class="text-[170px] pt-24 pb-24 text-end leading-[4rem] max-sm:py-6 max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Colección
                        </div>

                        <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                        <div v-show="hovered[12]" loading="lazy"
                            class=" max-sm:hidden h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                            :class="{ 'scale-y-100 width-full': hovered[12] }"
                            :style="{ backgroundImage: `url(${imageUrlIlustraciones})` }">
                        </div>

                        <!-- Segundo bloque de texto -->

                        <div
                            class="text-[170px] max-[1920px]:flex text-start pt-24 pb-24 leading-[4rem] max-sm:py-6 max-sm:text-[40px] cursor-pointer max-[1920px]:leading-[3rem] max-[1920px]:text-[120px] max-sm:pt-2 max-sm:pb-2">
                            Ilustración
                        </div>
                    </div>
                </div>
            </NuxtLink>



        </div>

        <div class="trabajos hidden max-sm:block " id="trabajos2">

            <NuxtLink to="/Matutano">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/fotorealpackaging22.png">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        MATUTANO SALUDABLE
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/CajaOporto">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/IMG_25772.jpg" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        CAJA OPORTO
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/Member">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/member30.gif" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        ASISTENTE MEMBER
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/CajaOporto">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/vinospng.png" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        VINOS PRAU
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/MetrodeMadrid">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/Fotolibro_RubénMaldonadoGonzález388.jpg"
                            alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        METRO MADRID ⤤
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Movistar">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/movistardark.gif" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        ANIMACIÓN MOVISTAR ⤤
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/Audiovisuales">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/videoruben.gif" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        COLECCIÓN AUDIOVISUALES
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/YelmoCines">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/gifyelmo2.gif" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        YELMO CINES
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Typenotes">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-black overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="object-cover" src="/img/Comp_2.gif" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        REVISTA TYPENOTES
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/WebESD">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/mockupesd.png" alt="Matutano Saludable">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        WEB ESD
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Fotografias">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/fotos6.jpg" alt="tenerife">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        COLECCIÓN FOTOGRÁFICA
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>


            <NuxtLink to="/GarridoGallery">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/Publicacioninstagram5.png" alt="tenerife">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        GARRIDO GALLERY
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/Ilustraciones">
                <div class="pt-20 trabajos bg-[#f7faf7] max-sm:bg-[#fafafa] max-sm:pt-4 px-2">

                    <!-- Contenedor de imagen responsiva -->
                    <div
                        class="imagen h-[414px] bg-zinc-300 overflow-hidden flex justify-center items-center rounded-[6px]">
                        <img class="w-full h-full object-cover" src="/img/animacionilustraciones.gif" alt="tenerife">
                    </div>
                </div>
                <div class="texto">
                    <div class="text-[16px] pl-2 text-zinc-800">
                        COLECCIÓN ILUSTRACIONES
                    </div>
                    <div class="text-[16px] leading-4 pl-2 text-zinc-800">
                        Ver el proyecto ⤤
                    </div>
                </div>
            </NuxtLink>



        </div>


        <div id="colaboraciones"
            class="texto flex w-full max-sm:bg-[#fafafa] bg-[#f7faf7] text-black max-sm:px-6 max-sm:pb-2 max-sm:pt-24 px-20 pt-64 justify-between">
            <p
                class="caja2 text-left max-sm:text-[30px] max-sm:leading-[2rem] font-['Neue'] text-[50px] leading-[3rem] pb-24 max-sm:pb-12 cursor-pointer text-zinc-800 ">
                Colaboraciones <br>/ Otros proyectos
            </p>


        </div>

        <div
            class="grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-6 bg-[#f7faf7] max-sm:bg-[#fafafa] px-20 pt-12 pb-6 gap-12 ">
            <a class="text-start underline max-sm:text-start max-sm:ml-2" target="_blank"
                href="https://www.reasonwhy.es/actualidad/nueva-identidad-ecovidrio-contenedor-verde-2024">Articulo
                Reason Why</a>
        </div>

        <div
            class="grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-6 bg-[#f7faf7] max-sm:bg-[#fafafa] px-20 gap-12 max-sm:gap-6 pb-64 max-sm:pb-24">
            <a href="https://www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio" target="_blank"
                class="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 w-full rounded-t-2xl max-sm:rounded-2xl hover:duration-700 duration-700">
                <img src="/img/ecovidrio.svg" class="w-full">
                <div
                    class="hidden max-sm:block bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full">
                    <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">MICROILUSTRACIONES
                        ECOVIDRIO</span>
                </div>
                <div
                    class="absolute max-sm:hidden bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full group-hover:-bottom-0 max-sm: group-hover:duration-600 duration-500">
                    <div class="flex">
                        <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">MICROILUSTRACIONES
                            ECOVIDRIO</span>


                    </div>
                    <span class="text-gray-800 font-bold pr-6 pb-6 text-right text-3xl">Prodigioso<br>Volcán ⤤</span>

                </div>


            </a>
            <a href="https://www.vozpopuli.com/branded-content/peldanos-marmol-revestir-rascacielos-almeria-grupo-cosentino.html"
                target="_blank"
                class="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 w-full rounded-t-2xl max-sm:rounded-2xl hover:duration-700 duration-700">
                <img src="/img/sabadell.png" class="w-full">
                <div
                    class="hidden max-sm:block bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full">
                    <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">ILUSTRACIONES
                        SABADELL</span>
                </div>
                <div
                    class="absolute max-sm:hidden bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full group-hover:-bottom-0 max-sm: group-hover:duration-600 duration-500">
                    <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">ILUSTRACIONES
                        SABADELL</span>
                    <span class="text-gray-800 font-bold pr-6 pb-6 text-right text-3xl">Artículo<br>Sabadell
                        ⤤</span>
                </div>


            </a>
            <a href="https://faux-noticiario.netlify.app/" target="_blank"
                class="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 w-full rounded-t-2xl max-sm:rounded-2xl hover:duration-700 duration-700">
                <img src="/img/fauxproyecto.png" class="w-full">
                <div
                    class="hidden max-sm:block bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full">
                    <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">PROYECTO FAUX</span>
                </div>
                <div
                    class="absolute max-sm:hidden bg-gray-300 max-sm:bg-white -bottom-[105px] p-3 flex flex-col gap-1 w-full group-hover:-bottom-0 max-sm: group-hover:duration-600 duration-500">
                    <span class="text-sm text-gray-800 font-['Neue'] max-sm:pb-2 max-sm:pl-2">PROYECTO FAUX</span>
                    <span class="text-gray-800 font-bold pr-6 pb-6 text-right text-3xl">Web<br>Faux ⤤</span>
                </div>


            </a>

        </div>


        <div
            class="hidden max-sm:gap-6 grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-6 bg-[#f7faf7] max-sm:bg-[#fafafa] px-20 gap-12">
            <div
                class="bg-gray-200 max-sm:bg-white trabajos shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">

                <!-- Header -->
                <div
                    class="flex max-sm:grid max-sm:grid-rows-2 max-sm:items-left max-sm:justify-left max-sm:text-left items-center justify-between bg-gray-200 max-sm:bg-white px-4 pt-6 py-2 rounded-t-lg">
                    <!-- Title -->
                    <div class="flex items-center max-sm:items-left max-sm:text-left space-x-2">
                        <span class="text-sm text-gray-800 font-['Neue'] ml-2">MICROILUSTRICIONES ECOVIDRIO</span>
                    </div>
                    <!-- Right Buttons -->
                    <a class="text-end underline max-sm:text-start max-sm:ml-2"
                        href="https://www.reasonwhy.es/actualidad/nueva-identidad-ecovidrio-contenedor-verde-2024">Articulo
                        Reason Why</a>
                </div>
                <!-- Content -->
                <div class="bg-white m-4 rounded-lg">
                    <img class="rounded-lg" src="/img/ecovidrio.svg">
                    <a href="https://www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/" target="_blank"
                        class="caja2 max-sm:px-6 max-sm:py-4 pb-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                        Prodigioso<br>
                        Volcán ⤤
                    </a>
                </div>
            </div>
            <div
                class="bg-gray-200 max-sm:bg-white trabajos shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">

                <!-- Header -->
                <div class="flex items-center justify-between max-sm:bg-white bg-gray-200 px-4 pt-6 py-2 rounded-t-lg">
                    <!-- Title -->
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-800 uppercase font-['Neue'] ml-2">Ilustraciones Sabadell</span>
                    </div>
                    <!-- Right Buttons -->
                    <a class="text-end underline invisible"
                        href="https://www.reasonwhy.es/actualidad/nueva-identidad-ecovidrio-contenedor-verde-2024">Articulo
                        Reason Why</a>
                </div>
                <!-- Content -->
                <div class="bg-white m-4 rounded-lg">
                    <img class="rounded-lg" src="/img/sabadell.png">
                    <a href="https://www.vozpopuli.com/branded-content/peldanos-marmol-revestir-rascacielos-almeria-grupo-cosentino.html"
                        target="_blank"
                        class="caja2 max-sm:px-6 max-sm:py-4 pb-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                        Ilustraciones<br>
                        Sabadell ⤤
                    </a>
                </div>
            </div>
            <div
                class="bg-gray-200 max-sm:bg-white trabajos shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">

                <!-- Header -->
                <div class="flex items-center justify-between bg-gray-200 max-sm:bg-white px-4 pt-6 py-2 rounded-t-lg">
                    <!-- Title -->
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-800 font-['Neue'] ml-2">PROYECTO FAUX</span>
                    </div>
                    <!-- Right Buttons -->
                    <a class="text-end underline invisible"
                        href="https://www.reasonwhy.es/actualidad/nueva-identidad-ecovidrio-contenedor-verde-2024">Articulo
                        Reason Why</a>
                </div>
                <!-- Content -->
                <div class="bg-white m-4 rounded-lg">
                    <img class="rounded-lg" src="/img/fauxproyecto.png">
                    <a href="https://faux-noticiario.netlify.app/" target="_blank"
                        class="caja2 max-sm:px-6 max-sm:py-4 pb-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                        Web<br>
                        Faux ⤤
                    </a>
                </div>
            </div>

        </div>

        <div id="contacto"
            class="bg-lime-400 py-4 px-6 text-lime-800 font-['Neue'] max-sm:text-lime-800 text-center justify-center max-sm:text-[30px] max-sm:leading-4 flex gap-2 max-[1920px]:text-[45px] items-center max-sm:items-left text-[50px] max-lg:justify-center">
            ¡Contactame!</div>


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
            imageUrlTypenotes: '/img/comp2.gif',
            imageUrlPrau: '/img/vinodark.gif',
            imageUrlAudiovisuales: '/img/videoruben.gif',
            imageUrlYelmo: '/img/yelmocines5.png',
            imageUrlWebESD: '/img/webesdmockup.png',
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
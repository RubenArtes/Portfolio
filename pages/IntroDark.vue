<template class="bg-white">
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

    <div id="header" class="bg-[#fcfcff] font-['SFUIDisplay-Light']"
        :class="['header', isHeaderFixed ? 'fixed-header' : '']">


        <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[10000] bg-[#fcfcff]">
    <!-- Header -->
    <div
        class="header flex justify-between w-full px-20 py-8 flex gap-12 text-black items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
        <!-- Contenedor alineado a la izquierda -->
        <div class="contenedor flex items-center justify-start text-[25px]">
            <div class="image">
                <NuxtLink class="flex" to="/IntroDark">
                    <img class="max-lg:max-w-[15px] w-[20px]"
                        src="/img/darklogo.png" />
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



        <!-- Video al fondo detrás del header -->
        <div class="max-sm:hidden">
            <img class="w-full -z-10" src="/img/videologoblanco.gif" alt="intro" />
        </div>
        <div class="hidden max-sm:block">
            <img class="w-full -z-10" src="/img/introruben4.gif" alt="intro" />
        </div>

        <!-- Banner de texto -->
        <div
            class="text bg-[#fcfcff] mix-blend-exclusion relative z-0 top-[-400px] max-[1920px]:top-[-360px] max-sm:top-[-140px]">
            <div class="texto px-20 grid grid-cols-3 bg-black max-sm:px-8 max-sm:grid-cols-1">
                <div
                    class="flex flex-col bg-black items-start content-end place-self-start text-left text-white mix-blend-exclusion text-[40px] max-[1920px]:text-[30px] max-sm:hidden">
                    <p
                        class="text text-[90px] flex gap-2 leading-[3rem] font-['PPE-Ultralight'] max-[1920px]:text-[36px]">
                        Portfolio
                        <img class="w-[22px] h-[22px]" src="/img/Copyright.svg" />
                    </p>
                    <div class="text text-[20px]">
                        <p class="pb-2">[ r -- n ]</p>
                        <p class="">DICIEMBRE 2024</p>
                    </div>
                </div>
                <div class="bg-black"></div>
                <div
                    class="flex items-end bg-black text-right text-white mix-blend-exclusion text-[40px] leading-[3rem] max-[1920px]:leading-[2.25rem] max-[1920px]:text-[30px] max-sm:text-[20px] max-sm:leading-[1.5rem]">
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




        <p
            class="titulo bg-[#fcfcff] max-sm:text-[30px] max-sm:px-6 max-sm:pt-4 pt-12 w-full text-black px-20 text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs">
            Trabajos
        </p>

        <div class="trabajos" id="trabajos2">

            <NuxtLink to="/Matutano">
                <div class="pt-20 trabajos bg-[#fcfcff] max-sm:pt-12">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-1 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"
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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[2] = true" @mouseleave="hovered[2] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[5] = true" @mouseleave="hovered[5] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[3] = true" @mouseleave="hovered[3] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[4] = true" @mouseleave="hovered[4] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[6] = true" @mouseleave="hovered[6] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[7] = true" @mouseleave="hovered[7] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[8] = true" @mouseleave="hovered[8] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[9] = true" @mouseleave="hovered[9] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[10] = true" @mouseleave="hovered[10] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[11] = true" @mouseleave="hovered[11] = false">

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
                <div class="trabajos bg-[#fcfcff]">
                    <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-[#fcfcff] pt-4 pb-4 max-[1920px]:py-[10px] items-center border-zinc-400 border border-r-0 border-l-0 border-1 border-t-0 mx-20 max-sm:mx-6 max-sm:py-2 max-sm:gap-[10px] gap-8 justify-center transition-all duration-100"                        @mouseenter="hovered[12] = true" @mouseleave="hovered[12] = false">

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


        <div id="trabajos"
            class="texto flex w-full bg-[#fcfcff] text-black max-sm:px-6 max-sm:pb-2 max-sm:pt-24 px-20 pt-64 justify-between">
            <p
                class="caja2 text-left max-sm:text-[30px] max-sm:leading-[2rem] font-['Neue'] text-[50px] leading-[3rem] pb-24 max-sm:pb-12 cursor-pointer text-black ">
                Colaboraciones <br>/ Otros proyectos
            </p>


        </div>

        <div class="grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-6 bg-[#fcfcff] px-20 gap-12">

            <div href="//www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/">
                <div class="trabajos bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div
                            class="caja2 text-left max-[1920px]:text-[14px] font-['Neue'] max-[1920px]:px-8 px-12 pb-6 cursor-pointer text-black">
                            <p>COLABORACIÓN 1</p>
                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] max-[1920px]:text-[22px] max-[1920px]:px-8 px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            MICROILUSTRACIONES<br>
                            <p class="text-[80px] max-[1920px]:text-[52px] max-[1920px]:leading-6 leading-8 pb-8 pt-4">
                                ECOVIDRIO</p>
                        </div>
                        <div
                            class="caja2 items-center max-[1920px]:text-[14px] max-[1920px]:px-8 text-left font-['Neue'] grid grid-cols-2 py-6 text-[16px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            <p>Realización de microilustraciones para
                                el rediseño de la marca Ecovidrio</p>

                            <div class="articulos flex flex-col">
                                <a class="text-end underline" target="_blank"
                                    href="https://www.marketingdirecto.com/anunciantes-general/anunciantes/ecovidrio-levanta-telon-identidad-marca">Articulo
                                    de prensa</a>
                                <a class="text-end underline" target="_blank"
                                    href="https://ipmark.com/ecovidrio-redefine-estrategia-marca-gestion-residuos/">Articulo
                                    de prensa 2</a>
                                <a class="text-end underline" target="_blank"
                                    href="https://controlpublicidad.com/empresas-y-negocios-publicidad/ecovidrio-presenta-su-nueva-identidad-de-marca/">Articulo
                                    de prensa 3</a>
                            </div>


                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-black text-white divide-x divide-zinc-200 divide-x-1">
                            <img src="/img/ecovidrio.svg">

                            <a href="https://www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/"
                                target="_blank"
                                class="caja2 bg-white py-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                                Prodigioso<br>
                                Volcán ⤤
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div href="//www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/">
                <div class="trabajos bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div
                            class="caja2 text-left max-[1920px]:text-[14px] font-['Neue'] max-[1920px]:px-8  px-12 pb-6 cursor-pointer text-black">
                            <p>COLABORACIÓN 2</p>
                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] max-[1920px]:text-[22px] max-[1920px]:px-8  px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            DISEÑO EQUIPO<br>
                            <p class="text-[80px] max-[1920px]:text-[52px] max-[1920px]:leading-6 leading-8 pb-8 pt-4">
                                NEWTEAM</p>
                        </div>
                        <div
                            class="caja2 items-center max-[1920px]:text-[14px] text-left font-['Neue'] grid grid-cols-2 py-6 text-[16px] max-[1920px]:px-8 px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            <p>Realización del diseño, <br>marca y fotografía del equipo</p>

                            <div class="articulos flex flex-col invisible">
                                <a class="text-end underline"
                                    href="https://www.marketingdirecto.com/anunciantes-general/anunciantes/ecovidrio-levanta-telon-identidad-marca">Articulo
                                    de prensa</a>
                                <a class="text-end underline"
                                    href="https://ipmark.com/ecovidrio-redefine-estrategia-marca-gestion-residuos/">Articulo
                                    de prensa 2</a>
                                <a class="text-end underline"
                                    href="https://controlpublicidad.com/empresas-y-negocios-publicidad/ecovidrio-presenta-su-nueva-identidad-de-marca/">Articulo
                                    de prensa 3</a>
                            </div>


                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-black text-white divide-x divide-zinc-200 divide-x-1">
                            <img src="/img/newteam3.png">

                            <a href="https://www.instagram.com/newteam_cf" target="_blank"
                                class="caja2 bg-white py-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                                New<br>
                                Team ⤤
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div href="//www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/">
                <div class="trabajos bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div
                            class="caja2 text-left flex justify-between font-['Neue'] px-12 max-sm:px-6 max-sm:text-[14px] pb-6 cursor-pointer text-black">
                            <p>COLABORACIÓN 3</p>
                        </div>

                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] max-sm:px-6 max-sm:text-[14px] px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            PROYECTO<br>
                            <p class="text-[80px] leading-8 pb-8 pt-4 max-sm:pb-4 max-sm:text-[60px]">FAUX</p>

                        </div>

                        <div
                            class="caja2 items-center max-[1920px]:text-[14px] text-left font-['Neue'] grid grid-cols-2 py-6 text-[16px] max-[1920px]:px-8 px-12 border border-x-0 border-b-0 cursor-pointer text-black">
                            <p>Realización de web <br>de creación de noticias</p>

                            <div class="articulos flex flex-col invisible">
                                <a class="text-end underline"
                                    href="https://www.marketingdirecto.com/anunciantes-general/anunciantes/ecovidrio-levanta-telon-identidad-marca">Articulo
                                    de prensa</a>
                                <a class="text-end underline"
                                    href="https://ipmark.com/ecovidrio-redefine-estrategia-marca-gestion-residuos/">Articulo
                                    de prensa 2</a>
                                <a class="text-end underline"
                                    href="https://controlpublicidad.com/empresas-y-negocios-publicidad/ecovidrio-presenta-su-nueva-identidad-de-marca/">Articulo
                                    de prensa 3</a>
                            </div>

                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-black text-white divide-x divide-zinc-200 divide-x-1">
                            <img src="/img/fauxproyecto.png">

                            <a href="https://faux-noticiario.netlify.app/" target="_blank"
                                class="caja2 bg-white py-12 text-right items-end h-full place-content-end max-[1920px]:px-8 max-[1920px]:py-8 flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-black">
                                Web<br>
                                Faux ⤤
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="hidden" href="//www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/">
                <div class="trabajos bg-white divide-y divide-black shadow-lg">
                    <div
                        class="flex flex-col text-black bg-white pt-6 items-left justify-center transition-all duration-100">
                        <div class="caja2 text-left font-['Neue'] px-12 pb-6 cursor-pointer text-white">
                            <p>COLABORACIÓN 2</p>
                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] py-6 text-[30px] px-12 border border-x-0 border-b-0 cursor-pointer text-white">
                            ILUSTRACIONES<br>
                            <p class="text-[80px] leading-8 pb-32 pt-4">SABADELL</p>
                        </div>
                        <div
                            class="caja2 items-center text-left font-['Neue'] grid grid-cols-2 py-6 text-[16px] px-12 border border-x-0 border-b-0 cursor-pointer text-white">
                            <p>Realización de ilustraciones <br>para
                                el articulos de Sabadell</p>

                            <div class="articulos flex flex-col invisible">
                                <a class="text-end underline"
                                    href="https://www.marketingdirecto.com/anunciantes-general/anunciantes/ecovidrio-levanta-telon-identidad-marca">Articulo
                                    de prensa</a>
                                <a class="text-end underline"
                                    href="https://ipmark.com/ecovidrio-redefine-estrategia-marca-gestion-residuos/">Articulo
                                    de prensa 2</a>
                                <a class="text-end underline"
                                    href="https://controlpublicidad.com/empresas-y-negocios-publicidad/ecovidrio-presenta-su-nueva-identidad-de-marca/">Articulo
                                    de prensa 3</a>
                            </div>


                        </div>
                        <div
                            class="caja2 text-left font-['Neue'] grid grid-cols-2 text-[16px] border border-x-0 border-b-0 cursor-pointer bg-black text-white divide-x divide-black divide-x-1">
                            <img src="/img/microilustracionesecovidrio2.png">

                            <a href="https://www.prodigiosovolcan.com/proyectos/identidad-visual-ecovidrio/"
                                target="_blank"
                                class="caja2 bg-black py-12 text-right items-end h-full place-content-end flex hover:text-zinc-700 transition-all duration-500 self-center font-['Neue'] text-[30px] leading-[30px] px-12 cursor-pointer text-white">
                                Sabadell ⤤
                            </a>
                        </div>
                    </div>

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
<template>
    <Cursor class="max-sm:hidden" />
    <VueScrollProgressBar background-color="#ffffff" class="mix-blend-exclusion" />

    <div id="header" class="video bg-[url('/img/introruben.gif')] bg-opacity-70 bg-cover font-['SFUIDisplay-Light']"
        :class="['header', isHeaderFixed ? 'fixed-header' : '']">

        <!-- Header (header ya es sticky) -->

        <div
            class="header p-10 text-black w-full border-t-0 px-20 grid grid-cols-3 fixed top-0 z-50 bg-white max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between max-sm:px-8">
            <div class="contenedor flex">

                <div class="image place-self-start self-center flex gap-6 items-center">
                    <NuxtLink to="/Intro">
                        <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logoblancoroto.svg" />
                    </NuxtLink>
                    <p class="email text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        Ruben Maldonado
                    </p>
                </div>
            </div>
            <!-- Logo y Nombre -->


            <!-- Navegación -->
            <div class="mode place-self-center flex gap-4">
                <NuxtLink to="/Intro#trabajos">
                    <p
                        class="email relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        Trabajos,
                    </p>

                </NuxtLink>
                <NuxtLink to="/Servicios">
                    <p
                        class="email relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        Servicios,
                    </p>
                </NuxtLink>
                <NuxtLink to="/Sobremi">
                    <p
                        class="email relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        Sobre Mi,
                    </p>
                </NuxtLink>
                <NuxtLink to="/Tienda">
                    <p
                        class="email relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        Tienda,
                    </p>
                </NuxtLink>
                <a href="#contacto"
                    class="email relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[30px] self-center place-self-end flex gap-2 max-lg:text-xs">
                    Contacto
                </a>
            </div>

            <!-- Correo y Vector -->
            <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                class="email flex items-center self-center text-[30px] place-self-end gap-2 max-lg:text-xs">
                ruben.maldonado.graphic@gmail.com
                <img class="vector w-[22px] max-lg:max-w-[8px]" src="/img/Vector-11.svg" />
            </a>
        </div>

        <!-- Banner -->
        <div
            class="banner invisible max-[1920px]:pt-[120px] max-[1920px]:pb-[100px] pt-[390px] pb-[170px] text-black flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1920px]:px-28 max-sm:hidden">
            <img class="banner_image sticky top-[100px] transform transition-all duration-500 ease-in-out"
                src="/img/logoblancoroto.svg">
        </div>


        <div
            class="banner hidden max-sm:px-8 max-sm:flex max-sm:pt-12 max-sm:pb-12 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="banner_image w-[140px] h-full" src="/img/logorubenmal5.svg">


        </div>


        <div
            class="text pt-20 pb-28 px-20 grid grid-cols-3 text-white mix-blend-exclusion flex-end text-[40px] leading-[3rem] font-['Neue'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
            <div class="texto1 flex flex-col place-self-start self-end">

                <div
                    class="text flex text-[90px] leading-[8rem] font-['PPE-Ultralight'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
                    Portfolio
                    <img class="w-[22px] h-[22px]" src="/img/Copyright.svg">
                </div>

                <div
                    class="text text-[20px] leading-[20px] font-['PPE-Ultralight'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[14px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-start max-[1920px]:text-[14px] max-[1920px]:leading-[16px]">

                    <p class="pb-2 font-['Neue'] text-[20px] text-white">[ r -- n ]</p>
                    <p class="pb-6 font-['Neue'] text-[20px] text-white">DICIEMBRE 2024</p>
                </div>


            </div>
            <p></p>

            <div class="flex flex-col place-self-end text-right">

                <p>Hola soy Rubén Maldonado, soy diseñador gráfico,
                    fotografo e ilustrador. Polifacetico, trabajador y apasionado. <a href="/sobremi"
                        class="text-[#ff2d7e] hover:text-[41px] transition-all duration-500 underline">Saber más</a>
                </p>


            </div>
        </div>


    </div>

    <p
        class="titulo bg-white w-full pt-64 text-black px-20 text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs">
        Trabajos
    </p>

    <div class=" bg-white">

        <NuxtLink to="/Matutano">
            <div class="pt-20 trabajos bg-white">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[0] = true" @mouseleave="hovered[0] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Matutano
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[0]" loading="lazy"
                        class="h-full bg-cover bg-center shadow-lg flex justify-center transition-all duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[0] }"
                        :style="{ backgroundImage: `url(${imageUrlMatutano})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Saludable
                    </div>
                </div>
            </div>
        </NuxtLink>

        <!-- Otro ejemplo de trabajo -->
        <NuxtLink to="/CajaOporto">
            <div class="trabajos bg-white">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[1] = true" @mouseleave="hovered[1] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Caja
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[1]" loading="lazy"
                        class="h-full bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[1] }"
                        :style="{ backgroundImage: `url(${imageUrlOporto})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Oporto
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/CajaOporto">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[2] = true" @mouseleave="hovered[2] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Asistente
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[2]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[2] }"
                        :style="{ backgroundImage: `url(${imageUrlMember})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Member
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/CajaOporto">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[5] = true" @mouseleave="hovered[5] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Vinos
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[5]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[5] }"
                        :style="{ backgroundImage: `url(${imageUrlPrau})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Prau
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/Member">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[3] = true" @mouseleave="hovered[3] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Metro
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[3]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[3] }"
                        :style="{ backgroundImage: `url(${imageUrlMetro})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Madrid
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/MetrodeMadrid">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[4] = true" @mouseleave="hovered[4] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Animación
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[4]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[4] }"
                        :style="{ backgroundImage: `url(${imageUrlMovistar})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Movistar
                    </div>
                </div>
            </div>
        </NuxtLink>


        <NuxtLink to="/Audiovisuales">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[6] = true" @mouseleave="hovered[6] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Colección
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[6]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[6] }"
                        :style="{ backgroundImage: `url(${imageUrlAudiovisuales})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Visuales
                    </div>
                </div>
            </div>
        </NuxtLink>


        <NuxtLink to="/YelmoCines">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[7] = true" @mouseleave="hovered[7] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Yelmo
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[7]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[7] }"
                        :style="{ backgroundImage: `url(${imageUrlYelmo})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Cines
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/Typenotes">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[8] = true" @mouseleave="hovered[8] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Revista
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[8]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[8] }"
                        :style="{ backgroundImage: `url(${imageUrlTypenotes})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Typenotes
                    </div>
                </div>
            </div>
        </NuxtLink>


        <NuxtLink to="/WebESD">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[9] = true" @mouseleave="hovered[9] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Web
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[9]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[9] }"
                        :style="{ backgroundImage: `url(${imageUrlWebESD})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        ESD
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/Fotografias">
            <div class="trabajos bg-white">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[10] = true" @mouseleave="hovered[10] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Colección
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[10]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[10] }"
                        :style="{ backgroundImage: `url(${imageUrlFotografias})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Fotografías
                    </div>
                </div>
            </div>
        </NuxtLink>


        <NuxtLink to="/GarridoGallery">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[11] = true" @mouseleave="hovered[11] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Garrido
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[11]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[11] }"
                        :style="{ backgroundImage: `url(${imageUrlGarridoGallery})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Gallery
                    </div>
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/Ilustraciones">
            <div class="trabajos ">
                <div class="grid grid-cols-2 hover:grid-cols-3 text-black bg-white pt-4 pb-4 items-center border border-r-0 border-l-0 border-1 mx-20 gap-8 justify-center transition-all duration-100"
                    @mouseenter="hovered[12] = true" @mouseleave="hovered[12] = false">

                    <!-- Primer bloque de texto -->
                    <div
                        class="text-[170px] pt-24 pb-24 text-end leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Colección
                    </div>

                    <!-- Imagen en el centro (aparece en la tercera columna al hacer hover con animación de ancho) -->
                    <div v-show="hovered[12]" loading="lazy"
                        class="h-full transition-width bg-cover bg-center shadow-lg flex justify-center transition-opacity duration-1000 ease-in-out transform origin-top scale-y-0 opacity-100 transition-width"
                        :class="{ 'scale-y-100 width-full': hovered[12] }"
                        :style="{ backgroundImage: `url(${imageUrlIlustraciones})` }">
                    </div>

                    <!-- Segundo bloque de texto -->
                    <div
                        class="text-[170px] text-start pt-24 pb-24 leading-[4rem] font-['PPE-Ultralight'] cursor-pointer">
                        Ilustraciones
                    </div>
                </div>
            </div>
        </NuxtLink>


    </div>
    <div id="contacto" class="informacion pt-[300px] pb-64 bg-white">
        <div class="about bg-white">
            <div class="correo grid grid-cols-2 text-black">
                <div
                    class="caja1 animate-pulse text-right px-20 text-[170px] pt-12 pb-12 leading-[10rem] font-['PPE-Ultralight'] cursor-pointer text-black transition-colors duration-300 hover:text-zinc-800">
                    Correo
                </div>
                <div
                    class="caja1 text-left self-center px-20 text-[20px] leading-[10rem] font-['Neue'] cursor-pointer text-black">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                        target="_blank"
                        class="email text-lg flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
                        ruben.maldonado.graphic@gmail.com
                        <img class="vector" src="/img/Vector-11black.svg" />
                    </a>
                </div>
            </div>
        </div>
        <div class="about bg-white pt-2 relative">


            <!-- Redes Sociales -->
            <div class="redes grid grid-cols-2 text-black group hover:group-[.hover]:cursor-default">
                <!-- Caja 2 -->
                <div
                class="caja3 text-right px-20 text-[170px] pt-12 pb-12 leading-[10rem] font-['PPE-Ultralight'] cursor-pointer text-zinc-300 transition-colors duration-300 hover:text-black">
                Redes sociales
                </div>
                <!-- Redes ocultas por defecto y visibles al hacer hover -->
                <div
                    class="caja1 text-left self-center px-20 text-[20px] grid grid-cols-2 font-['Neue'] hidden group-hover:grid">
                    <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">
                        <img class="vector w-[14px]" src="/img/Instagram.png" />
                        Instagram
                        <img class="vector" src="/img/Vector-11black.svg" />
                    </a>
                    <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">
                        <img class="vector w-[14px]" src="/img/Behance.png" />
                        Behance
                        <img class="vector" src="/img/Vector-11black.svg" />
                    </a>
                    <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">
                        <img class="vector w-[14px]" src="/img/Instagram.png" />
                        Instagram
                        <img class="vector" src="/img/Vector-11black.svg" />
                    </a>
                    <a class="red flex text-lg gap-2 items-center max-lg:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">
                        <img class="vector w-[14px]" src="/img/LinkedIn.png" />
                        LinkedIn
                        <img class="vector" src="/img/Vector-11black.svg" />
                    </a>
                </div>
            </div>

            <!-- Información -->
            <div class="informacion grid grid-cols-2 text-black group">
                <!-- Caja 3 -->
                <div
                    class="caja3 text-right px-20 text-[170px] pt-12 pb-12 leading-[10rem] font-['PPE-Ultralight'] cursor-pointer text-zinc-300 transition-colors duration-300 hover:text-black">
                    Información
                </div>
                <!-- Información oculta por defecto y visible al hacer hover -->
                <div
                    class="caja1 text-left self-center px-20 text-[20px] leading-[10rem] font-['Neue'] hidden group-hover:block">
                    <a href="mailto:ruben.maldonado.graphic@gmail.com" target="_blank"
                        class="email text-lg flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
                        Rubén Maldonado González<br> All rights reserved | Copyright ©<br>Actualizado Diciembre 2024
                    </a>
                </div>
            </div>
        </div>


    </div>


    <div class="foter bg-white p-12 border-0 flex justify-center max-sm:grid-cols-2 text-black max-lg:p-6">
        <div class="foter_image flex flex-start max-sm:gap-2">
            <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />
        </div>
        <div class="email flex pr-12 pl-12 gap-2 justify-end items-center text-sm max-lg:text-xs">
            2024
        </div>
        <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />

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
        handleScroll() {
            const inicio = document.getElementById('inicio');
            const header = document.getElementById('header');

            if (inicio && header) {
                const inicioBottom = inicio.getBoundingClientRect().bottom;

                // Si el `div#inicio` ya no está visible, fija el header
                if (inicioBottom <= 0) {
                    this.isHeaderFixed = true;
                } else {
                    this.isHeaderFixed = false;
                }
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll); // Limpia el evento al destruir
    }
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
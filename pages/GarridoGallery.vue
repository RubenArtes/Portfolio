<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
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
        <VueScrollProgressBar background-color="#52525B" />
        <div
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['Domaine-Display'] font-bold leading-12animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-[#414142] via-[#8a8b8b] to-[#bdbac5] animate-text max-[600px]:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                GARRIDO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:pt-6 max-[600px]:pb-16 max-[600px]:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Fotografías - Impresiones - Ediciones - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Elementos realizados para la empresa de Garrido Gallery, una empresa de muebles de lujo realizados
                    de forma artesanal. Durante 6 meses realicé las practicas de empresa, creando diferentes contenidos
                    para la marca.
                    Creación de folletos, dossiers, tarjetas de visita, realización de fotografías y ediciones. Trabajo
                    completo de marca 360.
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
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Prácticas de Empresa, 4º Diseño Gráfico
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    6 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Marca, fotografía y elementos relacionados.
                </div>
            </div>
        </div>

        <div
            class="video flex pt-2 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image_rect" src="/img/fotoprincipal_1.jpg" alt="">
        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                        GARRIDO GALLERY - Dos generaciones de plateros contemporáneos del siglo XX-XXI</div>
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
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                CATÁLOGO <br> GARRIDO 2024</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[600px]:order-last max-[1280px]:text-left">
                    <a class="type text-[#8c8eff]">MAQUETACIÓN E IMPRESIÓN</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Maquetación, corrección de textos, creación, fotografías, edición e impresión del nuevo catálogo de
                    Garrido Gallery 2024, contenedor de la historia, las técnicas y las piezas Garrido.
                </div>

            </div>

        </div>

        <div
            class="images pt-20 pb-12 flex flex-col gap-6 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[1500px]:px-60 max-[800px]:px-0 max-[800px]:pt-12">

            <img class="image_grid w-full h-full" src="/img/fotofinalcatalogo2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/fotofinalcatalogo.png" alt="">


        </div>

        <div class="div text-zinc-600 text-center m-0 pt-14 pb-24 max-xl:pb-4">Fotografías reales de estudio y
            páginas del
            <br>
            <div
                class="div text-[#FFB047] text-center text-2xl m-0 animate-pulse font-['Domaine-Display'] uppercase max-[600px]:text-xs">
                CATALOGO OFICIAL GARRIDO GALLERY 2024</div>
        </div>

        <div
            class="grid grid-cols-1 gap-2 items-center justify-items-center px-64 pb-32 max-[1280px]:p-10 max-[1500px]:px-60 max-[780px]:grid-cols-1 max-[600px]:px-2 max-[600px]:p-6">

            <Carousel :autoplay="2000" :wrap-around="true"
                class="carousel max-w-[1794px] max-h-[975px] max-[600px]:px-20 max-[600px]:max-w-[500px] max-[600px]:hidden">

                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo3.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo4.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo5.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo6.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo7.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo8.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo9.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo10.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo11.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo12.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo13.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo14.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo15.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo16.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo17.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo18.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo19.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo20.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo21.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo22.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo23.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo24.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo25.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo27.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo28.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo29.png" alt="">
                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/Catalogo30.png" alt="">
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>

        </div>

        <div class="grid grid-cols-1 gap-2 max-[600px]:px-2 min-[600px]:hidden">

            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo1.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo2.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo3.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo4.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo5.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo6.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo7.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo8.png" alt="">
            <img class="image_grid w-full h-full border-zinc-200 border-solid border-[0.05rem]" src="/img/Catalogo9.png" alt="">
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
            class="titular2 flex px-64 pb-2 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-[600px]:text-30px max-[600px]:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                FOTOGRAFÍAS <br> Y EDICIÓN</div>
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

        <div class="titular2 grid grid-cols-2 place-items-center pt-24 w-full h-full">

            <img class="image_grid w-full h-full" src="/img/edicionpieza_1.gif" alt="">
            <img class="image_grid w-full h-full" src="/img/edicionpieza_2.gif" alt="">

        </div>

        <div class="titular2 grid grid-cols-4 gap-4 px-12 place-items-center pt-24 w-full h-full">

            <img class="image_grid w-full h-full" src="/img/Corregida1.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida2.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida3.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida4.jpg" alt="">
            
            <img class="image_grid w-full h-full" src="/img/Corregida5.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida6.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida7.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/Corregida8.jpg" alt="">

        </div>

        <div
            class="titular2 flex px-64 pb-2 gap-64 pt-64 content-start space-between justify-center text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                PÁGINA<br>WEB GARRIDO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[600px]:order-last max-[1280px]:text-left">
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

        <div class="boton flex justify-center pt-32">

            <a class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-6 rounded-xl inline-flex items-center"
                href="https://www.garridogallery.com">
                <span>/páginaweb</span>
            </a>

        </div>


        <div class="titular2 flex justify-center w-full h-full">


            <video class="pb-2 justify-items-center content-center justify-center w-full h-full" loop autoplay>
                <source src="/img/paginaweb.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>





        <div
            class="titular2 flex px-64 pb-12 gap-64 pt-12 content-start space-between justify-center text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                OTRAS CREACIONES<br> GARRIDO GALLERY</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[600px]:order-last max-[1280px]:text-left">
                    <a class="type text">CREACIÓN DE DIFERENTES FORMATOS Y ELEMENTOS</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Cartelería para exposiciones concretas, tarjetas de visita para eventos y folletos para momentos concretos en la Galería.
                </div>

            </div>

        </div>

        <div
                class="div text-[#474747]  pb-2 pt-32 text-left px-64 text-lg m-0 font-['Domaine-Display'] uppercase max-[600px]:text-xs">
                > TARJETA DE VISITA SALON 2023</div>

        <div
            class="grid grid-cols-2 pt-8 gap-6 items-center justify-items-center px-64 pb-12 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[780px]:grid-cols-1">
        
        <div class="flex gap-2">
            <img class="image_grid w-1/2 h-full border-[0.025rem] border-gray-400" src="/img/TarjetaFinal2.png" alt="">
            <img class="image_grid w-1/2 h-full border-[0.025rem] border-gray-400" src="/img/TarjetaFinal1.png" alt="">

        </div>
        <div>
            <img class="image_grid w-full h-full hidden " src="/img/TarjetaFinal2.png" alt=""> Mockup

        </div>



        </div>

        <div
                class="div text-[#474747]  pb-2 pt-24 text-left px-64 text-lg m-0 font-['Domaine-Display'] uppercase max-[600px]:text-xs">
                > FOLLETO DÍPTICO EXPOSICIÓN LUIS GORDILLO 2024</div>

        <div
            class="grid grid-cols-2 pt-8 items-end gap-6 justify-items-center px-64 pb-32 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[780px]:grid-cols-1">

            <div>
                <img class="image_grid w-full h-full" src="/img/FicticioFolleto.jpg" alt="">

            </div>

            <div class="flex gap-2 items-end">
                <img class="image_grid w-1/2 h-full border-[0.025rem] border-gray-400" src="/img/FolletoGordilloFinal1.png" alt="">
                <img class="image_grid w-1/2 h-full border-[0.025rem] border-gray-400" src="/img/FolletoGordilloFinal2.png" alt="">
            </div>



        </div>

        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-60">
            <div
                class="titular text-[16px] font-['SFUIDisplay-Light'] leading-6 font-normal flex flex-start items-center max-xl:text-xs">
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
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-zinc-600 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-60">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11zinc.svg">
            </div>
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
<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor class="max-sm:hidden" />
        <div
            class="header bg-black p-10 border-t-0 px-32 text-white grid grid-cols-2 sticky top-0 z-50 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between max-sm:px-8">
            <div class="image place-self-start self-center">
                <NuxtLink to="/Home">
                    <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logogif2.gif" />
                </NuxtLink>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email self-center text-lg  place-self-end flex gap-2 max-lg:text-xs">
                ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg" />
            </a>
        </div>

        <VueScrollProgressBar background-color="white" />

        <div id="navegacion"
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular max-[1920px]:text-[100px] max-[1920px]:leading-[100px] text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] max-sm:text-center max-sm:leading-[60px] from-[#593cff] via-[#fff202] to-[#7d86ed]">
                CINE YELMO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Rediseño de la Identidad
                    visual de Yelmo Cines, contando con el cambio de conceptos, valores, logo, aplicaciones visuales y
                    demás
                    elementos gráficos de su estética
                    para darle coherencia el sistema general de esta marca.
                </div>
            </div>
        </div>

        <div
            class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos interdisciplinares de Diseño Gráfico, LAB, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Rediseño de la identidad completa de Yelmo Cines.
                </div>
            </div>
        </div>

        <div
        class="video max-sm:hidden max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
        <video width="1240" height="788" loop autoplay controls>
                <source src="/img/CineYelmo_MarcaDinámicaFinal.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <img class="image hidden max-sm:flex w-full h-full pb-24" src="/img/CineYelmo_MarcaDinmicaFinal.gif" alt="">

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Rediseño</p>CINES YELMO
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Este rediseño para Cines Yelmo cuenta con los siguientes objetivos:
                        <br>
                        <br>
                        - Crear un rebranding eliminando la coexistencia entre la anterior marca Yelmo Cines y el diseño
                        de
                        Cine Yelmo que genera confusión entre los espectadores. Permitir la interacción y hacer que el
                        diseño impacte con el usuario y crear una relación de unión entre marca y cliente. Para ello es
                        necesario una nueva identidad bien consolidada y adaptativa a todas las aplicaciones que
                        necesita la
                        marca, para que el espectador pueda identificarla y generar así la conexión que se busca
                        conseguir.
                        <br>
                        <br>
                        - Crear una estrategia de arquitectura de marca de las submarcas de la compañía.
                        <br>
                        <br>
                        - Transmitir la idea de que estamos reinventando la experiencia de cine tradicional a través de
                        una
                        innovación constante, que va desde la introducción en España de nuevos conceptos de salas con
                        foco
                        en la calidad y el confort (Junior, Premium o Luxury), la oferta de nuevos servicios adaptados a
                        las
                        demandas de los clientes o la programación de contenidos alternativos.
                        <br>
                        <br>
                        - Unificar la imagen gráfica de las diferentes redes sociales.
                        <br>
                        <br>
                        - Modificar el tono de la identidad visual generando entretenimiento, diversión y un
                        acercamiento
                        juvenil.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min max-sm:pt-24">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines3.png" alt="">
            </div>
        </div>
        <div id="primercompartimento"
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Marca</p>DINÁMICA
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#312783]">Juniors</a> - <a class="type text-[#eec331]">Yelmo Cines</a> -
                    <a class="type text-zinc-100">Luxury</a> - <a class="text text-[#593cff] to-[#fff202]">+ Que
                        Yelmo</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    El motivo añadido de
                    este rediseño es
                    crear
                    una marca que pueda ser dinámica y variable, que a raiz de su logo principal puedas conocer también
                    los
                    demás apartados
                    con los que cuenta Cine Yelmo.
                </div>

            </div>
        </div>

        <img class="image_grid flex max-sm:hidden pt-12 w-full h-full max-sm:pb-0 max-sm:pt-0"
            src="/img/logosyelmo.svg">
        <img class="image_grid hidden max-sm:flex w-full h-full max-sm:pb-12 max-sm:pt-12"
            src="/img/logoyelmomovil.svg">


        <div id="primercompartimento"
            class="titular2 flex px-64 pb-12 gap-64 pt-40 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular max-[1500px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
        </div>
        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
            <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-3">

                <div class="color w-[150px] h-[150px] bg-[#161616]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#FFDE00]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#312783]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#FFFFFF]">
                </div>
            </div>
            <div class="columna2 grid gap-6">
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #161616</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 91
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #FFDE00</a> <br>
                    C - 0 <br>
                    M - 13 <br>
                    Y - 100 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #312783</a> <br>
                    C - 63 <br>
                    M - 70 <br>
                    Y - 0 <br>
                    K - 49
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #FFFFFF</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 0
                </div>
            </div>


        </div>

        <div
            class="grid grid-cols-4 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
            <div class="color w-[200px] h-[200px] bg-[#161616]">
            </div>
            <div class="color w-[200px] h-[200px] bg-[#FFDE00]">
            </div>
            <div class="color w-[200px] h-[200px]  bg-[#312783]">

            </div>
            <div class="color w-[200px] h-[200px]  bg-[#FFFFFF]">

            </div>

            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #161616</a> <br>
                C - 0 <br>
                M - 0 <br>
                Y - 0 <br>
                K - 91
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #FFDE00</a> <br>
                C - 0 <br>
                M - 13 <br>
                Y - 100 <br>
                K - 0
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #312783</a> <br>
                C - 63 <br>
                M - 70 <br>
                Y - 0 <br>
                K - 49
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #FFFFFF</a> <br>
                C - 0 <br>
                M - 0 <br>
                Y - 0 <br>
                K - 0
            </div>

        </div>

        <div
            class="images max-sm:px-6 max-sm:pt-24 items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Tipografías</p>DEL SISTEMA
            </div>


            <div
                class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 gap-64 px-64 max-sm:gap-6 max-sm:pb-24 max-sm:pt-12 max-[1920px]:px-8">

                <div
                    class="images items-center max-sm:px-0 text-center pt-20 pb-20 text-white justify-center flex flex-col max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
                    <div
                        class="titular max-sm:text-center text-[100px] max-sm:text-[80px] max-sm:leading-[70px] font-['PPE-Ultralight'] text-left leading-[100px] text-white max-xl:justify-center max-xl:text-[60px]">
                        <p class="font-['ProximaNova']">Proxima Nova</p>
                    </div>
                </div>
                <div
                    class="images items-end max-sm:items-center text-left pt-20 max-sm:px-0 pb-20 px-64 max-[1920px]:px-12 text-white max-sm:justify-center justify-end flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-left max-xl:gap-4">
                    <div
                        class="titular max-sm:grid max-sm:grid-cols-2 text-[40px] font-['PPE-Ultralight'] text-left leading-[50px] text-white max-sm:text-30px max-sm:leading-8 max-xl:text-[60px] max-xl:justify-center max-sm:text-[20px]">
                        <p class="font-['ProximaNova-Thin']">Thin</p>
                        <p class="font-['ProximaNova']">Regular</p>
                        <p class="font-['ProximaNova-Bold']">Bold</p>
                        <p class="font-['ProximaNova-ExtraBold']">ExtraBold</p>
                        <p class="font-['ProximaNova-Black'] max-sm:hidden">Black</p>

                    </div>
                </div>

            </div>

        </div>

        <div
            class="images items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Pictogramas</p>DEL SISTEMA
            </div>
        </div>

        <div
            class="grid place-items-center max-[1500px]:px-12 px-64 max-sm:px-12 grid-cols-1 max-sm:pt-12 max-sm:hidden">
            <img class="image_grid max-[1920px]:pb-40 px-32 pt-32 pb-64 w-full h-full" src="/img/pictogramasyelmo.svg"
                alt="">
            <img class="image_grid max-[1920px]:pb-40 px-12 pt-4 pb-52 w-1/2 h-full" src="/img/pictogramasyelmo.svg"
                alt="">

        </div>

        <div class="grid grid-cols-1 px-20">
            <img class="image_grid pt-32 pb-32 hidden max-sm:flex" src="/img/pictogramasyelmomovil3.svg" alt="">

        </div>


        <div
            class="images items-center text-center pb-20 pt-20 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Elementos</p>DEL SISTEMA
            </div>
        </div>

        <div
            class="grid px-64 grid-cols-1 max-[1500px]:px-12 gap-24 pt-24 max-sm:pt-12 max-sm:px-8 max-sm:gap-8 max-sm:pb-12 max-sm:hidden">
            <div class="grid grid-cols-3 px-32 gap-32">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula1.svg" alt="">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula3.svg" alt="">
                <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula2.svg" alt="">

            </div>
            <img class="image_grid pt-24 w-full h-full pb-6 max-sm:pb-0" src="/img/caratulasinstagram.png" alt="">
            <img class="image_grid px-64 w-full h-full pb-6 max-sm:pb-0" src="/img/caratulas3.png" alt="">
            <img class="image_grid px-[500px] max-[1920px]:px-[22rem] w-full h-full pb-6 max-sm:pb-0"
                src="/img/caratulas4.png" alt="">
        </div>

        <div class="max-sm:grid-cols-1 hidden pt-32 px-16 gap-12 max-sm:grid">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula1.svg" alt="">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula3.svg" alt="">
            <img class="image_grid w-full h-full pb-6 max-sm:pb-0" src="/img/caratula2.svg" alt="">

        </div>

        <img class="image_grid pt-32 pb-32 px-16 hidden max-sm:flex w-full h-full"
            src="/img/caratulasinstagrammovil.png" alt="">


        <div
            class="images items-center text-center pt-40 pb-32 px-64 text-white justify-center flex flex-col gap-32 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Prototipo</p>APLICACIÓN
            </div>
        </div>

        <div class="grid grid-cols-1 max-sm:pt-12 px-6 max-sm:hidden">
            <img class="image_grid w-full h-full pb-6" src="/img/aplicacion.png" alt="">
            <img class="image_grid w-full h-full pb-6" src="/img/aplicacion2.png" alt="">

        </div>

        <img class="image_grid px-16 pt-32 pb-32 hidden max-sm:flex w-full h-full" src="/img/movilyelmo.png" alt="">


        <div
            class="images items-center text-center pt-20 pb-20 px-64 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Entradas</p>CINE FÍSICAS
            </div>

        </div>

        <div
            class="grid grid-cols-1 max-[1920px]:px-64 max-[1920px]:pb-56 max-[1920px]:gap-6 px-[32rem] gap-12 pt-24 pb-32 max-sm:gap-6 max-sm:pt-12 max-sm:pb-24 max-sm:px-6">
            <img class="image_grid max-sm:px-0 w-full h-full" src="/img/entrada1.png" alt="">
            <img class="image_grid max-sm:px-0 w-full h-full" src="/img/entrada2.png" alt="">


        </div>

        <div
            class="trabajos flex pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Figma.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/AfterEffects.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-10 max-xl:text-xs max-xl:text-center">
            Trabajo en grupo con Laura Morales
            (@crearual) - Barbara Ibañez (@intesazc)</div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank"
                class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <img class="vector" src="/img/Vector-11.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/star.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbol.svg">
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<script>
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
};
</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
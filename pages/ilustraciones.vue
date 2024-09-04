<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
        <Cursor class="max-sm:hidden" />
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
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-20 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] max-[1920px]:text-[80px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[45px] max-[1500px]:text-left max-[1280px]:text-[100px] from-red-800 via-gray-900 to-red-500">
                ILUSTRACIONES</div>
            <div
                class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Dibujos - Lettering - Ilustraciones - Carteles - Pegatinas
                </div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Recopilatorio de mis ilustraciones, carteles ilustrados, lettering y dibujos variados realizados
                    digitalmente en Procreate con el IPad.

                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-12 pt-20 px-40 pb-2 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Trabajos libres, Aprendizaje propio.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    MATERIALES</div>
                <div
                    class="text max-w-[20ch] text-left font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    IPad, PC.
                </div>
            </div>
        </div>

        <div
            class="video flex pb-32 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/hombrespaco.png" alt="">
        </div>


        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Colección de</p> ILUSTRACIONES
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        <br>
                        Recopilación de todas las ilustraciones de la carrera para diferentes trabajos o aplicaciones
                        además de proyectos personales o dibujos libres.
                        Compendio de elementos como lettering y creación de palabras y letras creativas. Desarrollo del
                        cartel de las fiestas de Villaluenga de la Sagra para el libro. Creación de ilustraciones para
                        la
                        Casa de las Carcasas como ejercicio de clase y encargo real de la empresa. Realización de
                        pegatinas con temáticas como Ataque a los Titanes y Cars.
                        Ilustraciones para libro impreso de la historia de Bhowam, con una ilustración poster y pequeños
                        dibujos para contar la historia. Creción de autoretrato sobre PVC con acrílico y rotuladores.
                        Utilización de IPad y software Procreate para la creación de la mayoría de ilustraciones y
                        bocetos.
                    </div>
                </div>
            </div>
            <div class="fotografias max-sm:pt-6 flex flex-col gap-6 h-min">
                <img class="image_rect w-[550px]" src="/img/lettering1.png" alt="">
                <img class="image_rect w-[550px]" src="/img/lettering2.png" alt="">
                <img class="image_rect w-[550px]" src="/img/lettering3.png" alt="">


            </div>
        </div>



        <div
            class="images pt-2 px-64 pb-0 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    CASA DE LAS CARCASAS</div>
            </div>

            <div class="grid grid-cols-3 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/renderfundas.png" alt="">
                <img class="image_grid w-full h-full" src="/img/renderfundas5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/renderfundas4.png" alt="">
            </div>

            <img class="image_grid px-64 max-sm:px-0 max-sm:pb-24 w-full h-full" src="/img/pegatinas5.png" alt="">


        </div>

        <div
            class="titular2 max-[1920px]:px-24 flex px-64 pb-2 gap-64 pt-52 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-lack max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Barbie</p> HEIMER
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-900 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Ilustración con
                    temática de las dos películas taquilleras del 2023, "Barbie" y "Openheimer". Se llevó un movimiento
                    de hermandad entre las dos peliculas creando el "Barbieheimer". Esto me dió la idea de crear una
                    ilustración conjunta en la que represento al protagonista de Openheimer, Robert Openheimer como un
                    personaje de
                    Barbie utilizando la paleta y fondo de esta segunda película mencionada. Se puede ver en esta
                    ilustración como se ha realizado la anatomía del personaje, el control de la linea, los colores y
                    las
                    sombras y el postprocesado
                    de la ilustración.
                </div>

            </div>

        </div>

        <div
            class="images max-sm:px-6 pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div
                class="video max-sm:px-0 max-sm:gap-24 max-sm:pb-12 grid grid-cols-2 pt-24 pb-10 text-white items-center gap-24 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:grid-cols-1">
                <video width="740" loop autoplay class=" place-self-end border border-1">
                    <source src="/img/VideoBarbie.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <img class="" src="/img/ilustracionbarbie2.png">

            </div>
        </div>



        <div
            class="images max-sm:pt-8 pt-20 px-64 pb-0 text-white justify-center flex flex-col gap-12 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div id="folleto"
                class="titular2 flex px-64 pb-2 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    ISOMÉTRICAS</div>
            </div>

        </div>

        <div
            class="video max-sm:pb-12 max-sm:px-2 flex px-64 pt-2 pb-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div class="grid px-64 max-sm:gap-2 max-sm:px-8 grid-cols-4 gap-12 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/isometrica6.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica11.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica7.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica5.png" alt="">
        </div>
        <div class="grid px-64 max-sm:gap-6 pt-12 gap-12 max-sm:px-8 grid-cols-4 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/isometrica4.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica10.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica8.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica3.png" alt="">
        </div>


        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-2 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    PEGATINAS</div>
            </div>

        </div>

        <div
            class="video flex px-40 max-sm:px-2 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>


        <div class="grid max-sm:hidden px-24 grid-cols-4 gap-2 max-xl:grid-cols-1">
            <div class="div text-zinc-600 text-center text-sm m-0">Eren Jaeger
                <br>
                <div class="div text-black text-center text-lg m-0">Titan de Ataque</div>
            </div>
            <div class="div text-black text-center text-xs m-0">Annie Leonhart
                <br>
                <div class="div text-black text-center text-lg m-0">Titan Hembra</div>
            </div>
            <div class="div text-black text-center text-xs m-0">Reiner Braun
                <br>
                <div class="div text-black text-center text-lg m-0">Titan Acorazado</div>
            </div>
            <div class="div text-black text-center text-xs m-0">Zeke Jaeger
                <br>
                <div class="div text-black text-center text-lg m-0">Titan Bestia</div>
            </div>
        </div>

        <div class="grid max-sm:px-8 max-sm:pt-24 px-24 grid-cols-4 pb-6 gap-2 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/ataque1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque4.png" alt="">
        </div>

        <div
            class="grid pt-12 max-[1440px]:px-8 grid-cols-3 gap-8 px-8 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-sm:hidden">
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ Render 3D</a>
            <a class="type text-[14px] place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de fundas</a>
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ Render 3D</a>

        </div>

        <div
            class="images pt-2 px-64 max-sm:px-2 pb-0 text-black justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    CARTELES FIESTAS</div>
            </div>

        </div>

        <div
            class="grid max-[1920px]:px-24 max-sm:px-2 max-sm:grid-cols-1 px-[16rem] pt-4 max-sm:pt-12 max-sm:pb-24 gap-12 grid-cols-2">

            <div class="grid1">
                <img class="image_grid max-sm:pt-8 max-sm:px-8 max-sm:pb-12" src="/img/cartelfiestas2.png"
                    alt="">

            </div>

            <div class="grid1 pl-24 max-sm:pl-0 grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <img class="image_grid place-self-center max-sm:px-8 max-sm:shadow-none shadow-lg"
                    src="/img/cartelfiestas.png" alt="">
                <img class="image_grid place-self-center max-sm:px-8 max-sm:shadow-none shadow-lg"
                    src="/img/isometrica1.png" alt="">

            </div>




        </div>

        <div
            class="images pt-2 px-32 pb-0 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    AUTORETRATO</div>
            </div>

        </div>

        <div class="hidden pt-24 max-sm:px-0 max-sm:flex px-12">
            <img class="image_grid max-sm:border-0 max-sm:shadow-none border border-zinc-300 shadow-lg w-full h-full"
                src="/img/autoretrato2.png" alt="">

        </div>


        <div class="grid max-sm:pb-12 max-sm:px-2 max-sm:grid-cols-1 px-64 pt-24 max-sm:pt-12 gap-24 grid-cols-2">
            <img class="image_grid max-sm:hidden border border-zinc-300 shadow-sm w-full h-full"
                src="/img/autoretrato2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/autorretrato4.png" alt="">

        </div>

        <div
            class="titular2 max-[1920px]:px-24 flex px-64 pb-2 gap-64 pt-52 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-lack max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Pegatinas</p>PIXAR CARS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">
                <div
                    class="text max-w-[50ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-900 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Pegatinas con
                    temática
                    Cars, representación propia de los personajes de la pelicula, creando una pequeña colección.
                </div>

            </div>

        </div>

        <div
            class="video max-sm:px-2 flex px-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="images pt-20 max-sm:px-2 px-64 pb-32 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div class="grid grid-cols-4 max-xl:grid-cols-2 text-black">
                <img class="image_grid w-full h-full" src="/img/Cars1.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars4.png" alt="">

                <a class="text justify-center text-[#A5A9F4] text-center mb-20 max-xl:hidden">Guido Quaroni</a>
                <a class="text justify-center text-[#F9DA81] text-center max-xl:hidden">Luigi</a>
                <a class="text justify-center text-[#F99A46] text-center max-xl:hidden">Miss Fractura</a>
                <a class="text justify-center text-[#B6D29A] text-center max-xl:hidden">Fillmore</a>

                <img class="image_grid w-full h-full" src="/img/Cars5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars7.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars8.png" alt="">

                <a class="text justify-center text-[#96313b] text-center mb-20 max-xl:hidden">Rayo McQueen</a>
                <a class="text justify-center text-[#79a63d] text-center max-xl:hidden">Chick Hicks</a>
                <a class="text justify-center text-[#23A1EF] text-center max-xl:hidden">Strip Weathers</a>
                <a class="text justify-center text-[#FEC557] text-center max-xl:hidden">Copa Piston</a>

            </div>
            <div class="grid grid-cols-4 mb-20 max-xl:grid-cols-2 text-black">
                <img class="image_grid col-start-2 w-full h-full max-xl:col-start-1" src="/img/Cars9.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars10.png" alt="">

                <a class="text justify-center text-center mb-20 max-xl:hidden"></a>
                <a class="text justify-center text-center max-xl:hidden"></a>
                <a class="text justify-center text-[#EE885F] text-center max-xl:hidden">Mate</a>
                <a class="text justify-center text-[#373D83] text-center max-xl:hidden">Doc Hudson Hornet</a>

            </div>


        </div>




        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-10 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-6 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-100 hover:opacity-60 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">

                </div>
            </div>
        </div>



        <div
            class="links_rrss pt-32 px-80 pb-32 text-black justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11black.svg">
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

        <div class="foter bg-white p-10 flex text-black justify-between sticky top-0 max-xl:p-6">
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
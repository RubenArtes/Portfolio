<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />

    <div class="menu flex justify-between w-full fixed top-0 left-0 right-0 z-[100000] bg-white backdrop-filter">
            <!-- Header -->
            <div
                class="header flex justify-between w-full px-20 py-8 flex gap-12 text-white items-center z-50 max-lg:flex max-sm:flex max-sm:justify-between max-sm:px-8">
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
                    class="email2 max-sm:text-[30px] max-sm:no-underline relative text-black justify-end underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[26px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs"
                    :class="{ hidden: isOpen }">
                    Menu
                </button>

                <!-- Navegación centrada -->
            </div>

            <!-- Slidebar (desplegada a la derecha) -->
            <div class="menucito fixed top-0 right-0 h-full w-[860px] max-sm:w-full max-[1920px]:w-[700px] bg-zinc-600 shadow-lg z-50 p-8 max-sm:p-10 transform transition-transform backdrop-filter backdrop-blur-md bg-opacity-30 text-white"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
                <div class="flex justify-between items-center">
                    <h2 @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-[1920px]:text-[20px] max-sm:text-[40px] self-center place-self-end flex gap-2 max-lg:text-xs cursor-pointer">
                        Menú
                    </h2>
                    <button @click="toggleSidebar"
                        class="email text-black relative text-[26px] max-sm:text-[20px] max-[1920px]:text-[20px] self-center place-self-end flex gap-2 max-lg:text-xs">
                        &times;
                    </button>
                </div>

                <!-- Contenido de la slidebar -->
                <ul class="pt-12 flex flex-col justify-between h-full text-black">
                    <div class="columna1 flex-grow">
                        <li>
                            <a href="/IntroDark#contacto"
                                class="email  max-sm:text-[22px] max-sm:leading-8 mix-blend-exclusion relative underline-offset-1 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[5px] after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer text-[22px] max-[1920px]:text-[20px] self-center place-self-start flex gap-2 max-lg:text-xs">
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
                        <p>Copyright 2024</p>
                        <p>*</p>
                        <p>Rubén Maldonado</p>
                        <p>*</p>
                        <p>Portfolio</p>
                    </div>
                </ul>
            </div>
        </div>
        <VueScrollProgressBar background-color="#18181b" />

        <div
            class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-64 max-sm:pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] max-[1920px]:text-[80px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[45px] max-[1500px]:text-left max-[1280px]:text-[100px] from-red-800 via-red-800 to-red-500">
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
            class="video flex text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/hombrespaco.png" alt="">
        </div>

        <div
            class="grid pb-32 pt-12 max-[1440px]:px-8 grid-cols-3 px-12 gap-24 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] place-self-start font-['Neue'] uppercase">▲ BOCETO DIBUJO HOMBRES DE PACO</a>
            <a class="type text-[14px] invisible place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de
                fundas</a>
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ ILUSTRACIÓN FINAL</a>

        </div>

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32 ">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Colección de
                        </p> ILUSTRACIONES
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
            <div class="fotografias max-sm:pt-6 flex flex-col max-sm:gap-0 gap-6 h-min">
                <img class="image_rect w-[850px]" src="/img/lettering1.png" alt="">
                <img class="image_rect w-[850px]" src="/img/lettering2.png" alt="">
                <img class="image_rect w-[850px]" src="/img/lettering3.png" alt="">


            </div>
        </div>



        <div
            class="images pt-2 max-[1500px]:px-12 px-64 pb-0 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-center space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[35px] font-['PPE-UltralightItalic'] text-center leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    Casa de las <p class="font-['PPE-Ultralight'] text-[40px]">CARCASAS</p>
                </div>
            </div>

            <div class="grid grid-cols-3 max-sm:gap-0 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/renderfundas.png" alt="">
                <img class="image_grid w-full h-full" src="/img/renderfundas5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/renderfundas4.png" alt="">
            </div>

            <img class="image_grid px-64 max-sm:px-0 max-sm:pb-24 w-full h-full" src="/img/pegatinas5.png" alt="">

        </div>

        <div
            class="grid pt-12 max-[1440px]:px-8 grid-cols-3 gap-8 px-8 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ Render 3D</a>
            <a class="type text-[14px] place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de fundas</a>
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ Render 3D</a>

        </div>

        <div
            class="titular2 max-[1500px]:pb-2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Barbie</p> HEIMER
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
            class="images max-[1500px]:pt-2 max-[1500px]:px-12 max-sm:px-6 pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div
                class="video max-sm:px-0 max-sm:gap-24 max-sm:pb-12 grid grid-cols-3 pt-24 pb-10 text-white items-center gap-24 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:grid-cols-1">
                <video width="740" loop autoplay class=" place-self-end border border-1">
                    <source src="/img/VideoBarbie.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <img class="" src="/img/ilustracionbarbie2.png">
                <img class="shadow-lg" src="/img/BarbieIlus.png">

            </div>
        </div>

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 px-64 gap-24 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] font-['Neue'] uppercase">▲ VIDEO PROCESO DIBUJO Y COLOREADO (8min)</a>
            <a class="type text-[14px] invisible place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de
                fundas</a>
            <a class="type text-[14px] font-['Neue'] uppercase">▲ ILUSTRACIÓN FINAL</a>

        </div>

        <div
            class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:pb-4 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Historia de</p>
                BHOWAM
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-900 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Los Rai se diferencian en muy diferentes sub-etnias con más de 28
                    lenguas maternas distintas. Pero todos practican la religión Kirat (anterior
                    al budismo y al hinduismo) a través del Mundhum que es un
                    sistema filosófico y cosmogónico que ordena cada acto de sus vidas.
                    El Mundhum no tiene escritos, solo se transmite de manera oral; por
                    ello se han ido perdiendo mucho de sus conceptos ancestrales, o se
                    han ido contaminando por el budismo y el hinduismo.
                    La cultura Kirat se desarrolla desde tiempo inmemorial en las áreas
                    en torno al Everest que es considerado/a la gran deidad femenina,
                    madre de todas las religiones y dioses. El “cielo Kirat” está allí, en las
                    faldas de la montaña. Los ritos de paso a la otra vida son complejos
                    y muy interesantes.
                    <br><br>
                    Para los Rai cuando un niño/a muere el chamán del pueblo, si es poderoso,
                    interpreta ciertos signos y puede convertir al niño o a la niña
                    fallecidos en dioses ya del valle (del pueblo) ya de las montañas.
                    A veces los niños llegan a ser dioses porque han muerto asesinados,
                    desatendidos o mal tratados por sus padres. En los pueblos les elevan
                    altares y se les hacen ofrendas y sacrificios anuales, se les practica
                    culto.
                    Resulta que los Rai consideran que los niños dioses de las montañas
                    pueden aparecerse en sueños cuando uno está en las grandes alturas
                    de los Himalayas. Uno de los efectos del mal de altura es el insomnio
                    y los sueños extraños.
                    Mediante el comportamiento alegre o enfadado de los niños dioses
                    de montaña en el sueño, advierten del riesgo que el durmiente corre
                    por estar allí, te van a proteger o no.
                    <br><br>
                    Estando en altura acampados a los pies de un glaciar inmenso,
                    Bhowan soñó que unas niñas se le aparecían: no interfirieron con él,
                    ni le miraron ni le hablaron. Solo jugaban entre ellas muy felices. Él
                    lo interpretó como un buen augurio.
                </div>

            </div>

        </div>

        <div class="grid max-sm:pt-12 pt-32 px-2 max-sm:gap-2 max-sm:px-8 grid-cols-6 gap-2 max-xl:grid-cols-1">
            <img class="image_grid" src="/img/fotomontanas3.png" alt="">
            <img class="image_grid" src="/img/fotomontanas4.png" alt="">
            <img class="image_grid" src="/img/fotomontanas5.png" alt="">
            <img class="image_grid" src="/img/fotomontanas6.png" alt="">
            <img class="image_grid" src="/img/fotomontanas7.png" alt="">
            <img class="image_grid" src="/img/fotomontanas8.png" alt="">

        </div>

        <div
            class="grid pb-32 pt-12 max-[1440px]:px-8 grid-cols-3 px-12 gap-24 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] place-self-start font-['Neue'] uppercase">▲ FOTOGRAFÍAS EVEREST POR FRANCISCO
                TORREGO</a>
            <a class="type text-[14px] invisible place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de
                fundas</a>
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ ILUSTRACIÓN FINAL</a>

        </div>


        <img class="image_grid hidden max-sm:hidden" src="/img/maquetacionbhowam2.png" alt="">

        <div
            class="hidden max-sm:hidden px-2 max-sm:pt-12 max-sm:gap-0 max-sm:px-8 grid-cols-10 max-sm:gap-y-2 max-xl:grid-cols-5">
            <img class="image_grid" src="/img/partetrasera.png" alt="">
            <img class="image_grid" src="/img/partetrasera2.png" alt="">
            <img class="image_grid" src="/img/partetrasera3.png" alt="">
            <img class="image_grid" src="/img/partetrasera4.png" alt="">
            <img class="image_grid" src="/img/partetrasera5.png" alt="">
            <img class="image_grid" src="/img/partetrasera6.png" alt="">
            <img class="image_grid" src="/img/partetrasera7.png" alt="">
            <img class="image_grid" src="/img/partetrasera8.png" alt="">
            <img class="image_grid" src="/img/partetrasera9.png" alt="">
            <img class="image_grid" src="/img/partetrasera10.png" alt="">

        </div>

        <div class="hidden max-sm:pt-12 max-sm:gap-0 max-sm:px-8 max-sm:gap-y-2 grid-cols-10 max-xl:grid-cols-5">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam2.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam3.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam4.png" alt="">
            <img class="image_grid border border-r-0 max-sm:h-[110.33px]" src="/img/paginasbhowam5.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam6.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam7.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam8.png" alt="">
            <img class="image_grid border border-r-0" src="/img/paginasbhowam9.png" alt="">
            <img class="image_grid border max-sm:h-[110.33px]" src="/img/paginasbhowam10.png" alt="">

        </div>

        <div
            class="hidden pb-32 pt-12 max-[1440px]:px-8 grid-cols-3 px-12 gap-24 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] place-self-start font-['Neue'] uppercase">▲ PÁGINAS TRASERAS Y DELANTERAS DEL
                LIBRO ILUSTRADO DE BHOWAM</a>
            <a class="type text-[14px] invisible place-self-center font-['Neue'] uppercase">▲ Pegatinas para el set de
                fundas</a>
            <a class="type text-[14px] invisible font-['Neue'] uppercase">▲ ILUSTRACIÓN FINAL</a>

        </div>

        <div
            class="colum max-[1500px]:pt-2 flex max-[1440px]:px-4 px-64 pt-20 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

            <div class="fotografias px-64 max-[1440px]:px-12 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/fotobhowam.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam2.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam3.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam4.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam5.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam6.png" alt="">
                <img class="image w-full h-full" src="/img/fotobhowam7.png" alt="">

            </div>

        </div>

        <div
            class="images max-sm:pt-8 pt-20 px-64 pb-0 text-white justify-center flex flex-col gap-12 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div id="folleto"
                class="titular2 flex px-64 pb-2 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    ISOMÉTRICAS</div>
            </div>

        </div>

        <div
            class="video max-sm:hidden max-sm:pb-12 max-sm:px-2 flex px-64 pt-2 pb-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="grid max-[1500px]:px-20 max-sm:pt-12 px-64 max-sm:gap-2 max-sm:px-8 grid-cols-4 gap-12 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/isometrica6.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica11.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica7.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica5.png" alt="">
        </div>
        <div class="grid px-64 max-[1500px]:px-20 max-sm:gap-6 pt-12 gap-12 max-sm:px-8 grid-cols-4 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/isometrica4.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica10.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica8.png" alt="">
            <img class="image_grid w-full h-full" src="/img/isometrica3.png" alt="">
        </div>



        <div
            class="images pt-12 max-[1500px]:px-12 px-64 pb-0 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-center space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[35px] font-['PPE-UltralightItalic'] text-center leading-10 text-black max-sm:text-30px max-sm:leading-12 max-xl:justify-center max-sm:text-center max-sm:pt-6">
                    Pegatinas <p class="font-['PPE-Ultralight'] text-[40px] leading-12 max-sm:leading-12 max-sm:pt-2">
                        ATAQUE A LOS TITANES</p>
                </div>
            </div>

        </div>

        <div
            class="video max-sm:hidden flex px-40 max-sm:px-2 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>


        <div class="grid max-sm:hidden max-[1500px]:px-12 px-24 grid-cols-4 gap-2 max-xl:grid-cols-1">
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

        <div class="grid max-[1500px]:px-2 max-sm:px-8 max-sm:pt-24 px-24 grid-cols-4 pb-6 gap-2 max-xl:grid-cols-1">
            <img class="image_grid w-full h-full" src="/img/ataque1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/ataque4.png" alt="">
        </div>

        <div id="carteles"
            class="images pt-2 px-64 max-sm:px-2 pb-0 text-black justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-48 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-6 text-black max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    <p class="font-['PPE-UltralightItalic'] max-sm:leading-4">Carteles fiestas</p><br> VILLALUENGA DE LA
                    SAGRA
                </div>
            </div>

        </div>

        <div
            class="grid1 max-[1500px]:px-12 pt-24 max-sm:px-2 max-sm:gap-6 max-sm:pt-8 max-[1920px]:px-[12rem] px-[18rem] grid grid-cols-3 max-sm:pb-28 gap-12 max-sm:grid-cols-1">
            <img class="image_grid max-sm:pt-8 max-sm:px-8 max-sm:pb-12" src="/img/cartelfiestas2.png" alt="">

            <img class="image_grid place-self-end max-sm:px-8 max-sm:shadow-none shadow-lg" src="/img/cartelfiestas.png"
                alt="">
            <img class="image_grid place-self-start max-sm:px-8 max-sm:shadow-none shadow-lg" src="/img/isometrica1.png"
                alt="">

        </div>

        <div
            class="grid pt-8 max-[1920px]:px-[12rem] max-[1500px]:px-12 grid-cols-3 gap-12 px-[18rem] pb-44 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-sm:hidden">
            <a
                class="type text-black text-[14px] max-[1500px]:text-[13px] max-sm:invisible place-self-start pt-4 font-['Neue'] uppercase">▲
                Mockup de etiquetado
                delantero/trasero</a>
            <a class="type text-[14px] max-[1500px]:text-[13px] place-self-start pt-4 font-['Neue'] uppercase">▲ CARTEL
                NO GANADOR FIESTAS
                VILLALUENGA DE LA SAGRA 2022</a>
            <a class="type text-[14px] max-[1500px]:text-[13px] place-self-start pt-4 font-['Neue'] uppercase">▲ CARTEL
                NO GANADOR FIESTAS
                VILLALUENGA DE LA SAGRA 2023</a>

        </div>



        <div
            class="images pt-2 px-32 pb-0 text-white bg-black justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div id="folleto"
                class="titular2 flex px-64 pb-12 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-2 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                    class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    AUTORETRATO</div>
            </div>

        </div>

        <div class="hidden bg-black pt-16 max-sm:px-6 max-sm:flex px-12">
            <img class="image_grid max-sm:border-1 max-sm:shadow-none w-full h-full" src="/img/autoretrato2.png" alt="">

        </div>


        <div
            class="grid max-[1500px]:px-12 bg-black max-sm:pb-24 max-sm:px-2 max-sm:grid-cols-1 px-64 pt-24 max-sm:pt-16 gap-40 grid-cols-2">
            <img class="image_grid w-full h-full" src="/img/autorretrato1.png" alt="">
            <img class="image_grid max-sm:hidden shadow-sm w-full h-full" src="/img/autoretrato2.png" alt="">
        </div>

        <div
            class="grid max-[1500px]:pb-32 bg-black text-white pb-64 pt-12 max-[1920px]:px-[16rem] max-[1440px]:px-8 grid-cols-2 gap-40 px-[18rem] max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] place-self-start pt-4 font-['Neue'] uppercase">▲ REALIZACIÓN MANUAL SOBRE PVC CON
                ACRÍLICO Y ROTULADOR</a>
            <a class="type text-[14px] invisible place-self-start pt-4 font-['Neue'] uppercase">▲ CARTEL NO GANADOR
                FIESTAS VILLALUENGA DE LA SAGRA 2023</a>

        </div>

        <div
            class="titular2 max-sm:pt-32 max-[1500px]:pb-2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#0b0b0b] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] text-zinc-500 pb-1 max-sm:pb-1">Pegatinas</p>PIXAR
                Cars
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
            class="colum max-sm:pt-4 pt-52 flex max-[1440px]:px-4 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:px-2">

            <div class="fotografias px-64 max-[1440px]:px-12 grid grid-cols-1 gap-8 max-sm:gap-4 max-sm:px-2">
                <img class="image w-full h-full" src="/img/fotopegatinas5.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas6.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas7.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas4.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas3.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas2.png" alt="">
                <img class="image w-full h-full" src="/img/fotopegatinas.png" alt="">

            </div>

        </div>


        <div
            class="video max-sm:hidden max-sm:px-2 flex px-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay>
                <source src="/img/videoilustraciones3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="grid max-sm:pb-4 max-[1920px]:px-0 pt-24 max-[1920px]:p-24 max-[1500px]:pb-4 max-[1500px]:px-0 grid-cols-1 gap-12 px-0 pb-32 max-xl:grid-cols-1 max-xl:px-0 max-xl:pb-10 max-xl:pt-10 max-sm:gap-2">
            <NuxtMarquee>

                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars1.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars2.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars3.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars4.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars5.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars6.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars7.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars8.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars9.png" alt="">
                <img class="image_grid max-sm:w-[250px] w-[500px] h-full" src="/img/Cars10.png" alt="">
            </NuxtMarquee>

        </div>

        <div
            class="grid max-sm:pt-4 max-sm:pb-24 max-[1500px]:pb-44 max-[1500px]:px-0 grid-cols-1 pt-0 gap-12 px-0 pb-32 max-xl:grid-cols-1 max-xl:px-0 max-xl:pb-10 max-xl:pt-10 max-sm:gap-2">

            <NuxtMarquee>
                <a class="text text-[#A5A9F4] max-sm:w-[250px] text-center w-[500px]">Guido Quaroni</a>
                <a class="text text-[#F9DA81] max-sm:w-[250px] text-center w-[500px]">Luigi</a>
                <a class="text text-[#F99A46] max-sm:w-[250px] text-center w-[500px]">Miss Fractura</a>
                <a class="text text-[#B6D29A] max-sm:w-[250px] text-center w-[500px]">Fillmore</a>
                <a class="text text-[#96313b] max-sm:w-[250px] text-center w-[500px]">Rayo McQueen</a>
                <a class="text text-[#79a63d] max-sm:w-[250px] text-center w-[500px]">Chick Hicks</a>
                <a class="text text-[#23A1EF] max-sm:w-[250px] text-center w-[500px]">Strip Weathers</a>
                <a class="text text-[#FEC557] max-sm:w-[250px] text-center w-[500px]">Copa Piston</a>
                <a class="text text-[#EE885F] max-sm:w-[250px] text-center w-[500px]">Mate</a>
                <a class="text text-[#373D83] max-sm:w-[250px] text-center w-[500px]">Doc Hudson Hornet</a>
            </NuxtMarquee>
        </div>

    </div>






    <div id="contacto" class="informacion max-sm:pt-24 pt-[40px] pb-64 bg-white max-sm:pb-32">
            <div class="about bg-white">
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
            <div class="about bg-white pt-2">


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
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
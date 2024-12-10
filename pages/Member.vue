<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="mix-blend-exclusion" />
    <div class="menu flex justify-between bg-black w-full fixed top-0 left-0 right-0 z-50">
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
                            <a href="/Intro#trabajos2"
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
            class="grid sticky max-sm:top-[5rem] top-[6.65rem] z-10 grid-flow-cols grid-cols-1 text-center max-[1450px]:grid-cols-1 animate-pulse max-[1920px]:grid-cols-1 max-sm:grid-cols-1">

            <a href="#videofinal"
                class=" bg-[#ff4747] font-['Regular'] text-[16px] text-white justify-center content-center max-sm:text-[12px]">
                HAZ CLICK PARA IR AL VIDEO FINAL
            </a>
        </div>

        <VueScrollProgressBar background-color="#ffffff" />

        <div
            class="titular2 flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-44 content-start space-between justify-center pt-64 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-12 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#ff4747] via-[#c2322d] to-[#e00d2c] ">
                MEMBER</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    ARTE FINAL - FOTOGRAFÍAS - MAQUETACIÓN - EDICIÓN -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] max-[1920px]:max-w-[70ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Member es un asistente virtual personal que facilita el recordado de experiencias, personas,
                    memorias y vivencias del usuario. Nace con el fin de ayudar a cualquier persona e instalarse desde
                    el nacimiento para poder ir recogiendo información. Más adelante puede ser usado con personas en
                    primeros niveles de Alzheimer, demencia o perdidas de memoria.
                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[26ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos Experimentales, 4º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    6 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left text-[16px] leading-6 text-white max-xl:text-sm max-[1440px]:max-w-[60ch]">
                    Creación de asistente personal virtual.
                </div>
            </div>
        </div>

        <div
            class="video max-sm:hidden pt-20 pb-4 text-zinc-600 flex justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="justify-self-center max-sm:w-full" loop autoplay>
                <source src="/img/member40.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <img class="image_rect hidden px-0 max-sm:flex" src="/img/member40.gif" alt="">



        <div
            class="colum flex max-sm:flex-col max-sm:px-12 max-sm:pb-24 pt-20 px-64 pb-10 text-white gap-64 max-sm:gap-12 max-[1920px]:gap-32 max-[1920px]:px-32 justify-center">
            <div class="info_proyect max-w-[80ch] max-[1920px]:max-w-[60ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-[11rem] max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">Asistente</p> MEMBER
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] text-zinc-200 max-xl:text-sm max-[1500px]:text-[16px]">
                        Member es un asistente virtual personal que facilita el recordado de experiencias, personas,
                        memorias y vivencias del usuario. Member es un asistente virtual personal que facilita el
                        recordado de experiencias, personas, memorias y vivencias del usuario.
                        <br><br>
                        Nace con el fin de ayudar a cualquier persona e instalarse desde el nacimiento para poder ir
                        recogiendo información. Una vez que el usuario ya es consciente y con suficiente capacidad de
                        raciocino Member se activará y mostrara su interfaz de reconocimiento y “tutorial”, explicando
                        cuales son sus funciones principales y como es su funcionamiento.
                        <br><br>

                        <div class="text">Member tiene deferentes estados. Uno virtual que interactua con el
                            usuario por medio de una interfaz 2D que se mueve y cambia de color, además de contar con
                            una voz personalizada y creada para el.
                            El otro estado es el físico en un objeto que estará en las casas de cada persona para volcar
                            información y hacer un visionado mucho más sencillo que en tu propia mente. Este objeto
                            podrá proyecta como un holograma toda la información.
                            Tanto en el plano físico como en el plano virtual Member puede ser representado por interfaz
                            oscura e interfaz clara, haciendo que espectador pueda seleccionar entre una de las dos.
                        </div>
                        <br>

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect rounded-xl w-[550px]" src="/img/membersinfondo.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/member.png" alt="">

            </div>
        </div>

        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">¿Que es</p> MEMBER?
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INFORMACIÓN ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Al rededor de Member también hay que crear una marca para reconocerlo, tanto en su interfaz como a
                    la hora de utilizar una aplicación movil, virtual o adquirir el material físico.
                    Para este apartado he tenido la idea de que sea una marca dinámica que pueda ir cambiando
                    dependiendo de unos parámetros.
                    El logo principal es la imagen seleccionada anteriormente, que parte del movimiento que hace member
                    en el programa.
                    <br><br>
                    A partir de este movimiento cada usuario puede tener su propio member que se configurará a raíz de
                    su red neuronal y será totalmente personal, haciendo posible la opción que todos partan de la misma
                    base pero cada persona tenga un MEMBER totalmente distinto aunque sea por un pequeño pixel,
                    movimiento o variación en la creación.
                    Cada member es único en forma pero no en formato ni color, todos proceden de una base creada
                    anteriormente y esto hace que la marca pueda mutar y variar dependiendo de la persona.
                </div>

            </div>

        </div>

        <div
            class="grid max-[1500px]:pt-0 max-[1500px]:pb-12 max-sm:hidden max-[1920px]:px-32 max-[1920px]:pt-24 grid-cols-2 px-64 max-sm:px-2 max-sm:grid-cols-1">
            <img class="image_grid animate-pulse duration-700 w-full h-full" src="/img/main1.png" alt="">
            <img class="image_grid animate-pulse duration-700 w-full h-full" src="/img/main2.png" alt="">


        </div>

        <div
            class="hidden max-sm:grid max-[1920px]:px-32 max-[1920px]:pt-24 grid-cols-2 px-64 max-sm:px-36 max-sm:gap-24 max-sm:pt-12 max-sm:pb-32 max-sm:grid-cols-1">
            <img class="image_grid animate-pulse duration-700 w-full h-full" src="/img/memberlogo5.png" alt="">
            <img class="image_grid animate-pulse duration-700 w-full h-full" src="/img/memberlogo2.png" alt="">


        </div>

        <div id="primercompartimento"
            class="titular2 flex px-64 pb-4 max-[1500px]:pb-6 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular max-[1500px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-[30px] max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                MARCA DINÁMICA</div>
        </div>

        <div
            class="text max-sm:px-12 max-sm:pb-32 px-[900px] max-[1920px]:px-[22rem] pb-48 pt-4 max-[1500px]:pt-0 text-center font-['SFUIDisplay-Light'] text-[16px] text-zinc-200 max-sm:order-last">
            El logo tiene variación para cada usuario que utilice Member, cada persona al iniciar el programa tendrá un
            movimiento concreto del asistente, que se transforma en un frame que conforma un logo
            totalmente único y personal dentro de las millones de posibilidades.
        </div>

        <div
            class="grid justify-items-center grid-cols-4 pb-24 max-[1920px]:px-[200px] px-[500px] gap-24 max-sm:gap-12 max-sm:px-24 max-sm:grid-cols-2">
            <img class="image_grid max-sm:place-self-end w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo3.png" alt="">
            <img class="image_grid max-sm:place-self-start w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo4.png" alt="">
            <img class="image_grid max-sm:place-self-end w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo5.png" alt="">
            <img class="image_grid max-sm:place-self-start w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo6.png" alt="">
            <img class="image_grid max-sm:place-self-end pt-24 max-sm:pt-0 w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo7.png" alt="">
            <img class="image_grid pt-24 max-sm:place-self-start max-sm:pt-0 w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo2.png" alt="">
            <img class="image_grid pt-24 max-sm:place-self-end max-sm:pt-0 w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo8.png" alt="">
            <img class="image_grid pt-24 max-sm:place-self-start max-sm:pt-0 w-[160px] duration-700 hover:w-[150px]"
                src="/img/memberlogo9.png" alt="">


        </div>

        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">Diferentes usos</p> LOGOTIPO
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INFORMACIÓN ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    En la creación de Member el color seleccionado fue el rojo y es el que se ha mantenido como color
                    principal de la marca y del sistema, pero ha esto se le ha añadido dos colores más que en un futuro
                    podría llegar a crecer mucho más.
                    El color amarillo representa la memoria episódica, cualquier momento en el que Member haga uso de
                    una función que tenga que ver con experiencias, memorias y vivencias se activa este color en el y
                    cambia del estado rojo a este para que el espectador por patrones de color sepa la referencia a la
                    que está accediendo.
                    <br><br>
                    En el caso de la memoria sistemática, el color se cambiará al morado brillante para hacer referencia
                    a todas esas acciones de aprendizaje y memorizar, como puede ser personas y datos sobre personas,
                    acciones o lecciones aprendidas por el usuario.
                    En todo momento en el que member haga explicaciones sobre el procedimiento, sobre su sistema, se
                    encienda o interactue de otra forma con el espectador, el color fijo será el rojo. Después en cada
                    momento o acción el color transiciona a los demás, siempre volviendo después al original. En la
                    marca el color se mantiene en rojo mientras que en el objeto físico podemos ver también esos cambios
                    de color.
                </div>

            </div>

        </div>

        <div
            class="grid max-[1500px]:pt-24 max-[1500px]:pb-24 max-[1500px]:px-12 max-sm:grid-cols-1 justify-items-center grid-cols-3 pt-4 pb-44 max-sm:pb-32 max-[1920px]:px-[200px] px-[500px] gap-[250px] max-sm:pt-12 max-sm:px-24 max-sm:gap-12">
            <img class="image_grid opacity-60 hover:opacity-100 duration-700 w-1/2 max-sm:opacity-100"
                src="/img/member11.png" alt="">
            <img class="image_grid opacity-60 hover:opacity-100 w-1/2 duration-700 max-sm:opacity-100"
                src="/img/member22.png" alt="">
            <img class="image_grid opacity-60 hover:opacity-100 w-1/2 duration-700 max-sm:opacity-100"
                src="/img/member33.png" alt="">


        </div>

        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-24 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">¿Para que</p> SIRVE MEMBER?
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INFORMACIÓN ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] max-[1500px]:max-w-[70ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Member tiene como función principal todo tipo de público desde que nace hasta que muere, su objetivo
                    principal es ayudar a las personas a recordar y no olvidar su día a día, recuerdos pasados, memorias
                    y acontecimientos importantes. Guardarlos en una base de datos y poder mostrarlos como si de un
                    video se tratase, de lo que tus ojos vieron en ese momento e interpretaron esa experiencia.
                    <br><br>
                    Su público principal es todo aquel al que se lo implanten desde pequeño a partir del año 2050, con
                    el fin de ayudar a cualquier tipo de persona en su vida.
                    Como objetivo secundario y del que partió la idea del trabajo es poder utilizar esta herramienta
                    para casos más concretos. Abarcar a todas las personas en su uso básico y general para luego poder
                    concretar y servir como ayuda en casos como Alzheimer, demencia senil o diferentes problemas
                    cerebrales en los que se pierda la memoria.
                </div>

            </div>

        </div>




        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-[2rem] max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">¿Como es</p> MEMBER?
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INFORMACIÓN ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] max-[1500px]:max-w-[70ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    En la creación de Member el color seleccionado fue el rojo y es el que se ha mantenido como color
                    principal de la marca y del sistema, pero ha esto se le ha añadido dos colores más que en un futuro
                    podría llegar a crecer mucho más.
                    El color amarillo representa la memoria episódica, cualquier momento en el que Member haga uso de
                    una función que tenga que ver con experiencias, memorias y vivencias se activa este color en el y
                    cambia del estado rojo a este para que el espectador por patrones de color sepa la referencia a la
                    que está accediendo.
                    <br><br>
                    En el caso de la memoria sistemática, el color se cambiará al morado brillante para hacer referencia
                    a todas esas acciones de aprendizaje y memorizar, como puede ser personas y datos sobre personas,
                    acciones o lecciones aprendidas por el usuario.
                    En todo momento en el que member haga explicaciones sobre el procedimiento, sobre su sistema, se
                    encienda o interactue de otra forma con el espectador, el color fijo será el rojo. Después en cada
                    momento o acción el color transiciona a los demás, siempre volviendo después al original. En la
                    marca el color se mantiene en rojo mientras que en el objeto físico podemos ver también esos cambios
                    de color.
                </div>

            </div>

        </div>


        <div id="primercompartimento"
            class="titular2 flex px-64 pb-12 gap-64 pt-52 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular max-[1500px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-[30px] max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
        </div>
        <div
            class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
            <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-3">
                <div class="color w-[150px] h-[150px] bg-[#ffc942]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#ff455d]">
                </div>
                <div class="color w-[150px] h-[150px] bg-[#ff2feb]">
                </div>
            </div>
            <div class="columna2 grid gap-6">
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #000000</a> <br>
                    C - 75 <br>
                    M - 68 <br>
                    Y - 68 <br>
                    K - 90
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #ffffff</a> <br>
                    C - 0 <br>
                    M - 0 <br>
                    Y - 0 <br>
                    K - 0
                </div>
                <div
                    class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    <a class="color text-[#ffffff] font-bold">HEX : #cd1719</a> <br>
                    C - 15 <br>
                    M - 100 <br>
                    Y - 100 <br>
                    K - 0
                </div>
            </div>


        </div>


        <div
            class="grid grid-cols-3 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:hidden">
            <div class="color w-[200px] h-[200px] bg-[#ffc942]">
            </div>
            <div class="color w-[200px] h-[200px] bg-[#ff455d]">
            </div>
            <div class="color w-[200px] h-[200px] bg-[#ff2feb]">
            </div>

            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #ffc942</a> <br>
                R - 255 <br>
                G - 201 <br>
                B - 66 <br>
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #ff455d</a> <br>
                R - 255 <br>
                G - 69 <br>
                B - 93 <br>
            </div>
            <div
                class="text max-w-[80ch] text-left font-['Regular'] text-[16px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                <a class="color text-[#ffffff] font-bold">HEX : #ff2feb</a> <br>
                R - 255 <br>
                G - 47 <br>
                B - 235 <br>
            </div>

        </div>

        <div id="primercompartimento"
            class="titular2 flex px-64 pb-32 max-[1920px]:pt-12 max-[1920px]:pb-24 gap-64 pt-32 max-sm:pb-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular max-[1500px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-[30px] max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                TIPOGRAFÍA</div>
        </div>

        <div
            class="titular2 pb-24 grid grid-cols-1 max-sm:grid-cols-1 max-sm:px-0 max-sm:gap-16 px-64 pt-4 max-sm:pt-0 content-center justify-center text-center max-sm:flex-col max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div class="segundogrid flex flex-col gap-16 max-sm:gap-0">

                <div
                    class="titular2 max-sm:pb-4 content-center pb-0 justify-center text-center max-sm:px-4 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                    <div
                        class="titular text-center max-sm:leading-[60px] max-[1920px]:leading-[190px] max-sm:text-[50px] max-[1920px]:text-[200px] max-[1500px]:text-center text-[200px] font-['SFUIDisplay-Light'] leading-12 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[200px] max-sm:text-center max-sm:pt-2">
                        SFUI Display</div>
                </div>
                <div
                    class="titular max-sm:px-4 text-center max-sm:leading-[60px] max-[1920px]:leading-[190px] max-sm:text-[50px] max-[1920px]:text-[200px] max-[1500px]:text-center text-[200px] font-['AlteHaasGrotesk-Bold'] leading-12 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[200px] max-sm:text-center max-sm:pt-2">
                    Alte Haas Grotesk</div>
            </div>

        </div>


        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-[2rem] max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">Video</p> FINAL
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INFORMACIÓN ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    El producto audiovisual que he creado es una especie de tutorial o primer inicio de la aplicación
                    que te hace un recorrido por sus funcionalidades, su estética, su forma gráfica y cual es su
                    procedimiento.
                    Member actualmente cuenta con 4 funciones principales que en un futuro pueden evolucionar además de
                    añadir nuevas posibilidades.
                    <br><br>

                    <div class="text-[16px] text-zinc-400"><b>FUNCION 1 - ALMACENAR</b>
                        <br>
                        Función para almacenar todos los recuerdos, memorias y experiencias del usuario, desde que
                        nace
                        hasta que muere, creando una gran base de datos con momentos, personas y demás material
                        almacenado
                        por la persona.
                    </div>
                    <br>
                    <div class="text-[16px] text-zinc-400"><b>FUNCIÓN 2 - RECORDAR</b>
                        <br>
                        Una vez almacenados todos estos recuerdos Member es capaz de mostrartelos todos a tu gusto,
                        por
                        fecha o intentando recordar algo de ese momento para que pueda mostrarlo y visionarlo.
                    </div>
                    <br>
                    <div class="text-[16px] text-zinc-400"><b>FUNCIÓN 3 - RELACIONARSE</b>
                        <br>
                        Member puede almacenar información de otras personas con las que has tenido contacto durante
                        tu
                        vida, personas que conoces o con las que has entablado algún momento, member puede guardar
                        archivos
                        biométricos de la voz de esa persona, de rasgos faciales e información importante almacenada
                        de esa
                        persona.
                    </div>
                    <br>
                    <div id="videofinal" class="text-[16px] text-zinc-400"><b>FUNCIÓN 4 - COMPARTIR (FASE BETA)</b>
                        <br>
                        Esta función podría desarrollarse mucho más cuando el producto estuviese afianzado en el
                        público.
                        Esta función permite que experiencias en las que coincidan diferentes usuarios, puedan ser
                        alimentadas por la visión de la otra persona que también vivió la experiencia.
                    </div>


                </div>

            </div>

        </div>



        <div
            class="video flex pt-20 max-sm:px-0 px-64 pb-32 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="shadow-md shadow-zinc-900" width="1240" height="788" loop controls>
                <source src="/img/videofinalmember.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div class="px-64 max-sm:px-12 max-sm:pt-24 max-sm:pb-32 pb-12 grid place-self-center justify-items-center">

            <a class="uppercase bg-white hover:bg-black hover:text-white hover:border text-gray-800 font-normal py-4 px-6 gap-4 inline-flex items-center rounded-lg"
                href="/img/MemoriaFinalMember_RubénMaldonado.pdf" target="_blank"
                download="MemoriaFinalMember_RubénMaldonado.pdf">Descargar memoria del proyecto</a>

        </div>


        <div
            class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-[2rem] max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] text-[35px] pb-1 max-sm:pb-2">Frames e</p> IMÁGENES
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-200 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">ELEMENTOS ACERCA DE MEMBER</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-200 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Frames de los hologramas de prueba proyectados por el producto en 3D de Member, mostrando diferentes
                    pantallas
                    del sistema y diferentes colores que muestran los tipos de memoria abiertos en ese momento.
                </div>

            </div>

        </div>

        <div class="grid max-sm:grid-cols-1 max-sm:pt-6 max-sm:px-6 grid-cols-2 px-64 gap-6 pt-44 pb-32">
            <img class="image_grid w-full h-full" src="/img/memberfinal3.png" alt="">
            <img class="image_grid w-full h-full" src="/img/framemember2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/framemember4.png" alt="">
            <img class="image_grid w-full h-full" src="/img/framemember3.png" alt="">
        </div>






        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-white flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-32 ">
            <div
                class="titular text-[16px] font-['SFUIDisplay-Light'] leading-6 font-normal flex flex-start items-center max-xl:text-xs">
                Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-100 hover:opacity-60 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Cinema4d.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11white.svg">
            </a>
            <div class="links flex flex-col gap-2 text-white">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">Behance
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <img class="vector" src="/img/Vector-11white.svg">
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

import text from "/components/text.vue";

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
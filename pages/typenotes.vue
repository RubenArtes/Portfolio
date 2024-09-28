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

        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[60px]">
                TYPENOTES</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    ARTE FINAL - MAQUETACIÓN - REVISTA -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] max-sm:text-left pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Creación de una publicación
                    bimensual de contenidos
                    y enfoques de la revista TypeNotes, crear un sistema
                    mucho más económico y abordable diseñando
                    un modelo hibrido entre periódico y revista, crear
                    una publicación basada en la principal anual.
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
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[16ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Diseño editorial, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    1 -2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left max-sm:max-w-[30ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Maquetación de revista periódica en base a una revista extensa.
                </div>
            </div>
        </div>

        <div
        class="video max-sm:hidden max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
        <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
                <source src="/img/Comp_2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <img class="image hidden max-sm:flex w-full h-full pb-24" src="/img/Comp_2.gif" alt="">


        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32  max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Revista</p>TYPENOTES
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        El trabajo de Diseño Editorial consiste en la adaptación propia de la revista de TypeNotes a un
                        formato más continuo y de poco tiempo que cuente algunos de los contenidos de la edición más
                        grande, creando un soporte rápido y menos caro para que la gente pueda consumir este contenido
                        acerca de tipografía. El tamaño tiene que ser lo más próximo al A3 pero siendo un formato más
                        pequeño en extensión al original, incluyendo el contenido y los elementos de la edición original
                        pero dándole un pequeño lavado de cara para ser algo más rápido y adaptado. Crear algo de
                        extensión corta siendo un hermano pequeño de la revista, que mantenga la visión de la principal
                        y se note que es una edición que va construyendo mensualmente a la principal. Crear
                        composiciones y diseños basados en el diseño original no se trata de sustituir o rediseñar como
                        tal, tiene que mantener visualmente la estética.
                        <br><br>

                        <div class="text indent-12"> Decisiones: Utilizar la foliación y la categoría para componer en
                            la página y ayudar a los demás elementos. Añadirle a las imágenes cuadrados blancos que la
                            recorten en alguna esquina y en ocasiones añadirle pies de foto. Linea roja en la parte
                            inferior de la página derecha para abrir el artículo y otro para cerrarlo. Caja de texto de
                            dos columnas en retícula y 3 columnas de texto componiendo la página. Mucho espacio en
                            blanco para componer las dobles páginas y que se formen estructuras a raíz de este. Cambio
                            de la FS Bravo a la FS Neruda para el texto corrido ya que el primero da mucha mancha de
                            texto. Jugar con la combinación del rojo y del negro en los diferentes textos y apartados.
                            Retícula con muchas filas para poder componer las imágenes con más libertad y las cajas de
                            texto (19 filas). Construcción a partir de 6 columnas. Utilizar los pies de ilustración,
                            foto y créditos para componer.</div>
                        <br>

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col h-min">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado.jpg" alt="">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado9.jpg" alt="">
            </div>
        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Elementos</p>MAQUETACIÓN
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">PROCESO DE CREACIÓN</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Elementos para la maquetación de la revista, desde
                    la paleta de color y la tipografía hasta la retícula y la jerarquía.
                </div>

            </div>

        </div>

        <div class="grid grid-cols-1 max-sm:px-4 text-center">

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-12 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                PALETA DE COLOR</div>
            </div>
            <div
                class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-32  max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
                <div class="columna1 grid gap-2 max-sm:grid max-sm:grid-rows-3">
                    <div class="color w-[150px] h-[150px] border border-zinc-500 bg-[#000000]">
                    </div>
                    <div class="color w-[150px] h-[150px] bg-[#ffffff]">
                    </div>
                    <div class="color w-[150px] h-[150px] bg-[#cd1719]">
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
                <div class="color w-[200px] h-[200px] border border-zinc-500 bg-[#000000]">
                </div>
                <div class="color w-[200px] h-[200px] bg-[#ffffff]">
                </div>
                <div class="color w-[200px] h-[200px]  bg-[#cd1719]">
                </div>

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

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-12 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    LOGOTIPO</div>
            </div>

            <img class="image_grid px-[50rem] max-[1920px]:px-[30rem] max-sm:px-12 w-full h-full pt-32 max-sm:pt-12"
                src="/img/LogoTypenotes2.svg" alt="">
            <p
                class="text-[70px] z-50 uppercase font-bold text-white pt-24 pb-40 max-sm:pt-6 max-sm:pb-12 max-sm:text-[40px]">
                ↓
            </p>
            <img class="image_grid px-[50rem] max-[1920px]:px-[30rem] max-sm:px-12 w-full h-full pb-12"
                src="/img/LogoTypenotes1.svg" alt="">


            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 max-sm:pb-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    TIPOGRAFÍA</div>
            </div>

            <div
                class="titular2 max-[1500px]:gap-24 grid grid-cols-3 max-[1500px]:grid-cols-1 max-sm:grid-cols-1 max-sm:px-0 max-sm:gap-16 px-64 pt-4 max-sm:pt-0 content-start justify-center text-center max-sm:flex-col max-sm:pb-16 max-[1500px]:px-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div class="segundogrid flex flex-col gap-2 max-sm:gap-0">

                    <div
                        class="titular2 max-[1500px]:px-[25rem] content-start pb-12 justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-0 max-[1500px]:gap-2 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                        <div
                            class="titular max-[1500px]:text-center max-[1500px]:place-self-center max-[1500px]:items-center max-sm:leading-[60px] max-sm:text-[50px] max-[1920px]:text-[70px] max-[1440px]:text-left text-[90px] font-['FSBrabo'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-2">
                            FS Brabo Font</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Light'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Light</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-LightItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Light Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Regular</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-MediumItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Medium Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Medium'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Medium</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-BoldItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Bold Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSBrabo-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Brabo Font Bold</div>
                    </div>
                </div>
                <div class="primergrid max-[1500px]:hidden flex flex-col gap-2 max-sm:hidden">
                </div>

                <div class="primergrid flex flex-col gap-2">

                    <div
                    class="titular2 max-[1500px]:px-[25rem] content-start pb-12 justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-0 max-[1500px]:gap-2 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                    <div
                    class="titular max-[1500px]:text-center max-[1500px]:place-self-center max-[1500px]:items-center max-sm:leading-[60px] max-sm:text-[50px] max-[1920px]:text-[70px] max-[1440px]:text-left text-[90px] font-['FSKim-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-2">
                    FS Kim Font</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                        <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] text-[30px] font-['FSKim-Italic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Regular</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-BoldItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Bold Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-Bold'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Bold</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-HeavyItalic'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Heavy Italic</div>
                    </div>
                    <div id="primercompartimento"
                    class="titular2 max-[1500px]:px-[25rem] content-start justify-left text-left max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-0 max-sm:pb-0">
                    <div
                            class="titular max-sm:leading-[30px] max-[1920px]:text-[30px] max-[1440px]:text-left text-[30px] font-['FSKim-Heavy'] text-start leading-10 text-white max-sm:text-30px max-xl:justify-center max-xl:text-[60px] max-sm:text-center max-sm:pt-2 max-sm:text-[22px]">
                            FS Kim Heavy </div>
                    </div>

                </div>
            </div>

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-40 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    JERARQUÍAS TIPOGRÁFICAS</div>
            </div>

            <img class="image_grid max-[1500px]:px-24 px-72 max-sm:px-0 pt-12 w-full h-full pb-12" src="/img/elementos8.png" alt="">

            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    RETÍCULA</div>
            </div>
            <img class="image_grid max-[1500px]:px-24  px-72 max-sm:px-0  w-full h-full pb-12" src="/img/elementos6.png" alt="">
            <div id="primercompartimento"
                class="titular2 flex px-64 pb-32 gap-64 pt-32 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
                <div
                class="titular pb-24 max-[1500px]:pt-12 max-[1500px]:text-center max-[1500px]:pb-0 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    DISPOSICIÓN DE PÁGINAS</div>
            </div>
            <img class="image_grid max-[1500px]:px-24 px-72 max-sm:px-0 w-full h-full pb-12" src="/img/elementos7.png" alt="">


        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 max-[1500px]:flex-col flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-2 max-[1500px]:items-center max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-center leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Páginas</p>COMPLETAS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>

        <div id="primercompartimento"
            class="titular2 hidden max-sm:grid grid-cols-1 px-64 pb-32 gap-4 place-items-left max-sm:text-left max-sm:items-center max-sm:flex-start items-center pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-32  max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Páginas</p>COMPLETAS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>


        <div class="grid grid-cols-1 max-[1500px]:px-24 px-72 max-sm:grid-cols-1 gap-4 max-xl:grid-cols-1 max-sm:px-6 max-sm:pb-24">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado2.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado3.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado4.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado5.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado6.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado7.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado8.jpg" alt="">
            <img class="image_grid w-full h-full" src="/img/typenotes.png" alt="">

        </div>



        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

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

<script setup>


</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
.image_logo
  @apply opacity-100
  &:hover
    @apply opacity-60


  </style>
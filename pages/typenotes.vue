<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor />
        <div
            class="header bg-black border-0 p-10 flex px-24 text-white justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border-b-0">
            <div class="image flex flex-start justify-items-start">
                <NuxtLink to="/">
                    <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
                </NuxtLink>
            </div>

            <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11white.svg">
            </div>

        </div>

        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 flex px-64 gap-64 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[90px] font-['Domaine-Display'] font-bold leading-[120px] animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[45px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff] max-sm:text-center max-sm:leading-[2.75rem] max-sm:font-normal">
                TYPENOTES</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    ARTE FINAL - MAQUETACIÓN - REVISTA -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
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
            class="trabajos flex pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] text-center font-['Domaine-Display'] uppercase text-[24px] leading-10 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Regular'] text-center text-[16px] leading-6 max-xl:text-sm max-xl:max-w-[40ch]">
                    Diseño editorial, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Regular']  text-center text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    1 -2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Regular']  text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Maquetación de revista periódica en base a una revista extensa.
                </div>
            </div>
        </div>

        <div
            class="video flex pt-12 px-64 pb-32 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pt-12 max-sm:pb-24">
            <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
                <source src="/img/Comp_2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60 max-sm:pt-12">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular uppercase text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white pb-6 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left max-sm:pb-0">
                        Revista Typenotes</div>
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
            class="titular2 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                ELEMENTOS<br>MAQUETACIÓN</div>
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
            <div
                class=" pt-32 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type flex place-content-center text-center">PALETA DE COLORES</a>
            </div>
            <div
                class="hidden gap-8 items-center justify-items-center px-12 pb-32 pt-32 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:grid max-sm:grid-cols-2 max-sm:px-8">
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
                class="grid grid-cols-3 grid-rows-2 gap-2 items-center justify-items-center px-64 pb-32 pt-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1 max-sm:hidden">
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

            <div
                class=" pt-12 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type flex pb-12 max-sm:pb-0 place-content-center text-center">LOGOTIPO</a>
            </div>
            <img class="image_grid px-[22rem] max-sm:px-0 w-full h-full pb-12" src="/img/elementos2.png" alt="">
            <div
                class="pt-32 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type pb-12 max-sm:pb-0 flex place-content-center text-center">TIPOGRAFÍAS</a>
            </div>
            <img class="image_grid px-72 max-sm:px-0  pt-12 w-full h-full pb-12" src="/img/elementos4.png" alt="">
            <div
                class="pt-32 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type flex place-content-center text-center">JERARQUÍAS TIPOGRÁFICAS</a>
            </div>
            <img class="image_grid px-72 max-sm:px-0 pt-12 w-full h-full pb-12" src="/img/elementos8.png" alt="">
            <div
                class="pt-32 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type flex place-content-center text-center">RETICULA</a>
            </div>
            <img class="image_grid px-72 max-sm:px-0  w-full h-full pb-12" src="/img/elementos6.png" alt="">
            <div
                class="pt-32 max-sm:pt-4 px-32 max-sm:px-0 text underline underline-offset-8 decoration-1 max-sm:p-12 text-center max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-center">
                <a class="type flex place-content-center text-center">DISPOSICIÓN DE PÁGINAS</a>
            </div>
            <img class="image_grid px-72 max-sm:px-0 w-full h-full pb-12" src="/img/elementos7.png" alt="">


        </div>


        <div id="primercompartimento"
            class="titular2 grid max-sm:hidden grid-cols-1 px-64 pb-32 gap-4 place-items-center max-sm:text-left max-sm:items-center max-sm:flex-start items-center pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                PÁGINAS COMPLETAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>

        <div id="primercompartimento"
            class="titular2 hidden max-sm:grid grid-cols-1 px-64 pb-32 gap-4 place-items-left max-sm:text-left max-sm:items-center max-sm:flex-start items-center pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                PÁGINAS COMPLETAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] max-sm:text-left uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type">MAQUETACIÓN DE LA REVISTA</a>
                </div>

            </div>

        </div>


        <div class="grid grid-cols-1 px-72 max-sm:grid-cols-1 gap-4 max-xl:grid-cols-1 max-sm:px-6 max-sm:pb-24">
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
                        href="https://www.instagram.com/ruben.artes/">Instagram
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
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
  @apply opacity-60
  &:hover
    @apply opacity-100


  </style>
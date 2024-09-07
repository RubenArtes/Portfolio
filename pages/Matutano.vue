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
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#b91c1c] via-[#be185d] to-[#fb7185] ">
                MATUTANO</div>
            <div
                class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Diseño
                    Matutano - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    El proyecto consistirá en el
                    diseño de una gama
                    de productos para una marca existente (Matutano), generando
                    un sistema gráfico aplicable y coherente en, al
                    menos tres variantes del producto.
                    Este trabajo busca el rediseño o diseño de packaging
                    para productos/snacks saludables que sean atractivos y salgan del canon de los snacks vegetales
                    habituales.
                </div>

            </div>
        </div>


        <div
            class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos del Diseño Gráfico, 3º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    2 - 3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Matutano Saludable
                </div>
            </div>
        </div>

        <div
            class="video flex pt-20 pb-4 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/packagingtodos.png" alt="">
        </div>

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8 px-8 pb-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] font-['Neue'] uppercase">▲ Render 3D</a>
        </div>

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-32 ">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Tres packs</p> SALUDABLES
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Totem es un proyecto de identidad y packaging, ideado para el lanzamiento de una marca de snacks
                        saludables, dirigida a un público joven. La estructura y la gráfica se trabajan desde la
                        gamificación, buscando conectar con el cliente.
                        <br><br>
                        El packaging, formado por 3 piezas que se ensamblan como un totem, se puede reutilizar y
                        coleccionar, y facilita el acceso al contenido al desmontarse a medida que disminuye.
                        <br><br>
                        La gráfica propone una imagen divertida y modernizada, evitando la idea de que lo saludable es
                        aburrido. Los ingredientes principales se convierten en mascotas, que podrían cobrar vida en
                        publicidad y merchan, y se diseñan letterings e ilustraciones para la gama de sabores, basadas
                        en patrones gráficos de colores vivos y saturados, estudiados para que encajen entre las
                        distintas piezas.
                        <br><br>

                        <div class="text indent-12">Mi idea durante todo el proyecto ha sido hacer más
                            accesible, llamativos e interesantes un tipo de productos
                            tan aburridos y plantearlos como un bestseller
                            de los que cuenta matutano y adaptarlo a ese tipo de
                            mercado tan visual y potente. Acercar los productos
                            saludables a una gráfica que no es habitual en estos
                            y posicionarlos en el mercado de lo trending y de lo
                            que al público le llamaría la atención en un supermercado.
                            Toda esta idea bajo el concepto de que se debe
                            concienciar al público más joven y de edad menor
                            a que consuma este tipo de snacks en vez de los
                            otros más grasientos y menos saludables. Concienciar
                            desde abajo a partir de una gráfica que les parezca
                            divertida por todo lo que propone y a la cual
                            quieran recurrir cuando van a la sección de estos
                            productos. No solo quería que fuera llamativa para
                            los jóvenes si no que también llamara la atención del
                            conjunto familiar o de la población en general, creando
                            unas composiciones que no pequen de infantiles
                            si no que sean amables y potentes visualmente.</div>
                        <br>

                    </div>
                </div>
            </div>
            <div class="fotografias max-sm:pt-12 flex flex-col gap-6 h-min">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales3.png" alt="">
            </div>
        </div>

        <div
        class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-0 max-[1920px]:pb-12 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Packs</p> COMPLETOS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text-[#F3536D]">Frambuesa liofilizada</a> - <a class="type text-[#FFB047]">Garzbanzos
                        Spicy</a> - <a class="type text-[#FBCE37]">Snacks de Verduras</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Muestra del packaging
                    final con todas
                    sus caras embolventes viendo como el patrón continua y se va formando por todo el packaging.
                    Esta composición final, se puede ver con todas sus caras, contando con una principal donde vemos el
                    letterin, la mascota y
                    de donde se origina la explosión de elementos y marañas. En la parte izquierda todos los elementos
                    de nutrición y valores energéticos además de información del producto.
                    La parte inferior para otros detalles, logos y cógido de barras. Las otras caras con sus respectivas
                    marañas que coincidiaran con los otros packagings creados. La parte superior finalizará esta
                    composición coincidiendo con todas las caras.
                </div>

            </div>

        </div>

        <div
        class="grid max-sm:gap-12 max-[1500px]:px-0 max-[1920px]:px-12 grid-cols-3 gap-2 items-center justify-items-center px-64 pb-64 max-sm:px-10 max-[1280px]:p-10 max-[800px]:grid-cols-1">

            <img class="image_grid max-sm:hidden w-full h-full" src="/img/nuevoframbuesa2.gif" alt="">
            <img class="image_grid max-sm:hidden w-full h-full" src="/img/nuevoverduras2.gif" alt="">
            <img class="image_grid max-sm:hidden w-full h-full" src="/img/nuevogarbanzos2.gif" alt="">
            <img class="image_grid hidden max-sm:flex w-full h-full" src="/img/nuevoframbuesa2.gif" alt="">
            <img class="image_grid hidden max-sm:flex w-full h-full" src="/img/nuevoverduras2.gif" alt="">
            <img class="image_grid max-sm:pb-24 hidden max-sm:flex w-full h-full" src="/img/nuevogarbanzos2.gif" alt="">

        </div>

        <div
            class="grid pt-24 grid-cols-1 gap-2 items-center justify-items-center px-64 pb-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32 ">

            <Carousel class="carousel max-w-[1200px]">

                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/troquel1.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/troquel2.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/troquel4.png" alt="">

                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>

        </div>


        <div
        class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-4 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Tipografías,</p> JERARQUÍA E INFORMACIÓN
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#F3536D]">Frambuesa liofilizada</a> - <a class="type text-[#FFB047]">Garzbanzos
                        Spicy</a> - <a class="type text-[#FBCE37]">Snacks de Verduras</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Los letterings principales de cada uno de los packs fueron creados a raiz de la forma que los
                    personajes
                    formaban con su silueta. Se crea un lettering entretenido pero legible para cada uno con sus colores
                    principales.
                    Las mascotas son una creación animada de los snacks mencionados.
                </div>

            </div>

        </div>


        <img class="image_grid w-full h-full max-[1440px]:px-64 px-[500px] pt-12 items-center justify-center max-sm:px-0 max-[1280px]:p-0"
            src="/img/3frutaslettering.png" alt="">

        <img class="image_grid w-full h-full max-[1440px]:px-64 pb-32 px-[500px] items-center justify-center max-sm:px-0 max-[1280px]:p-0"
            src="/img/lettering.png" alt="">

        <img class="image_grid px-[500px] max-[1440px]:px-64 pb-32 w-full h-full items-center justify-center max-sm:px-0 max-[1280px]:p-0 max-[800px]:pt-12"
            src="/img/3frutas.png" alt="">


        <div
            class="images pt-20 pb-6 max-[1440px]:px-0 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[1500px]:px-32  max-[800px]:px-0 max-[800px]:pt-12">

            <img src="/img/todospackaging.png" alt="" class="foto justify-center content-center w-full h-full">

        </div>

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8 px-8 pb-12 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] font-['Neue'] uppercase">▲ Render 3D</a>
        </div>



        <div
            class="grid grid-cols-3 gap-32 px-60 pb-4 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-[800px]:gap-2">

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">
                <div class="div text-[#FFB047] text-center text-[30px] max-[1500px]:text-[16px] max-sm:text-[20px] m-0 animate-pulse font-['PPE-Ultralight'] uppercase">
                    Snacks
                    Garbanzo Spicy</div>
            </div>

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">
                <div class="div text-[#F3536D] text-center text-[30px] max-[1500px]:text-[16px] max-sm:text-[20px] m-0 animate-pulse font-['PPE-Ultralight'] uppercase">
                    Frambuesa Liofilizada</div>
            </div>

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">
                <div class="div text-[#FBCE37] text-center text-[30px] max-[1500px]:text-[16px] max-sm:text-[20px] m-0 animate-pulse font-['PPE-Ultralight'] uppercase">
                    Snacks
                    de verduras</div>
            </div>

        </div>

        <div
        class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-32 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Intercambio</p> DE PIEZAS
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">INTERCAMBIO DE PIEZAS ENTRE LOS PACKS</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-sm:order-last max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Una de las ideas de este packaging es crear un juego visual en el espectador y poder incluso
                    coleccionarlos
                    e intercambiar las diferentes piezas de cada totem, a modo de exposición. Incluso poder usar cada
                    uno de los
                    packagings como contenedor de otras cosas una vez terminado el contenido de estos.
                </div>

            </div>

        </div>

        <div class="titular2 flex justify-center w-full h-full max-sm:hidden">


            <video class="pb-20 justify-items-center content-center justify-center w-full h-full max-sm:pb-12" loop
                autoplay>
                <source src="/img/videointercambio.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div class="hidden titular2 max-sm:flex justify-center w-full h-full max-sm:pb-12">

            <img class="image_grid w-full h-full" src="/img/videointercambio2.gif" alt="">

        </div>

        <div
            class="grid max-[1440px]:px-8 grid-cols-3 gap-8 max-sm:px-4 max-sm:gap-2 px-8 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32 ">
           
            <img class="image_grid w-full h-full" src="/img/combinación1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/combinación2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/combinación3.png" alt="">

        </div>

        <div
            class="grid grid-cols-3 gap-8 max-[1440px]:px-8 px-8 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-32  max-sm:hidden">
            <a class="type text-[14px] pt-4 font-['Neue'] uppercase">▲ Combinación entre packs</a>
        </div>

        <div
        class="titular2 max-[1500px]:pt-32 max-[1500px]:pb-32 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-40 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">Bocetos y</p> CREACIÓN
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center  max-[1280px]:text-left">
                    <a class="type text">BOCETOS Y PROCESO DE LOS PACKS</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-sm:order-last max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Para crear los packs y que todos coincidan entre sí había que crear una reticula común o patrón del
                    que
                    partir para que todo encajase entre sí. La cara principal mantiene la misma estructura en los 3, con
                    el
                    personaje en el centro
                    y el lettering en la zona inferior.
                </div>

            </div>

        </div>

        <div
            class="grid max-[1440px]:px-32 grid-cols-2 gap-2 items-center justify-items-center px-64 pb-32 max-sm:px-10 max-[1280px]:p-10 max-[1500px]:px-32  max-sm:grid-cols-1">

            <Carousel class="carousel max-w-[320px]">

                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetov1.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetog1.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetof1.png" alt="">

                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>

            <Carousel class="carousel max-w-[1000px]">

                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetov2.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetog2.png" alt="">

                </Slide>
                <Slide v-for="slide in 1" :key="slide">
                    <img class="image_grid w-full h-full" src="/img/bocetof2.png" alt="">

                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>

        </div>

        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-32 ">
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
            class="links_rrss font-['SFUIDisplay-Light'] leading-6 pt-32 px-64 pb-32 text-zinc-600 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11zinc.svg">
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
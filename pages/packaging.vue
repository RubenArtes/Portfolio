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
                class="titular text-[120px] font-['Domaine-Display'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-[#b91c1c] via-[#be185d] to-[#fb7185] animate-text max-[600px]:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                MATUTANO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:pt-6 max-[600px]:pb-16 max-[600px]:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Diseño
                    Matutano - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
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
            class="trabajos flex pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] text-center font-['Domaine-Display'] uppercase text-[24px] leading-10 text-zinc-800 max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos del Diseño Gráfico, 3º Curso Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    2 - 3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[60ch] font-['Domaine-Display'] text-center text-[24px] uppercase leading-10 text-zinc-800 max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Matutano Saludable
                </div>
            </div>
        </div>

        <div
            class="video flex pt-20 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="image w-full h-full" src="/img/packagingtodos.png" alt="">


        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                        TRES PACKS SALUDABLES</div>
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
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/finales3.png" alt="">
            </div>
        </div>

        <div
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                CARAS <br> COMPLETAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[600px]:order-last max-[1280px]:text-left">
                    <a class="type text-[#F3536D]">Frambuesa liofilizada</a> - <a class="type text-[#FFB047]">Garzbanzos
                        Spicy</a> - <a class="type text-[#FBCE37]">Snacks de Verduras</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
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
            class="grid grid-cols-3 gap-2 items-center justify-items-center px-64 pb-32 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60 max-[800px]:grid-cols-1">

            <img class="image_grid w-full h-full" src="/img/gifframbuesa2.gif" alt="">
            <img class="image_grid w-full h-full" src="/img/gifverduras2.gif" alt="">
            <img class="image_grid w-full h-full" src="/img/gifgarbanzos2.gif" alt="">


        </div>

        <div
            class="grid grid-cols-1 gap-2 items-center justify-items-center px-64 pb-12 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60">

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
            class="titular2 flex px-64 pb-2 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-[600px]:text-30px max-[600px]:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                TIPOGRAFÍA, <br> JERARQUÍAS<br>E INFORMACIÓN</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-[#F3536D]">Frambuesa liofilizada</a> - <a class="type text-[#FFB047]">Garzbanzos
                        Spicy</a> - <a class="type text-[#FBCE37]">Snacks de Verduras</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Tipografía, jerarquía y
                    colores utilizados para cada uno de los packaging en la información nutricional y elementos
                    técnicos. Muestra de la cara de cada packaging con la información
                    nutricional y con la cara de abajo.
                </div>

            </div>

        </div>

        <img class="image_grid w-full h-full px-72 items-center justify-center max-[600px]:px-0 max-[1280px]:p-0"
            src="/img/3frutaslettering.png" alt="">

        <img class="image_grid w-full h-full pb-32 px-72 items-center justify-center max-[600px]:px-0 max-[1280px]:p-0"
            src="/img/lettering.png" alt="">

        <img class="image_grid px-72 pb-32 w-full h-full items-center justify-center max-[600px]:px-0 max-[1280px]:p-0 max-[800px]:pt-12"
            src="/img/3frutas.png" alt="">


        <div
            class="images pt-20 pb-20 text-white justify-center content-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[1500px]:px-60 max-[800px]:px-0 max-[800px]:pt-12">

            <img src="/img/todospackaging.png" alt="" class="foto justify-center content-center w-full h-full">
        </div>

        <div
            class="grid grid-cols-3 gap-32 px-60 pb-4 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60 max-[800px]:gap-2">

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-10">Render 3D con iluminación y
                colores
                <br>
                <div
                    class="div text-[#FFB047] text-center text-lg m-0 animate-pulse font-['Domaine-Display'] uppercase">
                    Snacks
                    Garbanzo Spicy</div>
            </div>

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">Render 3D con iluminación y colores
                <br>
                <div
                    class="div text-[#F3536D] text-center text-lg m-0 animate-pulse font-['Domaine-Display'] uppercase">
                    Frambuesa Liofilizada</div>
            </div>

            <div class="div text-zinc-600 text-center text-xs m-0 pb-14 max-xl:pb-4">Render 3D con iluminación y colores
                <br>
                <div
                    class="div text-[#FBCE37] text-center text-lg m-0 animate-pulse font-['Domaine-Display'] uppercase">
                    Snacks
                    de verduras</div>
            </div>

        </div>

        <div
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                INTERCAMBIO <br> DE PIEZAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[600px]:order-last max-[1280px]:text-left">
                    <a class="type text">INTERCAMBIO DE PIEZAS ENTRE LOS PACKS</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Una de las ideas de este packaging es crear un juego visual en el espectador y poder incluso
                    coleccionarlos
                    e intercambiar las diferentes piezas de cada totem, a modo de exposición. Incluso poder usar cada
                    uno de los
                    packagings como contenedor de otras cosas una vez terminado el contenido de estos.
                </div>

            </div>

        </div>

        <div
            class="grid grid-cols-3 gap-2 px-60 pb-32 max-xl:grid-cols-1 max-xl:px-10 max-xl:pb-10 max-xl:pt-10 max-[1500px]:px-60">

            <img class="image_grid w-full h-full" src="/img/combinación1.png" alt="">
            <img class="image_grid w-full h-full" src="/img/combinación2.png" alt="">
            <img class="image_grid w-full h-full" src="/img/combinación3.png" alt="">

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
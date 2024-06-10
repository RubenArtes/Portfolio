<template>
    <div class="app bg-[#EAEEF5] font-['SFUIDisplay-Regular']">
        <Cursor />
        <div
            class="header bg-[#EAEEF5] p-10 flex px-24 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
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
                class="titular text-[120px] font-['Domaine-Display'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-[#311568] via-[#4797ff] to-[#311568] animate-text max-[600px]:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                PRAU</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:pt-6 max-[600px]:pb-16 max-[600px]:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-20">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Diseño Prau - Packaging - Marca -
                    Diseño Gráfico</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch]">
                    Este trabajo consiste en
                    realizar una identidad visual de un distribuidor de productos y alimentos de km0, que cumplan ciertas
                    condiciones, como productos de buena calidad y relación calidad precio y que sean productos artesanos y
                    de proximidad. Creación de la marca visual, logo y tres productos, uno siendo el vino el principal
                    productos y otros dos a elección propia, en mi caso el queso de cabra y la mermelada natural (naranja).
                    Hay que crear un nombre y logo de marca (+ descriptor), propuesta de etiquetado para vino y otros dos
                    productos, rotulo de fachada y bolsa de papel.
                    Mi proyecto se llama Prau, una bodega de vinos que crea productos KM0 de La Rioja.
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
                    Proyectos del Diseño Gráfico, 2º Diseño Gráfico
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
                    class="text max-w-[30ch] text-center font-['SFUIDisplay-Light']  text-[16px] leading-6 text-zinc-900 max-xl:text-sm max-xl:max-w-[40ch]">
                    Productos KM0, responsables con el medioambiente y lo natural.
                </div>
            </div>
        </div>

        <div
            class="video flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="" width="1240" height="788" loop autoplay controls>
                <source src="/img/prau.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                        PRAU LA MARCA KM0</div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Esta marca es un gran legado familiar y a lo largo de tres generaciones se ha producido un vino
                        clarete de alta calidad, conservando siempre el gran valor principal de esta marca, la pasión por la
                        tierra y dedicarse con un gran compromiso a esta.
                        Cobra una gran importancia el cuidado del terreno y los suelos que ofrecen luego un gran producto de
                        calidad. <br> <br>
                        <div class="text indent-12">Una vez desarrollado durante años el vino clarete se ha pensado el
                            producir otras elaboraciones
                            asemejando la calidad y el cuidado del vino y con la idea de crear productos gourmets. Estos
                            productos serán el queso de cabra y la mermelada natural, haciendo de estos unos productos con
                            una
                            elaboración muy cuidada y artesanal con cero idea de producción industrial.
                            Esta marca tendrá como nombre Prau, productor y exportador de La Rioja con un concepto de pasión
                            por
                            la tierra y el campo.</div>
                        <br>
                        <div class="text indent-12">El nombre de Prau nace con la idea de utilizar el campo y la tierra y
                            combinarlo con el dialecto
                            riojano, por lo que Prau - Del dialecto de Rioja, riojano, sirve para denominar al prado, al
                            campo
                            la tierra en general. Entra en consonancia con los valores de esta marca, ya que representa esa
                            pasión por la tierra y por
                            los campos de cultivo, esa pasión por el terreno que lleva pasando de familia en familia.</div>
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect border border-zinc-500 w-[550px] bg-white" src="/img/vino3.png" alt="">
                <img class="image_rect border border-zinc-500 w-[550px] bg-white" src="/img/vino2.png" alt="">
                <img class="image_rect w-[550px]" src="/img/vino1.png" alt="">
            </div>
        </div>

        <div
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:px-60 max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-[600px]:text-30px max-[600px]:leading-10 max-[1500px]:text-left">
                MERMELADAS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[600px]:px-0 max-[1280px]:p-0">

                <div
                    class="text max-w-[80ch] text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de mermelada,
                    muestra de la etiqueta y como se integra
                    en el packaging de forma embolvente teniendo en cuenta los espaciados, colocación de los textos y
                    maquetación general.
                </div>

            </div>

        </div>

        <div
            class="images pt-20 px-64 pb-10 text-zinc-600 content-center items-center justify-center flex flex-col gap-4 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-[600px]:px-10 max-[1500px]:p-0">


            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/mermelada.png" alt="">
            </div>


            <div
                class="grid grid-cols-1 items-center justify-center content-center max-[600px]:px-0 max-[1280px]:px-0 max-[1500px]:px-60">
                <img class="image_grid w-full h-full pb-4" src="/img/mockupmer.png" alt="">
                <img class="image_grid w-full h-full pt-4 pb-6" src="/img/mockupmer_2.png" alt="">
                <img class="image_grid w-full h-full pt-4 max-xl:pb-12" src="/img/mockupmer_3.png" alt="">
            </div>
        </div>

        <div
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-[600px]:text-30px max-[600px]:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                VINOS</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[80ch] text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de vino,
                    muestra de la etiqueta y como se integra
                    en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de
                    los
                    textos y maquetación general.
                </div>

            </div>

        </div>


        <div
            class="grid grid-cols-1 items-center justify-center px-64 pb-12 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60">
            <img class="image_grid w-full h-full items-center justify-center max-[600px]:px-0 max-[1280px]:p-0"
                src="/img/vino.png" alt="">

        </div>

        <div
            class="grid grid-cols-1 px-64 grid-rows-2 gap-12 max-xl:grid-cols-1 max-xl:pt-10 max-[1280px]:px-10 max-[1280px]:pb-12 max-[1500px]:p-10 max-[1500px]:px-60">

            <img class="image_grid w-full h-full drop-shadow-xl" src="/img/rotulofachada.png" alt="">
            <img class="image_grid w-full h-full drop-shadow-xl" src="/img/vinomoc_2.png" alt="">
            <img class="image_grid w-full h-full drop-shadow-xl" src="/img/vinomoc_3.jpg" alt="">
        </div>

        <div
            class="titular2 flex px-64 pb-24 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-[600px]:text-30px max-[600px]:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                QUESO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[80ch] text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Etiqueta para el apartado de queso,
                    muestra de la pegatina y como se integra
                    en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de
                    los
                    textos y maquetación general.
                </div>

            </div>

        </div>


        <div
            class="grid grid-cols-1 items-center justify-center px-64 pb-12 max-[600px]:px-10 max-[1280px]:p-10 max-[1500px]:px-60">
            <img class="image_grid w-full h-full items-center justify-center max-[600px]:px-0 max-[1280px]:p-0"
                src="/img/queso.png" alt="">

        </div>

        <div
            class="titular2 flex px-64 pb-12 gap-64 pt-32 content-start space-between justify-center pt-20 text-center max-[600px]:px-10 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:pt-10 max-[600px]:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
            <div
                class="titular text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-[600px]:text-30px max-[600px]:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center">
                ILUSTRACIONES</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[80ch] text-left font-['SFUIDisplay-Light'] text-[20px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Ilustraciones creadas para cada uno de los
              packaging
              mediante ilustración digital.
              <br> <br>
              → Vinos - Uvas
              <br>
              → Mermelada - Fruta seleccionada
              <br>
              → Queso de cabra - Cabra
                </div>

            </div>

        </div>

        <div
            class="grid grid-cols-3 pb-40 px-64 grid-rows-1 gap-12 max-xl:grid-cols-1 max-xl:pt-10 max-[1280px]:px-10 max-[1280px]:pb-12 max-[1500px]:p-10 max-[1500px]:px-60">

            <img class="image_grid w-full h-full border" src="/img/1.png" alt="">
            <img class="image_grid w-full h-full drop-shadow-xl" src="/img/2.png" alt="">
            <img class="image_grid w-full h-full drop-shadow-xl" src="/img/3.png" alt="">
        </div>


        <div
            class="trabajos flex pt-24 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1500px]:px-60">
            <div
                class="titular text-[16px] font-['SFUIDisplay-Light'] leading-6 font-normal flex flex-start items-center max-xl:text-xs">
                Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Figma.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Cinema4d.png" alt="">
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

        <div class="foter bg-[#EAEEF5] p-10 flex text-zinc-600 justify-between sticky top-0 max-xl:p-6">
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
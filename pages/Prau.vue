<template>
    <div class="app bg-[#EAEEF6]">
        <Cursor />
        <div class="header bg-[#C9D2E8] p-10 flex text-white justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vector.svg">
                </NuxtLink>
            </div>
            <div class="email text-lg flex gap-2 items-center max-xl:text-xs">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vector-11.svg">
                </NuxtLink>
            </div>
        </div>

        <VueScrollProgressBar background-color="#311568" />

        <div class="trabajos flex pt-20 px-40 pb-10 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 bg-gradient-to-r bg-clip-text text-transparent animate-pulse from-[#311568] via-[#4797ff] to-[#311568] animate-text max-xl:text-[60px] max-xl:justify-center">Packaging</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-[#AFBAD4] max-xl:leading-2 max-xl:text-xs max-xl:text-center">Diseño Prau - Packaging - Marca -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch] max-xl:text-center">Este trabajo consiste en
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

        <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos del Diseño Gráfico, 2º Diseño Gráfico
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    2 - 3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Productos KM0, responsables con el medioambiente y lo natural.
                </div>
            </div>
        </div>

        <div class="video flex px-64 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/prau.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Prau la marca KM0</div>
                    <div class="text text-[16px] leading-6 text-zinc-600 font-normal max-w-[64ch] max-xl:text-xs">
                        Esta marca es un gran legado familiar y a lo largo de tres generaciones se ha producido un vino
                        clarete de alta calidad, conservando siempre el gran valor principal de esta marca, la pasión por la
                        tierra y dedicarse con un gran compromiso a esta.
                        Cobra una gran importancia el cuidado del terreno y los suelos que ofrecen luego un gran producto de
                        calidad.
                        <br><br>
                        Una vez desarrollado durante años el vino clarete se ha pensado el producir otras elaboraciones
                        asemejando la calidad y el cuidado del vino y con la idea de crear productos gourmets. Estos
                        productos serán el queso de cabra y la mermelada natural, haciendo de estos unos productos con una
                        elaboración muy cuidada y artesanal con cero idea de producción industrial.
                        Esta marca tendrá como nombre Prau, productor y exportador de La Rioja con un concepto de pasión por
                        la tierra y el campo.
                        <br><br>
                        El nombre de Prau nace con la idea de utilizar el campo y la tierra y combinarlo con el dialecto
                        riojano, por lo que Prau - Del dialecto de Rioja, riojano, sirve para denominar al prado, al campo
                        la tierra en general.
                        <br><br>
                        Entra en consonancia con los valores de esta marca, ya que representa esa pasión por la tierra y por
                        los campos de cultivo, esa pasión por el terreno que lleva pasando de familia en familia.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col h-min">
                <img class="image_rect rounded-xl w-[550px]" src="/img/vino3.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/vino2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/vino1.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Mermeladas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Etiqueta para el apartado de mermelada,
                muestra de la etiqueta y como se integra
                en el packaging de forma embolvente teniendo en cuenta los espaciados, colocación de los textos y
                maquetación general.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/mermelada.png" alt="">
            </div>

            <div class="grid grid-cols-3 pt-10 gap-2 pb-6 max-xl:pb-16 max-lg:grid-cols-1">
                <img class="image_grid w-full h-full drop-shadow-xl" src="/img/mockupmer.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-xl" src="/img/mockupmer_2.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-xl " src="/img/mockupmer_3.png" alt="">
            </div>


        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Vinos</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Etiqueta para el apartado de vino,
                muestra de la etiqueta y como se integra
                en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de los
                textos y maquetación general.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/vino.png" alt="">
            </div>

            <div class="grid grid-cols-3 pt-10 gap-2 pb-6 max-xl:pb-16 max-lg:grid-cols-1">
                <img class="image_grid w-full h-full drop-shadow-xl" src="/img/vinomoc_1.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-xl" src="/img/vinomoc_2.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-xl" src="/img/vinomoc_3.jpg" alt="">
            </div>


        </div>


        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Queso</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Etiqueta para el apartado de queso,
                muestra de la pegatina y como se integra
                en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de los
                textos y maquetación general.
            </div>

            <div class="grid grid-cols-1 max-xl:pb-16">
                <img class="image_grid w-full h-full" src="/img/queso.png" alt="">
            </div>



        </div>

        <div class="images pt-6 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Ilustraciones</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold max-xl:text-xs">Ilustraciones creadas para cada uno de los
                packaging
                mediante ilustración digital.
                <br> <br>
                → Vinos - Uvas
                <br>
                → Mermelada - Fruta seleccionada
                <br>
                → Queso de cabra - Cabra
            </div>

            <div class="grid grid-cols-3 pt-10 pb-10">
                <img class="image_grid w-full h-full" src="/img/1.png" alt="">
                <img class="image_grid w-full h-full" src="/img/2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/3.png" alt="">
            </div>


        </div>


        <div class="images px-64 pb-10 text-zinc-600 justify-center max-xl:pt-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4 max-xl:pb-16">
            <img src="/img/presentacionvinos.png" alt="">
        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10 max-lg:grid max-lg:grid-cols-3">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]" src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Figma.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Cinema4d.png" alt="">
                </div>
            </div>
        </div>

        <div class="links_rrss pt-32 px-80 pb-32 text-zinc-600 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11zinc.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.behance.net/rubenartes">Behance
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-[#C9D2E8] p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
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
<template>
    <div class="app bg-[#EAEEF6]">
        <div class="header bg-[#C9D2E8] p-10 flex text-white justify-between sticky top-0 z-10">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector" src="/img/Vector.svg">
                </NuxtLink>
            </div>
            <div class="email text-lg flex gap-2 items-center">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector" src="/img/Vector-11.svg">
                </NuxtLink>
            </div>
        </div>
        <div class="trabajos flex pt-20 px-40 pb-10 text-white flex-nowrap items-center gap-64 justify-center">
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12 text-[#311568]">Packaging</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-[#AFBAD4]">Diseño Prua - Packaging - Marca -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-600 font-bold">Este trabajo consiste en
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
        <div class="video flex px-64 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/prau.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Prau la marca KM0</div>
                    <div class="text text-[16px] leading-6 text-zinc-600 font-normal max-w-[64ch]">
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
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Mermeladas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Etiqueta para el apartado de mermelada,
                muestra de la etiqueta y como se integra
                en el packaging de forma embolvente teniendo en cuenta los espaciados, colocación de los textos y
                maquetación general.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/mermelada.png" alt="">
            </div>

            <div class="grid grid-cols-3 gap-2 pb-6">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/mockupmer.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/mockupmer_2.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/mockupmer_3.png" alt="">
            </div>


        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Vinos</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Etiqueta para el apartado de vino,
                muestra de la etiqueta y como se integra
                en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de los
                textos y maquetación general.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/vino.png" alt="">
            </div>

            <div class="grid grid-cols-3 gap-2 pb-6">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/vinomoc_1.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/vinomoc_2.png" alt="">
                <img class="image_grid w-full h-full drop-shadow-md" src="/img/vinomoc_3.jpg" alt="">
            </div>


        </div>


        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Queso</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Etiqueta para el apartado de queso,
                muestra de la pegatina y como se integra
                en el packaging con la cara de delante y la de detrás teniendo en cuenta los espaciados, colocación de los
                textos y maquetación general.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/queso.png" alt="">
            </div>



        </div>

        <div class="images pt-6 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-[#311568]">Ilustraciones</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold">Ilustraciones creadas para cada uno de los
                packaging
                mediante ilustración digital.
                <br> <br>
                → Vinos - Uvas
                <br>
                → Mermelada - Fruta seleccionada
                <br>
                → Queso de cabra - Cabra
            </div>

            <div class="grid grid-cols-3 pb-6">
                <img class="image_grid w-full h-full" src="/img/1.png" alt="">
                <img class="image_grid w-full h-full" src="/img/2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/3.png" alt="">
            </div>


        </div>


        <div class="images pt-20 px-64 pb-10 text-zinc-600 justify-center">
            <img src="/img/presentacionvinos.png" alt="">
        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center">
            <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100" src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100" src="/img/Figmazinc.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Illustratorzinc.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/InDesignzinc.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Photoshopzinc.svg" alt="">
                </div>
            </div>
        </div>

        <div class="links_rrss pt-32 px-80 pb-32 text-zinc-600 justify-center flex flex-row gap-60">
            <div class="email text-lg flex gap-2 items-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11zinc.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32">
                    <a class="red flex gap-2 items-center" href="https://www.instagram.com/ruben.artes/">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                    <a class="red flex gap-2 items-center" href="https://www.behance.net/rubenartes">Behance
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end">
                    <a class="red flex gap-2 items-center" href="https://www.instagram.com/ruben.iso">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">

                    </a> <a class="red flex gap-2 items-center" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-[#C9D2E8] p-10 flex text-white justify-between sticky top-0">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector" src="/img/star.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector" src="/img/futbol.svg">
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
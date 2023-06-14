<template>
    <div class="app bg-white">
        <div class="header bg-zinc-100 p-10 flex text-black justify-between sticky top-0 z-10">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector fill-black" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>
            <div class="email text-lg flex gap-2 items-center">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector" src="/img/Vector-11black.svg">
                </NuxtLink>
            </div>
        </div>
        <div class="trabajos flex pt-20 px-40 text-black flex-nowrap items-center gap-64 justify-center">
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12 text-black">Ilustraciones</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400">Dibujos - Lettering - Ilustraciones -
                    Carteles -
                    Pegatinas</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-600 font-bold">Recopilatorio de mis
                    ilustraciones, carteles ilustrados,
                    lettering y dibujos variados realizados digitalmente en Procreate con el IPad.
                </div>
            </div>
        </div>
        <div class="video flex px-64 pt-10 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/videoilustraciones.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-black gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Ilustraciones Isométricas</div>
                    <div class="text text-[16px] leading-6 text-zinc-600 font-normal max-w-[64ch]">
                        Una de las ilsutraciones que más he estado practicando ultimamente son perspectivas e isométricas
                        creando espacios en 3D en un dibujo 2D.
                        Me han ayudado mucho a comprender el espacio y a componer. Después gracias a estos dibujos he
                        practicado bastante la creación de sombras e iluminaciones, el color
                        y diferentes técnicas con el Procreate para ilustrar.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect w-[550px]" src="/img/isometrica.png" alt="">

            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Bocetos y creación</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12"> Creación de las perspectivas paso a
                paso.
            </div>

            <div class="grid grid-cols-4 gap-2">
                <img class="image_grid w-full h-full" src="/img/isometrica6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica11.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica7.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica5.png" alt="">
            </div>
            <div class="grid grid-cols-4 gap-2">
                <img class="image_grid w-full h-full" src="/img/isometrica4.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica10.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica8.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica3.png" alt="">
            </div>
            <div class="grid grid-cols-4 gap-2">
                <img class="image_grid w-full h-full border- border-zinc-400" src="/img/isometrica2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica12.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica9.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica1.png" alt="">
            </div>

        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Pegatinas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Pegatinas con temática Ataque a los
                Titanes.
            </div>

            <div class="grid grid-cols-2 gap-2">
                <img class="image_grid w-full h-full" src="/img/pegatinas.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas4.png" alt="">
            </div>

        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Casa de las Carcasas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Ilustraciones con temática de
                Jean-Michel Basquiat y el Neoexpresionismo
                para las fundas encargadas por la Casa de las Carcasas.
            </div>

            <div class="grid grid-gaps-3 gap-2">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout.png" alt="">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout3.png" alt="">
            </div>


        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Pegatinas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12">Pegatinas con temática Cars.
            </div>

            <div class="grid grid-cols-3 gap-2">
                <img class="image_grid w-full h-full" src="/img/pegatinac.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinac2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinac3.png" alt="">

            </div>

        </div>




        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-600 flex-col gap-10 justify-center items-center">
            <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100" src="/img/Procreate.png"
                        alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Illustratorblack.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Photoshopblack.svg" alt="">

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

        <div class="foter bg-zinc-100 p-10 flex text-black justify-between sticky top-0">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector" src="/img/starblack.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector" src="/img/futbolblack.svg">
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
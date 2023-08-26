<template>
    <div class="app bg-white">
        <Cursor />
        <div class="header bg-white p-10 flex text-black justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>

            <div class="email text-lg flex gap-2 items-center max-xl:text-xs">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[8px]" src="/img/Vector-11black.svg">
                </NuxtLink>
            </div>
        </div>
        <VueScrollProgressBar background-color="white" />
        <div
            class="trabajos flex pt-20 px-40 pb-10 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div
                class="titular text-[100px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#c4c6cc] via-[#141517] to-[#5c5c5e] max-xl:text-[45px] max-xl:justify-center">
                Provoke</div>

        </div>



        <div
            class="images pt-20 px-14 pb-10 text-black text-center items-center justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[70ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">Fotografías realizadas con temática de la
          revista Japonesa
          Provoke, los cuales utilizan mucho el grano en sus fotografías, el alto contraste, la subexposición y la
          sobrexposición, además de elementos abstractos
          o poco usuales.
                <br>
                <br>
                <div class="fecha pb-10 text-xs">3 curso ESD Madrid</div>
            </div>

            <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1">

                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke2.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke10.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke11.jpg" alt="">

                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke9.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke8.jpg" alt="">

                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke6.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke7.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke3.jpg" alt="">

                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke4.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke5.jpg" alt="">
                <img class="image_grid w-full h-full mb-2 drop-shadow-xl border border-zinc-200" src="/img/provoke12.jpg" alt="">



            </div>
        </div>




        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Lightroom.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-black justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11black.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11black.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                        <img class="vector" src="/img/Vector-11black.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-white p-10 flex text-black justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/starblack.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbolblack.svg">
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
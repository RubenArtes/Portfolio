<template>
    <div class="app bg-black">
        <Cursor class="max-sm:hidden" />
        <div class="header bg-black p-10 flex text-white justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vector.svg" />
                </NuxtLink>
            </div>

            <div class="email text-lg flex gap-2 items-center max-xl:text-xs">
                ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[8px]" src="/img/Vector-11.svg" />
                </NuxtLink>
            </div>
        </div>
        <VueScrollProgressBar background-color="white" />
        <div
            class="trabajos flex pt-20 px-40 pb-10 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div
                class="titular text-[100px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#c4c6cc] via-[#737373] to-[#5c5c5e] max-xl:text-[45px] max-xl:justify-center">
                Metro Madrid
            </div>
        </div>

        <div
            class="images pt-20 px-14 pb-4 text-black text-center items-center justify-center flex flex-col gap-6 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[50ch] text-[16px] text-zinc-400 font-bold pb-4 max-xl:text-xs">
                Fanzine sobre el Subterraneo de Madrid, conteniendo diferentes temas
                como este, la composición de sus lugares, el tema social y las personas
                y la arquitectura.
                <br />
                <br />
                <div class="fecha pb-4 text-xs">2 curso ESD Madrid</div>
            </div>

            <div
                class="images pt-4 px-64 pb-20 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
                <div class="video flex text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-10">
                    <video class="video w-full h-full" loop autoplay controls>
                        <source src="/img/fanzine2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález2.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález3.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález4.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález5.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález6.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález7.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález8.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález9.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález10.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález11.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález12.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález13.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález14.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález15.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález16.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález17.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález18.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález19.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález20.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález21.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález22.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález23.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález24.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález25.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález26.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález27.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález28.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález29.jpg" alt="" /> 
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález30.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález31.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález32.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález33.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález34.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález35.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález36.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález37.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález38.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález39.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález40.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález41.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález42.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález43.jpg" alt="" />
                <img class="image_grid w-full h-full mb-2" src="/img/Fotolibro_RubénMaldonadoGonzález44.jpg" alt="" />
            </div>
        </div>

        <div
            class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">
                Programas utilizados para este proyecto
            </div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Lightroom.svg" alt="" />
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="" />
                </div>
            </div>
        </div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado." target="_blank"  class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11black.svg" />
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <img class="vector" src="/img/Vector-11.svg" />
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11.svg" />
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11.svg" />
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                        <img class="vector" src="/img/Vector-11.svg" />
                    </a>
                </div>
            </div>
        </div>

        <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/star.svg" />
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">
                Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbol.svg" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            const newVideo = document.getElementById("videoElementId");
            newVideo.addEventListener("ended", () => {
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

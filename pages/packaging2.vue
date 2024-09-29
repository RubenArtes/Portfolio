<template>
    <div id="inicio" class="app bg-white font-['SFUIDisplay-Light']">
        <Cursor class="max-sm:hidden" />
        <div
            class="header opacity-40 bg-white p-10 border-t-0 px-32 text-black flex justify-center sticky top-0 z-50 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:px-8">
            <div class="image place-self-start self-center">
                <NuxtLink to="/Home">
                    <img class="max-lg:max-w-[15px] w-[20px]" src="/img/darklogo.png" />
                </NuxtLink>
            </div>
        </div>

        <div
            class="header opacity-40 bg-white p-2 px-12 text-black flex justify-center items-center sticky top-[122px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2 max-sm:top-[76px]">
            <div
                class="titular_small uppercase pr-2 pl-2 text-zinc-900 font-['Neue'] text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
                Ultima actualización Septiembre 2024
            </div>
            <img class="info max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
        </div>
        <!--<div
        class="header text-black justify-center items-center sticky top-[122px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2 max-sm:top-[76px]">
        <div class=" text-center animate-pulse opacity-30">
          <div class="py-2 w-full place-self-center text-center justify-center items-center text-indigo-100 leading-none grid lg:inline-flex"
            role="alert">
            <span
              class="titular_small uppercase text-zinc-800 font-['Neue'] text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px] mr-2 text-left">Ultima
              actualización Septiembre 2024</span>
            <span class="flex rounded-full bg-zinc-200 uppercase px-2 py-1 text-xs font-bold mr-3">
              <img class="info max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
            </span>
          </div>
        </div>
      </div> -->



        <div
            class="trabajos hidden px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-[720px]:px-4 max-sm:px-2 max-sm:pb-8 max-sm:pt-12 max-sm:hidden">
            <div class="titular_flex pt-12 flex flex-col max-lg:items-center max-lg:flex max-[2000px]:px-0 max-sm:pt-2">
                <div
                    class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[50px] max-sm:leading-[3rem] max-sm:font-['SFUIDisplay-Bold']">
                    RUBÉN MALDONADO
                </div>
            </div>
        </div>


        <!--<div
        class="trabajos hidden max-sm:grid px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-sm:px-2 max-sm:text-center max-sm:pb-72">
        <div class="titular_flex pt-12 grid grid-flow-row grid-rows-2 gao-2 max-lg:items-center max-[2000px]:px-0 max-sm:pt-2">
          <div
            class="titular2 gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[120px] max-sm:leading-[4.75rem] max-sm:font-['SFUIDisplay-Regular'] max-sm:text-[120px]">
            RUBÉN
          </div>
          <div
            class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[60px] max-sm:font-['SFUIDisplay-Regular'] max-sm:gap-2 max-sm:leading-[0.25rem]">
            MALDONADO
          </div>
        </div>
      </div>-->

        <div
            class="banner flex max-[1920px]:pt-[120px] max-[1920px]:pb-[100px] pt-[280px] pb-[200px] text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1920px]:px-28 max-sm:hidden">
            <img class="banner_image max-[1920px]:w-[240px] w-[300px] h-full" src="/img/logorubenmal5.svg">


        </div>



        <div
            class="banner hidden max-sm:px-8 max-sm:flex max-sm:pt-12 max-sm:pb-12 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <img class="banner_image w-[140px] h-full" src="/img/logorubenmal5.svg">


        </div>

        <div class="grid opacity-40 grid-cols-3 px-32 max-sm:px-8 pt-2 max-[1920px]:pt-0 max-sm:grid-cols-1 ">

            <div class="texto1 flex flex-col place-self-start self-end">

                <div
                    class="text flex text-[40px] leading-[4rem] font-['PPE-UltralightItalic'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
                    Portfolio
                    <img class="w-[12px] h-[12px]" src="/img/Copyright.svg">
                </div>

                <div
                    class="text text-[14px] leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[14px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-start max-[1920px]:text-[14px] max-[1920px]:leading-[16px]">

                    <p class="font-['Neue']">[ r -- n ]</p>
                    <p class="font-['Neue'] text-zinc-500">RUBÉN MALDONADO GONZÁLEZ</p>
                    <p class="font-['Neue'] text-zinc-500">SEPTIEMBRE 2024</p>
                </div>


            </div>


            <div class="texto2 hidden max-sm:flex gap-6 justify-between max-sm:pt-4">

                <div
                    class="text place-self-start text-[14px] text-left max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-start justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-[1920px]:leading-[14px]">
                    <br>
                    [ PACKAGING ]
                    <br>
                    [ EDITORIAL ]
                    <br>
                    [ MARCA ]
                    <br>
                    [ ILUSTRACIÓN ]
                    <br>
                    [ RENDER ]
                    <br>
                    [ AUDIOVISUALES ]
                </div>

                <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:pt-0">

                    <a href="#trabajos"
                        class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
                        Trabajos.
                    </a>


                    <a href="#servicios"
                        class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
                        Servicios.
                    </a>
                    <a href="#sobremi"
                        class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
                        Sobre mi.
                    </a>
                    <a href="#tienda"
                        class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
                        Tienda.
                    </a>



                </div>


            </div>

            <div class="texto2 flex max-sm:hidden gap-6 justify-center self-end">

                <div
                    class="text place-self-end text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
                    <a class="bg-[#CB2E5D] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5] mb-1">&nbsp;[
                        PACKAGING&nbsp;</a>
                    <a class="bg-[#F59A37] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5] mb-1">&nbsp;[
                        EDITORIAL&nbsp;</a>
                    <a class="bg-[#0449AF] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5]">&nbsp;[
                        MARCA&nbsp;</a>
                </div>

                <div
                    class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
                    <a class="bg-[#CB2E5D] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5] mb-1">&nbsp;ILUSTRACIÓN
                        ]&nbsp;</a>
                    <a class="bg-[#F59A37] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5] mb-1">&nbsp;RENDER
                        ]&nbsp;</a>
                    <a class="bg-[#0449AF] bg-opacity-10 hover:bg-opacity-100 text-[#252422] hover:text-[#F5F5F5]">&nbsp;AUDIOVISUALES
                        ]&nbsp;</a>
                </div>


            </div>

            <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:pt-0 max-sm:hidden">

                <a href="#sobremi"
                    class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
                    > Sobre mi.
                </a>
                <a href="#trabajos"
                    class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
                    > Trabajos.
                </a>


                <a href="#servicios"
                    class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
                    > Servicios.
                </a>
                <a href="#tienda"
                    class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
                    > Tienda.
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'


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
}
</script>

<style lang="sass" scoped>

  .email
    &:hover
      @apply text-zinc-300
  
  .red
    &:hover
        @apply text-zinc-300
  
  </style>
<template>
    <div class="app bg-black">
      <Cursor />
      <div class="header bg-black p-10 flex text-white justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
        <div class="image flex flex-start">
          <NuxtLink to="/">
            <img class="vector max-xl:max-w-[15px]" src="/img/Vector.svg">
          </NuxtLink>
        </div>
        <div class="email text-lg flex gap-2 items-center max-xl:text-xs">ruben.maldonado.graphic@gmail.com
          <NuxtLink to="/">
            <img class="vector max-xl:max-w-[8px]" src="/img/Vector-11.svg">
          </NuxtLink>
        </div>
      </div>

      <VueScrollProgressBar background-color="white" />
      <div class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
        <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#979797] via-[#dfdfdf] to-[#ffffff] animate-text max-xl:text-[60px] max-xl:justify-center">Arte Final</div>
        <div class="info flex flex-col gap-6">
          <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Fotografías - Ediciones - Arte Final -
            Maquetación -
            Diseño Gráfico</div>
          <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-300 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">Creación de Arte Final y libro sobre una temática (Metro de Madrid),
            recreando los diferentes efectos de impresión y controlando todos los elementos a la ahora de crear un Arte Final para imprenta.
          </div>
        </div>
      </div>

      <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Fundamentos de estampación e impresión, 2º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Creación de Artes Finales y producción de libro impreso.
                </div>
            </div>
        </div>
      <div class="video flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
        <video width="1240" height="788" loop autoplay controls>
          <source src="/img/fanzine3.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
  
      </div>
  
      <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-4 max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
        <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Páginas desglosadas</div>
        <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs max-xl:pb-4">Doble páginas de todo el libro completo, mostrando la maquetación y la edición
            de las diferentes fotografías.
        </div>
  
        <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental2.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental3.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental4.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental5.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental6.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental7.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental8.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental9.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental10.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental11.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental12.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental13.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental14.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental15.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental16.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental17.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental18.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental19.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental20.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental21.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental22.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental23.png" alt="">
          <img class="image_grid w-full h-full pb-2" src="/img/libroexperimental24.png" alt="">


  
        </div>
      </div>
  
  
      <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
        <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
          proyecto</div>
        <div class="programas flex flex-col items-center">
          <div class="three_programas flex gap-10">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Lightroom.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
          </div>
        </div>
      </div>
  
  
      <div class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado." target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11.svg">
        </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
                            <img class="vector" src="/img/Vector-11.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.behance.net/rubenartes">Behance
                            <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
                            <img class="vector" src="/img/Vector-11.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
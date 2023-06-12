<template>
    <div class="app bg-black">
      <div class="header bg-black p-10 flex text-white justify-between sticky top-0">
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
      <div class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
        <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Arte Final</div>
        <div class="info flex flex-col gap-6">
          <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200">Fotografías - Ediciones - Arte Final -
            Maquetación -
            Diseño Gráfico</div>
          <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold">Creación de Arte Final y libro sobre una temática (Metro de Madrid),
            recreando los diferentes efectos de impresión y controlando todos los elementos a la ahora de crear un Arte Final para imprenta.
          </div>
        </div>
      </div>
      <div class="video flex px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
        <video width="1240" height="788" loop autoplay controls>
          <source src="/img/fanzine3.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
  
      </div>
  
      <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-4">
        <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Páginas desglosadas</div>
        <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Doble páginas de todo el libro completo, mostrando la maquetación y la edición
            de las diferentes fotografías.
        </div>
  
        <div class="grid grid-cols-2 gap-4">
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
  
  
      <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center">
        <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
          proyecto</div>
        <div class="programas flex flex-col items-center">
          <div class="three_programas flex gap-10">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Lightroom.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Photoshop.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Illustrator.svg" alt="">
            <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/InDesign.svg" alt="">
          </div>
        </div>
      </div>
  
  
      <div class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60">
        <div class="email text-lg flex gap-2 items-center">ruben.maldonado.graphic@gmail.com
          <NuxtLink to="/">
            <img class="vector" src="/img/Vector-11.svg">
          </NuxtLink>
        </div>
        <div class="links flex flex-col gap-2">
          <div class="links1 flex gap-32">
            <a class="red flex gap-2 items-center" href="https://www.instagram.com/ruben.artes/">Instagram
              <NuxtLink to="/">
                <img class="vector" src="/img/Vector-11.svg">
              </NuxtLink>
            </a>
            <a class="red flex gap-2 items-center" href="https://www.behance.net/rubenartes">Behance
              <NuxtLink to="/">
                <img class="vector" src="/img/Vector-11.svg">
              </NuxtLink>
            </a>
          </div>
          <div class="links2 flex gap-32 flex-end">
            <a class="red flex gap-2 items-center" href="https://www.instagram.com/ruben.iso">Instagram
              <NuxtLink to="/">
                <img class="vector" src="/img/Vector-11.svg">
              </NuxtLink>
  
  
            </a> <a class="red flex gap-2 items-center" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
              <NuxtLink to="/">
                <img class="vector" src="/img/Vector-11.svg">
              </NuxtLink>
            </a>
          </div>
        </div>
  
      </div>
  
      <div class="foter bg-black p-10 flex text-white justify-between sticky top-0">
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
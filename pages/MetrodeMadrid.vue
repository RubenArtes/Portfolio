<template>
  <div class="app bg-black font-['SFUIDisplay-Regular']">
    <Cursor class="max-sm:hidden" />
    <div
      class="header bg-black border-0 p-10 flex px-24 text-white justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border-b-0">
      <div class="image flex flex-start justify-items-start">
        <NuxtLink to="/">
          <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
        </NuxtLink>
      </div>

      <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11white.svg">
      </div>

    </div>

    <VueScrollProgressBar background-color="#52525B" />
    <div id="navegacion"
      class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
      <div
        class="titular max-[1920px]:text-[100px] max-[1920px]:leading-[100px] text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]  max-sm:text-center max-sm:leading-[60px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff]">
        METRO MADRID</div>
      <div
        class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
          ARTE FINAL - FOTOGRAFÍAS - MAQUETACIÓN - EDICIÓN -
          Diseño Gráfico</div>
        <div
          class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
          Creación de Arte Final y libro sobre una temática (Metro de Madrid),
          recreando los diferentes efectos de impresión y controlando todos los elementos a la ahora de crear un Arte
          Final para imprenta.
        </div>

      </div>
    </div>

    <div
      class="trabajos max-[1440px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:px-20 max-[1500px]:justify-between">
      <div class="info flex flex-col">
        <div
          class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
          Asignatura</div>
        <div
          class="text max-w-[200ch] font-['SFUIDisplay-Regular'] text-center max-sm:text-left max-sm:max-w-[26ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
          Fundamentos de estampación e impresión, 2º Diseño Gráfico.
        </div>
      </div>
      <div class="info flex flex-col max-sm:text-start">
        <div
          class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
          Tiempo</div>
        <div
          class="text max-w-[20ch] font-['SFUIDisplay-Regular']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
          3 meses
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
          Briefing</div>
        <div
          class="text max-w-[20ch] text-center font-['SFUIDisplay-Regular'] max-sm:text-left text-[16px] leading-6 text-white max-xl:text-sm max-[1440px]:max-w-[60ch]">
          Creación de Artes Finales y producción de libro impreso.
        </div>
      </div>
    </div>


    <div
      class="video max-[1920px]:px-12 max-[1440px]:px-12 flex pt-20 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
      <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
        <source src="/img/fanzine3.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>

    <div id="primercompartimento"
      class="titular2 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:px-60 max-[1500px]:gap-12 max-[1500px]:items-left max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
      <div
        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
        <p class="font-['PPE-UltralightItalic']">Páginas</p>DESGLOSADAS
      </div>
      <div
        class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
          <a class="type">IMÁGENES DEL PROYECTO COMPLETO</a>
        </div>
        <div
          class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
          Doble páginas de todo el libro completo, mostrando la maquetación y la edición
          de las diferentes fotografías.
        </div>

      </div>

    </div>

    <div class="px-64 max-sm:px-6 max-sm:gap-4 max-[1440px]:px-12 grid grid-cols-2 gap-2 max-xl:grid-cols-1 max-sm:pb-24 max-[1920px]:px-32">
      <img class="image_grid w-full h-full" src="/img/libroexperimental.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental2.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental3.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental4.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental5.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental6.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental7.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental8.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental9.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental10.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental11.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental12.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental13.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental14.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental15.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental16.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental17.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental18.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental19.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental20.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental21.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental22.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental23.png" alt="">
      <img class="image_grid w-full h-full" src="/img/libroexperimental24.png" alt="">

    </div>


    <div
      class="trabajos flex pt-64 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para
        este
        proyecto</div>
      <div class="programas flex flex-col items-center">
        <div class="three_programas flex gap-10">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/Lightroom.svg"
            alt="">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/Photoshop.svg"
            alt="">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/Illustrator.svg"
            alt="">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/InDesign.svg"
            alt="">
        </div>
      </div>
    </div>


    <div
      class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
        target="_blank"
        class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
        <img class="vector" src="/img/Vector-11.svg">
      </a>
      <div class="links flex flex-col gap-2">
        <div class="links1 flex gap-32 max-xl:justify-center">
          <a class="red flex gap-2 items-center max-xl:text-[14px]"
            href="https://www.instagram.com/ruben.artes/">Instagram
            <img class="vector" src="/img/Vector-11.svg">
          </a>
          <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.behance.net/rubenartes">Behance
            <img class="vector" src="/img/Vector-11.svg">
          </a>
        </div>
        <div class="links2 flex gap-32 flex-end max-xl:justify-center">
          <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
            <img class="vector" src="/img/Vector-11.svg">

          </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
            href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
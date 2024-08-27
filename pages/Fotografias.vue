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
    <div
      class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <div
        class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#979797] via-[#dfdfdf] to-[#ffffff] animate-text max-xl:text-[45px] max-xl:justify-center">
        Fotografías</div>
      <div class="info flex flex-col gap-6">
        <div
          class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">
          Fotografías - Ediciones - Retratos -
          Paisajes - Social -
          Diseño Gráfico</div>
        <div
          class="text max-w-[60ch] text-[20px] leading-8 text-zinc-300 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">
          Recopilación de fotografías y
          fanzines realizados durante el curso y
          como trabajos personales sobre diferentes temáticas y con diferentes cometidos. Fotografías de retrato,
          bodegones, paisajes y representación de lo social.
          Editadas y postproducidas.
        </div>
      </div>
    </div>


    <div
      class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
      <div class="info flex flex-col">
        <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
        <div class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
          Fotografía y audiovisuales, Técnicas Fotográficas, 2 - 3º Diseño Gráfico.
        </div>
      </div>
      <div class="info flex flex-col">
        <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
        <div class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
          2 años
        </div>
      </div>
      <div class="info flex flex-col">
        <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
        <div class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
          Creación de fotografías con el aspecto técnico requerido.
        </div>
      </div>
    </div>

    <div
      class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <video width="1240" height="788" loop autoplay controls>
        <source src="/img/fanzine.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>
    <div
      class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
      <div class="info_proyect max-w-[80ch]">
        <div class="info_secondary flex flex-col gap-6 sticky top-32">
          <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Social</div>
          <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch] max-xl:text-xs">
            Sobretodo en la mayoría de mi trabajo me gusta retratar el aspecto social y a las personas sin que se den
            cuenta
            de que están siendo retratadas en la fotografía para darle ese aspecto de improvisación, sin preparar y
            representando
            la realidad.
            <br>
            <br>
            Fotografías realizadas por zonas de Madrid, como Gran Vía o diferentes paradas de Metro de Madrid, contando
            con fotografía a personas o
            fotografías al paisaje o los detalles.
          </div>
        </div>
      </div>

      <div class="fotografias flex flex-col gap-6 h-min items-center">
        <img class="image_rect w-[590px]" src="/img/fotosgrupo.png" alt="">
        <img class="image_rect w-[590px]" src="/img/fotosgrupo2.png" alt="">
        <img class="image_rect w-[590px]" src="/img/fotosgrupo3.png" alt="">
        <img class="image_rect w-[590px]" src="/img/fotosgrupo4.png" alt="">
        <img class="image_rect w-[590px]" src="/img/fotosgrupo5.png" alt="">

      </div>
    </div>

    <div
      class="categorias pt-20 px-64 pb-14 text-center items-center text-white justify-center flex flex-col gap-4 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Categorías fotográficas</div>
      <div class="text max-w-[100ch] text-[14px] text-zinc-500 font-bold max-xl:text-xs">Selecciona una catetegoría de
        fotografías para saber más y ver la colección completa de imágenes.</div>
    </div>

    <div
      class="seleccion_trabajos pt-4 px-64 pb-20 text-white flex flex-col justify-center max-lg:px-6 max-lg:justify-items-center max-lg:justify-center">
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Oporto">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes3.png">
          </NuxtLink>
          
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Provoke">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes.png">
          </NuxtLink>

        </div>
      </div>
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Bodegon">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes4.png">
          </NuxtLink>
          
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/retratos">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes2.png">
          </NuxtLink>

        </div>
      </div>

      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/MetroMadrid">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes5.png">
          </NuxtLink>
          
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/madrid">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Portadaimagenes6.png">
          </NuxtLink>

        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para
        este
        proyecto</div>
      <div class="programas flex flex-col items-center">
        <div class="three_programas flex gap-10">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/Lightroom.svg"
            alt="">
          <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]" src="/img/Photoshop.svg"
            alt="">
        </div>
      </div>
    </div>

    <div
      class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-xl:text-xs max-xl:text-center">
      Modelos: Laura Morales, Barbara Ibañez, Carlos Martinez, Sergio Martin y Lisa Barbieri.</div>

    <div
      class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado." target="_blank"  class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
        ruben.maldonado.graphic@gmail.com
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
};

</script>


<style lang="sass" scoped>


.email
  &:hover
    @apply text-zinc-300

.image
  @apply transition ease-in-out delay-150
  &:hover
    @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm

.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100

.red
  &:hover
      @apply text-zinc-300

</style>
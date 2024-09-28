<template>
  <div class="app bg-black font-['SFUIDisplay-Regular']">
      <Cursor class="max-sm:hidden" />
      <div
          class="header bg-black p-10 flex px-24 text-white justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky">
          <div class="image flex flex-start justify-items-start">
              <NuxtLink to="/">
                  <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
              </NuxtLink>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
              target="_blank" class="email text-lg  place-self-end flex gap-2 max-lg:text-xs">
              ruben.maldonado.graphic@gmail.com
              <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg" />
          </a>

      </div>

    <VueScrollProgressBar background-color="white" />
    <div
      class="titular2 flex px-64 gap-32 content-start space-between justify-center pt-20 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
      <div
        class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[52px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#fffafa] via-[#bbbbbb] to-[#c2c2c2] ">
        FOTOGRAFÍAS</div>
      <div
        class="trabajos flex flex-col max-sm:gap-2 items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

        <div
          class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
          Fotografías - Ediciones - Retratos -
          Paisajes - Social -
          Diseño Gráfico</div>
        <div
          class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
          Recopilación de fotografías y
          fanzines realizados durante el curso y
          como trabajos personales sobre diferentes temáticas y con diferentes cometidos. Fotografías de retrato,
          bodegones, paisajes y representación de lo social.
          Editadas y postproducidas.
        </div>

      </div>
    </div>


    <div
    class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
    <div class="info flex flex-col">
        <div
          class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 max-xl:text-xs">
          Asignatura</div>
        <div
        class="text max-[1500px]:w-[20ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[22ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
        Fotografía y audiovisuales, Técnicas Fotográficas, 4º Diseño Gráfico.
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 max-xl:text-xs">
          Tiempo</div>
        <div
          class="text max-w-[20ch] font-['SFUIDisplay-Light'] max-sm:text-start text-center text-[16px] leading-6 max-xl:text-sm max-xl:max-w-[40ch]">
          2 años
        </div>
      </div>
      <div class="info flex flex-col">
        <div
          class="text max-w-[60ch] max-sm:text-left font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 text-center text-[24px] uppercase leading-10 max-xl:text-xs">
          Briefing</div>
        <div
          class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left text-[16px] leading-6 max-xl:text-sm max-xl:max-w-[40ch]">
          Creación de fotografías con el aspecto técnico requerido.
        </div>
      </div>
    </div>

    <div id="libroimpreso"
      class="titular2 max-sm:pt-8 max-sm:pb-24 flex px-64 pb-24 gap-64 pt-12 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-[1500px]:px-12 max-[1500px]:gap-12 max-[1500px]:items-center max-[1500px]:flex-col max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
      <div
        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
        CATEGORÍAS FOTOGRÁFICAS</div>
    </div>

    <div
      class="seleccion_trabajos pt-4 px-64 max-sm:px-2 pb-20 text-white flex flex-col justify-center max-lg:px-6 max-lg:justify-items-center max-lg:justify-center">
      <div
        class="twotrabajos max-sm:px-2 p-0 flex gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo" >
          <NuxtLink to="/Oporto" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula5.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>OPORTO</div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/Provoke" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula12.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>PROVOKE</div>
          </NuxtLink>

        </div>
      </div>

      <div
      class="twotrabajos p-0 flex max-sm:px-2 gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
      <div class="trabajo">
          <NuxtLink to="/Tenerife" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula2.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>TENERIFE</div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/ColeccionGranada" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula3.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>GRANADA</div>
          </NuxtLink>

        </div>
      </div>

      
      <div
      class="twotrabajos p-0 flex max-sm:px-2 gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
      <div class="trabajo">
          <NuxtLink to="/MetroMadrid" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula8.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fanzine</p>METRO MADRID</div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/madrid" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula9.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>MADRID</div>
          </NuxtLink>

        </div>
      </div>

      <div
      class="twotrabajos p-0 max-sm:px-2 flex gap-4 justify-center pb-4 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
      <div class="trabajo">
          <NuxtLink to="/Bodegon" target="_blank">
            <div
                class="flex hover:bg-[url('/img/fotocaratula10.png')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>BODEGON</div>
          </NuxtLink>

        </div>
        <div class="trabajo">
          <NuxtLink to="/retratos" target="_blank">

            <div
            class="flex hover:bg-[url('/img/estudio5.jpg')] bg-black bg-cover bg-center flex-col text-[40px] w-[600px] h-[600px] max-sm:w-[400px] max-sm:h-[400px] items-center justify-center border font-['PPE-Ultralight'] leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
            <p class="font-['PPE-UltralightItalic'] text-[24px] leading-7">Fotografías</p>RETRATOS</div>
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
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
        target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
        ruben.maldonado.graphic@gmail.com
        <img class="vector" src="/img/Vector-11.svg">
      </a>
      <div class="links flex flex-col gap-2">
        <div class="links1 flex gap-32 max-xl:justify-center">
          <a class="red flex gap-2 items-center max-xl:text-[14px]"
            href="https://www.instagram.com/maldonadoruben_/">Instagram
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
            href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
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
  @apply opacity-100
  &:hover
    @apply opacity-60

.red
  &:hover
      @apply text-zinc-300

</style>
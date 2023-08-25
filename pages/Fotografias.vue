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
      <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#979797] via-[#dfdfdf] to-[#ffffff] animate-text max-xl:text-[45px] max-xl:justify-center">Fotografías</div>
      <div class="info flex flex-col gap-6">
        <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Fotografías - Ediciones - Retratos -
          Paisajes - Social -
          Diseño Gráfico</div>
        <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-300 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">Recopilación de fotografías y
          fanzines realizados durante el curso y
          como trabajos personales sobre diferentes temáticas y con diferentes cometidos. Fotografías de retrato,
          bodegones, paisajes y representación de lo social.
          Editadas y postproducidas.
        </div>
      </div>
    </div>

    
    <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Fotografía y audiovisuales, Técnicas Fotográficas, 2 - 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    2 años
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Creación de fotografías con el aspecto técnico requerido.
                </div>
            </div>
        </div>

    <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <video width="1240" height="788" loop autoplay controls>
        <source src="/img/fanzine.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </div>
    <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
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

    <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fanzine Metro Madrid</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold max-xl:text-xs">Fanzine sobre el Subterraneo de Madrid, conteniendo
              diferentes temas como este, la composición de sus lugares, el tema social y las personas y la arquitectura.
            </div>
            <div class="video flex text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-10">
            <video class="video w-full h-full" loop autoplay controls>
                <source src="/img/fanzine2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
      </div>

      <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fotografías de viaje a Oporto</div>
      <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs"> Fotografías realizadas con temática de la ciudad portugesa Oporto. Fotogorafía de paisajes, lugares, rincones y detalles durante el viaje.
      <br>
      <br>
      <div class="fecha text-xs">30 enero 2023</div></div>

      <div class="grid grid-cols-3 gap-4 max-xl:grid-cols-1">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_3.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_4.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_6.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_8.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_7.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_10.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_12.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_13.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_15.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_17.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_18.jpg" alt="">
        
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_20.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_21.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_24.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_22.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_19.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_39.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_26.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_25.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_28.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_30.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_27.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_29.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_33.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_31.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_32.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_34.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_37.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_40.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_42.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_36.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_41.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_43.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_44.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_45.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_47.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_49.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_48.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_55.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_60.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_56.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_57.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_59.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_58.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_61.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_63.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_64.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/oporto_66.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_46.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/oporto_65.jpg" alt="">



      </div>
    </div>

    <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fotografías al estilo Provoke</div>
      <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs"> Fotografías realizadas con temática de la
        revista Japonesa
        Provoke, los cuales utilizan mucho el grano en sus fotografías, el alto contraste, la subexposición y la
        sobrexposición, además de elementos abstractos
        o poco usuales.
      </div>

      <div class="grid grid-cols-3 gap-4 max-xl:grid-cols-1">

        <img class="image_grid w-full h-full pb-2" src="/img/provoke2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke10.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke11.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/provoke.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke9.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke8.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/provoke6.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke7.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke3.jpg" alt="">

        <img class="image_grid w-full h-full pb-2" src="/img/provoke4.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke5.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/provoke12.jpg" alt="">


      </div>
    </div>

    
    <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fotografías de modelo</div>
      <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs"> Fotografías de modelo en exterior a dos modelos
        de clase, realizando fotos con iluminación natural.
      </div>

      <div class="grid grid-cols-3 gap-4 max-xl:grid-cols-1">

        <img class="image_grid w-full h-full pb-2" src="/img/modelo.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/modelo2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/modelo3.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/modelo4.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/modelo5.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/modelo6.jpg" alt="">

      </div>
    </div>

    <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fotografías de retrato</div>
      <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs"> Fotografías en estudio y esterior de
        retrato
        a diferentes compañeras en la universidad. Las dos primeras fotografías de clave alta y las 4 siguientes en clave
        baja. Utilización de focos y flashes.
      </div>

      <div class="grid grid-cols-3 gap-4 max-xl:grid-cols-1">

        <img class="image_grid w-full h-full pb-2" src="/img/estudio2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/estudio5.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/estudio4.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/estudio3.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/estudio6.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/estudio7.jpg" alt="">

      </div>
    </div>

    
    <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
      <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Fotografías de bodegones</div>
      <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs"> Fotografías en estudio de bodegones
        con diferentes temáticas. Utilización de focos y flashes.
      </div>

      <div class="grid grid-cols-3 gap-4 max-xl:grid-cols-1">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre3.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre4.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre5.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finallibre6.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finalcristal2.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finalcristal3.jpg" alt="">
        <img class="image_grid w-full h-full pb-2" src="/img/finalcristal.jpg" alt="">

      </div>
    </div>


    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
      <div class="programas flex flex-col items-center">
        <div class="three_programas flex gap-10">
          <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Lightroom.svg" alt="">
          <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
        </div>
      </div>
    </div>

    <div class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-xl:text-xs max-xl:text-center">Modelos: Laura Morales, Barbara Ibañez, Carlos Martinez, Sergio Martin y Lisa Barbieri.</div>

    <div class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11.svg">
            </div>
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
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
          <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Fotografías</div>
          <div class="info flex flex-col gap-6">
              <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200">Fotografías - Ediciones - Retratos -
                  Paisajes - Social -
                  Diseño Gráfico</div>
              <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold">Recopilación de fotografías y fanzines realizados durante el curso y
                como trabajos personales sobre diferentes temáticas y con diferentes cometidos. Fotografías de retrato, bodegones, paisajes y representación de lo social.
                Editadas y postproducidas.
              </div>
          </div>
      </div>
      <div class="video flex px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
          <video width="1240" height="788" loop autoplay controls>
              <source src="/img/fanzine.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>

      </div>
      <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
          <div class="info_proyect max-w-[80ch]">
              <div class="info_secondary flex flex-col gap-6 sticky top-24">
                  <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Social</div>
                  <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch]">
                      Sobretodo en la mayoría de mi trabajo me gusta retratar el aspecto social y a las personas sin que se den cuenta
                      de que están siendo retratadas en la fotografía para darle ese aspecto de improvisación, sin preparar y representando
                      la realidad.
                      <br>
                      <br>
                      Fotografías realizadas por zonas de Madrid, como Gran Vía o diferentes paradas de Metro de Madrid, contando con fotografía a personas o 
                      fotografías al paisaje o los detalles.
                  </div>
              </div>
          </div>
          <div class="fotografias flex flex-col gap-6 h-min items-center">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos11.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos10.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos9.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos8.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos7.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos6.jpg" alt="">
                <img class="image_rect w-[640px] h-[446px]" src="/img/fotos5.jpg" alt="">

            </div>
      </div>
      <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
          <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Componentes</div>
          <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Se han creado varios componentes para
              la web.
              Entre ellos diferentes "Cards" para los grados que se ofertan en la escuela, cards para preguntas
              frecuentes, tfgs, botones con diferentes usos.
              Todos estos componentes con diferentes variantes.
          </div>

          <div class="grid grid-cols-1">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">BOTONES</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6 pt-12">FORMULARIOS</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes2.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">PREGUNTAS</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes3.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">NEWSLETTER</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes4.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">CARDS TFG</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes5.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">BANNER</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes6.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">CARDS EMPRESAS</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes7.png" alt="">
              <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-6">FOOTER</div>
              <img class="image_grid w-full h-full pb-6" src="/img/componentes8.png" alt="">
          </div>
      </div>

      <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
          <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Proceso</div>
          <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Evolución desde el Mid-Fi hasta el High-Fi de 3 de las vistas
              para visualizar el proceso del trabajo y la evolución de los componentes, tamaños y colocación en reticula.
          </div>

          <div class="grid grid-cols-1">
              <img class="image_grid w-full h-full pb-2" src="/img/bocetofinal.png" alt="">
              <img class="image_grid w-full h-full pb-2" src="/img/bocetofinal2.png" alt="">
              <img class="image_grid w-full h-full pb-2" src="/img/bocetofinal3.png" alt="">

          </div>
      </div>

      <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center">
          <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
              proyecto</div>
          <div class="programas flex flex-col items-center">
              <div class="three_programas flex gap-10">
                  <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Illustrator.svg" alt="">
                  <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Photoshop.svg" alt="">
                  <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Figma.svg" alt="">
              </div>
          </div>
      </div>

      <div class="info text-sm flex gap-2 items-center justify-center text-white">Trabajo en grupo con Laura Morales
          (@crearual) - Barbara Ibañez (@intesazc)</div>

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
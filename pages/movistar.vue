<template>
    <div class="app bg-[#eb595a]">
        <div class="header bg-[#DC5051] p-10 flex text-white justify-between sticky top-0 z-10">
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
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Video</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-100">Audiovisuales - Movistar - Identidad -
                    After Effects</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-100 font-bold">Este trabajo consiste en crear
                    3 videos
                    diferentes de transiciones y efectos para el diseño de animación de las cortinillas de Movistar. Una
                    cortinilla básica para el cambio
                    entre programa y anuncio, una cortinilla que avise en que categoría estás y otra para avisarte de los
                    estrenos.
                    Realizado todo con After Effects.
                </div>
            </div>
        </div>
        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video class="video border-2 border-[#DC5051] drop-shadow-lg" width="1240" height="788" loop autoplay controls>
                <source src="/img/Cortinilla_5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Idents Movistar - Cortinillas</div>
                    <div class="text text-[16px] leading-6 text-zinc-100 font-normal max-w-[64ch]">
                        Para este proyecto he elegido Movistar Plus, en general
                        la identidad que trae consigo los canales de movistar, ya
                        sea estrenos, series o las entradillas de continuidad que
                        te indican que estas en un canal de esta marca.
                        Me gusta la estética que utilizan tan minimalista y con figuras
                        geométricas y pensé que sería interesante para hacer
                        mi propia versión y propuesta para alguna de las soluciones
                        mencionadas antes. <br> <br>
                        Por ello lo que yo he hecho ha sido conservar sus colores,
                        la tipografía, el logo y los elementos y detalles que suelen
                        incluir (lineas, simbolos de más y multiplicación) y los
                        sonidos. <br> <br> Mi propuesta viene en implementar un elemento
                        3D como un cubo (manteniendo la estética de figuras
                        geométricas) ya que suelen utilizar elementos planos
                        y sin relieve o profundidad, por eso yo quería darle ese
                        juego personal que le pegaría a la estética que persiguen.
                        Además el uso del sonido y de los elementos comunes
                        los he ido adapantado al resultado de una forma personal
                        aunque queríendo llegar a un resultado que perfectamente
                        Movistar puediera utilizar en sus canales y se asemejase
                        a los que tienen. <br> <br>
                        He creado una serie de plantillas con las composiciones
                        y pre composiciones las cuales van evolucionando. Todas
                        parten de una inicial que mantiene elementos y movimientos
                        para mantener la uniformidad pero a partir de
                        la mitad del tiempo hasta el final varían dependiendo del
                        contenido que tienen que anunciar. <br> <br>
                        Se han establecido elementos comunes y luego se han
                        ido creando variantes y distintas soluciones.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect w-[550px]" src="/img/movistarident2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/movistarident.png" alt="">

            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Videos por separado</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-100 font-bold pb-6">Muestra de cada uno de los videos por
                separado
                para apreciar los diferentes tipos de encargo para cada video.
            </div>

            <div class="grid grid-cols-2 grid-row-3 gap-6">
                <video class="video border-2 border-[#DC5051] drop-shadow-lg" width="1240" height="788" loop autoplay controls muted>
                    <source src="/img/Cortinilla.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <video class="video border-2 border-[#DC5051] drop-shadow-lg" width="1240" height="788" loop autoplay controls muted>
                    <source src="/img/Cortinilla_4.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <video  class="video border-2 border-[#DC5051] drop-shadow-lg" width="1240" height="788" loop autoplay controls muted>
                    <source src="/img/Cortinilla_3.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <div class="text">
                    <img class="image" src="/img/movistarinfo.png" alt="">
                </div>

            </div>


        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-100 flex-col gap-10 justify-center items-center">
            <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/AfterEffects.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Illustrator.png" alt="">
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

        <div class="foter bg-[#DC5051] p-10 flex text-white justify-between sticky top-0">
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
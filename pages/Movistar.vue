<template>
    <div class="app bg-[#eb595a]">
        <Cursor />
        <div class="header bg-[#DC5051] p-10 flex text-white justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
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
            <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#a50e34] via-[#770e38] to-[#ff9fb2] animate-text max-xl:text-[60px] max-xl:justify-center">Video</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-300 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Audiovisuales - Movistar - Identidad -
                    After Effects</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-200 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">Este trabajo consiste en crear
                    3 videos
                    diferentes de transiciones y efectos para el diseño de animación de las cortinillas de Movistar. Una
                    cortinilla básica para el cambio
                    entre programa y anuncio, una cortinilla que avise en que categoría estás y otra para avisarte de los
                    estrenos.
                    Realizado todo con After Effects.
                </div>
            </div>
        </div>

        
        <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-200 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Iniciación al diseño audiovisual, 2º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-200 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-200 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Cortinillas informativas para programa de televisión o canal audiovisual.
                </div>
            </div>
        </div>

        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video border-2 border-[#DC5051] drop-shadow-lg" width="1240" height="788" loop autoplay controls>
                <source src="/img/Cortinilla_5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Idents Movistar - Cortinillas</div>
                    <div class="text text-[16px] leading-6 text-zinc-100 font-normal max-w-[64ch] max-xl:text-xs">
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
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Videos por separado</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-100 font-bold pb-6 max-xl:text-xs">Muestra de cada uno de los videos por
                separado
                para apreciar los diferentes tipos de encargo para cada video.
            </div>

            <div class="grid grid-cols-2 grid-row-3 gap-6 max-xl:grid-cols-1">
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

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-100 flex-col gap-10 justify-center items-center  max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/AfterEffects.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Illustrator.png" alt="">
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

        <div class="foter bg-[#DC5051] p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
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
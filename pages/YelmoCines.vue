<template>
    <div class="app bg-[#161616]">
        <Cursor />
        <div class="header bg-[#101010] p-10 flex text-white justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
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
            <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#979797] via-[#dfdfdf] to-[#ffffff] animate-text max-xl:text-[60px] max-xl:justify-center">Marca</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Rediseño - Identidad - Yelmo Cines -
                    Marca -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-300 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">El proyecto consiste en un
                    rediseño de la Identidad
                    visual de Yelmo Cines, contando con el cambio de conceptos, valores, logo, aplicaciones visuales y demás
                    elementos gráficos de su estética
                    para darle coherencia el sistema general de esta marca.
                </div>
            </div>
        </div>

        <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos interdisciplinares de Diseño Gráfico, LAB, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-white font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Rediseño de la identidad completa de Yelmo Cines.
                </div>
            </div>
        </div>

        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/CineYelmo_MarcaDinámicaFinal.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Rediseño Cine Yelmo</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch] max-xl:text-xs">
                        Este rediseño para Cines Yelmo cuenta con los siguientes objetivos:
                        <br>
                        <br>
                        - Crear un rebranding eliminando la coexistencia entre la anterior marca Yelmo Cines y el diseño de
                        Cine Yelmo que genera confusión entre los espectadores. Permitir la interacción y hacer que el
                        diseño impacte con el usuario y crear una relación de unión entre marca y cliente. Para ello es
                        necesario una nueva identidad bien consolidada y adaptativa a todas las aplicaciones que necesita la
                        marca, para que el espectador pueda identificarla y generar así la conexión que se busca conseguir.
                        <br>
                        <br>
                        - Crear una estrategia de arquitectura de marca de las submarcas de la compañía.
                        <br>
                        <br>
                        - Transmitir la idea de que estamos reinventando la experiencia de cine tradicional a través de una
                        innovación constante, que va desde la introducción en España de nuevos conceptos de salas con foco
                        en la calidad y el confort (Junior, Premium o Luxury), la oferta de nuevos servicios adaptados a las
                        demandas de los clientes o la programación de contenidos alternativos.
                        <br>
                        <br>
                        - Unificar la imagen gráfica de las diferentes redes sociales.
                        <br>
                        <br>
                        - Modificar el tono de la identidad visual generando entretenimiento, diversión y un acercamiento
                        juvenil.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect w-[550px]" src="/img/yelmocines1.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines2.png" alt="">
                <img class="image_rect rounded-xl w-[550px]" src="/img/yelmocines3.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Marca dinámica</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">El motivo añadido de este rediseño es
                crear
                una marca que pueda ser dinámica y variable, que a raiz de su logo principal puedas conocer también los
                demás apartados
                con los que cuenta Cine Yelmo.
                <br><br> <a class="type text-[#312783]">Yelmo Cines</a> - <a class="type text-[#eec331]">Juniors</a> - <a
                    class="type text-zinc-500">Luxury</a> - <a class="type text-[#ffffff]">+ Que Yelmo</a>
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/yelmocines4.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Tipografías</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">La tipografía seleccionada para toda la
                marca es la Proxima Nova y todos sus pesos
                jugando entre ellos y convinandolos.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-20 border-b border-zinc-500" src="/img/tipografia2.png" alt="">
                <img class="image_grid w-full h-full pb-6 pt-20" src="/img/tipografia.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Pictogramas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">Los pictogramas del sistema siempre
                estarán creados a raíz
                de la reticula de formación del logo, de formas geométricas y siempre se intentará jugar con la C que forma
                el logo.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/pictogramas.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Aplicaciones</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">Caratulas para instagrama formadas a
                raiz de las formas geométricas y de las
                reticulas mencionadas anteriormente.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/caratulas.png" alt="">
                <img class="image_grid w-full h-full pb-6" src="/img/caratulas2.png" alt="">
                <img class="image_grid w-full h-full pb-6" src="/img/caratulas3.png" alt="">
                <img class="image_grid w-full h-full pb-6" src="/img/caratulas4.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Prototipo Aplicación</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">Prueba de aplicación para Cine Yelmo
                siguiendo la idea de minimalismo que sigue
                este nuevo rediseño, el uso de colores y formas geométrica.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/aplicacion.png" alt="">
                <img class="image_grid w-full h-full pb-6" src="/img/aplicacion2.png" alt="">

            </div>
        </div>

        <div class="images pt-20 px-64 text-white justify-center flex flex-col gap-10 max-xl:pt-8 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Entradas</div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/entradas.png" alt="">

            </div>
        </div>

        <div class="trabajos flex pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Figma.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/AfterEffects.svg" alt="">
                </div>
            </div>
        </div>

        <div class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-10 max-xl:text-xs max-xl:text-center">Trabajo en grupo con Laura Morales
            (@crearual) - Barbara Ibañez (@intesazc)</div>

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

        <div class="foter bg-[#101010] p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
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
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
            <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 max-xl:text-[50px] max-xl:justify-center max-xl:text-center">Diseño y prototipado</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200 max-xl:leading-2 max-xl:text-xs">Rediseño - Identidad - Figma -
                    Web -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold max-xl:text-sm max-xl:max-w-[40ch]">El proyecto consiste en un
                    rediseño de la web de la Escuela Superior de Madrid, creando vistas en Figma, componente y realizando
                    los prototipados
                    y acciones de las diferentes vistas.
                </div>
            </div>
        </div>

        <div class="trabajos flex pt-10 pb-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center">
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
                    Rediseño de la página web oficial de la Escuela Superior de Diseño de Madrid.
                </div>
            </div>
        </div>

        <div class="video flex px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/videoesd2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Figma</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch] max-xl:text-xs">
                        Para este rediseño de la Escuela Superior de Madrid, se ha utilizado los mismo colores y tipografías
                        pero hemos variado los conceptos princiapales.
                        La web anteriormente tenía una estructura de la información algo más engorrosa y una estética menos
                        modernizada.
                        Con este rediseño hemos querido realizar una página mucho más depurada, geométrica, simplificada y
                        con los elementos necesarios, jugando con el espacio en blanco.
                        También hemos jugado con las animaciones de los diferentes componentes para darle un atractivo
                        visual diferente a la web original.
                        <br>
                        <br>
                        Se han creado todos los componentes con sus diferentes variaciones prototipados en el Figma. Además
                        se han creado todas las vistas animadas e intermedias para hacer
                        una solución coherente y en la que se pueda visualizar bien el flujo de la información.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect " src="/img/frame.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white max-xl:text-xs">Componentes</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Se han creado varios componentes para
                la web.
                Entre ellos diferentes "Cards" para los grados que se ofertan en la escuela, cards para preguntas
                frecuentes, tfgs, botones con diferentes usos.
                Todos estos componentes con diferentes variantes.
            </div>

            <div class="grid grid-cols-1">
                <div class="text max-w-[60ch] text-[16px] text-zinc-100 font-bold max-xl:text-xs">BOTONES
                    <div class="text max-w-[60ch] text-[14px] text-zinc-400 font-bold pt-2 max-xl:text-xs">Diferentes botones con cambios en tamaños, anchos, colores y diferentes estados (activados, hover y normal)</div>
                </div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes.png" alt="">
                <div class="text max-w-[60ch] text-[16px] text-zinc-100 font-bold pt-12 max-xl:text-xs">FORMULARIOS
                    <div class="text max-w-[60ch] text-[14px] pb-6 text-zinc-400 font-bold pt-2 max-xl:text-xs">Formularios de inicio de sesión y de solitiar información con sus dos pestañas y su estado al ingresar mal la información.</div>

                </div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes2.png" alt="">
                <div class="text max-w-[60ch] text-[16px] text-zinc-100 font-bold max-xl:text-xs">PREGUNTAS
                    <div class="text max-w-[60ch] text-[14px] pb-6 text-zinc-400 font-bold pt-2 max-xl:text-xs">Card de preguntas con sus dos estados.</div>
                </div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes3.png" alt="">
                <div class="text max-w-[60ch] text-[16px] pb-6 text-zinc-100 font-bold max-xl:text-xs">NEWSLETTER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes4.png" alt="">
                <div class="text max-w-[60ch] text-[16px] pb-6 text-zinc-100 font-bold max-xl:text-xs">CARDS TFG</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes5.png" alt="">
                <div class="text max-w-[60ch] text-[16px] pb-6 text-zinc-100 font-bold max-xl:text-xs">BANNER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes6.png" alt="">
                <div class="text max-w-[60ch] text-[16px] pb-6 text-zinc-100 font-bold max-xl:text-xs">CARDS EMPRESAS</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes7.png" alt="">
                <div class="text max-w-[60ch] text-[16px] pb-6 text-zinc-100 font-bold max-xl:text-xs">FOOTER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes8.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Proceso</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12 max-xl:text-xs">Evolución desde el Mid-Fi hasta el High-Fi de 3 de las vistas
                para visualizar el proceso del trabajo y la evolución de los componentes, tamaños y colocación en reticula.
            </div>

            <div class="grid grid-cols-1">
                <div class="text-[14px] text-center border-b border-zinc-400 pb-4 text-zinc-400 font-bold max-xl:text-xs">Página de inicio con todos los cambios realizados de tamaño de página, retícula, tipografía, jerarquías y mejoras de elementos y componentes.</div>
                <img class="image_grid w-full h-full pt-10 pb-10" src="/img/bocetofinal.png" alt="">
                <div class="text-[14px] text-center border-b border-zinc-400 pb-4 text-zinc-400 font-bold max-xl:text-xs">Página de especialidad con cambios realizados de tamaño de página, retícula, tipografía, jerarquías y mejoras de elementos y componentes.</div>
                <img class="image_grid w-full h-full pt-10 pb-10" src="/img/bocetofinal2.png" alt="">
                <div class="text-[14px] text-center border-b border-zinc-400 pb-4 text-zinc-400 font-bold max-xl:text-xs">Página de TFGS con todos los cambios realizados de tamaño de página, retícula, tipografía, jerarquías y mejoras de elementos y componentes.</div>
                <img class="image_grid w-full h-full pt-10 pb-10" src="/img/bocetofinal3.png" alt="">

            </div>
        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]" src="/img/Figma.svg" alt="">
                </div>
            </div>
        </div>

        <div class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-xl:text-xs max-xl:text-center">Trabajo en grupo con Laura Morales
            (@crearual) - Barbara Ibañez (@intesazc)</div>

        <div class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-10 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector" src="/img/Vector-11.svg">
                </NuxtLink>
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.behance.net/rubenartes">Behance
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>


                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
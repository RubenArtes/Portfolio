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

        <VueScrollProgressBar background-color="#ffffff" />
        <div id="navegacion"
            class="titular2 max-[1500px]:gap-12 flex px-64 gap-64 content-start space-between justify-center pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular max-[1920px]:text-[100px] max-[1920px]:leading-[100px] text-[120px] font-['PPE-Ultralight'] leading-[8rem] font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]  max-sm:text-center max-sm:leading-[60px] from-[#faf8ff] via-[#cae1ff] to-[#e3d5ff]">
                WEB ESD</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    Rediseño - Identidad - Figma - Web - Diseño Gráfico
                </div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    El proyecto consiste en un rediseño de la web de la Escuela Superior de Madrid, creando vistas en
                    Figma, componente y realizando los prototipados y acciones de las diferentes vistas.
                </div>

            </div>
        </div>

        <div
        class="trabajos max-[1500px]:px-32 flex max-sm:justify-start max-sm:pb-24 pt-20 px-40 pb-20 items-start text-white flex-nowrap gap-96 max-[1500px]:gap-[15rem] justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-start max-xl:text-center max-xl:pt-0 max-xl:pb-16 max-[1500px]:justify-between">
        <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Asignatura</div>
                <div
                    class="text max-w-[200ch] font-['SFUIDisplay-Light'] text-center max-sm:text-left max-sm:max-w-[26ch] text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    Proyectos interdisciplinares de Diseño Gráfico, LAB, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col max-sm:text-start">
                <div
                    class="text max-w-[200ch] text-center font-['PPE-Ultralight'] max-sm:text-[20px] max-sm:text-left pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Tiempo</div>
                <div
                    class="text max-w-[20ch] font-['SFUIDisplay-Light']  text-center max-sm:text-start text-[16px] leading-6 text-white max-xl:text-sm max-xl:max-w-[40ch]">
                    4 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div
                    class="text max-w-[200ch] max-sm:text-left text-center font-['PPE-Ultralight'] max-sm:text-[20px] pb-4 uppercase text-[24px] leading-10 text-white max-xl:text-xs">
                    Briefing</div>
                <div
                    class="text max-w-[20ch] text-center font-['SFUIDisplay-Light'] max-sm:text-left text-[16px] leading-6 text-white max-xl:text-sm max-[1440px]:max-w-[60ch]">
                    Rediseño de la página web oficial de la Escuela Superior de Diseño de Madrid.
                </div>
            </div>
        </div>


        <div
            class="video flex pt-0 px-64 pb-20 text-zinc-600 flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:px-0 max-sm:pb-24">
            <video class="justify-self-center max-w-[1240px] max-h-[788px] max-sm:w-full" loop autoplay>
                <source src="/img/videopaginaweb.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>

        <div
            class="colum max-[1500px]:px-12 flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center ">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                        <p class="font-['PPE-UltralightItalic']">Prototipado</p>FIGMA
                    </div>
                    <div
                        class="text text-[20px] font-['SFUIDisplay-Regular'] indent-12 text-white max-[1440px]:max-w-[50ch] max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Para este rediseño de la Escuela Superior de Madrid, se ha utilizado los mismo colores y
                        tipografías
                        pero hemos variado los conceptos princiapales.
                        La web anteriormente tenía una estructura de la información algo más engorrosa y una estética
                        menos
                        modernizada.
                        Con este rediseño hemos querido realizar una página mucho más depurada, geométrica, simplificada
                        y
                        con los elementos necesarios, jugando con el espacio en blanco.
                        También hemos jugado con las animaciones de los diferentes componentes para darle un atractivo
                        visual diferente a la web original.
                        <br>
                        <br>
                        Se han creado todos los componentes con sus diferentes variaciones prototipados en el Figma.
                        Además
                        se han creado todas las vistas animadas e intermedias para hacer
                        una solución coherente y en la que se pueda visualizar bien el flujo de la información.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect shadow-sm" src="/img/frame.png" alt="">

            </div>
        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-32 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-[50px] text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-[35px]">
                <p class="font-['PPE-UltralightItalic']">Componentes</p>INDIVIDUALES
            </div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-white">MUESTRA DE LOS COMPONENTES INDIVIDUALES</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Se han creado varios componentes para
                    la web.
                    Entre ellos diferentes "Cards" para los grados que se ofertan en la escuela, cards para preguntas
                    frecuentes, tfgs, botones con diferentes usos.
                    Todos estos componentes con diferentes variantes.
                </div>

            </div>

        </div>


        <div
            class="images max-[1500px]:px-32 pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">

            <div class="grid grid-cols-1">
                <div
                    class="titular pb-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    BOTONES</div>


                <img class="image_grid w-full h-full pb-6" src="/img/componentes.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    FORMULARIOS</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes2.png" alt="">
                <div
                    class="titular pb-24 pt-2 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    PREGUNTAS</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes3.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    NEWSLETTER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes4.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    CARDS TFG</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes5.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    BANNER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes6.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    CARDS EMPRESAS</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes7.png" alt="">
                <div
                    class="titular pb-24 pt-24 max-[1440px]:pt-12 max-[1440px]:pb-12 max-[1440px]:text-center text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-center max-sm:pt-6">
                    FOOTER</div>
                <img class="image_grid w-full h-full pb-6" src="/img/componentes8.png" alt="">
            </div>
        </div>


        <div id="primercompartimento"
        class="titular2 max-[1500px]:px-32 max-[1500px]:pt-32 flex px-64 pb-32 gap-64 pt-64 content-start space-between justify-center text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-sm:pb-16 max-[1500px]:gap-46 max-[1500px]:items-left max-[1280px]:pt-10 max-[1280px]:px-30 max-[1280px]:gap-4 max-[1280px]:pb-20">
        <div
                class="titular max-[1440px]:text-left text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-white max-sm:text-30px max-sm:leading-10 max-xl:justify-centermax-xl:text-[60px] max-sm:text-left max-sm:pt-6">
                PROCESO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1280px]:p-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-xl:text-center max-[1280px]:text-left">
                    <a class="type text-white">MUESTRA DE LOS BOCETOS Y PÁGINAS FINALES</a>
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['Regular'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:text-left max-[1500px]:text-[16px]">
                    Evolución desde el
                    Mid-Fi hasta el High-Fi de 3 de las vistas
                    para visualizar el proceso del trabajo y la evolución de los componentes, tamaños y colocación en
                    reticula.
                </div>

            </div>

        </div>

        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pt-4 pb-4" src="/img/bocetofinal.png" alt="">
                <img class="image_grid w-full h-full pt-4 pb-4" src="/img/bocetofinal2.png" alt="">
                <img class="image_grid w-full h-full pt-4 pb-4" src="/img/bocetofinal3.png" alt="">

            </div>
        </div>

        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas
                utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">
                    <img class="image_logo w-[40px] opacity-100 hover:opacity-60 max-xl:max-w-[30px]"
                        src="/img/Figma.svg" alt="">
                </div>
            </div>
        </div>

        <div
            class="info text-sm flex gap-2 items-center justify-center text-white max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-xl:text-xs max-xl:text-center">
            Trabajo en grupo con Laura Morales
            (@crearual) - Barbara Ibañez (@intesazc)</div>

        <div
            class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-xl:pt-10 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank"
                class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <NuxtLink to="/">
                            <img class="vector" src="/img/Vector-11.svg">
                        </NuxtLink>


                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
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
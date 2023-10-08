<template>
    <div class="app bg-white">
        <Cursor />
        <div class="header bg-white p-10 flex text-zinc-600 justify-between sticky top-0 z-10 border-b border-zinc-600 max-xl:p-6 max-xl:items-center">
            <div class="image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/Vectorzinc.svg">
                </NuxtLink>
            </div>
            <div class="email text-lg flex gap-2 items-center max-xl:text-xs">ruben.maldonado.graphic@gmail.com
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[8px]" src="/img/Vector-11zinc.svg">
                </NuxtLink>
            </div>
        </div>
        <VueScrollProgressBar background-color="black" />
        <div class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[70px] font-bold max-w-[13ch] leading-12 animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-[#3e3e3e] via-[#aaaaaa] to-[#ffffff] animate-text max-xl:text-[60px] max-xl:justify-center">Modelado</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Modelado 3d - Cinema 4d - Blender -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">Diferentes trabajos realizados en software 3D 
                    utilizando animación, texturas, iluminaciones y diferentes recursos con Cinema 4d y Blender.
                </div>
            </div>
        </div>

        
        <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-black font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Modelado 3D, 3º Diseño Gráfico.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-black font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    1 - 2 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Briefing</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-black font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Creación de piezas 3D con el aspecto técnico aprendido.
                </div>
            </div>
        </div>

        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video class="video border border-zinc-600 drop-shadow-xl" width="1240" height="788" loop autoplay controls>
                <source src="/img/3dvideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-zinc-800">Trabajos 3D</div>
                    <div class="text text-[16px] leading-6 text-zinc-600 font-normal max-w-[64ch] max-xl:text-xs">
                        El video que se muestra arriba para un trabajo libre y de aprendizaje de Blender, esta realizado con
                        el cometido de aprender a animar y probrar las diferentes herramientas creativas y posibilidades del programa
                        pudiendo crear un efecto de letras que se van inflando como glovos a raiz que el tiempo va pasando.
                        <br>
                        <br>
                        Las fotos de a continuación pertenecen a un trabajo para la asignatura de 3D en la que se crea un bodegon creativo, realizando
                        diferentes figuras y formas geometricas a las que les añadiremos con el plugin de Octane Render diferentes materiales, iluminaciones y camaras más profesionales
                        para darle ese atractivo y esos detalles tan visuales. Pruebas de diferentes iluminaciones y diferentes texturas en los elementos cambiando las camaras y los ángulos.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6">
                <img class="image_rect drop-shadow-xl" src="/img/render3d2.png" alt="">
                <img class="image_rect drop-shadow-xl" src="/img/render3d.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-zinc-800">Loop</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold max-xl:text-xs">Creación de un loop animado 3d para probar las diferentes utilidades de animación
                y frames de la aplicación, aplicando materiales e iluminación.
            </div>
            <div class="video flex pt-10 text-white flex-nowrap items-center gap-64 justify-center">
            <video class="video w-full h-full border border-zinc-600 drop-shadow-xl" loop autoplay controls>
                <source src="/img/1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-zinc-800 pb-10">Ciudad</div>
            <div class="text max-w-[60ch] text-[16px] leading-6 text-zinc-600 font-bold pb-12 max-xl:text-xs">Creación de una maqueta sencilla de una
                ciudad en 3D con iluminaciones, detalles en los edificios, prueba con los diferentes acabados y herramientas del programa Cinema 4D.
                Ejercicio inicial de 3D.
            </div>
            <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad7.jpg" alt="">
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad9.jpg" alt="">                
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad5.jpg" alt="">                
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad6.jpg" alt="">                
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad4.jpg" alt="">
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad.jpg" alt="">
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad2.jpg" alt="">
                <img class="image_grid w-full h-full border border-zinc-600 drop-shadow-xl" src="/img/ciudad3.jpg" alt="">



            </div>
        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-10 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]" src="/img/blender.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]" src="/img/Cinema4d.png" alt="">
                </div>
            </div>
        </div>

        <div class="links_rrss pt-32 px-80 pb-32 text-zinc-600 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.behance.net/rubenartes">Behance
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
                            <img class="vector" src="/img/Vector-11zinc.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                            <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-white p-10 flex text-zinc-600 justify-between sticky top-0 border-t border-zinc-600 max-xl:p-6">
            <div class="foter_image flex flex-start">
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/starzinc.svg">
                </NuxtLink>
            </div>
            <div class="email flex gap-2 items-center text-sm max-xl:text-xs">Ruben Maldonado González
                <NuxtLink to="/">
                    <img class="vector max-xl:max-w-[15px]" src="/img/futbolzinc.svg">
                </NuxtLink>
            </div>
        </div>

    </div>
</template>
  
<script setup>


</script>

<style lang="sass" scoped>
  
  
  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
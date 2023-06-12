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
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Modelado</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200">Modelado 3d - Cinema 4d - Blender -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold">Diferentes trabajos realizados en software 3D 
                    utilizando animación, texturas, iluminaciones y diferentes recursos con Cinema 4d y Blender.
                </div>
            </div>
        </div>
        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/3dvideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-24">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Trabajos 3D</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch]">
                        El video que se muestra arriba para un trabajo libre y de aprendizaje de Blender, esta realizado con
                        el cometido de aprender a animar y probrar las diferentes herramientas creativas y posibilidades del programa
                        pudiendo crear un efecto de letras que se van inflando como glovos a raiz que el tiempo va pasando.
                        <br>
                        <br>
                        ____________________________________________
                        <br>
                        <br>
                        <br>
                        Las fotos de a continuación pertenecen a un trabajo para la asignatura de 3D en la que se crea un bodegon creativo, realizando
                        diferentes figuras y formas geometricas a las que les añadiremos con el plugin de Octane Render diferentes materiales, iluminaciones y camaras más profesionales
                        para darle ese atractivo y esos detalles tan visuales. Pruebas de diferentes iluminaciones y diferentes texturas en los elementos cambiando las camaras y los ángulos.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect" src="/img/render3d2.png" alt="">
                <img class="image_rect" src="/img/render3d.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Loop</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold">Creación de un loop animado 3d para probar las diferentes utilidades de animación
                y frames de la aplicación, aplicando materiales e iluminación.
            </div>
            <div class="video flex pt-20 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video class="video w-full h-full" loop autoplay controls>
                <source src="/img/1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white pb-10">Ciudad</div>
            <div class="text max-w-[60ch] text-[16px] leading-6 text-zinc-400 font-bold pb-12">Creación de una maqueta sencilla de una
                ciudad en 3D con iluminaciones, detalles en los edificios, prueba con los diferentes acabados y herramientas del programa Cinema 4D.
                Ejercicio inicial de 3D.
            </div>
            <div class="grid grid-cols-2 gap-4">
                <img class="image_grid w-full h-full" src="/img/ciudad7.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/ciudad9.jpg" alt="">                
                <img class="image_grid w-full h-full" src="/img/ciudad5.jpg" alt="">                
                <img class="image_grid w-full h-full" src="/img/ciudad6.jpg" alt="">                
                <img class="image_grid w-full h-full" src="/img/ciudad4.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/ciudad.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/ciudad2.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/ciudad3.jpg" alt="">



            </div>
        </div>

        <div class="trabajos flex pt-10 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center">
            <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/blender.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100" src="/img/Cinema4d.png" alt="">
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
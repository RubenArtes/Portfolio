<template>
    <div class="app bg-black">
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
        <div class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12 max-xl:text-[70px] max-xl:justify-center">Editorial</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200 max-xl:text-xs">Rediseño Editorial - Maquetación -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold max-xl:text-sm max-xl:max-w-[40ch]">Este trabajo consiste en el
                    rediseño de un libro, en
                    este caso se
                    rediseña el ejemplar de Edward de Bono - El pensamiento Lateral. Con la misión de crear una
                    solución más visual, simplificada y atractiva para el espectador alejandose de su diseño anterior.
                </div>
            </div>
        </div>
        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/Comp_1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Colección de libros</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch] max-xl:text-xs">
                        Mi idea de maquetación
                        final ha sido crear un
                        libro que pueda basarse en una maquetación formal
                        de una sola columna, fácil de leer y con una
                        maquetación limpia y con espacio en blanco, ayudada
                        de elementos como pie de página, nombre
                        del libro etc, tanto para dar información como
                        para componer. A raíz de esta maquetación habrá
                        frases y textos que cambiarán su forma, tipografía
                        y color y romperán con la retícula base para
                        atribuirle un efecto de diseño diferente, pero
                        partiendo del formalismo de la retícula y que no
                        se haga tan monótona la lectura seguida de texto.
                        <br>
                        <br>
                        Con esta maquetación he buscado un rediseño
                        sencillo para la lectura, el lector y la fácil comprensión
                        del contenido sin encontrarse con una
                        maquetación ambigua. He creado una maquetación
                        fácil de usar en los diferentes modelos de libro,
                        fácil de adaptar y modificar por la estructura
                        y como pueden implementarse los cambios tanto
                        en portadas como en la estructura interior,
                        creando así un sistema completo de libros sobre
                        diseño. <br>
                        <br>
                        Todo se mantendrá bajo fondo blanco pero habrá
                        páginas importantes y puntuales que serán de
                        fondo negro y con diferente papel para atribuirle
                        distinción y funcionen mejor con la maquetación.
                        Para la maquetación final realicé los diferentes
                        apartados: cubiertas, portadas interiores en
                        el reverso de la cubierta como portadilla, página
                        de copyright y agradecimientos, página de contenidos
                        (indice) y el prologo, además de la maquetación
                        de la introducción y el resumen y un capítulo
                        entero.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect rounded-xl" src="/img/Rectangle_5.png" alt="">
                <img class="image_rect rounded-xl" src="/img/Rectangle_6.png" alt="">
                <img class="image_rect rounded-xl" src="/img/Rectangle_7.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10 max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Tipografía</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold max-xl:text-xs max-xl:pb-8">Muestra de la tipografía general utilizada y
                la jerarquía
                para componer los textos a lo largo del libro. Utilización de varias tipografías: Futura Std, Trola y
                Gravity.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6 max-xl:pb-8" src="/img/tipo.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Captions</div>
            <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 font-bold pb-12 max-xl:text-xs">Muestra de maquetación de
                algunas de las páginas
            </div>
            <div class="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/paginalibro2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro4.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/imgpaginas10.png" alt="">
            </div>
        </div>

        <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center max-xl:pt-12 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px] max-xl:max-w-[30px]" src="/img/Photoshop.svg" alt="">
                </div>
            </div>
        </div>
        
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
  
<script setup>


</script>

<style lang="sass" scoped>
  
  
  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100


  </style>
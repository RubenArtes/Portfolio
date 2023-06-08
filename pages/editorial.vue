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
        <div class="trabajos flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <div class="titular text-[115px] font-normal max-w-[13ch] leading-12">Editorial</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[18px] leading-10 text-zinc-200">Rediseño Editorial - Maquetación -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[26px] leading-10 text-zinc-400 font-bold">Este trabajo consiste en el
                    rediseño de un libro, en
                    este caso se
                    rediseña el ejemplar de Edward de Bono - El pensamiento Lateral. Con la misión de crear una
                    solución más visual, simplificada y atractiva para el espectador alejandose de su diseño anterior.
                </div>
            </div>
        </div>
        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/Comp 1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Colección de libros</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch]">
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
                <img class="image_rect rounded-xl" src="/img/Rectangle 5.png" alt="">
                <img class="image_rect rounded-xl" src="/img/Rectangle 6.png" alt="">
                <img class="image_rect rounded-xl" src="/img/Rectangle 7.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Captions</div>
            <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 font-bold pb-12">Muestra de maquetación de
                algunas de las páginas
            </div>
            <div class="grid grid-cols-2 gap-4">
                <img class="image_grid w-full h-full" src="/img/paginalibro2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro4.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/paginalibro6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/imgpaginas10.png" alt="">
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


                    </a> <a class="red flex gap-2 items-center" href="https://www.linkedin.com/in/rubenmaldonado10">InfoJob
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
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
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Editorial</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200">Rediseño Editorial - Revista -
                    Maquetación -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold">Creación de una publicación
                    bimensual de contenidos
                    y enfoques de la revista TypeNotes, crear un sistema
                    mucho más económico y abordable diseñando
                    un modelo hibrido entre periódico y revista, crear
                    una publicación basada en la principal anual.
                </div>
            </div>
        </div>
        <div class="video flex px-40 pb-10 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/Comp_2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-40 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-24">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Revista Typenotes</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch]">
                        El trabajo de Diseño Editorial consiste en la adaptación
                        propia de la revista de TypeNotes a un formato
                        más continuo y de poco tiempo que cuente
                        algunos de los contenidos de la edición más grande,
                        creando un soporte rápido y menos caro para
                        que la gente pueda consumir este contenido acerca
                        de tipografía.
                        El tamaño tiene que ser lo más próximo al A3 pero
                        siendo un formato más pequeño en extensión al
                        original, incluyendo el contenido y los elementos
                        de la edición original pero dándole un pequeño lavado
                        de cara para ser algo más rápido y adaptado.
                        Crear algo de extensión corta siendo un hermano
                        pequeño de la revista, que mantenga la visión de
                        la principal y se note que es una edición que va
                        construyendo mensualmente a la principal.
                        Crear composiciones y diseños basados en el diseño
                        original no se trata de sustituir o rediseñar
                        como tal, tiene que mantener visualmente la estética.
                        <br>
                        <br>
                        Decisiones: Utilizar la foliación y la categoría para componer
                        en la página y ayudar a los demás elementos.
                        Añadirle a las imágenes cuadrados blancos que la
                        recorten en alguna esquina y en ocasiones añadirle
                        pies de foto.
                        Linea roja en la parte inferior de la página derecha
                        para abrir el artículo y otro para cerrarlo.
                        Caja de texto de dos columnas en retícula y 3 columnas
                        de texto componiendo la página.
                        Mucho espacio en blanco para componer las dobles
                        páginas y que se formen estructuras a raíz
                        de este.
                        Cambio de la FS Bravo a la FS Neruda para el texto
                        corrido ya que el primero da mucha mancha de
                        texto.
                        Jugar con la combinación del rojo y del negro en
                        los diferentes textos y apartados.
                        Retícula con muchas filas para poder componer
                        las imágenes con más libertad y las cajas de texto
                        (19 filas).
                        Construcción a partir de 6 columnas.
                        Utilizar los pies de ilustración, foto y créditos para
                        componer. <br>
                        <br>
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col h-min">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado.jpg" alt="">
                <img class="image_rect" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado9.jpg" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Tipografía</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold">Muestra de la tipografía general utilizada y
                la jerarquía
                para componer los textos a lo largo del libro. Utilización de varias tipografías: Futura Std, Trola y
                Gravity.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/tipo.png" alt="">
            </div>
        </div>
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Captions</div>
            <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 font-bold pb-12">Muestra de maquetación de
                todas las páginas
            </div>
            <div class="grid grid-cols-2 gap-4">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado2.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado3.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado4.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado5.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado6.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado7.jpg" alt="">
                <img class="image_grid w-full h-full" src="/img/MaquetaciónDiseñoEditorial_RubenMaldonado8.jpg" alt="">

            </div>
        </div>

        <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-zinc-300 flex-col gap-10 justify-center items-center">
            <div class="titular text-[16px] font-normal flex flex-start items-center">Programas utilizados para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px]" src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px]" src="/img/InDesign.svg" alt="">
                    <img class="image_logo w-[40px]" src="/img/Photoshop.svg" alt="">
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
  
.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100


  </style>
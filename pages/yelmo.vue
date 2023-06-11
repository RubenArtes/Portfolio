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
            <div class="titular text-[70px] font-normal max-w-[13ch] leading-12">Marca</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-200">Rediseño - Identidad - Yelmo Cines -
                    Marca -
                    Diseño Gráfico</div>
                <div class="text max-w-[60ch] text-[20px] leading-8 text-zinc-400 font-bold">El proyecto consiste en un
                    rediseño de la Identidad
                    visual de Yelmo Cines, contando con el cambio de conceptos, valores, logo, aplicaciones visuales y demás
                    elementos gráficos de su estética
                    para darle coherencia el sistema general de esta marca.
                </div>
            </div>
        </div>
        <div class="video flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-64 justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/CineYelmo_MarcaDinámicaFinal.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-24">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Rediseño Cine Yelmo</div>
                    <div class="text text-[16px] leading-6 text-zinc-400 font-normal max-w-[64ch]">
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
        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Marca dinámica</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">El motivo añadido de este rediseño es
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

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Tipografías</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">La tipografía seleccionada para toda la
                marca es la Proxima Nova y todos sus pesos
                jugando entre ellos y convinandolos.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-20 border-b border-zinc-500" src="/img/tipografia2.png" alt="">
                <img class="image_grid w-full h-full pb-6 pt-20" src="/img/tipografia.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Pictogramas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Los pictogramas del sistema siempre
                estarán creados a raíz
                de la reticula de formación del logo, de formas geométricas y siempre se intentará jugar con la C que forma
                el logo.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/pictogramas.png" alt="">
            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Aplicaciones</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Caratulas para instagrama formadas a
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

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Prototipo Aplicación</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-400 font-bold pb-12">Prueba de aplicación para Cine Yelmo
                siguiendo la idea de minimalismo que sigue
                este nuevo rediseño, el uso de colores y formas geométrica.
            </div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/aplicacion.png" alt="">
                <img class="image_grid w-full h-full pb-6" src="/img/aplicacion2.png" alt="">

            </div>
        </div>

        <div class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-10">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-white">Entradas</div>

            <div class="grid grid-cols-1">
                <img class="image_grid w-full h-full pb-6" src="/img/entradas.png" alt="">

            </div>
        </div>

        <div class="info text-sm flex gap-2 items-center justify-center text-white">Trabajo en grupo con Laura Morales
            (@crearual) - Barbara Ibañez (@intesazc)</div>

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
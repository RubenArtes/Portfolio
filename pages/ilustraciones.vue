<template>
    <div class="app bg-white">
        <Cursor />
        <div class="header bg-white p-10 flex text-blac justify-between sticky top-0 z-10 max-xl:p-6 max-xl:items-center">
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
        <VueScrollProgressBar background-color="#52525b" />
        <div
            class="trabajos flex pt-20 px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 ">
            <div
                class="titular text-[70px] font-bold max-w-[13ch] animate-pulse leading-12 bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text max-xl:text-[45px] max-xl:justify-center">
                Ilustraciones</div>
            <div class="info flex flex-col gap-6">
                <div class="text max-w-[60ch] text-[16px] leading-10 text-zinc-400 max-xl:leading-2 max-xl:text-xs max-xl:text-center">Dibujos - Lettering -
                    Ilustraciones -
                    Carteles -
                    Pegatinas</div>
                <div
                    class="text max-w-[60ch] text-[20px] leading-8 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center">
                    Recopilatorio de mis
                    ilustraciones, carteles ilustrados,
                    lettering y dibujos variados realizados digitalmente en Procreate con el IPad.
                </div>
            </div>
        </div>
        <div class="trabajos flex pt-20 px-40 text-white items-start flex-nowrap gap-40 justify-center max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-xl:text-center max-xl:pt-0 max-xl:pb-16">
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] italic text-[16px] leading-10 text-zinc-400 max-xl:text-xs">Asignatura</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    Trabajos libres,
                    Aprendizaje propio.
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Tiempo</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    3 meses
                </div>
            </div>
            <div class="info flex flex-col">
                <div class="text max-w-[60ch] text-[16px] italic leading-10 text-zinc-400 max-xl:text-xs">Materiales</div>
                <div
                    class="text max-w-[20ch] text-[16px] leading-6 text-zinc-600 font-bold max-xl:text-sm max-xl:max-w-[40ch]">
                    IPad,
                    PC.
                </div>
            </div>
        </div>
        <div
            class="video flex px-64 pt-10 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center">
            <video width="1240" height="788" loop autoplay controls>
                <source src="/img/videoilustraciones.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32">
                    <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Ilustraciones Isométricas</div>
                    <div class="text text-[16px] leading-6 text-zinc-600 font-normal max-w-[64ch] max-xl:text-xs">
                        Una de las ilsutraciones que más he estado practicando ultimamente son perspectivas e isométricas
                        creando espacios en 3D en un dibujo 2D.
                        Me han ayudado mucho a comprender el espacio y a componer. Después gracias a estos dibujos he
                        practicado bastante la creación de sombras e iluminaciones, el color
                        y diferentes técnicas con el Procreate para ilustrar.
                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min">
                <img class="image_rect w-[550px]" src="/img/isometrica.png" alt="">

            </div>
        </div>
        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Bocetos y creación</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs"> Creación de las
                perspectivas paso a
                paso.
            </div>

            <div class="grid grid-cols-4 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/isometrica6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica11.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica7.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica5.png" alt="">
            </div>
            <div class="grid grid-cols-4 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/isometrica4.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica10.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica8.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica3.png" alt="">
            </div>
            <div class="grid grid-cols-4 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full border- border-zinc-400" src="/img/isometrica2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica12.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica9.png" alt="">
                <img class="image_grid w-full h-full" src="/img/isometrica1.png" alt="">
            </div>

        </div>
        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Pegatinas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold max-xl:text-xs">Pegatinas con temática
                Ataque a los
                Titanes, representación propia de los personajes de la serie, creando una pequeña colección.
            </div>
            <div
                class="video flex px-40 pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
                <video width="1240" height="788" loop autoplay controls>
                    <source src="/img/videoilustraciones2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

            </div>

            <div class="grid grid-cols-4 gap-2 max-xl:grid-cols-1">
                <div class="div text-zinc-600 text-center text-sm m-0">Eren Jaeger
                    <br>
                    <div class="div text-black text-center text-lg m-0">Titan de Ataque</div>
                </div>
                <div class="div text-black text-center text-xs m-0">Annie Leonhart
                    <br>
                    <div class="div text-black text-center text-lg m-0">Titan Hembra</div>
                </div>
                <div class="div text-black text-center text-xs m-0">Reiner Braun
                    <br>
                    <div class="div text-black text-center text-lg m-0">Titan Acorazado</div>
                </div>
                <div class="div text-black text-center text-xs m-0">Zeke Jaeger
                    <br>
                    <div class="div text-black text-center text-lg m-0">Titan Bestia</div>
                </div>
            </div>
            <div class="grid grid-cols-4 pb-28 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/ataque1.png" alt="">
                <img class="image_grid w-full h-full" src="/img/ataque2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/ataque3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/ataque4.png" alt="">
            </div>

            <div class="grid grid-cols-2 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/pegatinas.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/pegatinas4.png" alt="">
            </div>
            

        </div>
        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Casa de las Carcasas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Ilustraciones con
                temática de
                Jean-Michel Basquiat y el Neoexpresionismo
                para las fundas encargadas por la Casa de las Carcasas.
            </div>

            <div class="grid grid-gaps-3 gap-2 max-xl:grid-cols-1">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout.png" alt="">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/carcasaslayout3.png" alt="">
            </div>


        </div>

        <div
            class="images pt-20 px-64 pb-10 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Barbieheimer</div>
            <div class="text max-w-[100ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Ilustración con temática de las dos películas taquilleras del 2023, "Barbie" y "Openheimer". Se llevó un movimiento
                de hermandad entre las dos peliculas creando el "Barbieheimer". Esto me dió la idea de crear una ilustración conjunta en la que represento al protagonista de Openheimer, Robert Openheimer como un personaje de 
                Barbie utilizando la paleta y fondo de esta segunda película mencionada. Se puede ver en esta ilustración como se ha realizado la anatomía del personaje, el control de la linea, los colores y las sombras y el postprocesado
                de la ilustración.
            </div>

            <div
                class="video grid grid-cols-2 pt-24 pb-10 px-40 text-white flex-nowrap items-center gap-52 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:grid-cols-1">
                <video width="1240" height="788" loop autoplay controls class="border border-1">
                    <source src="/img/VideoBarbie.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <img src="/img/BarbieIlus.png">

            </div>
        </div>

        <div
            class="images pt-20 px-64 pb-32 text-white justify-center flex flex-col gap-2 max-xl:pb-0 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-4">
            <div class="text max-w-[60ch] text-[32px] leading-10 text-black">Pegatinas</div>
            <div class="text max-w-[60ch] text-[16px] text-zinc-600 font-bold pb-12 max-xl:text-xs">Pegatinas con temática
                Cars, representación propia de los personajes de la pelicula, creando una pequeña colección
            </div>

            <div
                class="video flex px-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
                <video width="1240" height="788" loop autoplay controls>
                    <source src="/img/videoilustraciones3.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

            </div>

            <div class="grid grid-cols-4 mt-20 max-xl:grid-cols-2 text-black">
                <img class="image_grid w-full h-full" src="/img/cars1.png" alt="">
                <img class="image_grid w-full h-full" src="/img/cars2.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars3.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars4.png" alt="">

                <a class="text justify-center text-[#A5A9F4] text-center mb-20 max-xl:hidden">Guido Quaroni</a>
                <a class="text justify-center text-[#F9DA81] text-center max-xl:hidden">Luigi</a>
                <a class="text justify-center text-[#F99A46] text-center max-xl:hidden">Miss Fractura</a>
                <a class="text justify-center text-[#B6D29A] text-center max-xl:hidden">Fillmore</a>

                <img class="image_grid w-full h-full" src="/img/Cars5.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars6.png" alt="">
                <img class="image_grid w-full h-full" src="/img/cars7.png" alt="">
                <img class="image_grid w-full h-full" src="/img/cars8.png" alt="">

                <a class="text justify-center text-[#96313b] text-center mb-20 max-xl:hidden">Rayo McQueen</a>
                <a class="text justify-center text-[#79a63d] text-center max-xl:hidden">Chick Hicks</a>
                <a class="text justify-center text-[#23A1EF] text-center max-xl:hidden">Strip Weathers</a>
                <a class="text justify-center text-[#FEC557] text-center max-xl:hidden">Copa Piston</a>

            </div>
            <div class="grid grid-cols-4 mb-20 max-xl:grid-cols-2 text-black">
                <img class="image_grid col-start-2 w-full h-full max-xl:col-start-1" src="/img/Cars9.png" alt="">
                <img class="image_grid w-full h-full" src="/img/Cars10.png" alt="">

                <a class="text justify-center text-center mb-20 max-xl:hidden"></a>
                <a class="text justify-center text-center max-xl:hidden"></a>
                <a class="text justify-center text-[#EE885F] text-center max-xl:hidden">Mate</a>
                <a class="text justify-center text-[#373D83] text-center max-xl:hidden">Doc Hudson Hornet</a>

            </div>
            

        </div>

        


        <div
            class="trabajos flex pt-10 pl-40 pr-40 pb-10 text-zinc-600 flex-col gap-10 justify-center items-center max-xl:pt-6 max-xl:pb-2 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
            <div class="titular text-[16px] font-normal flex flex-start items-center max-xl:text-xs">Programas utilizados
                para este
                proyecto</div>
            <div class="programas flex flex-col items-center">
                <div class="three_programas flex gap-10">
                    <img class="image_logo w-[40px] rounded-lg opacity-80 hover:opacity-100 max-xl:max-w-[30px] max-xl:max-h-[29px]"
                        src="/img/Procreate.png" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Illustrator.svg" alt="">
                    <img class="image_logo w-[40px] opacity-80 hover:opacity-100 max-xl:max-w-[30px]"
                        src="/img/Photoshop.svg" alt="">

                </div>
            </div>
        </div>



        <div
            class="links_rrss pt-32 px-80 pb-32 text-black justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20">
            <div class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11.svg">
            </div>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.artes/">Instagram
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/rubenartes">Behance
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11zinc.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                        <img class="vector" src="/img/Vector-11zinc.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-white p-10 flex text-black justify-between sticky top-0 max-xl:p-6">
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
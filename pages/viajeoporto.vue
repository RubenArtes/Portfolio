<template>
    <div class="app bg-black font-['SFUIDisplay-Regular']">
        <Cursor class="max-sm:hidden" />
        <div
            class="header bg-black p-10 border-b-1 border border-r-0 border-l-0 border-t-0 px-32 text-white grid grid-cols-2 sticky top-0 z-50 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between max-sm:px-8">
            <div class="image place-self-start self-center">
                <NuxtLink to="/Home">
                    <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logogif4.gif" />
                </NuxtLink>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email self-center text-lg  place-self-end flex gap-2 max-lg:text-xs">
                ruben.maldonado.graphic@gmail.com
                <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg" />
            </a>
        </div>

        <VueScrollProgressBar background-color="#52525B" />
        <div id="navegacion"
            class="titular2 max-sm:pb-4 max-[1500px]:pt-12 max-[1500px]:content-center flex px-64 gap-64 max-[1920px]:px-32 max-[1920px]:gap-32 content-start space-between justify-center pb-32 pt-32 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['PPE-Ultralight'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px] from-[#311568] via-[#4797ff] to-[#311568]  ">
                PORTO</div>
            <div
                class="trabajos gap-6 flex flex-col max-sm:gap-2 max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:justify-center items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-0">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-white max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS</div>
                <div
                    class="text max-w-[80ch] pb-16 pt-4 max-sm:text-left text-left max-[1500px]:text-center max-[1500px]:items-center max-[1500px]:max-w-[70ch] font-['SFUIDisplay-Light'] text-[20px] text-white max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch] max-[800px]:pb-4">
                    Videos de abordo de todos los lugares importantes y perspectivas interesantes personales sobre
                    el viaje,
                    para ampliar material e información de los demás apartados, dandole
                    un valor más, contando cosas en movimiento y no en una sola imagen estática.
                </div>

            </div>
        </div>

        <div
            class="colum max-sm:pb-32 max-sm:pt-4 max-[1500px]:pt-12 max-[1500px]:px-32 flex pt-20 px-24 pb-44 text-white gap-64 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-16 sticky top-48 max-[1500px]:gap-12">
                    <div
                        class="titular text-[40px] font-['PPE-Ultralight'] text-start leading-10 text-[#b9c9ff] max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        <p class="font-['PPE-Ultralightitalic'] max-sm:pb-2">3 días por</p> OPORTO
                    </div>
                    <div
                        class="text text-[20px] font-['Regular'] indent-12 text-white max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Estos videos son una recopilación más extensa de lo que estuve viendo durante estos tres
                        días,
                        los lugares emblemáticos de la ciudad, los monumentos, las calles y su gente, los
                        detalles.
                        Estos videos
                        sirven para ampliar el contenido de la caja y del material visual en imágenes. Estos
                        vidoes
                        muestran la visión entera
                        del lugar al que iba y se puede ver con todo detalle como son cada lugar y que es lo que
                        yo
                        veía en cada sitio bajo mi
                        punto de vista personal.
                        <br> <br>
                        Este material es exclusivo accesible a partir del QR de la caja ya que contiene
                        elementos de
                        apoyo al trabajo para hacerlo
                        más dinámico y enriquecedor.
                        Aqui se muestran lugares como:

                        <div class="pt-12 grid grid-cols-2 max-sm:gap-10 max-sm:pt-6 max-sm:pb-16">
                            <p class="text-[15px] text-zinc-400 max-sm:text-[13px]">
                                <br> <br>
                                * São Bento
                                <br>* Catedral do Porto
                                <br>* Puente de Don Luis I
                                <br>* Livraria Lello
                                <br>* Parque Das Virtudes
                                <br>* Torre dos Clérigos
                                <br>* Igreja de Santo Ildefonso
                                <br>* Capela das Almas
                                <br>* Mercado do Bolhão
                                <br>* McDonalds Imperial
                                <br>* Prometeu Artesanato
                                <br>* Igreja da Misericórdia
                                <br>* Cementério de Agramonte
                                <br>* Jardim da Rounda da Boavista
                            </p>
                            <p class="text-[15px] text-zinc-400 max-sm:text-[13px]">
                                <br>
                                <br>* Residencia LIS B&B
                                <br>* Praça Marqués de Pombal
                                <br>* Estación de Camphanã
                                <br>* Santa Franceshina
                                <br>* Cementério do Prado do Repouso
                                <br>* Church of Santa Clara
                                <br>* Puente do Infante
                                <br>* Jardim do Morro
                                <br>* Monastery of Serra do Pilar
                                <br>* Capela de Atkinson
                                <br>* Igreja Paroquial de Santa Marinha
                                <br>* Jardim do Palacio de Cristal
                                <br>* Museo | Casa de Serralvés
                                <br>* Igreja Paroquial do Nosso Senhor do Bonfim

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fotografias">

                <Carousel class="carousel max-w-[600px]">

                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto2.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto3.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto5.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto7.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto8.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto9.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto10.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto11.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto13.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto14.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto15.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto16.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto17.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>
                    <Slide v-for="slide in 1" :key="slide">
                        <video width="1240" height="788" loop autoplay controls muted>
                            <source src="/img/VideoPorto20.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </Slide>


                    <template #addons>
                        <Navigation />
                        <Pagination class="bg-[#ffffff]"/>
                    </template>
                </Carousel>

            </div>
        </div>

        <div
            class="links_rrss max-sm:pt-2 font-['Regular'] leading-6 pt-32 px-64 pb-32 text-zinc-100 justify-center flex flex-row gap-60 max-xl:pt-20 max-xl:px-10 max-xl:flex-col max-xl:justify-items-center max-xl:gap-20 max-xl:flex max-xl:justify-center max-xl:pb-20 max-[1500px]:px-32 ">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
                target="_blank" class="email text-lg flex gap-2 items-center max-xl:text-[14px] max-xl:justify-center">
                ruben.maldonado.graphic@gmail.com
                <img class="vector" src="/img/Vector-11white.svg">
            </a>
            <div class="links flex flex-col gap-2">
                <div class="links1 flex gap-32 max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/maldonadoruben_/">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.behance.net/maldonadoruben">Behance
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-xl:justify-center">
                    <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.instagram.com/ruben.iso">Instagram
                        <img class="vector" src="/img/Vector-11white.svg">

                    </a> <a class="red flex gap-2 items-center max-xl:text-[14px]"
                        href="https://www.linkedin.com/in/rubenmaldonado00">LinkedIn
                        <img class="vector" src="/img/Vector-11white.svg">
                    </a>
                </div>
            </div>

        </div>

        <div class="foter bg-balck p-10 flex text-white justify-between sticky top-0 max-xl:p-6">
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

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'


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
    name: 'Basic',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}

</script>

<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
 .red
    &:hover
        @apply text-zinc-300
  
  </style>
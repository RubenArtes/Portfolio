<template>
    <div class="app bg-white font-['SFUIDisplay-Regular']">
        <Cursor class="max-sm:hidden" />
        <div
            class="header bg-white p-10 flex px-24 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
            <div class="image flex flex-start justify-items-start">
                <NuxtLink to="/">
                    <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg">
                </NuxtLink>
            </div>

            <div class="email text-xm justify-items-end flex gap-2 max-lg:text-xs ">Viaje Porto 2023
            </div>

        </div>
        <VueScrollProgressBar background-color="#52525B" />
        <div
            class="titular2 flex px-64 gap-48 items-center content-start space-between justify-center pt-20 text-center max-sm:px-10 max-sm:flex-col max-sm:gap-2 max-sm:pt-10 max-[1500px]:flex-col max-[1500px]:gap-2 max-[1500px]:items-center max-[1700px]:px-10">
            <div
                class="titular text-[120px] font-['Domaine-Display'] leading-12 font-bold animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-[#537286] via-[#536686] to-[#537686] animate-text max-sm:text-[55px] max-[1500px]:text-left max-[1280px]:text-[100px]">
                PORTO</div>
            <div
                class="trabajos flex flex-col items-left justify-left text-left max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:pt-6 max-sm:pb-16 max-sm:px-0 max-[1280px]:items-center max-[1280px]:pt-6 max-[1280px]:pb-8">

                <div
                    class="text max-w-[60ch] text-[16px] uppercase text-zinc-900 max-xl:leading-2 max-xl:text-xs max-[1280px]:text-center max-[1280px]:justify-center">
                    COLECCIÓN DE VIDEOS DEL VIAJE A PORTO EN 3 DÍAS
                </div>
                <div
                    class="text max-w-[80ch] pt-4 text-left font-['SFUIDisplay-Light'] text-[16px] text-zinc-600 max-xl:text-sm max-xl:max-w-[50ch] max-xl:text-center max-[1280px]:max-w-[100ch]">
                    Videos de abordo de todos los lugares importantes y perspectivas interesantes personales sobre el viaje,
                    para ampliar material e información de los demás apartados, dandole
                    un valor más, contando cosas en movimiento y no en una sola imagen estática.
                </div>

            </div>
        </div>

        <div
            class="colum flex pt-20 px-64 pb-10 text-white gap-32 justify-center max-xl:pt-16 max-xl:px-10 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-xl:items-center max-[1500px]:px-60">
            <div class="info_proyect max-w-[80ch]">
                <div class="info_secondary flex flex-col gap-6 sticky top-32 max-[1500px]:gap-12">
                    <div
                        class="titular uppercase text-[40px] font-['Domaine-Display'] text-start leading-10 font-bold text-black max-xl:justify-centermax-xl:text-[60px] max-xl:justify-center max-sm:text-30px max-sm:leading-10 max-[1500px]:text-left">
                        3 días por Oporto</div>
                    <div
                        class="text text-[16px] font-['SFUIDisplay-Light'] indent-12 text-zinc-900 max-w-[70ch] max-xl:text-sm max-[1500px]:text-[16px] max-[1500px]:max-w-[100ch]">
                        Estos videos son una recopilación más extensa de lo que estuve viendo durante estos tres días,
                        los lugares emblemáticos de la ciudad, los monumentos, las calles y su gente, los detalles. Estos videos
                        sirven para ampliar el contenido de la caja y del material visual en imágenes. Estos vidoes muestran la visión entera
                        del lugar al que iba y se puede ver con todo detalle como son cada lugar y que es lo que yo veía en cada sitio bajo mi
                        punto de vista personal.
                        <br> <br>
                        Este material es exclusivo accesible a partir del QR de la caja ya que contiene elementos de apoyo al trabajo para hacerlo
                        más dinámico y enriquecedor.
                        Aqui se muestran lugares como:
                        <br> <br>
                        *São Bento
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
                        <br>* Residencia LIS B&B
                        <br>* Praça Marqués de Pombal
                        <br>* Estación de Camphanã
                        <br>* Igreja Paroquial do Nosso Senhor do Bonfim
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

                    </div>
                </div>
            </div>
            <div class="fotografias flex flex-col gap-6 h-min max-[1300px]:px-64 max-[1300px]:pt-12 max-[1000px]:px-0">

                <Carousel class="carousel max-w-[1200px]">

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
                        <Pagination />
                    </template>
                </Carousel>

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
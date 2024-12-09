<template>
    <div class="p-8 min-h-screen bg-black">

        <!-- Contenedor de Scroll Horizontal con Arrastre -->
        <div ref="scrollContainer"
            class="horizontal-scroll-container overflow-x-auto whitespace-nowrap py-4 cursor-grab"
            @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag">
            <!-- Cada imagen en la galería -->
            <div class="caja bg-white">
                <div class="tittle"> Hola 2</div>
                <div v-for="(image, index) in images" :key="index" class="inline-block mx-2">
                    <img :src="image" alt="Gallery image" class="h-[600px] object-cover" />
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Array de URLs de imágenes que queremos mostrar
const images = [
    '/img/gifframbuesadark.gif',
    '/img/animacionilustraciones2.gif',
    '/img/entrada3d.gif',
    '/img/caratulatypenotes.gif',
    '/img/member30.gif',
    '/img/movistardark.gif',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
    '/img/fotorealpackaging4.png',
]

// Referencia para el contenedor de scroll y estado del arrastre
const scrollContainer = ref(null)
let isDragging = false
let startX = 0
let scrollLeft = 0

// Función que inicia el arrastre al presionar el ratón
const startDrag = (event) => {
    isDragging = true
    startX = event.pageX - scrollContainer.value.offsetLeft
    scrollLeft = scrollContainer.value.scrollLeft
    scrollContainer.value.classList.add('cursor-grabbing') // Cambia el cursor
}

// Función que gestiona el arrastre mientras el ratón está en movimiento
const onDrag = (event) => {
    if (!isDragging) return
    event.preventDefault()
    const x = event.pageX - scrollContainer.value.offsetLeft
    const walk = (x - startX) * 2 // Velocidad del desplazamiento
    scrollContainer.value.scrollLeft = scrollLeft - walk
}

// Función que termina el arrastre cuando se suelta el ratón
const endDrag = () => {
    isDragging = false
    scrollContainer.value.classList.remove('cursor-grabbing')
}
</script>

<style scoped>
.horizontal-scroll-container {
    scroll-behavior: smooth;
    cursor: grab;

    /* Ocultar scroll en navegadores modernos */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */

}

/* Ocultar scroll en WebKit (Chrome, Safari, Edge) */
.horizontal-scroll-container::-webkit-scrollbar {
    display: none;
}

.cursor-grabbing {
    cursor: grabbing !important;
}
</style>
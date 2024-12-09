<template>
    <div class="custom-cursor">
      <div id="cursor-big" class="custom-cursor_icon"></div>
      <!-- SVG que dibuja la estela del cursor -->
      <svg class="cursor-trail-svg" ref="trailSvg">
        <polyline
          :points="trailPoints"
          stroke="white"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          class="cursor-trail-line"
        />
      </svg>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';
  
  export default {
    props: {
      hoverClass: {
        type: String,
        default: 'cursor-hover',
      },
    },
    setup() {
      // Estela de puntos del cursor
      const trailPoints = ref('');
      const cursorPosition = ref({ x: 0, y: 0 });
      const estelaPosition = ref({ x: 0, y: 0 });
      const MAX_TRAIL_POINTS = 120; // Número máximo de puntos para la estela
      const LERP_FACTOR = 0.8; // Suavizado de la estela
  
      let animationFrameId;
  
      // Manejo del movimiento del mouse para actualizar la estela
      const handleMouseMove = (event) => {
        cursorPosition.value = { x: event.clientX, y: event.clientY };
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateTrail);
      };
  
      // Actualiza la estela suavemente
      const updateTrail = () => {
        estelaPosition.value.x += (cursorPosition.value.x - estelaPosition.value.x) * LERP_FACTOR;
        estelaPosition.value.y += (cursorPosition.value.y - estelaPosition.value.y) * LERP_FACTOR;
  
        const newPoint = `${estelaPosition.value.x},${estelaPosition.value.y}`;
        const pointsArray = trailPoints.value.split(' ').filter(Boolean);
  
        if (pointsArray.length >= MAX_TRAIL_POINTS) pointsArray.shift();
        pointsArray.push(newPoint);
  
        trailPoints.value = pointsArray.join(' ');
  
        animationFrameId = requestAnimationFrame(updateTrail);
      };
  
      onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
      });
  
      onUnmounted(() => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      });
  
      return {
        trailPoints,
      };
    },
    mounted() {
      const cursorBig = document.getElementById('cursor-big');
      const links = document.getElementsByTagName('a');
      const withClassHover = document.getElementsByClassName(this.hoverClass);
      const withHover = [...links, ...withClassHover];
  
      // Event Listeners
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mousedown', this.onMouseHover);
      document.addEventListener('mouseup', this.onMouseHoverOut);
      document.addEventListener('mouseenter', () => {
        cursorBig.style.opacity = 1;
      });
      document.addEventListener('mouseleave', () => {
        cursorBig.style.opacity = 0;
      });
      withHover.forEach((element) => {
        element.addEventListener('mouseover', this.onMouseHover);
        element.addEventListener('mouseout', this.onMouseHoverOut);
      });
  
      // Event Handlers
      this.onMouseMove = (e) => {
        cursorBig.style.opacity = 1;
        gsap.to(cursorBig, 0.4, {
          x: e.clientX - 18,
          y: e.clientY - 18,
        });
      };
  
      this.onMouseHover = () => {
        gsap.to(cursorBig, 0.3, {
          scale: 1.5,
        });
      };
  
      this.onMouseHoverOut = () => {
        gsap.to(cursorBig, 0.3, {
          scale: 1,
        });
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    cursor: none !important; /* Desactiva el cursor predeterminado */
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: black; /* Fondo negro */
    overflow: hidden; /* Evita que el fondo se mueva */
  }
  
  .custom-cursor_icon {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    background-image: url('/img/cursorcustom.svg'); /* Ruta de tu archivo SVG */
    background-size: contain; /* Ajusta el tamaño del SVG */
    background-repeat: no-repeat;
    width: 40px; /* Ajusta el tamaño del cursor */
    height: 40px;
    transform: translate(-50%, -50%); /* Centra el cursor */
    mix-blend-mode: darken; /* Aplica el modo de mezcla en el cursor */
  }
  
  .cursor-trail-svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999; /* Un z-index menor que el del cursor */
  }
  
  .cursor-trail-line {
    stroke: white; /* Estela en color blanco */
    stroke-width: 4px; /* Grosor de la estela aumentado */
    stroke-linecap: round;
    fill: none;
    transition: all 0.1s ease;
    mix-blend-mode: exclusion; /* Aplica el modo de mezcla en la estela */
  }
  </style>
  
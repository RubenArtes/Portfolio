<template>
    <div class="custom-cursor">
        <div id="cursor-big" class="custom-cursor__icon"></div>
    </div>
</template>
  
<script>
import gsap from "gsap";

export default {
    props: {
        hoverClass: {
            type: String,
            default: 'cursor-hover'
        }
    },
    mounted() {
        const cursorBig = document.getElementById('cursor-big'),
            links = document.getElementsByTagName("a"),
            withClassHover = document.getElementsByClassName(this.hoverClass),
            withHover = [...links, ...withClassHover];

        // Event Listeners
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseHover);
        document.addEventListener("mouseup", onMouseHoverOut);
        document.addEventListener("mouseenter", () => {
            cursorBig.style.opacity = 1;
        });
        document.addEventListener("mouseleave", () => {
            cursorBig.style.opacity = 0;
        });
        withHover.forEach((element) => {
            element.addEventListener("mouseover", onMouseHover);
            element.addEventListener("mouseout", onMouseHoverOut);
        });

        // Event Handlers
        function onMouseMove(e) {
            cursorBig.style.opacity = 1;
            gsap.to(cursorBig, 0.4, {
                x: e.clientX - 18,
                y: e.clientY - 18
            });
        }
        function onMouseHover() {
            gsap.to(cursorBig, 0.3, {
                scale: 1.5
            });
        }
        function onMouseHoverOut() {
            gsap.to(cursorBig, 0.3, {
                scale: 1
            });
        }
    }
};
</script>
  
<style>
    * {
        cursor: none !important;
    }

    .custom-cursor__icon {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
        background-image: url('/img/flecha.svg'); /* Cambia esto a la ruta de tu archivo SVG */
        background-size: contain;
        background-repeat: no-repeat;
        width: 60px; /* Ajusta el tamaño de acuerdo a tus necesidades */
        height: 60px;
    }
</style>

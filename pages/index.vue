<template>
  <div class="app bg-black">
    <div class="header bg-black p-10 flex text-white justify-between sticky top-0">
      <div class="image flex flex-start">
        <img src="/img/Vector.svg">
      </div>
      <div class="email text-lg flex gap-2 items-center">ruben.maldonado.graphic@gmail.com
          <img class="vector" src="/img/Vector-11.svg">
      </div>
    </div>
    <div class="trabajos flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-28 justify-center">
      <div class="titular text-[115px] font-normal flex gap-2 items-start">Portfolio 
        <img class="info" src="/img/info.svg"> 
      </div>
      <div class="text max-w-[60ch]">Mis diferentes trabajos durante la carrera y proyectos personales. Desde editorial,
        packaging y web, hasta ilustraciones, audiovisuales y fotografías.
      </div>
    </div>
    <div class="seleccion_trabajos pt-20 px-64 pb-20 text-white flex flex-col justify-center">
      <div class="twotrabajos flex gap-6 justify-center pb-6">
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/editorial">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Mockup.jpg">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold"> Rediseño Editorial - El pensamiento Lateral
          </div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Editorial</div>
        </div>
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Editorial_3.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold"> Rediseño Editorial - Typenotes</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Editorial</div>
        </div>
      </div>
      <div class="twotrabajos flex gap-6 justify-center pb-6">
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/packaging">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Packaging_ruben2.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Packaging Saludable Matutano</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Packaging</div>
        </div>
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Vino_1.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Diseño Marca de Vinos - PRAU</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Packaging y Marca</div>
        </div>
      </div>
      <div class="twotrabajos flex gap-6 justify-center pb-6">
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/movistar">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Movistar.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Piezas Audiovisuales After Effects -
            Movistar</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Editorial</div>
        </div>
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/Metro_1.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Libro Experimental - Metro de Madrid</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Producción</div>
        </div>
        
      </div>
      <div class="twotrabajos flex gap-6 justify-center pb-6">
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/postproduccion_1.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Fotografías - Retratos - Bodegones - Lugares</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Fotografía</div>
        </div>
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/modelado3d.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Modelado 3D - Cinema 4d - Blender</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Modelado 3D</div>
        </div>
        
      </div>
      <div class="twotrabajos flex gap-6 justify-center pb-6">
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <img class="image m-0 rounded-lg max-w-[600px]" src="/img/cineyelmo.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Cines Yelmo Rediseño</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Marca</div>
        </div>
        <div class="trabajo max-w-[600px]">
          <NuxtLink to="/">
            <video class="m-0 rounded-lg" width="600" height="550" loop autoplay>
                <source src="/img/videoweb.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-6 text-lg font-bold">Páginas Web</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400">Diseño Gráfico - Programación y código</div>
        </div>
        
      </div>
    </div>

    <div class="trabajos flex pt-32 pl-96 pr-96 pb-20 text-white flex-nowrap gap-[525px] justify-center">
      <div class="titular text-[72px] font-normal">Programas</div>
      <div class="programas flex flex-col gap-10">
        <div class="three_programas flex gap-20">
          <img class="image_logo" src="/img/Figma.svg" alt="">
          <img class="image_logo" src="/img/Photoshop.svg" alt="">
          <img class="image_logo" src="/img/Lightroom.svg" alt="">
        </div>
        <div class="three_programas flex gap-20">
          <img class="image_logo" src="/img/After_Effects.svg" alt="">
          <img class="image_logo" src="/img/Illustrator.svg" alt="">
          <img class="image_logo" src="/img/InDesign.svg" alt="">
        </div>
      </div>
    </div>

    <div class="trabajos flex pt-32 pl-96 pr-96 pb-20 text-white flex-nowrap gap-96 justify-center">
      <div class="titular text-[72px] font-normal">Servicios</div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Fotografía</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Experiencia realizando sesiones
            fotográficas en exterior y estudio
            de retratos. Fotografía de paisajes y lugares. Además de experiencia en fotografía de producto y control de
            equipo de estudio. Edición de fotografía (Raw) en Photoshop y Lightroom.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Ilustración</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Experiencia realizando ilustraciones tradicionales
            e ilustraciones digitales mediante IPad - Procreate. Cuento con Grado Superior de Ilustración en la Escuela de Artes de Toledo.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Web y Programación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Conocimientos altos de HTML y CSS (sass). <br>
            Conocimientos medio-altos de Tailwind, Nuxt y Vue.
            Conocimientos medios en JavasCript.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Pack Adobe y Figma</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Altos conocimientos en utilizar
            el pack Adobe (concretamente los mencionados arriba) y utilización y prototipado de Figma.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Audiovisuales y Multimedia</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos en diferentes ambitos del mundo de audiovisuales,
            concretamente After Effects para motion graphics, Adobe Premiere y otros programas de video para realización de piezas para redes sociales,
            conocimientos de Rotoscopia digital, chroma y edición de video.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Maquetación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos en Indesign y Photoshop, para la maquetación
            de carteles, folletos, libros, revistas, anuncios y cualquier pieza gráfica necesaria.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Redes Sociales</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos de redes sociales, actualidad y flujo de información
            en las aplicaciones actuales como Instagram, TikTok, Facebook y Twitter.

          </div>
        </div>

      </div>


    </div>

    <div class="trabajos flex pt-32 pl-96 pr-96 pb-20 text-white flex-nowrap gap-96 justify-center">
      <div class="titular text-[72px] font-normal">Sobre mi</div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Soy un estudiante de 22 años, actualmente
            cursando 4º en un grado Universitario de Diseño Gráfico en la Escuela Superior De Diseño de Madrid. Cuento con un Grado
            Superior de Ilustración. <br> <br> Soy muy polifacetico y no me cierro a ninguna vía del diseño, suelo
            abarcar todos los ambitos, como ya he mencionado anteriormente. Soy resolutivo y trabajador.

            <img class="img pt-10" src="/img/FOTO.jpg" alt="">

          </div>
        </div>

      </div>


    </div>

    <div class="trabajos flex pt-32 pl-96 pr-96 pb-20 text-white flex-nowrap gap-96 justify-center">
      <div class="titular text-[72px] font-normal">Trabajos</div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">→ Ganador de concurso de carteles para <a class="bold font-bold text-white">Villaluenga de la Sagra</a> - Cartel para el libro de las fiestas
            <br><br> → Creación de cartelería para página web y físico y creación de pictogramas para empresa <a class="bold font-bold text-white">Neumáticos por Poco.</a>
            <br><br> → Renovación de marca creando un logo para la empresa <a class="bold font-bold text-white">Motor 76.</a>
            <br><br> → Creación de iustraciones para portadas de noticias en <a class="bold font-bold text-white">Ecos Castilla La Mancha.</a>
            <br><br> → Diseño de portadas para proyecto musical.
            <br><br> → Encargos Freelance de sesiones fotográficas, diseño de tatuajes e ilustraciones personales.

           

          </div>
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
        <img class="vector" src="/img/star.svg">
      </div>
      <div class="email flex gap-2 items-center text-sm">Ruben Maldonado González
        <img class="vector" src="/img/futbol.svg">
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

.image
  @apply transition ease-in-out delay-150
  &:hover
    @apply opacity-80 scale-95 duration-75

.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100

</style>
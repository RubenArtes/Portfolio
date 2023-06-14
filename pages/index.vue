<template>
  <div class="app bg-black max-md:max-w-[600px]">

    <div class="header bg-black p-10 flex text-white justify-between sticky top-0 z-10 max-md:p-6 max-md:sticky">
      <div class="image flex flex-start">
        <img class="max-md:max-w-[15px]" src="/img/Vector.svg">
      </div>
      <div class="email text-lg flex gap-2 items-center max-md:text-xs">ruben.maldonado.graphic@gmail.com
        <img class="vector max-md:max-w-[8px]" src="/img/Vector-11.svg">
      </div>
    </div>

    <div class="trabajos flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-28 justify-center max-md:pt-16 max-md:px-10 max-md:flex-col max-md:justify-center max-md:gap-10">
      <div class="titular text-[115px] font-normal flex gap-2 items-start max-md:max-w-[200px] max-md:text-[70px] max-md:justify-center">Portfolio
        <img class="info" src="/img/info.svg">
      </div>
      <div class="text max-w-[60ch] max-md:justify-center max-md:text-[16px] max-md:text-center">Mis diferentes trabajos durante la carrera y proyectos personales. Desde editorial,
        packaging y web, hasta ilustraciones, audiovisuales y fotografías.
      </div>
    </div>
    <div class="seleccion_trabajos pt-10 px-64 pb-20 text-white flex flex-col justify-center max-md:px-10">
      <div class="accede flex justify-center text-zinc-200 pb-10 text-xs">«Clickea en un trabajo para saber más de el»</div>
      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/packaging">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/Packaging_ruben2.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Matutano Saludable</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Packaging</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/vino">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/Vino_1.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">PRAU - Pasión por la tierra</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Packaging y Marca</div>
        </div>
      </div>
      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/libroexperimental">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/libroexperimental.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Metro de Madrid</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Producción</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/typenotes">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/Editorial_3.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2"> Typenotes</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Editorial</div>
        </div>


      </div>

      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/movistar">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/Movistar.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Movistar +</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - After Effects</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/esdfigma">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/gifesd.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">ESD - Página Web</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Prototipado figma</div>
        </div>
      </div>
      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/fotos">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/postproduccion_1.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Colección fotográfica
          </div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Fotografía</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/modelado">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/modelado3d.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Colección 3D</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Modelado y render</div>
        </div>

      </div>
      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/yelmo">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/gifyelmo.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Cines Yelmo</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Marca y rediseño</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/editorial">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/Mockup.jpg">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">El pensamiento Lateral
          </div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Diseño Gráfico - Rediseño Editorial</div>
        </div>

      </div>

      <div class="twotrabajos flex gap-4 justify-center pb-8 max-md:flex-col">
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/kinderbueno">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/kinderbueno3.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Kinder Bueno</div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Ilustración - Mascota y rediseño</div>
        </div>
        <div class="trabajo max-w-[600px] max-md:max-w-[350px]">
          <NuxtLink to="/ilustraciones">
            <img class="image m-0 rounded-md max-w-[600px] max-md:max-w-[350px]" src="/img/ilustraciones.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-md:text-[16px] max-md:mt-2">Colección de ilustraciones
          </div>
          <div class="type_trabajo max-w-[40ch] m-0 text-sm text-zinc-400 max-md:text-[12px] max-md:mb-4">Ilustración - Dibujos e ilustraciones</div>
        </div>

      </div>

    </div>

    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20">
      <div class="titular text-[72px] font-normal flex flex-col max-md:max-w-[200px] max-md:justify-center max-md-justify-items-center max-md:text-[60px]">Programas</div>
      <div class="programas flex flex-col gap-10 max-md:gap-8">
        <div class="three_programas flex gap-40 justify-start max-md:gap-10 max-md:justify-center">
          <img class="image_logo max-md:max-w-[50px]" src="/img/Figma.svg" alt="">
          <img class="image_logo max-md:max-w-[50px]" src="/img/Photoshop.svg" alt="">
          <img class="image_logo max-md:max-w-[50px]" src="/img/Lightroom.svg" alt="">
        </div>
        <div class="three_programas flex gap-40 justify-start max-md:gap-10 max-md:justify-center">
          <img class="image_logo max-md:max-w-[50px]" src="/img/After_Effects.svg" alt="">
          <img class="image_logo max-md:max-w-[50px]" src="/img/Illustrator.svg" alt="">
          <img class="image_logo max-md:max-w-[50px]" src="/img/InDesign.svg" alt="">
        </div>
        <div class="three_programas flex gap-40 justify-start max-md:gap-10 max-md:justify-center">
          <img class="image_logo w-[59px] h-[58px] max-md:max-w-[50px] max-md:max-h-[49px]" src="/img/blender.png" alt="">
          <img class="image_logo w-[59px] h-[58px] max-md:max-w-[50px] max-md:max-h-[49px]" src="/img/Cinema4d.png" alt="">
          <img class="image_logo rounded-lg w-[59px] h-[58px] max-md:max-w-[50px] max-md:max-h-[49px]" src="/img/Procreate.png" alt="">
        </div>
      </div>
    </div>

    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-md:text-[60px]">Servicios</div>
      </div>

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
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Experiencia realizando ilustraciones
            tradicionales
            e ilustraciones digitales mediante IPad - Procreate. Cuento con Grado Superior de Ilustración en la Escuela de
            Artes de Toledo.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Web y Programación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Conocimientos altos de HTML y CSS (sass).
            <br>
            Conocimientos medio-altos de Tailwind, Nuxt y Vue.
            <br>
            Conocimientos medios en JavasCript.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Pack Adobe y Figma</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Altos conocimientos en utilizar
            el pack Adobe (concretamente los mencionados arriba) y Figma (componentización, vistas, prototipado y autolayout).
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Audiovisuales y Multimedia</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos en diferentes ambitos del
            mundo de audiovisuales,
            concretamente After Effects para motion graphics, Adobe Premiere y otros programas de video para realización
            de piezas para redes sociales,
            conocimientos de Rotoscopia digital, chroma y edición de video.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Maquetación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos en Indesign y
            Photoshop, para la maquetación
            de carteles, folletos, libros, revistas, anuncios y cualquier pieza gráfica necesaria.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Redes Sociales</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos de redes sociales,
            actualidad y flujo de información
            en las aplicaciones actuales como Instagram, TikTok, Facebook y Twitter.

          </div>
        </div>

      </div>


    </div>

    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-md:text-[60px]">Sobre mi</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Soy un estudiante de 22 años, actualmente
            cursando 4º en un grado Universitario de Diseño Gráfico en la Escuela Superior De Diseño de Madrid (Nota media - 9) <br> Cuento con
            un Grado
            Superior de Ilustración (Nota TFG - 9). <br> <br> Soy muy polifacetico y no me cierro a ninguna vía del diseño, suelo
            abarcar todos los ambitos, como ya he mostrado anteriormente. Soy resolutivo y trabajador.

            <img class="img pt-10" src="/img/FOTO.jpg" alt="">

          </div>
        </div>

      </div>


    </div>

    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-md:text-[60px]">Trabajos</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">→ Ganador de concurso de carteles para <a
              class="bold font-bold text-white">Villaluenga de la Sagra</a> - Cartel para el libro de las fiestas
            <br><br> → Creación de cartelería para página web y físico y creación de pictogramas para empresa <a
              class="bold font-bold text-white">Neumáticos por Poco.</a>
            <br><br> → Renovación de marca creando un logo para la empresa <a class="bold font-bold text-white">Motor
              76.</a>
            <br><br> → Creación de iustraciones para portadas de noticias en <a class="bold font-bold text-white">Ecos
              Castilla La Mancha.</a>
            <br><br> → Diseño de portadas para proyecto musical.
            <br><br> → Encargos Freelance de sesiones fotográficas, diseño de tatuajes e ilustraciones personales.



          </div>
        </div>

      </div>


    </div>

    <div class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-md:text-[60px]">Estudios</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            <br><br><a class="bold font-bold text-white"> → Bachillerato Artístico </a> en IES El Greco Toledo.
            <br><br><a class="bold font-bold text-white"> → Grado Superior de Ilustración</a> en la Escuela de Artes de Toledo.
            <br><br><a class="bold font-bold text-white"> → 3 Cursos de Grado Universitario de Diseño Gráfico </a> en la Escuela Superior de Diseño de Madrid.
            <br><br><a class="bold font-bold text-white"> → Curso extracurricular de 2 años de Arte y Pintura </a> en Villaluenga de la Sagra.
            <br><br><a class="bold font-bold text-white"> → Cursos de Domestika:</a> "Ilustración Digital con Procreate", "Ilustración Digital aplicada a productos", "Introducción al lettering con Procreate".

          </div>
        </div>

      </div>


    </div>


    <div class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-md:pt-6 max-md:px-10 max-md:flex-col max-md:justify-items-center max-md:gap-20 max-md:flex max-md:justify-center">
            <div class="email text-lg flex gap-2 items-center max-md:text-[14px] max-md:justify-center">ruben.maldonado.graphic@gmail.com
                    <img class="vector" src="/img/Vector-11.svg">
            </div>
            <div class="links flex flex-col gap-2 max-md:justify-center">
                <div class="links1 flex gap-32 max-md:justify-center">
                    <a class="red flex gap-2 items-center max-md:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
                            <img class="vector" src="/img/Vector-11.svg">
                    </a>
                    <a class="red flex gap-2 items-center max-md:text-[14px]" href="https://www.behance.net/rubenartes">Behance
                            <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
                <div class="links2 flex gap-32 flex-end max-md:justify-center">
                    <a class="red flex gap-2 items-center max-md:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
                            <img class="vector" src="/img/Vector-11.svg">

                    </a> <a class="red flex gap-2 items-center max-md:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
                            <img class="vector" src="/img/Vector-11.svg">
                    </a>
                </div>
            </div>

        </div>

    <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-md:p-6">
      <div class="foter_image flex flex-start">
        <img class="vector max-md:max-w-[15px]" src="/img/star.svg">
      </div>
      <div class="email flex gap-2 items-center text-sm max-md:text-xs">Ruben Maldonado González
        <img class="vector max-md:max-w-[15px]" src="/img/futbol.svg">
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
    @apply opacity-80 duration-75 outline outline-2 outline-zinc-300

.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100

.red
  &:hover
      @apply text-zinc-300

</style>
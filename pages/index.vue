<template>
  <div class="app bg-black">
    <Cursor />
    <div class="header bg-black p-10 flex text-white justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky">
      <div class="image flex flex-start">
        <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
      </div>
      <div class="mode flex gap-10 items-center">
        <NuxtLink to="/indexlight">
            <img class="image w-[30px]" src="/img/lightmode.png" alt="">
        </NuxtLink>
        
      </div>
      <div class="email text-lg flex gap-2 items-center max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg">
      </div>

    </div>
    <VueScrollProgressBar />

    <div
      class="trabajos flex pt-20 px-64 pb-20 text-white flex-nowrap items-center gap-28 justify-center max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-10">

      <div class="titular_flex flex flex-col max-lg:items-center max-lg:flex">
        <div
          class="titular text-[115px] font-normal flex gap-2 items-start max-lg:max-w-[200px] max-lg:text-[70px] max-lg:justify-center">
          Portfolio
          <img class="info animate-pulse" src="/img/info.svg">
        </div>
        <div
          class="titular_small text-[12px] animate-pulse font-normal flex items-start max-lg:text-[12px] max-lg:justify-center max-lg:text-center max-lg:max-w-[30ch]">
          Ultima actualización, Agosto 2023</div>
      </div>


      <div class="text max-w-[60ch] max-lg:justify-center max-lg:text-[16px] max-lg:text-center">
        <div class="text max-w-[60ch] text-zinc-400 text-sm max-lg:justify-center max-lg:text-[12px] max-lg:text-center">Selección de trabajos realizados en Escuela Superior de Diseño de Madrid y otros
          proyectos personales. Incluye categorías como: diseño Web, editorial, 3D, edición de video y fotografía, packaging, marca e ilustraciones.


        </div>
        <div class="text max-w-[60ch] pt-8 text-xl max-lg:justify-center max-lg:text-[16px] max-lg:text-center">«Diseñar es pensar en
          hacerlo visual.» — Saul Bass</div>
      </div>

    </div>
    <div
      class="seleccion_trabajos pt-10 px-64 pb-20 text-white flex flex-col justify-center max-lg:px-10 max-lg:justify-items-center max-lg:justify-center">
      <div class="accede flex justify-center text-zinc-200 pb-10 text-xs">«Clickea en un trabajo para saber más de el»
      </div>
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/packaging">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Packaging_ruben2.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Matutano
            Saludable</div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Packaging</div>
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Prau">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Vino_2.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">PRAU - Pasión
            por la tierra</div>
          <div
            class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm bg-gradient-to-r bg-clip-text text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Packaging</div>
        </div>
      </div>
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col ">
          <NuxtLink to="/MetrodeMadrid">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/libroexperimental.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Metro de
            Madrid</div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Producción</div>
        </div>
        <div class="trabajo max-w-[600px]max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Typenotes">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Editorial_4.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Typenotes
          </div>
          <div class="type_trabajo  animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Editorial</div>
        </div>


      </div>

      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Movistar">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Movistar.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Movistar +
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Motion Graphics</div>
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/PrototipadoFigma">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/gifesd.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">ESD - Página
            Web</div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Prototipado figma</div>
        </div>
      </div>
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Fotografias">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/presentacionfotografias.gif">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Colección
            fotográfica
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Fotografía</div>
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Modelado3D">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/3dvideo.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Colección 3D
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Modelado 3D</div>
        </div>

      </div>
      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/YelmoCines">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/gifyelmo2.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Yelmo Cines
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:mb-4 max-lg:leading-3">
            Marca</div>
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Editorial">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/Mockup.jpg">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">El
            pensamiento Lateral
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Editorial</div>
        </div>

      </div>

      <div
        class="twotrabajos p-0 flex gap-4 justify-center pb-8 max-lg:flex-col max-lg:justify-items-center max-lg:items-center max-lg:px-10">
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/KinderBueno">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/kinderbueno3.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Kinder Bueno
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Marca</div>
        </div>
        <div class="trabajo max-w-[600px] max-lg:max-w-[300px] max-lg:justify-center max-lg:flex max-lg:flex-col">
          <NuxtLink to="/Ilustraciones">
            <img class="image m-0 rounded-sm max-w-[600px] max-lg:max-w-[300px]" src="/img/ilustraciones4.png">
          </NuxtLink>
          <div class="tittle_trabajo max-w-[70ch] m-0 mt-4 text-lg font-bold max-lg:text-[16px] max-lg:mt-4">Colección de
            ilustraciones
          </div>
          <div class="type_trabajo animate-pulse max-w-[40ch] m-0 text-sm text-zinc-400 max-lg:text-[12px] max-lg:leading-3">
            Dibujos</div>
        </div>

      </div>

    </div>

    <div
      class="flex pt-14 pl-40 pr-40 pb-28 text-white flex-col gap-20 items-center justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-14">
      <div class="titular flex text-[72px] font-normal max-lg:text-[60px]">
        Apps</div>
      <div
        class="programas flex flex-col gap-14 items-center max-lg:gap-8 min-w-[575px] max-lg:items-center max-lg:min-w-[60px] max-lg:grid">
        <div class="three_programas flex justify-center gap-16 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/AfterEffects.svg" alt="">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Photoshop.svg" alt="">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Lightroom.svg" alt="">
        </div>
        <div class="three_programas flex justify-center gap-16 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/InDesign.svg" alt="">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Illustrator.svg" alt="">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Figma.svg" alt="">

        </div>
        <div class="three_programas flex justify-center gap-16 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/blender.png" alt="">
          <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/Cinema4d.png"
            alt="">
          <img class="image_logo rounded-lg w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]"
            src="/img/Procreate.png" alt="">
        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-lg:text-[60px]">Servicios</div>
      </div>

      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Fotografía</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Experiencia realizando sesiones
            fotográficas en exterior y estudio
            de retratos. Fotografía de paisajes y lugares. Además de experiencia en fotografía de producto y control de
            equipo de estudio. Edición de fotografía (Raw) en <a class="texto_color text-[#4b6ad1]">Photoshop y
              Lightroom</a>
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Ilustración</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Experiencia realizando ilustraciones
            tradicionales
            e ilustraciones digitales mediante IPad - Procreate. 
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Web y Programación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Conocimientos altos de HTML y CSS (sass).
            <br>
            Conocimientos medio-altos de <a class="texto_color text-[#00dc82]">Tailwind, Nuxt y Vue.</a>
            <br>
            Conocimientos medios en JavaScript.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Pack Adobe y Figma</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400"> Altos conocimientos en utilizar
            el pack <a class="texto_color text-[#dc8f00]">Adobe</a> (concretamente los mencionados arriba) y <a
              class="texto_color text-[#dc8f00]">Figma</a> (componentización, vistas, prototipado y
            autolayout).
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Audiovisuales y Multimedia</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos en diferentes ambitos del
            mundo de audiovisuales,
            concretamente <a class="texto_color text-[#9c46e2]">After Effects</a> para motion graphics, <a
              class="texto_color text-[#9c46e2]">Adobe Premiere</a> y otros programas de video para realización
            de piezas para redes sociales,
            conocimientos de rotoscopia digital, chroma y edición de video.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Maquetación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos en <a class="texto_color text-[#bd3f9d]">Indesign</a> y
            <a class="texto_color text-[#4b6ad1]">Photoshop</a>, para la maquetación
            de carteles, folletos, libros, revistas, anuncios y cualquier pieza gráfica necesaria.

          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg">
          <div class="tittle_servicios font-bold text-[20px]">Redes Sociales</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Conocimientos altos de redes sociales,
            actualidad y flujo de información
            en las aplicaciones actuales como <a class="texto_color text-[#d14bb0]">Instagram, TikTok, Facebook y
              Twitter.</a>

          </div>
        </div>

      </div>


    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-lg:text-[60px]">Sobre mi</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">Soy un estudiante de 22 años, actualmente
            cursando 4º en un grado Universitario de Diseño Gráfico en la Escuela Superior De Diseño de Madrid <a
              class="animate-pulse texto_type italic text-xs text-white">(Nota media - 9).</a> <br> Cuento con
            un Grado
            Superior de Ilustración <a class="texto_type italic text-xs text-white animate-pulse">(Nota TFG - 9).</a> <br>
            <br> Soy muy polifacetico y no me cierro a ninguna vía del
            diseño, suelo
            abarcar todos los ambitos, como ya he mostrado anteriormente. Soy resolutivo y trabajador.

            <img class="img pt-10 " src="/img/FOTO.jpg" alt="">

          </div>
        </div>

      </div>


    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-lg:text-[60px]">Trabajos</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">→ Ganador de concurso de carteles para <a
              class="bold font-bold text-white">Villaluenga de la Sagra</a> - Cartel para el libro de las fiestas
            <br><br> → Creación de cartelería para página web y físico y creación de pictogramas para empresa <a
              class="bold font-bold text-white">Neumáticos por Poco.</a> <a class="bold text-xs text-white">- (6 meses)</a>
            <br><br> → Renovación y creación de marca para la empresa <a class="bold font-bold text-white">Motor
              76.</a> <a class="bold text-xs text-white">- (1 mes)</a>
            <br><br> → Creación de ilustraciones para portadas de noticias en <a class="bold font-bold text-white">Ecos
              Castilla La Mancha.</a> <a class="bold text-xs text-white">- (2 meses)</a>
            <br><br> → Diseño de portadas para proyecto musical.
            <br><br> → Encargos Freelance de sesiones fotográficas, diseño de tatuajes e ilustraciones personales. <a class="bold text-xs text-white">- (4 años)</a>
            <br><br> → Actualmente trabajando como diseñador en <a class="bold animate-pulse font-bold text-white">Garrido Gallery.</a> <br> <a class="bold text-xs text-white">(2 meses)</a>


          </div>
        </div>

      </div>


    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div class="titular flex flex-col text-[72px] font-normal sticky top-24 max-lg:text-[60px]">Estudios</div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            <br><br><a class="bold font-bold text-white"> → Bachillerato Artístico </a> en IES El Greco Toledo.
            <br><br><a class="bold font-bold text-white"> → Grado Superior de Ilustración</a> en la Escuela de Artes de
            Toledo.
            <br><br><a class="bold font-bold text-white"> → 3 Cursos de Grado Universitario de Diseño Gráfico </a> en la
            Escuela Superior de Diseño de Madrid.
            <br><br><a class="bold font-bold text-white"> → Curso extracurricular de 2 años de Arte y Pintura </a> en
            Villaluenga de la Sagra.
            <br><br><a class="bold font-bold text-white"> → Cursos de Domestika:</a> "Ilustración Digital con Procreate",
            "Ilustración Digital aplicada a productos", "Introducción al lettering con Procreate".

          </div>
        </div>

      </div>


    </div>


    <div
      class="links_rrss pt-32 px-80 pb-32 text-white justify-center flex flex-row gap-60 max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20 max-lg:flex max-lg:justify-center">
      <div class="email text-lg flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center">
        ruben.maldonado.graphic@gmail.com
        <img class="vector" src="/img/Vector-11.svg">
      </div>
      <div class="links flex flex-col gap-2 max-lg:justify-center">
        <div class="links1 flex gap-32 max-lg:justify-center">
          <a class="red flex gap-2 items-center max-lg:text-[14px]"
            href="https://www.instagram.com/ruben.artes/">Instagram
            <img class="vector" src="/img/Vector-11.svg">
          </a>
          <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.behance.net/rubenartes">Behance
            <img class="vector" src="/img/Vector-11.svg">
          </a>
        </div>
        <div class="links2 flex gap-32 flex-end max-lg:justify-center">
          <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
            <img class="vector" src="/img/Vector-11.svg">

          </a> <a class="red flex gap-2 items-center max-lg:text-[14px]"
            href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
            <img class="vector" src="/img/Vector-11.svg">
          </a>
        </div>
      </div>

    </div>

    <div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-lg:p-6">
      <div class="foter_image flex flex-start">
        <img class="vector max-lg:max-w-[15px]" src="/img/star.svg">
      </div>
      <div class="email flex gap-2 items-center text-sm max-lg:text-xs">Ruben Maldonado González
        <img class="vector max-lg:max-w-[15px]" src="/img/futbol.svg">
      </div>
    </div>


  </div>
</template>

<script setup>

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'

import ExpandableImageVue from "./ExpandableImage.vue";

</script>
<style lang="sass" scoped>


.email
  &:hover
    @apply text-zinc-300

.image
  @apply transition ease-in-out delay-150
  &:hover
    @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm

.image_logo
  @apply opacity-60
  &:hover
    @apply opacity-100

.red
  &:hover
      @apply text-zinc-300

</style>
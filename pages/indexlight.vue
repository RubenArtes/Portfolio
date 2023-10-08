<template>
  <div class="app bg-black font-['SFUIDisplay-Light'] w-screen">
    <Cursor />
    <div
      class="header bg-black p-10 flex px-24 text-white justify-between sticky top-0 z-10 max-lg:p-6 border border-b-1">
      <div class="image flex flex-start justify-items-start">
        <img class="max-lg:max-w-[15px]" src="/img/Vector.svg">
      </div>
      <div class="mode flex gap-10 items-center justify-center content-center">
        <NuxtLink to="/">
          <img class="image w-[30px]" src="/img/darkmode.png" alt="">
        </NuxtLink>

      </div>
      <div class="email text-lg justify-items-end flex gap-2 max-lg:text-xs ">ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11.svg">
      </div>

    </div>
    <div
      class="header bg-white p-2 px-12 text-[#1b1b22] flex justify-center items-center sticky z-10 top-[6.5rem] z-200 border border-b-1 max-[1080px]:gap-6 max-[1025px]:top-[4.2rem] max-[510px]:gap-2">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[510px]:px-2 max-[510px]:text-[11px]">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[760px]:hidden" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[760px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px]" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1080px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[1080px]:hidden" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1180px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[1180px]:hidden" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1760px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[1760px]:hidden" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1760px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[1760px]:hidden" src="/img/infoblack.png">

      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[2260px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[2260px]:hidden" src="/img/infoblack.png">
      <div
        class="titular_small pr-6 pl-6 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[2260px]:hidden">
        Ultima actualización Octubre 2023
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px] max-[2260px]:hidden" src="/img/infoblack.png">






    </div>

    <VueScrollProgressBar/>

    <div
      class="trabajos w-screen z-0 px-64 flex pt-16 pb-32 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1080px]:px-20 max-[1080px]:pb-32 max-[720px]:px-4 max-[510px]:px-2 max-[510px]:pt-8 max-[510px]:pb-16">

      <div class="titular_flex pt-20 flex flex-col max-lg:items-center max-lg:flex max-[2000px]:px-0 max-[510px]:pt-4">
        <div
          class="titular leading-[9rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center justify-center max-[2000px]:text-[160px] max-[1080px]:text-[120px] max-[720px]:text-[60px] max-[510px]:text-[60px] max-[760px]:text-[60px] max-[760px]:leading-[4rem] max-[760px]:font-['SFUIDisplay-Bold']">
          PORTFOLIO
          <br>
          <Text></Text>
        </div>
      </div>


      <div class="titular_flex items-center text-center flex gap-6 flex-col max-lg:items-center max-lg:flex">
        <div
          class="animate-text max-w-[80ch] flex items-center text-center text-white text-base max-lg:justify-center max-[2000px]:text-[12px] max-[2000px]:max-w-[200ch] max-[2000px]:px-28 max-[510px]:px-16">
          Selección de trabajos realizados en Escuela Superior de Diseño de Madrid y otros
          proyectos personales. Incluye categorías como: diseño Web, editorial, 3D, edición de video y fotografía,
          packaging, marca e ilustraciones.


        </div>
        <div
          class="text flex text-center justify-items-center font-['SFUIDisplay-Regular'] text-white text-base italic max-[510px]:px-20 max-[510px]:pt-8">
          «Diseñar es pensar en hacerlo visual.» — Saul Bass</div>
      </div>

    </div>
    <div class="accede flex px-64 text-center justify-center text-white pb-10 text-xs max-[720px]:px-4 max-[510px]:px-20 max-[510px]:pb-12">«Pasa el ratón por encima para
      descubrir el trabajo y clickea en uno para saber
      más de el»
    </div>
    <div class="trabajos justify-center w-auto">
      <div class="grid grid-cols-4 w-screen max-[1380px]:grid-cols-3 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
        <NuxtLink to="/packaging">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center">
              MATUTANO <br> SALUDABLE</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2 max-[760px]:order-0 max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              PACKAGING</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              1</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Prau">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria2.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria2.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center">
              VINOS <br> PRAU</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2 max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              PACKAGING</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              2</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/MetrodeMadrid">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria3.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria3.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              METRO <br> MADRID</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              PRODUCCIÓN</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              3</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Typenotes">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria4.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria4.jpg')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              REVISTA <br> TYPENOTES</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              EDITORIAL</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              4</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Movistar">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria5.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[#EB5A5A] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[50px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              AUDIOVISUAL <br> MOVISTAR +</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              MOTION GRAPHICS</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              5</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Modelado3D">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria6.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria6.jpg')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              MODELADO <br> 3D</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              RENDER</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              6</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/YelmoCines">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria7.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[#312d74] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              YELMO <br> CINES</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              MARCA</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              7</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Editorial">
          <div
            class="trabajo1  border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria8.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria8.jpg')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              PENSAMIENTO <br> LATERAL</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              EDITORIAL</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              8</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/PrototipadoFigma">
        <div
          class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria9.png')] bg-cover bg-center max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-white max-[760px]:text-black">
          <div
            class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
            ESD<br>PÁGINA WEB</div>
          <div
            class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
            PROTOTIPADO</div>
          <div
            class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
            9</div>
        </div>
        </NuxtLink>
        <NuxtLink to="/Fotografias">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria10.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria10.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              COLECCIÓN <br> FOTOGRÁFICA</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              FOTOGRAFÍAS</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              10</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/KinderBueno">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria1.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria1.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              KINDER <br> BUENO</div>
              <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              MARCA</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              11</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Ilustraciones">
          <div
            class="trabajo1 border border-solid px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria11.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-[760px]:px-8 max-[760px]:pb-20 max-[760px]:max-h-[800px] max-[760px]:pt-20  max-[760px]:bg-[url('/img/NuevaCategoria11.png')] max-[760px]:text-white">
            <div
              class="text text-[50px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-[2260px]:text-[40px] max-[2260px]:leading-[3rem] max-[1840px]:text-[32px] max-[760px]:text-[26px] max-[760px]:pt-2 max-[760px]:leading-[2rem] max-[760px]:text-[55px] max-[760px]:leading-[3.5rem] max-[760px]:text-center ">
              COLECCIÓN <br>ILUSTRACIONES</div>
            <div
              class="text text-[20px] leading-[5rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-[760px]:text-[14px] max-[760px]:pb-2  max-[760px]:text-center max-[760px]:pb-2 max-[760px]:leading-[1rem]">
              DIBUJOS</div>
            <div
              class="text text-[300px] font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-[760px]:text-[120px] max-[760px]:hidden">
              12</div>
          </div>
        </NuxtLink>
      </div>

    </div>
  <div class="flex pt-32 px-40 pb-40 text-white flex-col gap-20 border border-b-1 items-center justify-center max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-14">
  <div class="titular flex text-[72px] font-normal max-lg:text-[60px] font-['Domaine-Display']">
    APPS</div>
  <div
    class="programas flex flex-col gap-20 items-center max-lg:gap-8 min-w-[575px] max-lg:items-center max-lg:min-w-[60px] max-lg:grid">
    <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/AfterEffects.svg" alt="">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Photoshop.svg" alt="">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Lightroom.svg" alt="">
    </div>

    <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/InDesign.svg" alt="">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Illustrator.svg" alt="">
      <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Figma.svg" alt="">

    </div>
    <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
      <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/blender.png" alt="">
      <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/Cinema4d.png" alt="">
      <img class="image_logo rounded-lg w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]"
        src="/img/Procreate.png" alt="">
    </div>
  </div>
  </div>

  <div
    class="trabajos flex pt-6 pl-40 pr-40 pb-40 border border-b-1 text-white flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
    <div class="sticky_menu">
      <div
        class="titular flex flex-col text-[72px] font-normal sticky top-[10rem] max-lg:text-[60px] font-['Domaine-Display']">
        SERVICIOS</div>
    </div>

    <div class="servicios_ofrecidos flex flex-col gap-6">
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Fotografía</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">Experiencia realizando sesiones
          fotográficas en exterior y estudio
          de retratos. Fotografía de paisajes y lugares. Además de experiencia en fotografía de producto y control de
          equipo de estudio. Edición de fotografía (Raw) en <a class="texto_color text-[#4b6ad1]">Photoshop y
            Lightroom</a>
        </div>
      </div>
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Ilustración</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white"> Experiencia realizando ilustraciones
          tradicionales
          e ilustraciones digitales mediante IPad - Procreate
        </div>
      </div>
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Web y Programación</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white"> Conocimientos altos de HTML y CSS (sass).
          <br>
          Conocimientos medio-altos de <a class="texto_color text-[#00dc82]">Tailwind, Nuxt y Vue.</a>
          <br>
          Conocimientos medios en JavaScript.
        </div>
      </div>
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Pack Adobe y Figma</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white"> Altos conocimientos en utilizar
          el pack <a class="texto_color text-[#dc8f00]">Adobe</a> (concretamente los mencionados arriba) y <a
            class="texto_color text-[#dc8f00]">Figma</a> (componentización, vistas, prototipado y
          autolayout).
        </div>
      </div>
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Audiovisuales y Multimedia</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">Conocimientos en diferentes ambitos del
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
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">Conocimientos altos en <a
            class="texto_color text-[#bd3f9d]">Indesign</a> y
          <a class="texto_color text-[#4b6ad1]">Photoshop</a>, para la maquetación
          de carteles, folletos, libros, revistas, anuncios y cualquier pieza gráfica necesaria.

        </div>
      </div>
      <div class="servicio flex flex-col gap-6">
        <img class="vector w-[17px]" src="/img/star.svg">
        <div class="tittle_servicios font-bold text-[20px]">Redes Sociales</div>
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">Conocimientos altos de redes sociales,
          actualidad y flujo de información
          en las aplicaciones actuales como <a class="texto_color text-[#d14bb0]">Instagram, TikTok, Facebook y
            Twitter.</a>

        </div>
      </div>

    </div>


  </div>

  <div
    class="trabajos flex pt-32 pl-40 pr-40 pb-40 border border-b-1 text-white flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
    <div class="sticky_menu">
      <div
        class="titular flex flex-col text-[72px] font-normal sticky top-[10rem] max-lg:text-[60px] font-['Domaine-Display']">
        SOBRE MI</div>
    </div>
    <div class="servicios_ofrecidos flex flex-col gap-6">
      <div class="servicio flex flex-col gap-6">
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">Soy un estudiante de 22 años, actualmente
          cursando 4º en un grado Universitario de Diseño Gráfico en la Escuela Superior De Diseño de Madrid <a
            class="animate-pulse texto_type italic text-xs text-black">(Nota media - 9).</a> <br> Cuento con
          un Grado
          Superior de Ilustración <a class="texto_type italic text-xs text-black animate-pulse">(Nota TFG - 9).</a> <br>
          <br> Soy muy polifacetico y no me cierro a ninguna vía del
          diseño, suelo
          abarcar todos los ambitos, como ya he mostrado anteriormente. Soy resolutivo y trabajador.

          <img class="img pt-10 " src="/img/FOTO.jpg" alt="">

        </div>
      </div>

    </div>


  </div>
  <div
    class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
    <div class="sticky_menu">
      <div
        class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['Domaine-Display']">
        TRABAJOS</div>
    </div>
    <div class="servicios_ofrecidos flex flex-col gap-6">
      <div class="servicio flex flex-col gap-6">
        <div class="text max-w-[60ch] font-normal text-[16px] text-white">→ Ganador de concurso de carteles para <a
            class="bold font-bold text-white">Villaluenga de la Sagra</a> - Cartel para el libro de las fiestas
          <br> → Creación de cartelería para página web y físico y creación de pictogramas para empresa <a
            class="bold font-bold text-white">Neumáticos por Poco.</a> <a class="bold text-xs text-white">- (6
            meses)</a>
          <br> → Renovación y creación de marca para la empresa <a class="bold font-bold text-white">Motor
            76.</a> <a class="bold text-xs text-white">- (1 mes)</a>
          <br> → Creación de ilustraciones para portadas de noticias en <a class="bold font-bold text-white">Ecos
            Castilla La Mancha.</a> <a class="bold text-xs text-white">- (2 meses)</a>
          <br> → Diseño de portadas para proyecto musical.
          <br> → Encargos Freelance de sesiones fotográficas, diseño de tatuajes e ilustraciones personales. <a
            class="bold text-xs text-white">- (4 años)</a>
          <br> → Actualmente trabajando como diseñador en <a class="bold animate-pulse font-bold text-white">Garrido
            Gallery.</a><a class="bold text-xs text-white">(4 meses)</a>


        </div>
      </div>

    </div>


  </div>

  <div
    class="trabajos flex pt-32 pl-40 pr-40 pb-20 text-white flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
    <div class="sticky_menu">
      <div
        class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['Domaine-Display']">
        ESTUDIOS</div>
    </div>
  <div class="servicios_ofrecidos flex flex-col gap-6">
    <div class="servicio flex flex-col gap-6">
      <div class="text max-w-[60ch] font-normal text-[16px] text-white">
        <br><a class="bold font-bold text-white"> → Bachillerato Artístico </a> en IES El Greco Toledo.
        <br><a class="bold font-bold text-white"> → Grado Superior de Ilustración</a> en la Escuela de Artes de
        Toledo.
        <br><a class="bold font-bold text-white"> → 3 Cursos de Grado Universitario de Diseño Gráfico </a> en la
        Escuela Superior de Diseño de Madrid.
        <br><a class="bold font-bold text-white"> → Curso extracurricular de 2 años de Arte y Pintura </a> en
        Villaluenga de la Sagra.
        <br><a class="bold font-bold text-white"> → Cursos de Domestika:</a> "Ilustración Digital con Procreate",
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
      <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.instagram.com/ruben.artes/">Instagram
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

<div class="foter bg-black p-10 flex text-white justify-between sticky top-0 max-lg:p-6 border border-t-1">
  <div class="foter_image flex flex-start">
    <img class="vector max-lg:max-w-[15px]" src="/img/star.svg">
  </div>
  <div class="email flex gap-2 items-center text-sm max-lg:text-xs">Ruben Maldonado González
    <img class="vector max-lg:max-w-[15px]" src="/img/futbol.svg">
  </div>
</div>


</div></template>

<script setup>

import text from "~/components/text.vue";

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from '/components/VueScrollProgressBar'


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
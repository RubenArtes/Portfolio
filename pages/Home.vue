<template>
  <div class="app bg-white font-['SFUIDisplay-Light']">
    <Cursor />
    <div
      class="header bg-white p-10 flex border-r-0 border-l-0 px-24 text-black justify-between sticky top-0 z-10 max-lg:p-6 max-lg:sticky border border-b-0">
      <div class="image flex flex-start justify-items-start">
        <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg" />
      </div>
      <div class="mode flex items-center justify-center content-center">
        <NuxtLink to="/HomeDark">
          <img class="image w-[30px]" src="/img/darkmode.png" alt="" />
        </NuxtLink>
      </div>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado." target="_blank" class="email text-lg justify-items-end flex gap-2 max-lg:text-xs">
        ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11black.svg" />
      </a>
    </div>

    <div
      class="header bg-white p-2 px-12 border-r-0 border-l-0 text-black flex justify-center items-center sticky top-[6.25rem] z-10 border border-b-1 max-[1080px]:gap-6 max-[1025px]:top-[4.2rem] max-sm:gap-2">
      <div
        class="titular_small uppercase pr-2 pl-2 text-zinc-500 font-['SFUIDisplay-Regular'] animate-pulse text-[14px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
        Ultima actualización Agosto 2024
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
    </div>

    <VueScrollProgressBar background-color="#000000" />



    <div
      class="trabajos hidden px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-[720px]:px-4 max-sm:px-2 max-sm:pb-8 max-sm:pt-12 max-sm:hidden">
      <div class="titular_flex pt-12 flex flex-col max-lg:items-center max-lg:flex max-[2000px]:px-0 max-sm:pt-2">
        <div
          class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[50px] max-sm:leading-[3rem] max-sm:font-['SFUIDisplay-Bold']">
          RUBÉN MALDONADO
        </div>
      </div>
    </div>


    <!--<div
      class="trabajos hidden max-sm:grid px-64 pt-16 pb-6 text-white flex-col items-left gap-10 items-left max-lg:pt-16 max-lg:px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-2 max-lg:justify-items-center max-[1930px]:pt-4 max-[1080px]:px-20 max-[1080px]:pb-14 max-sm:px-2 max-sm:text-center max-sm:pb-72">
      <div class="titular_flex pt-12 grid grid-flow-row grid-rows-2 gao-2 max-lg:items-center max-[2000px]:px-0 max-sm:pt-2">
        <div
          class="titular2 gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[120px] max-sm:leading-[4.75rem] max-sm:font-['SFUIDisplay-Regular'] max-sm:text-[120px]">
          RUBÉN
        </div>
        <div
          class="titular gap-4 leading-[12rem] text-[200px] font-['SFUIDisplay-Regular'] font-bold tracking-tight flex flex-col items-center text-center justify-center max-[1930px]:text-[140px] max-[1470px]:text-[80px] max-sm:text-[60px] max-sm:font-['SFUIDisplay-Regular'] max-sm:gap-2 max-sm:leading-[0.25rem]">
          MALDONADO
        </div>
      </div>
    </div>-->

    <div
      class="banner flex pt-12 pb-12 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-sm:hidden">
      <img class="banner_image w-1/2 h-full" src="/img/bannerhome4.png">


    </div>

    <div
      class="banner hidden max-sm:flex max-sm:pt-40 max-sm:pb-40 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <img class="banner_image w-full h-full" src="/img/bannerhome4.png">


    </div>




    <div class="accede text-black grid grid-cols-6 pb-16 gap-20 px-64 min-[2000px]:grid max-sm:hidden">
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        PACKAGING
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        EDITORIAL
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        MARCA
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        ILUSTRACIÓN
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs">
        RENDER
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        AUDIOVISUALES
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

    </div>

    <div class="parte 2 hidden">
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        PACKAGING
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        EDITORIAL
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        MARCA
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        ILUSTRACIÓN
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>
      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs">
        RENDER
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

      <div
        class="text text-[14px] pt-2 font-['SFUIDisplay-Regular'] tracking-normal flex flex-col items-center justify-center max-[1920px]:text-xs ">
        AUDIOVISUALES
        <br>
        <div
          class="text text-[50px] pt-12 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-sm:text-[60px] max-sm:pt-4">
          *
        </div>
      </div>

    </div>

    <div
      class="accede2 flex px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:hidden">
      «Pasa el ratón por encima para descubrir el trabajo y clickea en uno para
      saber más de el»
    </div>

    <div
      class="accede2 hidden max-sm:flex px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:pt-16">
      «Baja para ver los trabajos y clickea sobre uno para saber más sobre el»
    </div>

    <div
      class="grid grid-flow-cols grid-cols-1 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-1 animate-pulse max-[1920px]:grid-cols-1 max-sm:grid-cols-1">

      <div class=" bg-orange-400 border border-orange-400 text-white justify-center content-center text-[12px]">PÁGINAS NUEVAS 
        - BEST SELLER - PÁGINAS NUEVAS
      </div>
    </div>

    <NuxtLink to="/CajaOporto">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-0 border-b-0 px-20 py-18 flex flex-col justify-center hover:bg-[url('/img/libroimpreso.webp')] hover:text-white bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              CAJA <br />
              OPORTO
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              EDITORIAL - PACKAGING
            </div>
            <div
              class="text text-[150px] pt-2 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[150px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>


    <div
      class="grid grid-flow-cols grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px]">PÁGINAS NUEVAS - PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center text-[12px] max-sm:hidden">PÁGINAS
        NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS -
        PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS - PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>

    </div>

    


    <div class="trabajos justify-center">
      <div
        class="grid grid-cols-4 max-[1920px]:grid-cols-3 max-[1450px]:grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y max-sm:order-t-1 max-sm:border-solid max-sm:border-black">
        <NuxtLink to="/packaging">
          <div
            class="trabajo1 border border-solid border-r-1 border-b-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/giframbuesa_1.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              MATUTANO <br />
              SALUDABLE
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              PACKAGING
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center content-center text-[12px]">PÁGINAS NUEVAS - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center content-center text-[12px] max-sm:hidden">PÁGINAS
            NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS -
            PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>

        </div>


        <NuxtLink to="/Prau">
          <div
            class="trabajo1 border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/vinosprau.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              VINOS <br />
              PRAU
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              PACKAGING
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/MetrodeMadrid">
          <div
            class="trabajo1 border border-solid border-r-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria3.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              METRO <br />
              MADRID
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Typenotes">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria4.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              REVISTA <br />
              TYPENOTES
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              EDITORIAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Movistar">
          <div
            class="trabajo1 border border-solid border-r-0 border-l-0 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria5.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              AUDIOVISUAL <br />
              MOVISTAR +
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Modelado3D">
          <div
            class="trabajo1 hover:text-white border border-solid border-r-0 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria6.jpg')] bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              MODELADO <br />RENDER 3D
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              RENDER
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/YelmoCines">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria7.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              YELMO <br />
              CINES
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Editorial">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria8.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              PENSAMIENTO <br />
              LATERAL
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              EDITORIAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/PrototipadoFigma">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 border-l-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria9.png')] bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              PAGINA WEB<br />ESD MADRID
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Fotografias">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/provoke.jpg')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              COLECCIÓN <br />
              FOTOGRÁFICA
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/KinderBueno">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria1.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              KINDER BUENO<br />
              MASCOTA
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Ilustraciones">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/NuevaCategoria11.png')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-1 max-sm:text-black max-xs:border-b-1">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['Domaine-Display'] font-bold tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              COLECCIÓN<br />ILUSTRACIONES
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['SFUIDisplay-Light'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              ILUSTRACIÓN
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex pt-32 px-40 pb-40 border-t-0 border-r-0 border-l-0 text-black flex-col gap-20 border border-b-1 items-center justify-center max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-14">
      <div class="titular flex text-[72px] font-normal max-lg:text-[60px] font-['Domaine-Display']">
        APPS
      </div>
      <div
        class="programas flex flex-col gap-20 items-center max-lg:gap-8 min-w-[575px] max-lg:items-center max-lg:min-w-[60px] max-lg:grid">
        <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/AfterEffects.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Photoshop.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Lightroom.svg" alt="" />
        </div>

        <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/InDesign.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Illustrator.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px]" src="/img/Figma.svg" alt="" />
        </div>
        <div class="three_programas flex justify-center gap-40 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/blender.png"
            alt="" />
          <img class="image_logo w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]" src="/img/Cinema4d.png"
            alt="" />
          <img class="image_logo rounded-lg w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px]"
            src="/img/Procreate.png" alt="" />
        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 border border-b-1 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky z-0 top-[10rem] max-lg:text-[60px] font-['Domaine-Display']">
          SERVICIOS
        </div>
      </div>

      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">Fotografía</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Experiencia realizando sesiones fotográficas de exterior y interior de modelaje. Fotografía de naturaleza o urbana. 
            Además de experiencia en fotografía de producto/bodegón y control de equipo de estudio profesional. 
            Edición de fotografía (Raw) en
            <a class="texto_color text-[#4b6ad1]">Photoshop y Lightroom</a>
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">Ilustración</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Experiencia realizando ilustraciones tradicionales (Acuarela, Acrílico, Rotuladores, Lapiz, etc) e ilustraciones
            digitales mediante Procreate (IPad) y otros soportes de ilustración digital.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">
            Web y Programación
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Conocimientos altos de HTML y CSS (sass).
            <br />
            Conocimientos medio-altos de
            <a class="texto_color text-[#00dc82]">Tailwind, Nuxt y Vue.</a>
            <br />
            Conocimientos medios en JavaScript.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">
            Pack Adobe y Figma
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Alto conocimiento en utilización del pack
            <a class="texto_color text-[#dc8f00]">Adobe</a> (concretamente los
            mencionados arriba) y
            <a class="texto_color text-[#dc8f00]">Figma</a> (componentización,
            vistas, prototipado y autolayout).
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">
            Audiovisuales y Multimedia
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Conocimientos en diferentes ambitos del mundo de audiovisuales,
            concretamente
            <a class="texto_color text-[#9c46e2]">After Effects</a> para Motion
            Graphics, <a class="texto_color text-[#9c46e2]">Adobe Premiere</a> y
            otros programas de video para realización de piezas para redes
            sociales, conocimientos de rotoscopia digital, chroma y edición de
            video.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">Maquetación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Conocimientos altos en
            <a class="texto_color text-[#bd3f9d]">Indesign</a> y
            <a class="texto_color text-[#4b6ad1]">Photoshop</a> para la
            maquetación de carteles, folletos, libros, revistas, anuncios y
            cualquier pieza gráfica necesaria.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[17px]" src="/img/star.svg" />
          <div class="tittle_servicios font-bold text-[20px]">
            Redes Sociales
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Conocimientos altos de redes sociales, actualidad y flujo de
            información en las aplicaciones actuales como
            <a class="texto_color text-[#d14bb0]">Instagram, TikTok, Facebook y Twitter.</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 border border-b-1 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[10rem] max-lg:text-[60px] font-['Domaine-Display']">
          SOBRE MI
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6 pt-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-400">
            Soy un estudiante de 23 años, actualmente terminando un grado
            Universitario de Diseño Gráfico en la Escuela Superior De Diseño de
            Madrid.
            <a class="animate-pulse texto_type italic text-xs text-black">(Nota media - 9).</a>
            <br />
            Cuento con un Grado Superior de Ilustración realizado en la Escuela de Artes de Toledo
            <a class="texto_type italic text-xs text-black animate-pulse">(Nota TFG - 9).</a>
            <br />
            <br />
            Soy muy polifacetico y no me cierro a ninguna vía del diseño, suelo
            abarcar todos los ambitos, como ya he mostrado anteriormente. Soy
            resolutivo y trabajador.

            <img class="img pt-10" src="/img/yofotoyo.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['Domaine-Display']">
          TRABAJOS
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6 pt-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-600">
            → Ganador de concurso de carteles para
            <a class="bold font-bold text-black">Villaluenga de la Sagra</a> -
            Cartel para el libro de las fiestas <br />
            → Creación de cartelería para página web y físico y creación de
            pictogramas para empresa
            <a class="bold font-bold text-black">Neumáticos por Poco.</a>
            <a class="bold text-xs text-black">- (6 meses)</a> <br />
            → Renovación y creación de marca para la empresa
            <a class="bold font-bold text-black">Motor 76.</a>
            <a class="bold text-xs text-black">- (1 mes)</a> <br />
            → Creación de ilustraciones para portadas de noticias en
            <a class="bold font-bold text-black">Ecos Castilla La Mancha.</a>
            <a class="bold text-xs text-black">- (2 meses)</a> <br />
            → Diseño de portadas para proyecto musical. <br />
            → Encargos Freelance de sesiones fotográficas, diseño de tatuajes e
            ilustraciones personales.
            <a class="bold text-xs text-black">- (4 años)</a> <br />
            → Diseñador Freelance por horas para empresas.
            <a class="bold text-xs text-black">- (2 meses)</a> <br />
            → Trabajo en practicas de empresa extracurriculares
            <a class="bold animate-pulse font-bold text-black" href="https://www.garridogallery.com/">Garrido
              Gallery</a>
            (Empresa de diseños y piezas de arte de lujo)<a class="bold text-xs text-black">- (9 meses)</a>
            <br />
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →
              Maquetación e impresión del Catalogo 2024</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 text-black flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['Domaine-Display']">
          ESTUDIOS
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-zinc-600">
            <br /><a class="bold font-bold text-black">
              → Bachillerato Artístico
            </a>
            en IES El Greco Toledo. <br /><a class="bold font-bold text-black">
              → Grado Superior de Ilustración</a>
            en la Escuela de Artes de Toledo. <br /><a class="bold font-bold text-black">
              → 4º de Grado Universitario de Diseño Gráfico
            </a>
            en la Escuela Superior de Diseño de Madrid. <br /><a class="bold font-bold text-black">
              → Curso extracurricular de 2 años de Arte y Pintura
            </a>
            en Villaluenga de la Sagra. <br /><a class="bold font-bold text-black">
              → Cursos de Domestika:</a>
            "Ilustración Digital con Procreate", "Ilustración Digital aplicada a
            productos", "Introducción al lettering con Procreate".
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-sm:hidden grid-flow-cols border-0 border-b-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px]">NUEVO CONTENIDO - NUEVO CONTENIDO -
        NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO -
        NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO -
        NUEVO CONTENIDO
      </div>
    </div>

    <div
      class="hidden max-sm:grid grid-flow-cols border-0 border-b-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px]">NUEVO CONTENIDO - NUEVO CONTENIDO -
        NUEVO CONTENIDO
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 bg-black text-white flex-nowrap gap-72 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-6 max-sm:pb-12 max-sm:pt-16 border-black">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['Domaine-Display']">
          ARTISTAS
        </div>
      </div>

      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] text-white">
            Diferentes trabajos y disciplinas de referencia de gente interesante.
            En las categorías como ilustración realista o experimental, ilustración digital o analógica,
            comentario de cuadros artísticos, diseño 3D, cartelería, fanzines, tatuaje, serigrafía, marca y moda.
            <b>Compañeros artístas que inspiran.</b>


          </div>
        </div>
      </div>

    </div>

    <div
      class="flex gap-60 text-sm bg-black border-t-0 min-[1920px]:px-94 px-56 pb-72 items-center justify-center content-center self-center max-sm:grid max-sm:gap-12 max-sm:pb-24 max-sm:border-t-0 max-sm:grid-cols-1 max-sm:px-10 max-sm:border-none max-sm:border-0 max-sm:pt-24">
      <div class="servicios_ofrecidos items-left flex max-sm:hidden flex-col gap-6 max-sm:order-last">
        
        <div class="flex flex-col gap-1 text-left justify-left">
          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/olme.ttoo"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @olme.ttoo  - <b>Alejandro Olmedo</b></a>
            <a href="https://www.instagram.com/felixhdraw"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @felixhdraw  - <b>Felix Hortolano</b></a>
            <a href="https://www.instagram.com/intensazc"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @intensazc   - <b>Barbara Ibañez</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/cat.arsys"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @cat.arsys   - <b> Catalin Liviu </b></a>
            <a href="https://www.instagram.com/iam_sharkastic"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @iam_sharkastic   - <b>Sergio Martín</b></a>
            <a href="https://historia-arte.com/autores/alvaro-garcia-moreno?fbclid=PAZXh0bgNhZW0CMTEAAaZXhzJaO518coe4d0wbABrUM9cD97VABeVEthtpD8VFEtl-2QtME1bEkbE_aem_LSvS6AW-QbcQvWoqpau77g"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @agarciamorenoo   - <b>Alvaro García</b></a>
          </div>


          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/crearual"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @crearual   - <b>Laura Morales</b></a>
            <a href="https://www.instagram.com/sof_dob_"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @sof_dob_   - <b>Sofia Dobeson</b></a>
            <a href="https://www.instagram.com/cosso.portfolio"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @cosso.portfolio   - <b>Marco García</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/_anagraphic"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @_anagraphic   - <b>Ana Lazaro</b></a>
            <a href="https://www.instagram.com/conejitasmith7"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @conejitasmith7   - <b>Cruz Díaz</b></a>
            <a href="https://www.instagram.com/ghonz.art"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @ghonz.art   - <b>Hugo Gregorio</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/kombo_oficial"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @kombo_oficial   - <b>Rakel Mongue</b></a>
            <a href="https://www.instagram.com/bupeart"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @bupeart   - <b>Pau Bueno</b></a>
            <a href="https://www.instagram.com/carolina.jing"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @carolina.jing   - <b>Carolina Jing</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/moniecos"
            class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
            @moniecos   - <b>Paula Rubros</b></a>
          </div>
        </div>
      </div>
      <div class="cosas justify-center items-center content-center flex max-w-[600px]">
        <img class="img border border-t-3 border-b-0 border-white min-[1920px]:w-[720px] w-full"
          src="/img/gifcompis.gif" alt="" />
      </div>


      <div class="servicios_ofrecidos items-center hidden max-sm:flex flex-col gap-6 max-sm:order-last">
        <div class="flex flex-col gap-1 text-right justify-left">
          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-center max-sm:grid-cols-3 max-sm:text-[12px]">
            <a href="https://www.instagram.com/olme.ttoo" class="text-white py-1 text-left">
              @olme.ttoo</a>
            <a href="https://www.instagram.com/felixhdraw" class="text-white py-1 text-left">
              @felixhdraw</a>
              <a href="https://www.instagram.com/kombo_oficial" class="text-white py-1 text-left">
                @kombo_oficial</a>
          </div>

          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-center max-sm:grid-cols-3 max-sm:text-[12px]">
            <a href="https://www.instagram.com/cat.arsys" class="text-white py-1 text-left">
              @cat.arsys</a>
              <a href="https://www.instagram.com/carolina.jing" class="text-white py-1 text-left">
                @carolina.jing</a>
            <a href="https://historia-arte.com/autores/alvaro-garcia-moreno?fbclid=PAZXh0bgNhZW0CMTEAAaZXhzJaO518coe4d0wbABrUM9cD97VABeVEthtpD8VFEtl-2QtME1bEkbE_aem_LSvS6AW-QbcQvWoqpau77g"
            class="text-white py-1 text-left">
              @agarciamorenoo</a>
          </div>


          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-center max-sm:grid-cols-3 max-sm:text-[12px]">
            <a href="https://www.instagram.com/crearual" class="text-white py-1 text-left">
              @crearual</a>
            <a href="https://www.instagram.com/sof_dob_" class="text-white py-1 text-left">
              @sof_dob_</a>
            <a href="https://www.instagram.com/cosso.portfolio" class="text-white py-1 text-left">
              @cosso.portfolio</a>
          </div>

          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-center max-sm:grid-cols-3 max-sm:text-[12px]">
            <a href="https://www.instagram.com/moniecos" class="text-white py-1 text-left">
              @moniecos</a>
              <a href="https://www.instagram.com/ghonz.art" class="text-white py-1 text-left">
                @ghonz.art</a>
            <a href="https://www.instagram.com/conejitasmith7" class="text-white py-1 text-left">
              @conejitasmith7</a>

          </div>

          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-center max-sm:grid-cols-3 max-sm:text-[12px]">
            <a href="https://www.instagram.com/intensazc" class="text-white py-1 text-left">
              @intensazc</a>
            <a href="https://www.instagram.com/bupeart" class="text-white py-1 text-left">
              @bupeart</a>
              <a href="https://www.instagram.com/iam_sharkastic" class="text-white py-1 text-left">
                @iam_sharkastic</a>
          </div>

          <div
            class="grid grid-flow-cols grid-cols-1 gap-1 justify-center text-center max-sm:grid-cols-3 max-sm:text-[12px]">
              <a href="https://www.instagram.com/_anagraphic" class="text-white py-1 text-left">
                @_anagraphic</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div
    class="links_rrss pt-32 px-80 pb-32 text-black justify-center gap-12 flex flex-row max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20 max-lg:flex max-lg:justify-center max-sm:pt-24">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado." target="_blank" class="email text-lg pr-12 flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
      ruben.maldonado.graphic@gmail.com
      <img class="vector" src="/img/Vector-11black.svg" />
    </a>
    <div class="links flex flex-col pl-12 gap-2 max-lg:justify-center max-sm:pl-0">
      <div class="links1 flex gap-32 max-lg:justify-center">
        <a class="red flex gap-2 items-center max-lg:text-[14px]"
          href="https://www.instagram.com/ruben.artes/">Instagram
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.behance.net/rubenartes">Behance
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
      </div>
      <div class="links2 flex gap-32 flex-end max-lg:justify-center">
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.instagram.com/ruben.iso">Instagram
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
        <a class="red flex gap-2 items-center max-lg:text-[14px]"
          href="https://www.linkedin.com/in/rubenmaldonado10">LinkedIn
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
      </div>
    </div>
  </div>

  <div
    class="foter bg-white p-10 border-b-0 border-l-0 border-r-0 flex text-black justify-between sticky top-0 max-lg:p-6 border border-t-1">
    <div class="foter_image flex flex-start">
      <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />
    </div>
    <div class="email flex gap-2 items-center text-sm max-lg:text-xs">
      Ruben Maldonado González
      <img class="vector max-lg:max-w-[15px]" src="/img/futbolblack.svg" />
    </div>
  </div>

</template>

<script scoped>
import text from "~/components/text.vue";

import PlvPointer from "/components/Cursor.vue";

import VueScrollProgressBar from "/components/VueScrollProgressBar";

import { MotionPlugin } from "@vueuse/motion";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


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
};


</script>
<style lang="sass" scoped>


  .email
    &:hover
      @apply text-zinc-300
  
  .image
    @apply transition ease-in-out delay-150
    &:hover
      @apply opacity-80 duration-75 outline outline-2 outline-white rounded-sm
  .animate-text
    opacity: 1
    transition: opacity 2s
  .image_logo
    @apply opacity-60
    &:hover
      @apply opacity-100
  
  .red
    &:hover
        @apply text-zinc-300
  
  .app.animate-enter
    opacity: 1
  </style>
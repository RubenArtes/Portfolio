<template>
  <div id="inicio" class="app bg-white font-['SFUIDisplay-Light']">
    <Cursor class="max-sm:hidden" />
    <div
      class="header bg-white p-10 border-t-0 px-24 text-black grid grid-cols-3 sticky top-0 z-10 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between">
      <div class="image place-self-start self-center">
        <NuxtLink to="/Home">
          <img class="max-lg:max-w-[15px]" src="/img/Vectorblack.svg" />
        </NuxtLink>
      </div>
      <div class="mode place-self-center">
        <NuxtLink to="/HomeDark">
          <img class="image w-[35px] max-sm:w-[22px]" src="/img/lightmodeon.svg" alt="" />
        </NuxtLink>
      </div>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
        target="_blank" class="email text-lg  place-self-end flex gap-2 max-lg:text-xs">
        ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11black.svg" />
      </a>
    </div>

    <div
      class="header bg-white p-2 px-12 text-black flex justify-center items-center sticky top-[109px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2">
      <div
        class="titular_small uppercase pr-2 pl-2 text-zinc-500 font-['Neue'] animate-pulse text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
        Ultima actualización Septiembre 2024
      </div>
      <img class="info animate-pulse max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
    </div>

    <VueScrollProgressBar background-color="#000000" />

    <!-- Botón flotante -->
    <a href="#inicio"
      class="fixed max-sm:hidden right-0 top-1/2 transform -translate-y-1/2 text-[70px] z-50 uppercase font-bold text-black tracking-widest px-7 py-4 transition-all duration-300 ease-in-out hover:translate-y-[-7px]">
      ↑
    </a>



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
      class="banner flex pt-12 pb-[190px] text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1920px]:pb-16 max-sm:hidden">
      <img class="banner_image w-1/2 h-full" src="/img/nombreruben2.gif">


    </div>

    <div
      class="banner hidden max-sm:px-8 max-sm:flex max-sm:pt-12 max-sm:pb-20 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <img class="banner_image w-full h-full" src="/img/nombreruben2.gif">


    </div>

    <div class="grid grid-cols-3 px-32 max-sm:px-8 pt-2 pb-20 max-[1920px]:pt-0 max-sm:grid-cols-1">

      <div class="texto1 flex flex-col place-self-start">

        <div
          class="text flex text-[40px] leading-[4rem] font-['PPE-UltralightItalic'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
          Portfolio
          <img class="w-[12px] h-[12px]" src="/img/Copyright.svg">
        </div>

        <div
          class="text text-[16px] leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[14px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-start max-[1920px]:text-[14px] max-[1920px]:leading-[16px]">
          RUBÉN MALDONADO GONZÁLEZ
          <br>
          SEPTIEMBRE 2024
        </div>


      </div>


      <div class="texto2 hidden max-sm:flex gap-6 justify-between max-sm:pt-4">

        <div
          class="text place-self-start text-[14px] text-left max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-start justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-[1920px]:leading-[14px]">
          <br>
          PACKAGING
          <br>
          EDITORIAL
          <br>
          MARCA
          <br>
          ILUSTRACIÓN
          <br>
          RENDER
          <br>
          AUDIOVISUALES
        </div>

        <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:pt-0">

          <a href="#trabajos"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
            Trabajos.
          </a>


          <a href="#servicios"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
            Servicios.
          </a>
          <a href="#sobremi"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
            Sobre mi.
          </a>


        </div>


      </div>

      <div class="texto2 flex max-sm:hidden gap-6 place-self-center">

        <div
        class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
        <br>
          <br>
          PACKAGING
          <br>
          EDITORIAL
          <br>
          MARCA
        </div>

        <div
          class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-zinc-400 leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
          <br>
          <br>
          ILUSTRACIÓN
          <br>
          RENDER
          <br>
          AUDIOVISUALES
        </div>


      </div>

      <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:hidden">

        <a href="#trabajos"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
          Trabajos.
        </a>


        <a href="#servicios"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
          Servicios.
        </a>
        <a href="#sobremi"
          class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          Sobre mi.
        </a>


      </div>



    </div>

    <!-- <div id="trabajos" class="grid grid-cols-7 px-32 pt-24 pb-24">
      <img class="w-[40px] h-[40px] opacity-40" src="/img/formas-07.svg">
      <img class="w-[40px] h-[40px] opacity-40" src="/img/formas-08.svg">
      <img class="w-[40px] h-[40px] opacity-40" src="/img/formas-09.svg">
      <img class="w-[40px] h-[40px] place-self-center opacity-40" src="/img/formas-10.svg">
      <img class="w-[40px] h-[40px] place-self-end opacity-40" src="/img/formas-09.svg">
      <img class="w-[40px] h-[40px] place-self-end opacity-40" src="/img/formas-08.svg">
      <img class="w-[40px] h-[40px] place-self-end opacity-40" src="/img/formas-07.svg">

    </div>
      -->

    <div id="trabajos"
      class="text text-center text-[120px] pb-12 pt-40 font-['PPE-Ultralight'] text-zinc-400 tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
      ↓
    </div>

    <div
      class="accede2 hidden max-sm:flex px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:pt-16">
      «Baja para ver los trabajos y clickea sobre uno para saber más sobre el»
    </div>

    <div
      class="grid grid-flow-cols grid-cols-1 text-center max-[1450px]:grid-cols-1 animate-pulse max-[1920px]:grid-cols-1 max-sm:grid-cols-1">

      <div
        class=" bg-orange-400 font-['Regular'] text-[16px] border border-orange-400 text-white justify-center content-center max-sm:text-[12px]">
        <NuxtMarquee>
          <MyComponent /> PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - BEST SELLER - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          <MyComponent /> PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - BEST SELLER - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
        </NuxtMarquee>
        
      </div>
    </div>

    <NuxtLink class="max-sm:hidden" to="/CajaOporto">
      <div
        class="trabajo1 border border-solid border-r-1 border-t-0 border-b-0 px-20 py-32 flex flex-col justify-center hover:bg-[url('/img/libroimpreso.webp')] hover:text-white bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
        <div
          class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
          Caja <br />
          <p class="font-['PPE-Ultralight']">OPORTO</p>
        </div>
        <div
          class="text text-[16px] text-center leading-[2rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
          EDITORIAL - PACKAGING
        </div>
        <div
          class="text text-[100px] pt-2 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[150px] max-sm:text-[120px] max-sm:hidden">
          *
        </div>
      </div>
    </NuxtLink>

    <NuxtLink class="hidden max-sm:block" to="/CajaOporto">
      <div
        class="trabajo1 border border-solid border-r-1 border-t-0 border-b-0 px-20 py-18 flex flex-col justify-center bg-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
        <div
          class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
          Caja <br />
          <p class="font-['PPE-Ultralight']">OPORTO</p>
        </div>
        <div
          class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
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

      <div class=" bg-red-700 text-white justify-center content-center font-['Regular'] text-[12px]">PÁGINAS
        NUEVAS -
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center font-['Regular'] text-[16px] max-sm:hidden">
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center font-['Regular'] text-[16px] max-sm:hidden">
        PÁGINAS
        NUEVAS -
        PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red text-white justify-center content-center font-['Regular'] text-[16px] hidden">PÁGINAS
        NUEVAS -
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>

    </div>




    <div class="trabajos justify-center max-sm:hidden">
      <div
        class="grid grid-cols-4 max-[1920px]:grid-cols-3 max-[1450px]:grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y max-sm:order-t-1 max-sm:border-solid max-sm:border-black">
        <NuxtLink to="/Matutano">
          <div
            class="trabajo1 border border-solid border-r-1 border-b-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/giframbuesa_1.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Matutano <br />
              <p class="font-['PPE-Ultralight']">SALUDABLE</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              PACKAGING
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px]">PÁGINAS
            NUEVAS
            - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px] max-sm:hidden">
            PÁGINAS
            NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px] hidden">
            PÁGINAS
            NUEVAS -
            PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red text-white justify-center content-center font-['Regular'] text-[12px] hidden">
            PÁGINAS
            NUEVAS - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>

        </div>


        <NuxtLink to="/Prau">
          <div
            class="trabajo1 border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/vinosprau.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Etiquetado <br />
              <p class="font-['PPE-Ultralight']">VINOS PRAU</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              PACKAGING
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/Member">
          <div
            class="trabajo1 max-[1920px]:border-b-0 border border-solid border-r-0 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/member30.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Asistente <br />
              <p class="font-['PPE-Ultralight']">MEMBER</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA Y AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/MetrodeMadrid">
          <div
            class="trabajo1 border border-solid border-b-0 border-r-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/animacionlibro5.gif')] bg-cover bg-center hover:text-white max-[1920px]:border-b-0 max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Fotolibro <br />
              <p class="font-['PPE-Ultralight']">METRO MADRID</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular']font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/Movistar">
          <div
            class="trabajo1 max-[1920px]:border-l-1 max-[1920px]:border max-[1920px]:border-r-0 max-[1920px]:border-b-0 border border-solid border-r-0 border-l-0 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/portadamovistar.gif')] bg-cover bg-center hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Audiovisual <br />
              <p class="font-['PPE-Ultralight']">MOVISTAR +</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Audiovisuales">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/entrada3d.gif')] hover:text-white bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Colección <br />
              <p class="font-['PPE-Ultralight']">AUDIOVISUALES</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              RENDER Y AUDIOVISUAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/YelmoCines">
          <div
            class="trabajo1 max-[1920px]:border-t-1 max-[1920px]:border max-[1920px]:border-l-0 max-[1920px]:border-r-0 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/videoyelmo.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Rediseño <br />
              <p class="font-['PPE-Ultralight']">CINE YELMO</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Typenotes">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-1 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/caratulatypenotes.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Revista <br />
              <p class="font-['PPE-Ultralight']">TYPENOTES</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              EDITORIAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/WebESD">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 border-l-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/gifordenador3.gif')] bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Página web <br />
              <p class="font-['PPE-Ultralight']">ESD MADRID</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Fotografias">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/fotografias3.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Colección <br />
              <p class="font-['PPE-Ultralight']">FOTOGRÁFICA</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/GarridoGallery">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/caratulagarrido.gif')] bg-cover bg-center hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Garrido <br />
              <p class="font-['PPE-Ultralight']">GALLERY</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Ilustraciones">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/animacionilustraciones.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-1 max-sm:text-black max-xs:border-b-1">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Colección <br />
              <p class="font-['PPE-Ultralight']">ILUSTRACIONES</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-96 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              ILUSTRACIÓN
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="hidden trabajos justify-center max-sm:block">
      <div
        class="grid grid-cols-4 max-[1920px]:grid-cols-3 max-[1450px]:grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y max-sm:order-t-1 max-sm:border-solid max-sm:border-black">
        <NuxtLink to="/Matutano">
          <div
            class="trabajo1 border border-solid border-r-1 border-b-0 px-20 py-30 flex flex-col justify-center hover:text-black bg-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Matutano <br />
              <p class="font-['PPE-Ultralight']">SALUDABLE</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
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
          <div class=" bg-red text-white justify-center content-center text-[12px] hidden">PÁGINAS NUEVAS -
            PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>

        </div>


        <NuxtLink to="/Prau">
          <div
            class="trabajo1 border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Etiquetado<br />
              <p class="font-['PPE-Ultralight'] uppercase">VINOS PRAU</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              PACKAGING
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px]">PÁGINAS
            NUEVAS
            - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px] max-sm:hidden">
            PÁGINAS
            NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Regular'] content-center text-[12px] hidden">
            PÁGINAS
            NUEVAS -
            PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red text-white justify-center content-center font-['Regular'] text-[12px] hidden">
            PÁGINAS
            NUEVAS - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>

        </div>

        <NuxtLink to="/Member">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-1 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Asistente<br />
              <p class="font-['PPE-Ultralight'] uppercase">MEMBER</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA Y AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/MetrodeMadrid">
          <div
            class="trabajo1 border border-solid border-r-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Fotolibro<br />
              <p class="font-['PPE-Ultralight'] uppercase">metro madrid</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>



        <NuxtLink to="/Movistar">
          <div
            class="trabajo1 border border-solid border-r-0 border-l-0 border-t-1 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Audiovisual<br />
              <p class="font-['PPE-Ultralight'] uppercase">MOVISTAR +</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Audiovisuales">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-1 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">AUDIOVISUALES</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              RENDER Y AUDIOVISUAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/YelmoCines">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Rediseño<br />
              <p class="font-['PPE-Ultralight'] uppercase">CINE YELMO</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              MARCA
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/Typenotes">
          <div
            class="trabajo1 border border-solid border-r-1 border-t-1 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Revista<br />
              <p class="font-['PPE-Ultralight'] uppercase">TYPENOTES</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              EDITORIAL
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/WebESD">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 border-l-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Página web<br />
              <p class="font-['PPE-Ultralight'] uppercase">ESD MADRID</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
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
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">FOTOGRÁFICA</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              AUDIOVISUALES
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/GarridoGallery">
          <div
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Garrido<br />
              <p class="font-['PPE-Ultralight'] uppercase">GALLERY</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
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
            class="trabajo1 border border-solid border-r-0 border-t-0 px-20 py-30 flex flex-col justify-center bg-white hover:text-black max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-1 max-sm:text-black max-xs:border-b-1">
            <div
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-4 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">Ilustraciones</p>
            </div>
            <div
              class="text text-[16px] text-center leading-[3rem] pb-2 font-['Regular'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
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
      <div class="titular flex text-[72px] font-normal max-lg:text-[60px] font-['PPE-Ultralight']">
        APPS
      </div>
      <div
        class="programas grid grid-cols-1 gap-14 max-sm:gap-16 items-center max-lg:gap-8 min-w-[575px] max-lg:items-center max-lg:min-w-[60px] max-lg:grid">
        <div
          class="three_programas grid-cols-3 max-sm:gap-16 grid justify-center gap-8 place-items-center max-sm:grid-cols-3 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/AfterEffects.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/Photoshop.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/Lightroom.svg" alt="" />

          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Adobe <br> AfterEffects</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Adobe <br>Photoshop</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Adobe <br> Lightroom</div>

        </div>

        <div
          class="three_programas grid-cols-3 max-sm:gap-16 grid justify-center gap-8 place-items-center max-sm:grid-cols-3 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/InDesign.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/Illustrator.svg" alt="" />
          <img class="image_logo max-w-[50px] max-lg:max-w-[50px] max-sm:w-[40px]" src="/img/Figma.svg" alt="" />

          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Adobe <br>InDesign</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Adobe <br>Illustrator</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Figma</div>

        </div>
        <div
          class="three_programas grid-cols-3 max-sm:gap-16 grid justify-center gap-8 place-items-center max-sm:grid-cols-3 max-lg:grid-cols-3 max-lg:grid max-lg:gap-8">
          <img
            class="image_logo w-[50px] h-[50px] max-lg:max-w-[50px] max-lg:max-h-[50px] max-sm:h-[40px] max-sm:w-[40px]"
            src="/img/blender.svg" alt="" />
          <img
            class="image_logo w-[50px] h-[50px] max-lg:max-w-[50px] max-lg:max-h-[50px] max-sm:h-[40px] max-sm:w-[40px]"
            src="/img/Cinema4d.svg" alt="" />
          <img
            class="image_logo rounded-lg w-[50px] h-[49px] max-lg:max-w-[50px] max-lg:max-h-[49px] max-sm:h-[40px] max-sm:w-[40px]"
            src="/img/Procreate.png" alt="" />

          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Blender 4.0</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Cinema 4D</div>
          <div
            class="text place-self-center text-center max-w-[60ch] font-['Neue'] font-normal text-[14px] max-sm:leading-5.5 max-sm:text-[12px] text-zinc-300 max-sm:hidden">
            Procreate</div>
        </div>
      </div>
    </div>

    <div id="servicios"
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 border border-b-1 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky z-0 top-[10rem] max-lg:text-[60px] font-['PPE-Ultralight']">
          SERVICIOS
        </div>
      </div>

      <div class="servicios_ofrecidos flex flex-col gap-6 font-['Neue']">
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Fotografía</div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Experiencia realizando sesiones fotográficas de exterior y interior de modelaje. Fotografía de
            naturaleza o
            urbana.
            Además de experiencia en fotografía de producto/bodegón y control de equipo de estudio profesional.
            Edición de fotografía (Raw) en
            <a class="texto_color text-[#4b6ad1]">Photoshop y Lightroom</a>
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Ilustración</div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Experiencia realizando ilustraciones tradicionales (Acuarela, Acrílico, Rotuladores, Lapiz, etc) e
            ilustraciones
            digitales mediante Procreate (IPad) y otros soportes de ilustración digital.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Web y Programación
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Conocimientos altos de HTML y CSS (sass).
            <br />
            Conocimientos medio-altos de
            <a class="texto_color text-[#00dc82]">Tailwind, Nuxt y Vue.</a>
            <br />
            Conocimientos medios en JavaScript.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Pack Adobe y Figma
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Alto conocimiento en utilización del pack
            <a class="texto_color text-[#dc8f00]">Adobe</a> (concretamente los
            mencionados arriba) y
            <a class="texto_color text-[#dc8f00]">Figma</a> (componentización,
            vistas, prototipado y autolayout).
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Audiovisuales y Multimedia
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
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
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Maquetación</div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Conocimientos altos en
            <a class="texto_color text-[#bd3f9d]">Indesign</a> y
            <a class="texto_color text-[#4b6ad1]">Photoshop</a> para la
            maquetación de carteles, folletos, libros, revistas, anuncios y
            cualquier pieza gráfica necesaria.
          </div>
        </div>
        <div class="servicio flex flex-col gap-6">
          <img class="vector w-[15px]" src="/img/starzinc.svg"/>
          <div class="tittle_servicios font-['PPE-UltralightItalic'] text-[24px] max-sm:text-[22px] uppercase">
            Redes Sociales
          </div>
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:leading-5.5 max-sm:text-[15px] text-zinc-500">
            Conocimientos altos de redes sociales, actualidad y flujo de
            información en las aplicaciones actuales como
            <a class="texto_color text-[#d14bb0]">Instagram, TikTok, Facebook y Twitter.</a>
          </div>
        </div>
      </div>
    </div>

    <div id="sobremi"
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 border border-b-1 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[10rem] max-lg:text-[60px] font-['PPE-Ultralight']">
          SOBRE MI
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:text-[15px] text-zinc-500">
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

            <img class="img pt-10 max-sm:pt-24" src="/img/yofotoyo.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-20 border-t-0 border-r-0 border-l-0 text-black flex-nowrap gap-60 justify-center max-lg:pt-20 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['PPE-Ultralight']">
          TRABAJOS
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6 pt-2">
        <div class="servicio flex flex-col gap-6 font-['Neue']">
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:text-[15px] text-zinc-600">
            ▶ Ganador de concurso de carteles para
            <a class="bold font-['Neue'] text-black">Villaluenga de la Sagra</a> -
            Cartel para el libro de las fiestas <br />
            ▶ Creación de cartelería para página web y físico y creación de
            pictogramas para empresa
            <a class="bold font-['Neue'] text-black">Neumáticos por Poco.</a>
            <a class="bold text-xs text-black">- (6 meses)</a> <br />
            ▶ Renovación y creación de marca para la empresa
            <a class="bold font-['Neue'] text-black">Motor 76.</a>
            <a class="bold text-xs text-black">- (1 mes)</a> <br />
            ▶ Creación de ilustraciones para portadas de noticias en
            <a class="bold font-['Neue'] text-black">Ecos Castilla La Mancha.</a>
            <a class="bold text-xs text-black">- (2 meses)</a> <br />
            ▶ Diseño de portadas para proyecto musical. <br />
            ▶ Encargos Freelance de sesiones fotográficas, diseño de tatuajes e
            ilustraciones personales.
            <a class="bold text-xs text-black">- (4 años)</a> <br />
            ▶ Diseñador Freelance por horas para empresas.
            <a class="bold text-xs text-black">- (2 meses)</a> <br />
            ▶ Trabajo en practicas de empresa extracurriculares
            <a class="bold animate-pulse font-['Neue'] text-black" href="https://www.garridogallery.com/">Garrido
              Gallery</a>
            (Empresa de diseños y piezas de arte de lujo)<a class="bold text-xs text-black">- (9 meses)</a>
            <br />
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ▶
              Maquetación e impresión del Catalogo 2024</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 text-black flex-nowrap gap-60 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['PPE-Ultralight']">
          ESTUDIOS
        </div>
      </div>
      <div class="servicios_ofrecidos flex flex-col gap-6 pt-2">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:text-[15px] text-zinc-600 font-['Neue']">
            <a class="bold text-black font-['Neue']">
              ▶ Bachillerato Artístico
            </a>
            en IES El Greco Toledo. <br /><a class="bold text-black font-['Neue']">
              ▶ Grado Superior de Ilustración</a>
            en la Escuela de Artes de Toledo. <br /><a class="bold text-black font-['Neue']">
              ▶ 4º de Grado Universitario de Diseño Gráfico
            </a>
            en la Escuela Superior de Diseño de Madrid. <br /><a class="bold text-black font-['Neue']">
              ▶ Curso extracurricular de 2 años de Arte y Pintura
            </a>
            en Villaluenga de la Sagra. <br /><a class="bold text-black font-['Neue']">
              ▶ Cursos de Domestika:</a>
            "Ilustración Digital con Procreate", "Ilustración Digital aplicada a
            productos", "Introducción al lettering con Procreate".
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-sm:hidden grid-flow-cols border-0 border-b-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px] font-['Regular']">NUEVO
        CONTENIDO -
        NUEVO CONTENIDO -
        NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO
        -
        NUEVO CONTENIDO - NUEVO CONTENIDO - NUEVO CONTENIDO
      </div>
    </div>

    <div
      class="hidden max-sm:grid grid-flow-cols border-0 border-b-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center text-[12px]">NUEVO CONTENIDO - NUEVO
        CONTENIDO -
        NUEVO CONTENIDO
      </div>
    </div>

    <div
      class="trabajos flex pt-32 pl-40 pr-40 pb-40 bg-black text-white flex-nowrap gap-72 justify-center max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-6 max-sm:pb-12 max-sm:pt-16 border-black">
      <div class="sticky_menu">
        <div
          class="titular flex flex-col text-[72px] font-normal sticky top-[9rem] max-lg:text-[60px] font-['PPE-Ultralight']">
          ARTISTAS
        </div>
      </div>

      <div class="servicios_ofrecidos flex flex-col gap-6">
        <div class="servicio flex flex-col gap-6">
          <div class="text max-w-[60ch] font-normal text-[16px] max-sm:text-[15px] text-white font-['Neue']">
            Diferentes trabajos y disciplinas de referencia de gente interesante.
            En las categorías como ilustración realista o experimental, ilustración digital o analógica,
            comentario de cuadros artísticos, diseño 3D, cartelería, fanzines, tatuaje, serigrafía, marca y moda.
            <b>Compañeros artístas que inspiran.</b>


          </div>
        </div>
      </div>

    </div>

    <div
      class="flex gap-60 max-[1500px]:px-32 max-[1500px]:gap-20 text-sm bg-black border-t-0 min-[1920px]:px-94 px-56 pb-72 items-center justify-center content-center self-center max-sm:grid max-sm:gap-12 max-sm:pb-24 max-sm:border-t-0 max-sm:grid-cols-1 max-sm:px-10 max-sm:border-none max-sm:border-0 max-sm:pt-24">
      <div class="servicios_ofrecidos items-left flex max-sm:hidden flex-col gap-6 max-sm:order-last">

        <div class="flex flex-col gap-1 text-left justify-left">
          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/olme.ttoo"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @olme.ttoo - <b>Alejandro Olmedo</b></a>
            <a href="https://www.instagram.com/felixhdraw"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @felixhdraw - <b>Felix Hortolano</b></a>
            <a href="https://www.instagram.com/intensazc"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @intensazc - <b>Barbara Ibañez</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/cat.arsys"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @cat.arsys - <b> Catalin Liviu </b></a>
            <a href="https://www.instagram.com/iam_sharkastic"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @iam_sharkastic - <b>Sergio Martín</b></a>
            <a href="https://historia-arte.com/autores/alvaro-garcia-moreno?fbclid=PAZXh0bgNhZW0CMTEAAaZXhzJaO518coe4d0wbABrUM9cD97VABeVEthtpD8VFEtl-2QtME1bEkbE_aem_LSvS6AW-QbcQvWoqpau77g"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @agarciamorenoo - <b>Alvaro García</b></a>
          </div>


          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/crearual"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @crearual - <b>Laura Morales</b></a>
            <a href="https://www.instagram.com/sof_dob_"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @sof_dob_ - <b>Sofia Dobeson</b></a>
            <a href="https://www.instagram.com/cosso.portfolio"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @cosso.portfolio - <b>Marco García</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/_anagraphic"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @_anagraphic - <b>Ana Lazaro</b></a>
            <a href="https://www.instagram.com/conejitasmith7"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @conejitasmith7 - <b>Cruz Díaz</b></a>
            <a href="https://www.instagram.com/ghonz.art"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @ghonz.art - <b>Hugo Gregorio</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/kombo_oficial"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @kombo_oficial - <b>Rakel Mongue</b></a>
            <a href="https://www.instagram.com/bupeart"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @bupeart - <b>Pau Bueno</b></a>
            <a href="https://www.instagram.com/carolina.jing"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @carolina.jing - <b>Carolina Jing</b></a>
          </div>

          <div class="grid grid-flow-cols grid-cols-1 gap-1 justify-beetwen text-left">
            <a href="https://www.instagram.com/moniecos"
              class="text-white pr-72 pb-2 text-left border-b-1 border border-l-0 border-r-0 border-t-0 max-sm:px-20">
              @moniecos - <b>Paula Rubros</b></a>
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
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
      target="_blank"
      class="email text-lg pr-12 flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
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
    @apply opacity-100
    &:hover
      @apply opacity-60
  
  .red
    &:hover
        @apply text-zinc-300
  
  .app.animate-enter
    opacity: 1



</style>
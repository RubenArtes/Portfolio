<template>
  <div id="inicio" class="app bg-white font-['SFUIDisplay-Light']">
    <Cursor class="max-sm:hidden" />
    <div
      class="header bg-white p-10 border-t-0 px-32 text-black grid grid-cols-3 sticky top-0 z-50 max-lg:p-6 max-lg:sticky max-sm:flex max-sm:justify-between max-sm:px-8">
      <div class="image place-self-start self-center">
        <NuxtLink to="/Home">
          <img class="max-lg:max-w-[15px] w-[20px]" src="/img/logogif.gif" />
        </NuxtLink>
      </div>
      <div class="mode place-self-center">
        <NuxtLink to="/HomeDark">
          <img class="image w-[35px] max-sm:w-[22px]" src="/img/lightmodeon.svg" alt="" />
        </NuxtLink>
      </div>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
        target="_blank" class="email self-center text-lg  place-self-end flex gap-2 max-lg:text-xs">
        ruben.maldonado.graphic@gmail.com
        <img class="vector max-lg:max-w-[8px]" src="/img/Vector-11black.svg" />
      </a>
    </div>

    <VueScrollProgressBar background-color="#000000" />

    <div
      class="header bg-white p-2 px-12 text-black flex justify-center items-center sticky top-[122px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2 max-sm:top-[76px]">
      <div
        class="titular_small uppercase pr-2 pl-2 text-zinc-900 font-['Neue'] text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px]">
        Ultima actualización Septiembre 2024
      </div>
      <img class="info max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
    </div>

    <a href="#inicio"
      class="fixed max-sm:hidden mix-blend-exclusion bottom-0 right-0 transform -translate-y-1/2 text-[70px] z-50 uppercase font-bold text-white tracking-widest px-7 py-4 transition-all duration-300 ease-in-out hover:translate-y-[-7px]">
      ↑
    </a>

    <!--<div
      class="header text-black justify-center items-center sticky top-[122px] z-10 max-[1080px]:gap-6 max-[1025px]:top-[64px] max-sm:gap-2 max-sm:top-[76px]">
      <div class=" text-center animate-pulse opacity-30">
        <div class="py-2 w-full place-self-center text-center justify-center items-center text-indigo-100 leading-none grid lg:inline-flex"
          role="alert">
          <span
            class="titular_small uppercase text-zinc-800 font-['Neue'] text-[13px] max-[1920px]:text-xs max-sm:px-2 max-sm:text-[11px] mr-2 text-left">Ultima
            actualización Septiembre 2024</span>
          <span class="flex rounded-full bg-zinc-200 uppercase px-2 py-1 text-xs font-bold mr-3">
            <img class="info max-w-[12px] max-h-[12px]" src="/img/infoblack.png" />
          </span>
        </div>
      </div>
    </div> -->



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
      class="banner flex max-[1920px]:pt-[120px] max-[1920px]:pb-[100px] pt-[280px] pb-[200px] text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10 max-[1920px]:px-28 max-sm:hidden">
      <img class="banner_image max-[1920px]:w-[240px] w-[300px] h-full" src="/img/logorubenmal5.svg">


    </div>



    <div
      class="banner hidden max-sm:px-8 max-sm:flex max-sm:pt-12 max-sm:pb-12 text-white flex-nowrap items-center gap-64 justify-center max-xl:pt-2 max-xl:pb-2 max-xl:px-0 max-xl:flex-col max-xl:justify-center max-xl:gap-10">
      <img class="banner_image w-[140px] h-full" src="/img/logorubenmal5.svg">


    </div>

    <div class="grid grid-cols-3 px-32 max-sm:px-8 pt-2 pb-20 max-[1920px]:pt-0 max-sm:grid-cols-1 ">

      <div class="texto1 flex flex-col place-self-start self-end">

        <div
          class="text flex text-[40px] leading-[4rem] font-['PPE-UltralightItalic'] tracking-normal items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[36px]">
          Portfolio
          <img class="w-[12px] h-[12px]" src="/img/Copyright.svg">
        </div>

        <div
          class="text text-[14px] leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:font-normal max-sm:pt-2 max-sm:text-[14px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-start max-[1920px]:text-[14px] max-[1920px]:leading-[16px]">
          RUBÉN MALDONADO GONZÁLEZ
          <br>
          SEPTIEMBRE 2024
        </div>


      </div>


      <div class="texto2 hidden max-sm:flex gap-6 justify-between max-sm:pt-4">

        <div
          class="text place-self-start text-[14px] text-left max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-start justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-[1920px]:leading-[14px]">
          <br>
          [ PACKAGING ]
          <br>
          [ EDITORIAL ]
          <br>
          [ MARCA ]
          <br>
          [ ILUSTRACIÓN ]
          <br>
          [ RENDER ]
          <br>
          [ AUDIOVISUALES ]
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
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-0 max-sm:text-center max-[1920px]:text-[22px]">
            Sobre mi.
          </a>
          <a href="#tienda"
            class="text text-right text-[26px] uppercase font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
            Tienda.
          </a>



        </div>


      </div>

      <div class="texto2 flex max-sm:hidden gap-6 justify-center self-end">

        <div
          class="text place-self-end text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
          <a class="bg-slate-100 mb-1">[ PACKAGING</a>
          <a class="bg-slate-200 mb-1">[ EDITORIAL</a>
          <a class="bg-slate-300">[ MARCA</a>
        </div>

        <div
          class="text text-[14px] max-sm:text-[12px] max-sm:leading-[1rem] text-black leading-[18px] font-['Neue'] tracking-normal flex flex-col items-left justify-self-start max-3xl:text-[30px] max-sm:pt-2 max-sm:pb-4 max-sm:text-center max-[1920px]:leading-[20px]">
          <a class="bg-slate-100 mb-1">ILUSTRACIÓN ]</a>
          <a class="bg-slate-200 mb-1">RENDER ]</a>
          <a class="bg-slate-300">AUDIOVISUALES ]</a>
        </div>


      </div>

      <div class="texto3 flex flex-col place-self-end max-sm:place-self-end max-sm:pt-0 max-sm:hidden">

        <a href="#sobremi"
          class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          > Sobre mi.
        </a>
        <a href="#trabajos"
          class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          > Trabajos.
        </a>


        <a href="#servicios"
          class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          > Servicios.
        </a>
        <a href="#tienda"
          class="text text-right hover:text-zinc-400 decoration-1 underline-offset-4 decoration-slate-500 underline text-[22px] uppercase leading-[30px] font-['PPE-UltralightItalic'] tracking-normal flex flex-col items-left max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[18px] max-sm:leading-[1rem] max-sm:pb-4 max-sm:text-center max-[1920px]:text-[22px]">
          > Tienda.
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
      class="text text-center text-[120px] pb-12 pt-40 text-zinc-900 tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
      ↓
    </div>

    <div
      class="accede2 hidden max-sm:flex px-64 text-center justify-center text-zinc-600 pb-16 text-xs max-[720px]:px-4 max-sm:px-20 max-sm:pb-12 max-sm:pt-16">
      «Baja para ver los trabajos y clickea sobre uno para saber más sobre el»
    </div>

    <div
      class="grid grid-flow-cols grid-cols-1 text-center max-[1450px]:grid-cols-1 animate-pulse max-[1920px]:grid-cols-1 max-sm:grid-cols-1">

      <div
        class=" bg-orange-400 pb-[2px] pt-[2px] font-['Neue'] max-sm:py:[0px] max-sm:font-['Neue'] text-[14px] border border-orange-400 text-white justify-center content-center max-sm:text-[10px]">
        <NuxtMarquee>
          <MyComponent />- PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - BEST SELLER - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          <MyComponent /> PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - BEST SELLER - PÁGINAS NUEVAS - PÁGINAS
          NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS -
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
          class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-2  font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
          [ EDITORIAL / PACKAGING ]
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
          class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
          Caja <br />
          <p class="font-['PPE-Ultralight']">OPORTO</p>
        </div>
        <div
          class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
          [ EDITORIAL / PACKAGING ]
        </div>
        <div
          class="text text-[150px] pt-2 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[150px] max-sm:text-[120px] max-sm:hidden">
          *
        </div>
      </div>
    </NuxtLink>


    <div
      class="grid px-12 gap-6 grid-flow-cols grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-[1500px]:grid-cols-2 max-sm:grid-cols-1">

      <div class=" bg-red-700 text-white justify-center content-center font-['Neue'] text-[10px]">PÁGINAS
        NUEVAS -
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red-700 text-white justify-center content-center font-['Neue'] text-[10px] max-sm:hidden">
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div
        class=" bg-red-700 text-white justify-center content-center font-['Neue'] text-[10px] max-[1500px]:hidden max-sm:hidden">
        PÁGINAS
        NUEVAS -
        PÁGINAS NUEVAS - PÁGINAS NUEVAS
      </div>
      <div class=" bg-red text-white justify-center content-center font-['Neue'] text-[10px] hidden">PÁGINAS
        NUEVAS -
        PÁGINAS
        NUEVAS - PÁGINAS NUEVAS
      </div>

    </div>

    <div class="trabajos justify-center max-sm:hidden">
      <div
        class="grid gap-6 grid-cols-4 px-12 max-[1920px]:grid-cols-3 max-[1450px]:grid-cols-2 max-sm:grid-cols-1 max-sm:divide-y max-sm:order-t-1 max-sm:border-solid max-sm:border-black">
        <NuxtLink to="/Matutano">
          <div
            class="trabajo1 rounded-b-3xl shadow px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/giframbuesa_1.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Matutano <br />
              <p class="font-['PPE-Ultralight']">SALUDABLE</p>
            </div>
            <div
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ PACKAGING ]
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center content-center font-['Neue'] text-[10px]">PÁGINAS
            NUEVAS
            - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Neue'] text-[10px] content-center max-sm:hidden">
            PÁGINAS
            NUEVAS - PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red-700 text-white justify-center font-['Neue'] text-[10px] content-center hidden">
            PÁGINAS
            NUEVAS -
            PÁGINAS NUEVAS - PÁGINAS NUEVAS
          </div>
          <div class=" bg-red text-white justify-center content-center font-['Neue'] text-[10px] hidden">
            PÁGINAS
            NUEVAS - PÁGINAS
            NUEVAS - PÁGINAS NUEVAS
          </div>

        </div>


        <NuxtLink to="/Prau">
          <div
            class="trabajo1 rounded-b-3xl shadow px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/vinosprau.gif')] hover:text-black bg-cover bg-center max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Etiquetado <br />
              <p class="font-['PPE-Ultralight']">VINOS PRAU</p>
            </div>
            <div
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ PACKAGING ]
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/Member">
          <div
            class="trabajo1 rounded-b-3xl shadow px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/member30.gif')] bg-cover bg-center hover:text-white max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Asistente <br />
              <p class="font-['PPE-Ultralight']">MEMBER</p>
            </div>
            <div
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA / AUDIOVISUALES ]
            </div>
            <div
              class="text text-[250px] pt-24 font-['Apercu-Bold'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/MetrodeMadrid">
          <div
            class="trabajo1 rounded-b-3xl shadow px-20 py-30 flex flex-col justify-center hover:bg-[url('/img/animacionlibro5.gif')] bg-cover bg-center hover:text-white max-[1920px]:border-b-0 max-[1840px]:px-16 max-sm:px-8 max-sm:pb-20 max-sm:max-h-[800px] max-sm:pt-20 max-sm:bg-white max-sm:hover:bg-white max-sm:border-solid max-sm:border-0 max-sm:text-black">
            <div
              class="text text-center max-[2300px]:text-[50px] max-[2300px]:leading-[3.5rem] text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:font-bold max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[2.5rem] max-sm:pb-4 max-sm:text-center">
              Fotolibro <br />
              <p class="font-['PPE-Ultralight']">METRO MADRID</p>
            </div>
            <div
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ RENDER / AUDIOVISUALES ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ EDITORIAL ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA ]
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
              class="text text-[14px] text-center font-['Neue'] leading-[10px] pb-[430px] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[14px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ ILUSTRACIÓN ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Matutano <br />
              <p class="font-['PPE-Ultralight']">SALUDABLE</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ PACKAGING ]
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center content-center font-['Neue'] text-[10px]">PÁGINAS NUEVAS -
            PÁGINAS
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Etiquetado<br />
              <p class="font-['PPE-Ultralight'] uppercase">VINOS PRAU</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ PACKAGING ]
            </div>
            <div
              class="text text-black text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>

        <div
          class="grid-flow-cols border-0 border-none grid-cols-4 max-[1920px]:grid-cols-3 text-center max-[1450px]:grid-cols-2 animate-pulse max-[1930px]:grid-cols-3 max-sm:grid-cols-1 hidden max-sm:grid">

          <div class=" bg-red-700 text-white justify-center font-['Neue'] text-[10px]">PÁGINAS
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Asistente<br />
              <p class="font-['PPE-Ultralight'] uppercase">MEMBER</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA / AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Fotolibro<br />
              <p class="font-['PPE-Ultralight'] uppercase">metro madrid</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Audiovisual<br />
              <p class="font-['PPE-Ultralight'] uppercase">MOVISTAR +</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">AUDIOVISUALES</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ RENDER / AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Rediseño<br />
              <p class="font-['PPE-Ultralight'] uppercase">CINE YELMO</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Revista<br />
              <p class="font-['PPE-Ultralight'] uppercase">TYPENOTES</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ EDITORIAL ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Página web<br />
              <p class="font-['PPE-Ultralight'] uppercase">ESD MADRID</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">FOTOGRÁFICA</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ AUDIOVISUALES ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Garrido<br />
              <p class="font-['PPE-Ultralight'] uppercase">GALLERY</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ MARCA ]
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
              class="text text-center text-[60px] leading-[4rem] pt-24 font-['PPE-UltralightItalic'] font tracking-normal flex flex-col items-left justify-center max-3xl:text-[30px] max-sm:pt-2 max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1 max-sm:text-center">
              Colección<br />
              <p class="font-['PPE-Ultralight'] uppercase">Ilustraciones</p>
            </div>
            <div
              class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal flex flex-col items-left justify-center max-sm:text-[12px] max-sm:pb-2 max-sm:text-center max-sm:leading-[0.25rem]">
              [ ILUSTRACIÓN ]
            </div>
            <div
              class="text text-[250px] pt-24 font-['SFUIDisplay-Regular'] font-bold tracking-normal flex flex-col items-center justify-center max-[2260px]:text-[250px] max-sm:text-[120px] max-sm:hidden">
              *
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>


    <div
      class="flex pt-32 px-40 pb-64 border-none text-black flex-col gap-20 border items-center justify-center max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-14">
      <div class="titular flex text-[72px] font-normal max-lg:text-[60px] font-['PPE-Ultralight']">
        TRABAJOS
      </div>
    </div>

    <div class="px-32 pb-12 grid grid-cols-3">
      <!-- Contenedor de la imagen con posición relativa -->
      <div class="relative w-[900px] invisible transition-transform duration-500 group">
        <img src="/img/libroimpreso.png" alt="Avatar"
          class="w-full transition-transform duration-500 group-hover:opacity-0">

        <!-- Imagen de fondo que aparece al hacer hover -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background-image: url('/img/libroimpreso.webp');"></div>

        <!-- Texto que aparece al hacer hover y centrado en la página -->
        <div
        class="absolute pt-32 left-0 flex items-right justify-right z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
            class="text text-left text-[100px] leading-[7rem] font-['PPE-UltralightItalic'] tracking-normal max-3xl:text-[30px] max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1">
            Caja<br />
            <p class="font-['PPE-Ultralight'] uppercase">Oporto</p>
          </div>
          <div
            class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal max-sm:text-[12px] max-sm:pb-2 max-sm:leading-[0.25rem]">
            [ MARCA / PACKAGING ]
          </div>
        </div>
      </div>
      <div class="relative w-[900px] transition-transform duration-500 group mx-auto mix-plus-lighter">
        <img src="/img/libroimpreso.png" alt="Avatar"
          class="w-full transition-transform duration-500 group-hover:opacity-0 ">

        <!-- Imagen de fondo que aparece al hacer hover -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background-image: url('/img/libroimpreso.webp');"></div>

        <!-- Texto que aparece al hacer hover y centrado en la página -->
        <div
        class="absolute pt-32 left-0 flex items-right justify-right z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
            class="text text-left text-[100px] leading-[7rem] font-['PPE-UltralightItalic'] tracking-normal max-3xl:text-[30px] max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1">
            Caja<br />
            <p class="font-['PPE-Ultralight'] uppercase">Oporto</p>
          </div>
          <div
            class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal max-sm:text-[12px] max-sm:pb-2 max-sm:leading-[0.25rem]">
            [ MARCA / PACKAGING ]
          </div>
        </div>
      </div>
      <div class="relative w-[900px] invisible transition-transform duration-500 group mx-auto">
        <img src="/img/libroimpreso.png" alt="Avatar"
          class="w-full transition-transform duration-500 group-hover:opacity-0">

        <!-- Imagen de fondo que aparece al hacer hover -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background-image: url('/img/libroimpreso.webp');"></div>

        <!-- Texto que aparece al hacer hover y centrado en la página -->
        <div
        class="absolute pt-32 left-0 flex items-right justify-right z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
            class="text text-left text-[100px] leading-[7rem] font-['PPE-UltralightItalic'] tracking-normal max-3xl:text-[30px] max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1">
            Caja<br />
            <p class="font-['PPE-Ultralight'] uppercase">Oporto</p>
          </div>
          <div
            class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal max-sm:text-[12px] max-sm:pb-2 max-sm:leading-[0.25rem]">
            [ MARCA / PACKAGING ]
          </div>
        </div>
      </div>
    </div>
    <div class="px-32 pb-64 grid grid-cols-2">
      <!-- Contenedor de la imagen con posición relativa -->
      <div class="relative w-[300px] transition-transform duration-500 group mx-auto">
        <img src="/img/giframbuesa.png" alt="Avatar"
          class="w-full transition-transform duration-500 group-hover:opacity-0">

        <!-- Imagen de fondo que aparece al hacer hover -->
        <div
          class="absolute inset-0 w-[300px] bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background-image: url('/img/giframbuesa.gif');"></div>

        <!-- Texto que aparece al hacer hover y centrado en la página -->
        <div
        class="absolute pt-32 left-0 flex items-right justify-right z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
            class="text text-left text-[100px] leading-[7rem] font-['PPE-UltralightItalic'] tracking-normal max-3xl:text-[30px] max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1">
            Matutano<br />
            <p class="font-['PPE-Ultralight'] uppercase">SALUDABLE</p>
          </div>
          <div
            class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal max-sm:text-[12px] max-sm:pb-2 max-sm:leading-[0.25rem]">
            [ MARCA / PACKAGING ]
          </div>
        </div>
      </div>
      <div class="relative w-[300px] transition-transform duration-500 group mx-auto">
        <img src="/img/botella3.png" alt="Avatar"
          class="w-full transition-transform duration-500 group-hover:opacity-0">

        <!-- Imagen de fondo que aparece al hacer hover -->
        <div
          class="absolute inset-0 w-[300px] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style="background-image: url('/img/botella4.png');"></div>

        <!-- Texto que aparece al hacer hover y centrado en la página -->
        <div
        class="absolute pt-32 left-0 flex items-right justify-right z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
            class="text text-left text-[100px] leading-[7rem] font-['PPE-UltralightItalic'] tracking-normal max-3xl:text-[30px] max-sm:text-[40px] max-sm:leading-[3rem] max-sm:pb-1">
            Caja<br />
            <p class="font-['PPE-Ultralight'] uppercase">Oporto</p>
          </div>
          <div
            class="text text-[12px] text-center leading-[1rem] pb-2 font-['Neue'] font-normal tracking-normal max-sm:text-[12px] max-sm:pb-2 max-sm:leading-[0.25rem]">
            [ MARCA / PACKAGING ]
          </div>
        </div>
      </div>
    </div>

    


  <div
    class="links_rrss bg-white pt-32 px-80 pb-32 text-black justify-center gap-12 flex flex-row max-lg:pt-6 max-lg:px-10 max-lg:flex-col max-lg:justify-items-center max-lg:gap-20 max-lg:flex max-lg:justify-center max-sm:pt-24">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruben.maldonado.graphic@gmail.com&su=Inserte aqui su titulo&body=Hola Ruben Maldonado."
      target="_blank"
      class="email text-lg pr-12 flex gap-2 items-center max-lg:text-[14px] max-lg:justify-center max-sm:pr-0">
      ruben.maldonado.graphic@gmail.com
      <img class="vector" src="/img/Vector-11black.svg" />
    </a>
    <div class="links flex flex-col pl-12 gap-2 max-lg:justify-center max-sm:pl-0">
      <div class="links1 flex max-sm:gap-24 gap-32 max-lg:justify-center">
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.instagram.com/maldonadoruben_/">
          <img class="vector w-[14px]" src="/img/Instagram.png" />
          | Instagram
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.behance.net/rubenartes">
          <img class="vector w-[14px]" src="/img/Behance.png" />
          | Behance
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
      </div>
      <div class="links2 flex max-sm:gap-24 gap-32 flex-end max-lg:justify-center">
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.instagram.com/ruben.iso">
          <img class="vector w-[14px]" src="/img/Instagram.png" />
          | Instagram
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
        <a class="red flex gap-2 items-center max-lg:text-[14px]" href="https://www.linkedin.com/in/rubenmaldonado00">
          <img class="vector w-[14px]" src="/img/LinkedIn.png" />
          | LinkedIn
          <img class="vector" src="/img/Vector-11black.svg" />
        </a>
      </div>
    </div>
  </div>

  <div
    class="foter bg-white p-10 border-b-0 border-l-0 border-r-0 grid grid-cols-3 max-sm:grid-cols-2 text-black max-lg:p-6 border border-t-1">
    <div class="foter_image flex flex-start max-sm:gap-2">
      <img class="vector max-lg:max-w-[15px]" src="/img/starblack.svg" />
      <div class="email hidden max-sm:flex gap-2 items-center text-[10px] justify-center text-sm max-lg:text-xs">
        Copyright ©</div>
    </div>
    <div class="email max-sm:hidden flex gap-2 items-center text-[10px] justify-center text-sm max-lg:text-xs">
      All rights reserved | Copyright ©</div>
    <div class="email flex gap-2 justify-end items-center text-sm max-lg:text-xs">
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

  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s

  .fade-enter-from, .fade-leave-to
    opacity: 0


</style>
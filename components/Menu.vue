<template>
    <div class="menu w-[350px] pl-12 pr-20 pt-10 sticky top-0 h-screen border-r border-gray-500">
        <div class="menu_item_container flex flex-col gap-2">
            <NuxtLink class="menu_tittle pb-6 text-lg font-black">INDICE PROYECTOS</NuxtLink>
            <NuxtLink to="/" class="menu_item pl-10 text-sm">→ Página Principal</NuxtLink>
            <NuxtLink to="/introduccion" class="menu_item pl-10 text-sm">→ Editorial</NuxtLink>
            <NuxtLink to="/logo" class="menu_item pl-10 text-sm">→ Ilustraciones</NuxtLink>
            <NuxtLink to="/tipografia" class="menu_item pl-10 text-sm">→ Packaging</NuxtLink>
            <NuxtLink to="/colores" class="menu_item pl-10 text-sm">→ Fotografía</NuxtLink>
            <NuxtLink to="/iconos" class="menu_item pl-10 text-sm">→ Audiovisuales</NuxtLink>
            <NuxtLink to="/elementos" class="menu_item pl-10 text-sm">→ 3D</NuxtLink>
            <NuxtLink to="/tratamiento" class="menu_item pl-10 text-sm">→ Información y contacto</NuxtLink>


        </div>
    </div>
</template>

<style lang="sass" scoped>

.menu_item
    &:hover
        @apply text-red-700


</style>
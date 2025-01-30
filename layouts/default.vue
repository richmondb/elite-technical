<template>
  <AppHeader />
  <main class="relative p-4 md:p-6 lg:p-8"  v-bind="$attrs">
    <!--This is the slot where the content of the page will be rendered-->
    <slot />
  </main>
  <AppFooter />
</template>

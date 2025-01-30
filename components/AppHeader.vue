<script lang="ts" setup>
  const router = useRoute();

  const isContact = computed(() => router.path === '/contact');

  const isInContact = ref(isContact);

</script>

<template>
  <header class="sticky w-full top-0 z-50 py-4 bg-white/05 backdrop-blur-md">
    <nav class="container mx-auto flex gap-4 items-center px-8 sm:p-0">
      <div class="md:mr-16">
        <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-800">
          GlanceWire
        </h1>
      </div>
      <div class="flex items-end justify-center gap-4 grow">
        <NuxtLink
          to="/"
          class="text-black dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 transition-all font-black text-lg p-2 hidden sm:block"
          >Home
        </NuxtLink>
        <NuxtLink
          :key="!isInContact ? '#features' : '/#features'"
          :to="!isInContact ? '#features' : '/#features'"
          class="text-black dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 transition-all font-black text-lg p-2 hidden sm:block"
          >Features
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-black dark:text-white dark:hover:text-gray-400 hover:underline hover:underline-offset-4 transition-all font-black text-lg p-2 hidden sm:block"
          >Contact
        </NuxtLink>
      </div>
      <div class="grow w-full flex items-end justify-end">
        <div class="flex items-center gap-6">
          <ThemeColorChange />
          <DropdownMenu class="sm:hidden" />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .router-link-exact-active {
    text-decoration-line: underline;
    text-underline-offset: 4px;
  }
</style>

<script setup lang="ts">

const route = useRoute();

const slug = ref(route.params.slug);
</script>

<template>
  <div class="w-full min-h-max">
    <div class="p-4 py-8 lg:px-16 lg:py-24 flex justify-center items-center">
      <h1 class="text-4xl md:text-8xl font-thin">Outsource</h1>
    </div>
    <hr class="dark:border-white/50" >
    <div class="w-full flex flex-col justify-center items-center p-16 gap-8">
      <h1 class="font-black text-4xl text-center">Slug: {{ slug }}</h1>
      <p class="font-mono text-lg text-center">Sample page for handling Path Params for Feature Links</p>
    </div>
  </div>
</template>

<style scoped>

</style>
<script lang="ts" setup>
  useHead({
    title: 'GlanceWire',
    meta: [{ name: 'description', content: 'Simple Mockup Web Application.' }],
  });
</script>

<template>
  <!-- Loading Indication for Navigation -->
  <NuxtLoadingIndicator />
  <!-- Wrap the entire application in a layout component -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!--  To render modals in main layout-->
  <UModals />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.25s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>

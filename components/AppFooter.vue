<script setup lang="ts"></script>

<template>
  <footer class="w-full text-white py-6">
    <hr>
    <div class="container mx-auto  flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-0 pt-6">

      <!-- Brand / Logo -->
      <div>
        <h1
          class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-800"
        >
          GlanceWire
        </h1>
      </div>

      <!-- Social Media Icons -->
      <div class="flex gap-4">
        <a
          href="https://twitter.com"
          target="_blank"
        >
          <Icon
            name="mdi:twitter"
            class="w-8 h-8 text-black  dark:text-white"
          />
        </a>
        <a
          href="https://github.com"
          target="_blank"
        >
          <Icon
            name="mdi:github"
            class="w-8 h-8 text-black  dark:text-white"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
        >
          <Icon
            name="mdi:linkedin"
            class="w-8 h-8 text-black  dark:text-white"
          />
        </a>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="text-center text-gray-500 text-sm mt-4">
      © {{ new Date().getFullYear() }} GlanceWire. All rights reserved.
    </div>
  </footer>
</template>

<style scoped></style>

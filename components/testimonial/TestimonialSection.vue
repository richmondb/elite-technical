<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <section>

    <div class="flex flex-col items-center w-full p-3 lg:h-full">
      <blockquote class="max-w-2xl text-base italic text-center text-pretty">
        <p>{{ props.quote }}</p>
      </blockquote>
      <div class="text-center dark:text-gray-400">
        <p>{{ props.name }}</p>
        <p>{{ props.role }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
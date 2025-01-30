<script setup lang="ts">
  const items = [
    [
      {
        label: 'Home',
        to: "/",
      },
    ],
    [
      {
        label: 'Features',
        to: "#features",
      },
    ],
    [
      {
        label: 'Contact',
        to: "/contact",
      },
    ],
  ];
</script>

<template>
  <UDropdown
    :items="items"
    mode="click"
    :popper="{ placement: 'bottom-end' }">
    <UButton
      color="white"
      variant="ghost"
      size="xl"
      class="p-2"
      icon="i-heroicons-outline-bars-4"
       />
  </UDropdown>
</template>

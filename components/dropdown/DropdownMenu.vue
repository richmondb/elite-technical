<script setup lang="ts">

  // TODO
  // Reference in AppHeader.vue component
  // Fix the dropdown menu to show the correct active link,
  // when the user is on the contact page.
  // Hint: Use the `isContact` computed property to determine
  // if the user is on the contact page.

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
        to: "/#features",
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

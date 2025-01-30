<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  body: {
    type: String,
    required: true,
    default: '',
  },
});

const modal = useModal();
</script>

<template>
  <UModal>
    <UCard :ui="{ base: 'bg-white/10' }">
      <div class="space-y-2">
        <div class="text-center">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
          <br >
          <p>{{ body }}</p>
        </div>
        <hr class="dark:border-white/50 my-4" >
        <div class="w-full text-center">
          <UButton @click="modal.close()"> Ok!</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<template>
  <div
    class="w-full max-w-sm mx-auto p-8 py-16 rounded-lg backdrop-blur-lg bg-gray-50 dark:bg-black/10 border border-solid border-gray-300 dark:border-gray-600"
  >
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name" eager-validation size="lg">
        <UInput
          v-model="state.name"
          type="text"
          placeholder="Your Name"
          required
        />
      </UFormGroup>
      <UFormGroup label="Email" name="email" type eager-validation size="lg">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="Your Email"
          required
        />
      </UFormGroup>
      <div class="flex justify-center">
        <UButton type="submit" class="justify-center" size="lg">Submit</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { ModalFormSuccess } from "#components";
import type { FormSubmitEvent } from "#ui/types";

const modal = useModal();

const schema = z.object({
  name: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid email"),
});

const state = reactive<z.infer<typeof schema>>({
  name: "",
  email: "",
});

const onSubmit = async (form: FormSubmitEvent<z.infer<typeof schema>>) => {
  if (schema.safeParse(state)) {
    console.log(form.data);
    modal.open(ModalFormSuccess, {
      title: "Success!",
      body: "Thank you for your submission!",
    });
  }
};
</script>

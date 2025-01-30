<script setup lang="ts">
const testimonials = [
  {
    name: "Sarah L.",
    role: "AI Engineer",
    quote: "GlanceWire has completely changed the way I approach AI development. The resources are top-notch, and the community is incredibly supportive. The hackathons are intense but rewarding!"
  },
  {
    name: "Mark D.",
    role: "Data Scientist",
    quote: "I’ve never seen an AI platform that combines knowledge, teamwork, and real-world challenges like GlanceWire. The collaboration tools make working with others seamless, and the AI challenges push my skills to the next level."
  },
  {
    name: "Priya K.",
    role: "AI Researcher",
    quote: "From tutorials to real-world AI challenges, GlanceWire is the ultimate hub for AI learners and professionals. The community-driven approach makes it feel like a true AI revolution!"
  },
];
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full text-center py-4">
      <h1 class="text-3xl italic font-thin underline underline-offset-8">Testimonials</h1>
    </div>
    <div class="w-full h-full flex flex-col items-center">
      <TestimonialSection v-for="testimonial in testimonials" :key="testimonial.name" :name="testimonial.name" :role="testimonial.role" :quote="testimonial.quote" />
    </div>
  </div>
</template>

<style scoped>

</style>
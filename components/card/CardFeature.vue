<script lang="ts" setup>

  type FeatureType = {
    title: string;
    description: string;
    featureLink: string;
    image: string;
  }

  const props:FeatureType = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featureLink: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });

</script>

<template>
  <div
    class="card-frame relative z-10 w-full rounded-lg group border border-solid border-black/10 dark:border-white/20 p-6">
    <div class="absolute inset-0 -z-10 bg-[rgba(255,255,255,.06)] backdrop-blur-sm w-full h-full"/>
    <div
      class="h-full bg-red-50/10 rounded-xl backdrop-blur-sm z-10 border border-solid border-black/10 dark:border-white/20">
      <div class="h-full content z-10 p-4 rounded-xl">
        <div class="image-container w-full h-36">
          <img
            alt="Find a Coding Buddy"
            class="w-full h-full object-contain rounded-lg"
            :src="props.image" >
        </div>
        <h2 class="text-2xl font-semibold text-center py-2">{{props.title}}</h2>
        <hr class="my-2" >
        <p class="text-base text-center px-8"
          >{{props.description}}</p
        >
        <div class="w-full flex py-2 justify-center">
          <button
            class="flex justify-center items-center p-1 px-3 mt-4 rounded-lg border border-solid border-black/25 dark:border-white/25 backdrop-blur hover:text-black/75 dark:hover:text-black/75">
            <NuxtLink
              :to="props.featureLink"
              >Learn More
            </NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-frame {
    transition: all 0.3s;
    position: relative;
    min-height: 26rem;
    height: auto;
  }

  .card-frame::after {
    content: '';
    position: absolute;
    top: -5%;
    left: 20%;
    width: 60%;
    height: 20%;
    z-index: 0;
    opacity: 0.3;
    border-radius: 50%;
    background: radial-gradient(#ffc58b 10%, #e1a6ff 20%, #e1a6ff 30%, #352cee 60%);
    filter: blur(80px);
    mix-blend-mode: color-dodge;
    transition: opacity 1s 1s;
  }

  .card-frame::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    background: radial-gradient(141.53% 114.68% at 87.46% 55.27%, #9a7cff 36.75%, rgba(14, 10, 162, 0) 100%);
    filter: blur(52px);
    border-radius: inherit;
    opacity: 0.1;
    transform: scale(1.05);
    mix-blend-mode: overlay;
  }
</style>

<script lang="ts" setup>
  import CompA from './hero/HeroComponentA.vue';
  import CompB from './hero/HeroComponentB.vue';

  const actionLineOne = 'Ignite your';
  const catchPhrase = 'Here at GlanceWire.';

  const activeComponent = shallowRef(CompA);

  const toggleComponent = () => {
    activeComponent.value = activeComponent.value === CompA ? CompB : CompA;
  };
</script>

<template>
  <div class="w-full h-auto min-h-max max-h-[1800px] flex flex-col">
    <div class="flex flex-col items-center flex-1">
      <div class="text-center space-y-4 mt-24">
        <h1 class="text-5xl md:text-8xl"
          >{{ actionLineOne }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 dark:from-blue-100 dark:to-blue-600 hover:cursor-pointer select-none"
            >Code</span
          >
        </h1>
        <h1 class="text-4xl md:text-7xl"
          >Find your
          <span
            class="text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-red-900 dark:from-red-100 dark:to-red-600 hover:cursor-pointer select-none"
            >Sparks.</span
          >
        </h1>
        <p class="text-2xl md:text-4xl">{{ catchPhrase }}</p>
        <button class="animate-bounce">
          <svg
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.293 6.293a1 1 0 0 1 1.414 0L12 11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414m0 6a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
              fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
    <div class="pt-16 h-full flex-1">
      <div class="w-full h-full flex justify-center">
        <div
          class="hero-main relative p-6 pb-0 w-[70rem] h-auto md:h-[42rem] bg-white/10 backdrop-blur rounded-t-2xl border-t border-x border-black/15 dark:border-red-300/15">
          <div
            class="absolute inset-3 !bottom-0 bg-gradient-to-b from-blue-50/10 to-blue-700/10 rounded-t-2xl -z-10 border-t border-x border-blue-800/15 dark:border-blue-300/15"/>
          <div
            class="hero-main-content z-10 h-full rounded-t-2xl bg-white/20 dark:bg-black/30 backdrop-blur p-2 transition duration-150 border-none">
            <div class="flex flex-col items-center h-full">
              <div>
                <button
                  class="p-2 px-4 rounded-lg border border-solid border-black/25 dark:border-white/25 text-black dark:text-white mb-2"
                  @click="toggleComponent">
                  Explore
                </button>
              </div>
              <hr >
              <Transition
                mode="out-in"
                name="fade">
                <component :is="activeComponent" />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero-main-content::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    background: radial-gradient(141.53% 114.68% at 87.46% 55.27%, #7c92ff 36.75%, rgba(14, 10, 162, 0) 100%);
    filter: blur(52px);
    border-radius: inherit;
    opacity: 0.35;
    transform: scale(1.05);
    mix-blend-mode: overlay;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

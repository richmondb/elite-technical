<template>
  <div>
    <div class="w-full text-center py-4">
      <h1 class="text-3xl italic font-thin underline underline-offset-8">Join Other Coding Communities</h1>
    </div>
    <div class=" mx-auto">
      <ul class="space-y-4">
        <li v-for="(community, index) in codingCommunities" :key="index" class="transition-none bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg p-4 rounded-lg shadow">
          <a :href="community.url" target="_blank" class="text-lg font-semibold underline underline-offset-2">
            {{ community.name }}
          </a>
          <p class="text-gray-700 dark:text-gray-300">{{ community.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const codingCommunities = [
  {
    name: "GitHub Discussions",
    url: "https://github.com/discussions",
    description: "A place where developers collaborate, ask questions, and share projects within the GitHub ecosystem."
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/",
    description: "One of the largest Q&A platforms where developers ask technical questions and get expert answers."
  },
  {
    name: "Dev.to",
    url: "https://dev.to/",
    description: "A vibrant developer community that shares blog posts, tutorials, and discussions on programming topics."
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/",
    description: "A blogging platform for developers to write and share their coding experiences, tutorials, and ideas."
  },
  {
    name: "freeCodeCamp Forum",
    url: "https://forum.freecodecamp.org/",
    description: "A community where learners and experienced developers discuss coding challenges, projects, and career advice."
  }
];
</script>

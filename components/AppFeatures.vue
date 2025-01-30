<script lang="ts" setup>
  type FeatureType = {
    title: string;
    description: string;
    link: string;
    image: string;
  };

  const Features: FeatureType[] = [
    {
      title: 'Find a Coding Buddy',
      description: 'Match with a coding partner based on your skills, goals, and experience level.',
      link: '/outsource/find-buddy',
      image: '/images/coding-body.svg',
    },
    {
      title: 'Project Collaboration',
      description: 'Join open-source or personal projects and collaborate with other developers.',
      link: '/outsource/projects',
      image: '/images/project-collaboration.svg',
    },
    {
      title: 'Pair Programming Sessions',
      description: 'Schedule live coding sessions with your buddy to improve problem-solving skills.',
      link: '/outsource/pair-programming',
      image: '/images/pair-programming.svg',
    },
    {
      title: 'Learning Resources',
      description: 'Access curated tutorials, coding challenges, and learning paths.',
      link: '/outsource/resources',
      image: '/images/resources.png',
    },
    {
      title: 'Community Forum',
      description: 'Discuss coding topics, ask for help, and share knowledge with the community.',
      link: '/outsource/forum',
      image: '/images/community-forum.png',
    },
    {
      title: 'Hackathons & Challenges',
      description: 'Participate in coding competitions and hackathons to test and enhance your skills.',
      link: '/outsource/hackathons',
      image: '/images/hackathon-challenges.svg',
    },
  ];
</script>

<template>
  <div
    id="features"
    class="features relative w-full h-screen min-h-max max-h-[1200px]">
    <div class="text-center space-y-3 ">
      <hr class="border-gray-800" >
      <h1 class="text-4xl md:text-5xl font-thin">Features</h1>
      <hr class="border-gray-800" >
    </div>
    <div class="features-bg"/>

    <div class="relative container mx-auto py-24 z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">
        <CardFeature
          v-for="feature in Features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :feature-link="feature.link"
          :image="feature.image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .features .features-bg {
    position: absolute;
    inset: 75px 0 0 0;
    z-index: -1;
    opacity: 0.08;
    background-image: url("/images/grid.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

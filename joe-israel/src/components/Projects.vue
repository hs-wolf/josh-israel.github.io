<template>
  <section id="projects" class="projects bg-light">
    <div class="container flex t-center">
      <h1 class="t-lg">Recent Projects</h1>
      <p class="t-lead my-2">Check out my latest works.</p>
      <Carousel :slides="slides" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from './Carousel.vue';

import ICarouselSlide from '@/types/CarouselSlide';

export default defineComponent({
  name: 'Projects',
  components: { Carousel },
  setup() {
    const slides: ICarouselSlide[] = [
      {
        id: '1',
        title: 'My Portfolio',
        description: 'My very first portfolio made with VUE and NodeJS.',
        img: 'https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg',
        link: 'https://github.com/joe-israel/joe-israel.github.io',
      },
      {
        id: '2',
        title: 'Taverna Central',
        description: 'A Discord Bot made in TypeScript and NodeJS for a Tabletop RPG server.',
        img: 'https://abilityexperience.org/wp-content/uploads/sites/2/2020/06/what-is-discord-app-1280x720.png',
        link: 'https://github.com/joe-israel/bot-taverna-typescript',
      },
    ];

    return { slides };
  },
});
</script>

<style scoped>
.projects .flex {
  flex-direction: column;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
}
</style>

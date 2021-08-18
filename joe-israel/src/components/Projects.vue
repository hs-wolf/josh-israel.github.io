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
        title: 'Taverna Central',
        description:
          'Tavernan Central - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cum praesentium! Ipsum quibusdam labore vero, sunt recusandae voluptate quisquam veritatis.',
        img: 'https://picsum.photos/seed/picsum/600/350',
      },
      {
        id: '2',
        title: 'Fadinha',
        description:
          'Fadinha - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iusto saepe hic cum explicabo? Natus at praesentium voluptates ab tenetur?',
        img: 'https://picsum.photos/seed/picsum1/600/350',
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

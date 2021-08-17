<template>
  <section id="projects" class="projects bg-light">
    <div class="container flex t-center">
      <h1 class="t-lg">Recent Projects</h1>
      <p class="t-lead my-2">Check out my latest works.</p>
      <Carousel :slides="slides" />
      <p class="t-lead my-2">Want to see more?</p>
      <div class="btn btn-dark my-1 t-lead">See All Projects</div>
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
  data() {
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
      {
        id: '3',
        title: 'UManga',
        description:
          'UManga - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam magni nemo labore deserunt sit assumenda eius consequatur suscipit earum maxime!',
        img: 'https://picsum.photos/seed/picsum2/600/350',
      },
      {
        id: '4',
        title: 'Crypto',
        description:
          'Crypto - Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut dolor omnis distinctio temporibus numquam tempore voluptatem dignissimos magnam esse.',
        img: 'https://picsum.photos/seed/picsum3/600/350',
      },
      {
        id: '5',
        title: 'Magic Field',
        description:
          ' Magic Field - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias fugit ipsum quas iure nihil deleniti, molestias expedita dolorum quis omnis.',
        img: 'https://picsum.photos/seed/picsum4/600/350',
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

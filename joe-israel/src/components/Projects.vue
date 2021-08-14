<template>
  <section class="projects bg-light">
    <div class="container flex">
      <h1 class="t-lg">Most Recent Projects</h1>
      <p class="t-lead my-2">Check out my latest works, you can click on them to see more details.</p>
      <Carousel
        @nextSlide="nextSlide"
        @previousSlide="previousSlide"
        :slides="slides"
        :visibleSlide="visibleSlide"
        :direction="direction"
      />
      <p class="t-md my-2">Want to see more?</p>
      <div class="btn btn-dark my-2">See All Projects</div>
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
      { id: '1', path: 'https://picsum.photos/seed/picsum/600/350' },
      { id: '2', path: 'https://picsum.photos/seed/picsum1/600/350' },
      { id: '3', path: 'https://picsum.photos/seed/picsum2/600/350' },
      { id: '4', path: 'https://picsum.photos/seed/picsum3/600/350' },
      { id: '5', path: 'https://picsum.photos/seed/picsum4/600/350' },
    ];
    const visibleSlide = 0;
    let direction = '';

    return { slides, visibleSlide, direction };
  },
  computed: {
    slidesLength(): number {
      return this.slides.length;
    },
  },
  methods: {
    previousSlide() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength - 1;
      } else {
        this.visibleSlide -= 1;
      }
      this.direction = 'left';
    },
    nextSlide() {
      if (this.visibleSlide >= this.slidesLength - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide += 1;
      }
      this.direction = 'right';
      console.log(this.direction);
    },
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

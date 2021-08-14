<template>
  <div class="carousel flex my-2">
    <img src="https://picsum.photos/seed/picsum/600/350" alt="Project" />

    <transition name="slide" :style="slideAnimation" v-for="(slide, index) in slides" :key="slide.id" class="carousel-slide">
      <img v-show="visibleSlide === index" :src="slide.path" alt="Project" />
    </transition>

    <button @click="previousSlide" class="previous p-1 t-light">
      <font-awesome-icon :icon="['fas', 'chevron-left']" size="2x" />
    </button>
    <button @click="nextSlide" class="next p-1 t-light">
      <font-awesome-icon :icon="['fas', 'chevron-right']" size="2x" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ICarouselSlide from '@/types/CarouselSlide';

export default defineComponent({
  props: {
    slides: {
      required: true,
      type: Array as PropType<ICarouselSlide[]>,
    },
    visibleSlide: {
      required: true,
      type: Number,
    },
    direction: {
      required: true,
      type: String,
    },
  },
  computed: {
    slideAnimation(): { [key: string]: string } {
      return {
        '--transform-in-translateX': this.direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
        '--transform-out-translateX': this.direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)',
      };
    },
  },
  methods: {
    previousSlide() {
      this.$emit('previousSlide');
    },
    nextSlide() {
      this.$emit('nextSlide');
    },
  },
});
</script>

<style scoped>
.carousel {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0px 8px rgb(0, 0, 0, 0.25);
}

.carousel img {
  object-fit: fill;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(0, 0, 0, 0.3);
  transition: padding 0.2s ease;
}

button:focus,
button:hover {
  cursor: pointer;
  padding: 1.1rem;
  outline: none;
}

button.previous {
  left: 0;
}

button.next {
  right: 0;
}

.carousel-slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
}

/*#region ANIMATIONS */
.slide-enter-active {
  animation: slideInAnimation 0.2s ease-in-out;
}

.slide-leave-active {
  animation: slideOutAnimation 0.2s ease-in-out;
}

@keyframes slideInAnimation {
  from {
    transform: var(--transform-in-translateX);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: var(--transform-out-translateX);
  }
}
/*#endregion ANIMATIONS */
</style>

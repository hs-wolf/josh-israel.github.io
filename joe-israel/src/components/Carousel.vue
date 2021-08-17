<template>
  <div class="carousel flex my-2">
    <img class="placeholder" src="https://picsum.photos/seed/picsum/600/350" alt="Placeholder" />

    <transition
      name="slide"
      v-show="visibleSlide === index"
      :style="slideAnimation"
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="carousel-slide flex t-center t-light"
    >
      <div class="slide-container flex">
        <img class="slide-image" :src="slide.img" alt="Project" />
        <div class="btn slide-title m-2 t-md">{{ slide.title }}</div>
        <p class="slide-description t-lead">{{ slide.description }}</p>
      </div>
    </transition>

    <button @click="previousSlide" class="previous t-light">
      <font-awesome-icon :icon="['fas', 'chevron-left']" size="2x" />
    </button>
    <button @click="nextSlide" class="next t-light">
      <font-awesome-icon :icon="['fas', 'chevron-right']" size="2x" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ICarouselSlide from '@/types/CarouselSlide';

export default defineComponent({
  data() {
    const visibleSlide = 0;
    let direction = '';
    return { visibleSlide, direction };
  },
  props: {
    slides: {
      required: true,
      type: Array as PropType<ICarouselSlide[]>,
    },
  },
  computed: {
    slidesLength(): number {
      return this.slides.length;
    },
    slideAnimation(): { [key: string]: string } {
      return {
        '--transform-in-translateX': this.direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
        '--transform-out-translateX': this.direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)',
      };
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

.carousel img.placeholder {
  object-fit: fill;
  z-index: -1;
}

.carousel-slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.slide-container.flex {
  flex-direction: column;
  justify-content: space-between;
}

.slide-title {
  position: relative;
  z-index: 1;
}

.slide-description {
  width: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button,
button:focus {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  transition: padding 0.2s ease;
}

button:hover {
  cursor: pointer;
  padding: 2.5rem;
  outline: none;
}

button.previous {
  left: 0;
  border-radius: 0 4px 4px 0;
}

button.next {
  right: 0;
  border-radius: 4px 0 0 4px;
}

.slide-image {
  position: absolute;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .slide-title {
    font-size: 1rem;
    margin: 1rem;
    font-weight: bold;
  }

  .slide-description {
    display: none;
  }

  button,
  button:focus {
    padding: 1rem;
    top: 100%;
    transform: translateY(-100%);
  }

  button:hover {
    padding: 1.2rem;
  }

  button.previous {
    border-radius: 0 4px 0 0;
  }

  button.next {
    border-radius: 4px 0 0 0;
  }
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

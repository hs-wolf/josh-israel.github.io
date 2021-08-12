<template>
  <nav class="bg-primary" :style="cssProps">
    <div class="container flex t-center py-1 px-2">
      <ul class="nav-text flex">
        <li v-for="link in links" :key="link.id">
          <a class="t-light p-1 mx-1" :href="'#' + link.link">{{ link.label }}</a>
        </li>
      </ul>
      <ul class="nav-icon grid">
        <li v-for="link in links" :key="link.id">
          <a class="t-light p-1" :href="'#' + link.link"><font-awesome-icon :icon="['fas', link.icon]" size="1x" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import INavbarLink from '@/types/NavbarLink';

export default defineComponent({
  props: {
    links: {
      required: true,
      type: Array as PropType<INavbarLink[]>,
    },
  },
  computed: {
    cssProps(): { [key: string]: string } {
      return {
        '--grid-icon-columns': `repeat(${this.links.length}, 1fr)`,
      };
    },
  },
});
</script>

<style scoped>
nav .nav-icon.grid {
  display: none;
}

nav ul li a {
  display: block;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

nav ul li a:hover {
  background-color: var(--secondary-color);
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
  nav .nav-text li a {
    margin: 0.5rem;
  }
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  nav .nav-text {
    display: none;
  }

  nav .nav-icon.grid {
    display: grid;
    grid-template-columns: var(--grid-icon-columns);
  }
}
</style>

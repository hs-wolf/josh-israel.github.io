<template>
  <nav class="bg-primary" :style="cssProps">
    <div class="container flex t-center py-1 px-2">
      <ul class="nav-text flex">
        <li v-for="link in navLinks" :key="link.id">
          <a class="t-light p-1 mx-1" :href="'#' + link.link">{{ link.label }}</a>
        </li>
      </ul>
      <ul class="nav-icon grid">
        <li v-for="link in navLinks" :key="link.id">
          <a class="t-light p-1" :href="'#' + link.link"><font-awesome-icon :icon="['fas', link.icon]" size="1x" /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import INavbarLink from '@/types/NavbarLink';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const navLinks: INavbarLink[] = [
      {
        id: '1',
        label: 'Joe',
        link: 'home',
        icon: 'home',
      },
      {
        id: '2',
        label: 'Skills',
        link: 'skills',
        icon: 'code',
      },
      {
        id: '2',
        label: 'Projects',
        link: 'projects',
        icon: 'project-diagram',
      },
      {
        id: '3',
        label: 'Qualifications',
        link: 'qualifications',
        icon: 'user-graduate',
      },
    ];

    return { navLinks };
  },
  computed: {
    cssProps(): { [key: string]: string } {
      return {
        '--grid-icon-columns': `repeat(${this.navLinks.length}, 1fr)`,
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

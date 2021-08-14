<template>
  <Header :name="name" />
  <Navbar :links="links" />
  <Skills />
  <Projects />
  <Qualifications />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Skills from '../components/Skills.vue';

import Projects from '../components/Projects.vue';
import Qualifications from '../components/Qualifications.vue';

import INavbarLink from '@/types/NavbarLink';

export default defineComponent({
  name: 'App',
  components: { Header, Navbar, Skills, Projects, Qualifications },
  setup() {
    const name = '<Joe>';
    const links = ref<INavbarLink[]>([
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
      {
        id: '4',
        label: 'Contact',
        link: 'contact',
        icon: 'address-card',
      },
    ]);

    return { name, links };
  },
});
</script>

<style scoped></style>

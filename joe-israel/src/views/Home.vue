<template>
  <Header />
  <Navbar />
  <Skills />
  <Projects />
  <Qualifications />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Qualifications from '../components/Qualifications.vue';

export default defineComponent({
  name: 'Home',
  components: { Header, Navbar, Skills, Projects, Qualifications },
});
</script>

<style scoped></style>

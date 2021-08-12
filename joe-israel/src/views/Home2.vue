<template>
  <Skills />
  <Projects />
  <Qualifications />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Qualifications from '../components/Qualifications.vue';

export default defineComponent({
  name: 'App',
  components: { Skills, Projects, Qualifications },
});
</script>

<style></style>

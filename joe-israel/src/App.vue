<template>
  <Header name="Joe Israel" />
  <Skills />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';

export default defineComponent({
  name: 'App',
  components: { Header, Skills },
});
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #1b2720;
}

#app {
  text-align: center;
  width: 100vw;
}
</style>

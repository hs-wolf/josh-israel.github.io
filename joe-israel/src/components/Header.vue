<template>
  <header id="home">
    <div class="container flex t-center">
      <h1 class="flex t-md">
        <p>Howdy,</p>
        <p class="t-primary">&nbsp;{{ name }}&nbsp;</p>
        <p>here</p>
      </h1>
      <img class="my-4" src="@/assets/images/profile.gif" alt="Profile Picture" />
      <p class="t-lead">
        I'm a Junior Web Developer.<br />
        Tenacious, curious and always craving for new work experiences.
      </p>
      <div class="social flex my-4">
        <a href="#" title="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin']" size="3x" /></a>
        <a href="#" title="GitHub"><font-awesome-icon :icon="['fab', 'github']" size="3x" /></a>
        <a href="#" title="Stack Overflow"><font-awesome-icon :icon="['fab', 'stack-overflow']" size="3x" /></a>
        <a href="#" title="Curriculum Vitae"><font-awesome-icon :icon="['fas', 'file-download']" size="3x" /></a>
      </div>
      <div class="indicator p-2 flex">
        <font-awesome-icon :icon="['fas', 'mouse']" size="2x" />
        <p class="p-1">Scroll Down</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  methods: {},
});
</script>

<style scoped>
header {
  min-height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/circuit.jpg');
  background-size: 100%;
  position: relative;
}

header .container.flex {
  flex-direction: column;
}

header h1.flex {
  flex-direction: row;
}

header img {
  width: 300px;
  border-radius: 50% 50% 5% 50%;
  box-shadow: 0 0px 8px rgb(0, 0, 0, 0.25);
}

header .social {
  height: 4rem;
  opacity: 0.4;
}

header .social a {
  margin: 0 1rem;
  transition: font-size 0.2s ease;
}

header .social a:hover {
  font-size: 1.1rem;
}

header .indicator.flex {
  flex-direction: row;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  header img {
    width: 240px;
  }
}
</style>

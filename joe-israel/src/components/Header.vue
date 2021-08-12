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
    </div>
    <div class="indicator flex my-1">
      <font-awesome-icon :icon="['fas', 'mouse']" size="2x" />
      <p class="p-1">Scroll Down</p>
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
});
</script>

<style scoped>
header {
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/circuit.jpg');
  background-size: 100%;
}

header .flex {
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

header .indicator {
  position: absolute;
  bottom: 0;
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

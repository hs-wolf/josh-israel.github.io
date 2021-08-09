<template>
  <header>
    <transition name="fade" appear>
      <h1>
        <p>Howdy,</p>
        <p class="name">&nbsp;{{ name }}&nbsp;</p>
        <p>here</p>
      </h1>
    </transition>
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

<style>
header {
  margin: 0 auto;
  width: 100%;
  padding: 3em;
}

header h1 {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header p {
  margin: 0;
}

header .name {
  color: #39b673;
}

header .fade-enter-active,
header .fade-leave-active {
  transition: opacity 1s ease;
}
header .fade-enter-from,
header .fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 600px) {
  header h1 {
    display: inline-flex;
    flex-direction: row;
  }
}
</style>

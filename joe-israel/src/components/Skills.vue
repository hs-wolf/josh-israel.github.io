<template>
  <div id="skills">
    <transition name="fade" appear>
      <h2>This is what I'm good at</h2>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
#skills {
  margin: 0 auto;
  width: 100%;
  padding: 3em;
  background-color: #39b673;
}
#skills h2 {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#skills p {
  margin: 0;
}

#skills .name {
  color: #39b673;
}

#skills .fade-enter-active,
#skills .fade-leave-active {
  transition: opacity 1s ease;
}
#skills .fade-enter-from,
#skills .fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 600px) {
  #skills h1 {
    display: inline-flex;
    flex-direction: row;
  }
}
</style>

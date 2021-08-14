<template>
  <section class="my-cv">
    <div class="container grid t-center">
      <h2>Already found what you are looking for? My CV is right there, otherwhise, check out my recent projects below.</h2>
      <a href="#" class="btn btn-dark m-1 py-2">Curriculum Vitæ</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped>
.my-cv .grid {
  grid-template-columns: 3fr 1fr;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
  .my-cv .grid,
  .cloud .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .my-cv .grid > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
}
</style>

<template>
  <footer class="footer bg-dark py-5">
    <div class="container grid grid-3">
      <div>
        <h1>Joe/José Israel</h1>
        <p>Copyright © 2021</p>
      </div>

      <div class="social text-center">
        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x" /></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
.footer a {
  color: var(--light-text);
}

.footer .social a {
  margin: 0 10px;
}

/* FOR TABLETS AND SMARTPHONES */
@media (max-width: 768px) {
}

/*FOR SMARTPHONES ONLY */
@media (max-width: 500px) {
}
</style>

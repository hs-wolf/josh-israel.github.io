<template>
  <footer class="footer bg-dark">
    <div class="container flex py-5">
      <div>
        <h1>Joe/José Israel</h1>
        <p>Copyright © 2021</p>
      </div>

      <div class="social flex text-center">
        <a href="#" title="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin']" size="3x" /></a>
        <a href="#" title="GitHub"><font-awesome-icon :icon="['fab', 'github']" size="3x" /></a>
        <a href="#" title="Stack Overflow"><font-awesome-icon :icon="['fab', 'stack-overflow']" size="3x" /></a>
        <a href="#" title="Curriculum Vitae"><font-awesome-icon :icon="['fas', 'file-download']" size="3x" /></a>
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

.container.flex {
  justify-content: space-between;
}

.footer .social.flex {
  width: auto;
}

.footer .social a {
  margin: 0 1rem;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .container.flex {
    flex-direction: column;
  }

  .footer .social {
    margin-top: 3rem;
  }
}
</style>

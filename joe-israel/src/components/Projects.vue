<template>
  <section class="cli">
    <div class="container grid">
      <img src="@/assets/images/cli.png" alt="CLI" />
      <div class="card">
        <h3>Cross platform CLI</h3>
      </div>
      <div class="card">
        <h3>Deploy in seconds</h3>
      </div>
    </div>
  </section>

  <section class="cloud bg-primary my-2 py-2">
    <div class="container grid">
      <div class="text-center">
        <h2 class="lg">Extreme Cloud Hosting</h2>
        <p class="t-lead my-1">Cloud Hosting like you've never seen. Fast, efficient and scalable.</p>
        <a href="#" class="btn btn-dark">Read More</a>
      </div>
      <img src="@/assets/images/cloud.png" alt="Cloud" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
/*#region CLI */
.cli .grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.cli .grid > *:first-child {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
/*#endregion CLI */

/*#region CLOUD */
.cloud .grid {
  grid-template-columns: 4fr 3fr;
}
/*#endregion CLOUD */

/* FOR TABLETS AND SMARTPHONES */
@media (max-width: 768px) {
  .cli .grid,
  .cloud .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .cli .grid > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }
}

/*FOR SMARTPHONES ONLY */
@media (max-width: 500px) {
}
</style>

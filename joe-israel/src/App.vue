<template class="no-scroll">
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Footer },
});
</script>

<style scoped></style>

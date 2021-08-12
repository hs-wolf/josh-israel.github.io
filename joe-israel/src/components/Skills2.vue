<template>
  <div class="languages">
    <h2 class="md text-center my-2">Supported Languages</h2>
    <div class="container flex">
      <div class="card">
        <h4>Vue 3</h4>
        <img src="@/assets/images/vue.png" alt="Vue 3" />
      </div>
      <div class="card">
        <h4>Node JS</h4>
        <img src="@/assets/images/node.png" alt="Node JS" />
      </div>
      <div class="card">
        <h4>JavaScript</h4>
        <img src="@/assets/images/javascript.png" alt="JavaScript" />
      </div>
      <div class="card">
        <h4>TypeScript</h4>
        <img src="@/assets/images/typescript.png" alt="TypeScript" />
      </div>
      <div class="card">
        <h4>HTML 5</h4>
        <img src="@/assets/images/html.png" alt="HTML 5" />
      </div>
      <div class="card">
        <h4>CSS 3</h4>
        <img src="@/assets/images/css.png" alt="CSS 3" />
      </div>
      <div class="card">
        <h4>CSharp</h4>
        <img src="@/assets/images/csharp.png" alt="CSharp" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
.languages .flex {
  flex-wrap: wrap;
}

.languages .card {
  text-align: center;
  margin: 18px 10px 40px;
  transition: transform 0.2s ease-in;
}

.languages .card h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.languages .card:hover {
  transform: translateY(-16px);
}

.languages .card img {
  max-width: 64px;
}

/* FOR TABLETS AND SMARTPHONES */
@media (max-width: 768px) {
}

/*FOR SMARTPHONES ONLY */
@media (max-width: 500px) {
}
</style>

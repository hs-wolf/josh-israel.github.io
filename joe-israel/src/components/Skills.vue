<template>
  <section id="skills" class="skills bg-primary">
    <div class="container grid">
      <div class="skills-text">
        <h1 class="t-lg">Honed Skills</h1>
        <p class="my-2">
          This is the set of skills that I've been improving for the last few years. Languages, frameworks, programs and more.
        </p>
        <a href="#" class="btn btn-outline">See all Skills</a>
      </div>
      <div class="skills-list grid my-2 t-center">
        <div class="card flex">
          <img src="@/assets/images/vue.png" alt="Vue 3" />
          <h4>Vue 3</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/node.png" alt="Node JS" />
          <h4>Node JS</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/javascript.png" alt="JavaScript" />
          <h4>JavaScript</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/typescript.png" alt="TypeScript" />
          <h4>TypeScript</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/html.png" alt="HTML 5" />
          <h4>HTML5</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/css.png" alt="CSS 3" />
          <h4>CSS3</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/csharp.png" alt="CSharp" />
          <h4>CSharp</h4>
        </div>
        <div class="card flex">
          <img src="@/assets/images/team.png" alt="CSharp" />
          <h4>Team Work</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped>
.skills {
  position: relative;
}

.skills .container.grid {
  gap: 2rem;
}

.skills .skills-list {
  z-index: 1;
}

.skills .skills-list .card {
  transition: transform 0.2s ease;
}

.skills .skills-list .card:hover {
  transform: translateY(-4px);
}

.skills .skills-list .card.flex {
  justify-content: left;
}

.skills::before,
.skills::after {
  content: '';
  position: absolute;
  height: 5rem;
  bottom: -2rem;
  right: 0;
  left: 0;
  background-color: var(--light-color);
  transform: skewY(2deg);
  -webkit-transform: skewY(2deg);
  -moz-transform: skewY(2deg);
  -ms-transform: skewY(2deg);
}

.skills .skills-list .card.flex img {
  display: block;
  width: 64px;
  margin: 0 1rem 0 0;
}

.skills .skills-list .card.flex h3 {
  display: block;
}

/* TABLETS AND UNDER */
@media (max-width: 992px) {
}

/* SMARTPHONES AND UNDER */
@media (max-width: 600px) {
  .skills .skills-list.grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills .skills-list .card {
    flex-direction: column;
    justify-content: center;
  }

  .skills .skills-list .card.flex img {
    display: block;
    width: 64px;
    margin: 0.5rem 0;
  }
}
</style>
